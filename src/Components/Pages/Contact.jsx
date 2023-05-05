import {
  Box,
  Button,
  Chip,
  Divider,
  Slide,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import background from "../../assets/universe.jpg";
import { ContactsRounded } from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

// import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [checked, setChecked] = useState(false);
  const theme = useTheme();
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

  useEffect(() => {
    setChecked(true);

    return () => {
      setChecked(false);
    };
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

  //#region validating Form Data
  let validate = validation(
    formData.fullName,
    formData.email,
    formData.comment
  );
  //#endregion

  //#region handleSubmit arrow function
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
  //#endregion

  //#region Data for inputs of Form
  const inputsData = [
    {
      name: "fullName",
      value: formData.fullName,
      validate: validate.fullName ? true : false,
      helperText: validate.fullName,
      color: "black",
      label: "Full Name",
      placeholder: "FullName...",
    },
    {
      name: "email",
      value: formData.email,
      validate: validate.email ? true : false,
      helperText: validate.email,
      color: "black",
      label: "Email",
      placeholder: "Email...",
    },
    {
      name: "comment",
      value: formData.comment,
      validate: validate.comment ? true : false,
      helperText: validate.comment,
      color: "black",
      label: "Description",
      placeholder: "Write Your Eamil Here...",
    },
  ];
  //#endregion

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
      {/* Divider Section */}
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

      {/* Form Section */}
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
          {inputsData.map((item, index) => {
            return (
              <Grid
                key={index}
                xs={10}
                sm={index === 2 ? 10 : 6}
                md={index === 2 ? 12 : 6}
                lg={index === 2 ? 6 : 4}
                xl={index === 2 ? 12 : 6}
              >
                <TextField
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name={item.name}
                  value={item.value}
                  error={item.validate}
                  color={item.color}
                  fullWidth
                  required
                  variant="filled"
                  placeholder={item.placeholder}
                  helperText={
                    item.validate ? (
                      <Typography
                        component={"span"}
                        display="block"
                        textAlign="center"
                        sx={{
                          fontSize: { xs: "14px", sm: "20px" },
                        }}
                      >
                        {item.helperText}
                      </Typography>
                    ) : null
                  }
                  label={
                    <Typography
                      display={"inline-block"}
                      variant="body1"
                      fontSize={28}
                    >
                      {item.label}
                    </Typography>
                  }
                  sx={{
                    padding: 1.3,
                    fontSize: 28,
                    label: {
                      color: "white",
                    },
                    input: {
                      color: "white",
                    },
                  }}
                  multiline={index === 2 ? true : false}
                  rows={index === 2 ? 4 : 0}
                  inputProps={
                    index === 2
                      ? {
                          style: {
                            color: "white",
                            textIndent: "10px",
                            marginTop: "2px",
                          },
                        }
                      : {}
                  }
                />
              </Grid>
            );
          })}

          {/* <ReCAPTCHA theme={theme.palette.mode} /> */}
          {/* <Grid xs={10} sm={10} md={12} lg={6} xl={12}>
            
          </Grid> */}
        </Grid>
      </Box>

      {/* Button For Submitting Form */}
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
