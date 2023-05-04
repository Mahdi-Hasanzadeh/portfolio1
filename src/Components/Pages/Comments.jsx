import { CommentRounded } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";

import backgroundImg from "../../assets/anime.jpg";

import Grid from "@mui/material/Unstable_Grid2";
import Slider from "react-slick";

import { useState } from "react";
import { toast } from "react-toastify";

const Comments = ({ comments }) => {
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
      errors.email = "Invalid Email. valid Email: name@gmail.com ";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate.fullName && !validate.email && !validate.comment) {
      comments.push({
        name: formData.fullName,
        comments: formData.comment,
        date: new Date().toLocaleDateString(),
        avatar: null,
      });
      toast.success(`Mr.${formData.fullName} Comment submited successfully`, {
        draggable: true,
        autoClose: 5000,
        position: "bottom-right",
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
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          py: 1,
          mx: 1,
          backgroundColor: grey[200],
          // borderTopRightRadius: "20%",
          overflowX: "hidden",
          overflowY: "scroll",
          backgroundImage: `url(${backgroundImg})`,
          backgroundPosition: "center",
        }}
      >
        <Box width="100%" mb={2}>
          <Divider
            textAlign="center"
            variant="middle"
            sx={{
              "&::after,&::before": {
                borderColor: "black",
              },
            }}
          >
            <Chip
              color="success"
              icon={<CommentRounded />}
              label={<Typography variant="body1">Comments</Typography>}
            />
          </Divider>
        </Box>
        {/* Slider Section */}
        <Box
          width={"80%"}
          sx={{
            margin: "0 auto",
            // backgroundColor: grey[400],
            borderRadius: 5,
          }}
        >
          <Slider
            arrows={false}
            dots={true}
            infinite={true}
            slidesToShow={1}
            autoplay={true}
            autoplaySpeed={2000}
          >
            {comments.map((item, index) => {
              return (
                <Box key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      py: 1,
                    }}
                  >
                    <Avatar
                      src={item.avatar}
                      sx={{
                        height: 100,
                        width: 100,
                      }}
                      alt={item.name}
                    />
                    <Typography variant="body1">{item.name}</Typography>
                    <Typography variant="body2">{item.date}</Typography>
                    <Card
                      elevation={24}
                      sx={{
                        width: 1 / 2,
                        borderRadius: 5,
                        //backgroundColor: "orange",
                      }}
                    >
                      <CardContent>
                        <Typography variant="body1" textAlign={"center"}>
                          {item.comments}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Box>
              );
            })}
          </Slider>
        </Box>
        <Box
          sx={{
            color: "white",
          }}
          component="form"
          onSubmit={handleSubmit}
        >
          <Grid
            container
            mt={4}
            mx={1}
            sx={{
              columns: { sx: 12, sm: 12, md: 6, lg: 6, xl: 6 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: {
                xs: "normal",
                sm: "center",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
            spacing={1}
          >
            <Grid xs={12} sm={8} md={6} lg={6} xl={6}>
              <TextField
                id="fullName"
                name="fullName"
                type="text"
                required
                placeholder="Start Typing"
                size="small"
                variant="filled"
                label="Full Name"
                value={formData.fullName}
                fullWidth
                error={validate.fullName ? true : false}
                helperText={validate.fullName ? validate.fullName : null}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Grid>
            <Grid xs={12} sm={8} md={6} lg={6} xl={6}>
              <TextField
                fullWidth
                id="email"
                name="email"
                type="email"
                required
                size="small"
                placeholder="Start Typing"
                variant="filled"
                label="Email"
                value={formData.email}
                error={validate.email ? true : false}
                helperText={validate.email ? validate.email : null}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Grid>
            <Grid xs={12} sm={8} md={6} lg={6} xl={6}>
              <TextField
                fullWidth
                rows={2}
                label={
                  <Typography
                    sx={{
                      display: "inline-block",
                      color: "black",
                      fontWeight: "bolder",
                    }}
                  >
                    You Comment Here...
                  </Typography>
                }
                value={formData.comment}
                id={"comment"}
                name="comment"
                type="text"
                required
                size="small"
                placeholder="Start Typing"
                variant="filled"
                multiline
                helperText={validate.comment ? validate.comment : null}
                onBlur={handleBlur}
                onChange={handleChange}
                error={validate.comment ? true : false}
                color="info"
              />
            </Grid>
            <Button
              type="submit"
              sx={{
                margin: "0 auto",
                width: "45%",
              }}
              variant="contained"
            >
              Submit
            </Button>
          </Grid>
        </Box>{" "}
      </Box>
    </>
  );
};
export default Comments;
