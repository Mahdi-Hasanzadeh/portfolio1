import {
  Box,
  Button,
  Chip,
  Divider,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import background from "../../assets/universe.jpg";
import { ContactsRounded } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);

    return () => {
      setChecked(false);
    };
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    comment: "",
    focused: {
      fullName: false,
      email: false,
      comment: false,
    },
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleBlur = (e) => {
    let { name } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        focused: {
          ...prevData.focused,
          [name]: true,
        },
      };
    });
  };

  //#region validation function
  const validation = (fullName, email, comment) => {
    const errors = {
      fullName: "",
      email: "",
      comment: "",
    };

    if (formData.focused.fullName && fullName.length < 3) {
      errors.fullName = "FullName Should be at least 3 characters ";
    } else if (formData.focused.fullName && fullName.length > 16) {
      errors.fullName = "Full Name should be at max 15 characters ";
    }

    if (formData.focused.comment && comment.length < 5) {
      errors.comment = "Comment Should be at least 5 Characters";
    }

    // const reg = /^\d+$/;
    // if (formData.touched.telephone && !reg.test(telephone)) {
    //   errors.telephone = "Telephone number Should Contain only numbers ";
    // } else if (formData.touched.telephone && telephone.length < 10) {
    //   errors.telephone = "too short";
    // } else if (formData.touched.telephone && telephone.length > 12) {
    //   errors.telephone = "too long";
    // }

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (formData.focused.email && !mailformat.test(email)) {
      errors.email = "Invalid Email ";
    }

    // const urlPattern =
    //   /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    // if (formData.touched.photo && !urlPattern.test(photo)) {
    //   errors.photo = "Invalid URL. URL starts with (http://) ";
    // }
    return errors;
  };
  //#endregion

  let validate = validation(
    formData.fullName,
    formData.email,
    formData.comment
  );

  const handleSubmit = () => {
    if (
      formData.fullName === "" &&
      formData.email === "" &&
      formData.comment === ""
    ) {
      toast.error("Please Fill out the Form", {
        autoClose: 1500,
      });
      setFormData((prevData) => {
        return {
          ...prevData,
          focused: {
            fullName: true,
            email: true,
            comment: true,
          },
        };
      });
    } else {
      if (!validate.fullName && !validate.email && !validate.comment) {
        toast.info(`Thanks for your email Mr.${formData.fullName}`, {
          position: "top-right",
        });
        setFormData({
          fullName: "",
          email: "",
          comment: "",
          focused: {
            fullName: false,
            email: false,
            comment: false,
          },
        });
      }
    }
  };

  return (
    <Box
      className="scroll"
      sx={{
        height: "100vh",
        overflowY: "scroll",
        backgroundImage: `url(${background})`,
        backgroundPosition: "left",
        py: 1,
      }}
    >
      <Slide
        direction="down"
        in={checked}
        style={{
          transitionDelay: checked ? "500ms" : "0ms",
          transitionDuration: checked ? "1000ms" : "0ms",
        }}
      >
        <Box width={"100%"}>
          <Divider
            variant="middle"
            textAlign="center"
            sx={{
              "&::after,&::before": {
                borderColor: "gray",
              },
            }}
          >
            <Chip color="warning" label="Contact" icon={<ContactsRounded />} />
          </Divider>
        </Box>
      </Slide>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          mt: 5,
        }}
      >
        <Typography variant="h6">Send Us Your Email</Typography>
      </Box>
      <Box
        component="form"
        autoComplete="false"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   height: 1 / 2,
        }}
      >
        <Grid
          container
          spacing={2}
          flexGrow={1}
          mx={2}
          justifyContent={"center"}
        >
          <Grid xs={10} sm={6} md={6} lg={4} xl={6}>
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              name="fullName"
              value={formData.fullName}
              error={validate.fullName ? true : false}
              helperText={
                validate.fullName ? (
                  <Typography
                    textAlign={"center"}
                    sx={{
                      fontSize: { xs: "14px", sm: "20px" },
                    }}
                  >
                    {validate.fullName}
                  </Typography>
                ) : null
              }
              color="black"
              fullWidth
              required
              variant="filled"
              placeholder="Full Name"
              label={
                <Typography display={"inline-block"} fontSize={28}>
                  Full Name
                </Typography>
              }
              sx={{
                padding: 1,
                label: {
                  color: "white",
                },
                input: {
                  color: "white",
                },
              }}
            />
          </Grid>

          <Grid xs={10} sm={6} md={6} lg={4} xl={6}>
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              value={formData.email}
              error={validate.email ? true : false}
              helperText={
                validate.email ? (
                  <Typography
                    textAlign={"center"}
                    sx={{
                      fontSize: { xs: "14px", sm: "20px" },
                    }}
                  >
                    {validate.email}
                  </Typography>
                ) : null
              }
              fullWidth
              placeholder="Email"
              color="black"
              sx={{
                padding: 1,
                fontSize: 28,
                label: {
                  color: "white",
                },
                input: {
                  color: "white",
                },
              }}
              required
              variant="filled"
              label={
                <Typography
                  display={"inline-block"}
                  fontSize={24}
                  variant="body1"
                >
                  Email Address
                </Typography>
              }
            />
          </Grid>

          <Grid xs={10} sm={10} md={12} lg={6} xl={12}>
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              value={formData.comment}
              error={validate.comment ? true : false}
              helperText={
                validate.comment ? (
                  <Typography
                    textAlign={"center"}
                    sx={{
                      fontSize: { xs: "14px", sm: "20px" },
                    }}
                  >
                    {validate.comment}
                  </Typography>
                ) : null
              }
              name="comment"
              multiline={true}
              rows={4}
              fullWidth
              color="black"
              required
              className="textarea"
              variant="filled"
              inputProps={{
                style: { color: "white", textIndent: "10px", marginTop: "2px" },
              }}
              placeholder="Write Your Eamil Here..."
              label={
                <Typography display={"inline-block"} fontSize={28}>
                  Description
                </Typography>
              }
              sx={{
                padding: 1.3,
                label: {
                  color: "white",
                },
                input: {
                  color: "white",
                },
              }}
            />
          </Grid>
          {/* <Grid xs={10} sm={10} md={12} lg={6} xl={12}>
            
          </Grid> */}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          mt: 1,
        }}
      >
        <Button
          onClick={handleSubmit}
          //   href="mailto:mahdi786trygame@gmail.com"
          type="submit"
          sx={{
            width: 1 / 2,
          }}
          variant="contained"
          color="warning"
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};
export default Contact;
