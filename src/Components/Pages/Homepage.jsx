import { useRef, useEffect, useCallback } from "react";
import { Box, Typography } from "@mui/material";
import View from "../../assets/view.jpg";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import {
  Hexagon,
  GoldenState,
  moustAttraction,
  mouseHover,
} from "../../animations/Particles/particles.js";

import Typed from "typed.js";

const HomePage = () => {
  const nameRef = useRef(null);
  const infoRef = useRef(null);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  useEffect(() => {
    const typedName = new Typed(nameRef.current, {
      strings: ["Mahdi Hasanzadeh"],
      typeSpeed: 50,
      startDelay: 600,
      showCursor: false,
    });

    const typedInfo = new Typed(infoRef.current, {
      strings: [
        "I am Full Stack Developer",
        "I am Web Designer",
        "I am a professional Gamer",
      ],
      typeSpeed: 30,
      startDelay: 1200,
      backSpeed: 25,
      showCursor: false,
      loop: true,
    });

    return () => {
      typedName.destroy();
      typedInfo.destroy();
    };
  });

  return (
    <Box
      sx={{
        backgroundImage: `url(${View})`,
        height: "100vh",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "bottom",
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
        sx={{
          fontSize: "28px",
          color: "orange",
        }}
        ref={nameRef}
      ></Typography>
      <Typography
        ref={infoRef}
        sx={{
          fontSize: "28px",
          color: "orange",
        }}
      ></Typography>
    </Box>
  );
};

export default HomePage;
