import { useState, useRef, useEffect, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import View from "../../assets/anime.jpg";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import TextTransition, { presets } from "react-text-transition";

import { moustAttraction } from "../../animations/Particles/particles.js";

import Typed from "typed.js";

const Texts = [
  "Full Stack Developer",
  "Web Designer",
  " Professional Gamer",
  "C# Developer",
];

const HomePage = () => {
  const nameRef = useRef(null);

  const [index, setIndex] = useState(0);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  useEffect(() => {
    const typedName = new Typed(nameRef.current, {
      strings: ["Mahdi Hasanzadeh"],
      typeSpeed: 110,
      backSpeed: 80,
      startDelay: 1000,
      showCursor: false,
      loop: false,
    });

    return () => {
      typedName.destroy();
    };
  }, [nameRef]);

  useEffect(() => {
    let val = index;
    const intervalId = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);
    if (val === Texts.length) setIndex(0);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <Box
      className="homepage-box scroll"
      sx={{
        backgroundImage: `url(${View})`,
        height: "100vh",
        overflowY: "scroll",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "center",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        borderRadius: "10px",
      }}
    >
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={moustAttraction}
      />

      <Typography
        textAlign={"center"}
        sx={{
          fontSize: {
            xs: "30px",
            sm: "31px",
            md: "34px",
            lg: "37px",
            xl: "40px",
          },
        }}
        className="typoColor"
        ref={nameRef}
      />
      <Box
        sx={{
          display: "flex",
          gap: 0.9,
        }}
      >
        <Typography
          textAlign={"center"}
          sx={{
            fontSize: {
              xs: "29px",
              sm: "30px",
              md: "32px",
              lg: "35px",
              xl: "38px",
            },
          }}
          className="typoColor"
        >
          I am a
        </Typography>

        <Typography
          component={"div"}
          textAlign={"center"}
          sx={{
            fontSize: {
              xs: "29px",
              sm: "30px",
              md: "32px",
              lg: "35px",
              xl: "38px",
            },
          }}
          className="typoColor"
        >
          <TextTransition direction="down" springConfig={presets.wobbly}>
            {Texts[index]}
          </TextTransition>
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
