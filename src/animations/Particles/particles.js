export const Hexagon = {
  particles: {
    color: {
      value: "#FF0000",
      animation: {
        enable: true,
        speed: 10,
      },
    },
    move: {
      attract: {
        enable: false,
        distance: 100,
        rotate: {
          x: 2000,
          y: 2000,
        },
      },
      direction: "none",
      enable: true,
      outModes: {
        default: "destroy",
      },
      path: {
        clamp: false,
        enable: true,
        delay: {
          value: 0,
        },
        generator: "polygonPathGenerator",
        options: {
          sides: 6,
          turnSteps: 30,
          angle: 30,
        },
      },
      random: false,
      speed: 3,
      straight: false,
      trail: {
        fillColor: "#000",
        length: 20,
        enable: true,
      },
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 0,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 2,
    },
  },
  background: {
    color: "#000",
  },
  fullScreen: {
    zIndex: -1,
  },
  emitters: {
    direction: "none",
    rate: {
      quantity: 1,
      delay: 0.25,
    },
    size: {
      width: 0,
      height: 0,
    },
    position: {
      x: 50,
      y: 50,
    },
  },
};

export const moustAttraction = {
  fps_limit: 60,
  interactivity: {
    detect_on: "canvas",
    events: {
      onclick: { enable: true, mode: "push" },
      onhover: {
        enable: true,
        mode: "attract",
        parallax: { enable: false, force: 60, smooth: 10 },
      },
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      attract: { distance: 200, duration: 0.4, factor: 5 },
    },
  },
  particles: {
    color: { value: "#000000" },
    line_linked: {
      color: "#000000",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
      bounce: false,
      direction: "none",
      enable: true,
      out_mode: "out",
      random: false,
      speed: 2,
      straight: false,
    },
    number: { density: { enable: true, value_area: 800 }, value: 80 },
    opacity: {
      anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
      random: false,
      value: 0.5,
    },
    shape: {
      character: {
        fill: false,
        font: "Verdana",
        style: "",
        value: "*",
        weight: "400",
      },
      image: {
        height: 100,
        replace_color: true,
        src: "images/github.svg",
        width: 100,
      },
      polygon: { nb_sides: 5 },
      stroke: { color: "#000000", width: 0 },
      type: "circle",
    },
    size: {
      anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
      random: true,
      value: 5,
    },
  },
  polygon: {
    draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
    move: { radius: 10 },
    scale: 1,
    type: "none",
    url: "",
  },
  retina_detect: true,
};

export const mouseHover = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 0,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ff0000",
      animation: {
        enable: true,
        speed: 180,
        sync: true,
      },
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      //   image: {
      //     src: "https://cdn.matteobruni.it/images/particles/github.svg",
      //     width: 100,
      //     height: 100,
      //   },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 3,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 50,
      random: {
        enable: true,
        minimumValue: 10,
      },
      animation: {
        enable: true,
        speed: 5,
        minimumValue: 10,
        sync: true,
        startValue: "min",
        destroy: "max",
      },
    },
    links: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 10,
      direction: "none",
      random: false,
      straight: false,
      outMode: "destroy",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onhover: {
        enable: true,
        mode: "trail",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
      trail: {
        delay: 0.005,
        quantity: 5,
      },
    },
  },
  retina_detect: true,
  background: {
    color: "#000000",
    // image:
    //   "url('https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
  backgroundMask: {
    enable: true,
    cover: {
      color: "#000000",
    },
  },
};

export const GoldenState = {
  detectRetina: false,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      bubble: {
        color: "#fdb927",
        distance: 100,
        duration: 2,
        opacity: 1,
        size: 10,
        speed: 3,
      },
    },
  },
  particles: {
    color: {
      value: "#fff",
    },
    links: {
      blink: false,
      color: "#fff",
      consent: false,
      distance: 20,
      enable: true,
      opacity: 0.8,
      width: 1,
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      bounce: false,
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: false,
        area: 2000,
      },
      limit: 0,
      value: 300,
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.05,
        speed: 3,
        sync: false,
      },
      random: false,
      value: 1,
    },
    shape: {
      type: "circle",
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 40,
        sync: false,
      },
      random: true,
      value: 3,
    },
  },
  polygon: {
    draw: {
      enable: true,
      lineColor: "#fdb927",
      lineWidth: 1,
    },
    move: {
      radius: 10,
    },
    inlineArrangement: "equidistant",
    scale: 0.5,
    type: "inline",
    data: {
      path: "M 805.15389,268.24464 A 443.37188,443.37188 0 1 0 178.13136,895.26708 443.37188,443.37188 0 1 0 805.15389,268.24464 m -610.04763,16.9749 a 419.56486,419.56486 0 0 1 679.20443,468.59032 c -50.92459,-17.18457 -101.011,-36.46451 -150.04951,-58.25939 -6.49639,-2.93394 -12.99313,-5.65834 -19.28011,-8.59228 l -19.07057,-9.01133 -9.64023,-4.61049 -9.43046,-4.61048 -18.86098,-9.43051 c -6.28702,-3.14349 -12.574,-6.49639 -18.65139,-9.8496 l -9.43051,-5.02962 c -3.14349,-1.67649 -6.07739,-3.35308 -9.22088,-5.02957 l -18.44184,-10.26874 -18.23252,-10.68787 a 1191.4811,1191.4811 0 0 1 -139.78068,-95.3527 c -22.00447,-17.60358 -43.5898,-35.83587 -63.91773,-55.32549 -10.26873,-9.64023 -20.11838,-19.69924 -29.75843,-29.96798 -2.30522,-2.51481 -4.82003,-5.02962 -7.12525,-7.75397 -2.30522,-2.51477 -4.61044,-5.23917 -6.91566,-7.96352 -2.30522,-2.72435 -4.61048,-5.23916 -6.70616,-7.96352 0,-0.20959 -0.20954,-0.20959 -0.20954,-0.41913 -0.83827,-30.80626 -1.25745,-49.2481 -1.25745,-49.2481 l -20.95622,-5.02962 v 28.08186 h -17.81316 v -29.54876 l -22.42338,5.44875 0.20954,10.68787 -10.47828,5.6583 c 0.20955,8.80179 0.41909,20.32793 0.62868,33.94974 -8.59228,14.87922 -101.43013,175.40697 -171.006114,224.86478 A 432.46964,432.46964 0 0 1 72.510097,581.33688 414.58399,414.58399 0 0 1 195.10643,285.21962 m 550.9498,502.33048 -43.17066,1.46699 -35.20715,-91.16135 6.91566,3.35307 19.28016,9.64023 c 6.49639,3.14349 12.99313,6.07739 19.48961,9.22088 1.88609,0.83827 3.77217,1.67654 5.44875,2.51485 z m -10.47832,-57.21157 c 17.39398,7.96347 34.9976,15.50785 52.60117,22.84269 l 14.46004,32.27325 -43.38025,1.46699 z m -46.10461,59.0977 -44.21848,1.46699 -45.89515,-130.35035 q 4.40085,2.51477 8.80179,5.02958 l 9.43051,5.23916 c 6.28698,3.56262 12.57396,6.91566 18.86098,10.47828 l 14.46004,7.75402 z m -57.00215,1.88608 -39.39845,1.2574 -57.42116,-171.4252 c 8.80178,5.6583 17.60353,11.31655 26.61495,16.7653 l 18.44179,11.31655 2.51481,1.467 z m -52.60118,1.88609 -41.28458,1.46699 -68.10907,-218.57767 c 15.71749,11.73573 31.85411,23.05232 47.99069,34.15928 z m -54.27767,1.88608 -39.81758,1.2574 -81.10212,-273.06497 c 5.65829,5.02957 11.52614,9.84964 17.39398,14.66963 10.26874,8.59228 20.53747,16.7653 31.2253,24.93841 z m -52.60117,1.67658 -44.00894,1.467 -96.81974,-345.57495 c 8.38266,9.43047 17.18457,18.4418 26.19578,27.45322 9.43051,9.43047 19.07056,18.4418 28.71062,27.45318 z m -56.79248,1.88609 -38.14109,1.2574 -53.22977,-202.86027 C 323.15125,544.6627 321.6843,496.46246 320.63649,457.4831 Z m -50.92459,1.67649 -32.90193,1.04795 c -2.09563,-48.20028 -3.98171,-98.91537 -5.65825,-148.16338 z m 465.23729,29.12972 c -2.93395,3.77217 -5.65835,7.75397 -8.80183,11.52614 l -487.66085,-9.64023 -0.20959,-4.61048 z m -14.46013,-44.21844 -11.10701,-25.14795 c 18.4418,7.54433 37.09328,14.66963 55.74466,21.37578 -0.41917,0.62868 -0.83827,1.467 -1.2574,2.09589 z M 297.16507,478.43966 v 25.77664 h -19.4897 v 23.89055 h 19.4897 v 25.77685 h -19.4897 v 23.89056 h 19.4897 v 48.40987 h -19.4897 v 23.89055 h 19.4897 v 49.87677 h -19.4897 V 723.842 h 19.4897 v 78.37751 l -18.02275,0.62868 V 437.99318 h 17.81329 v 16.13662 h -19.48983 v 23.89055 h 19.69929 z M 108.97447,754.0194 163.67132,569.81061 A 950.77267,950.77267 0 0 0 235.76211,457.27364 L 137.68527,807.2493 a 407.69716,407.69716 0 0 1 -28.71058,-53.2299 m -7.75414,-18.02266 A 410.60701,410.60701 0 0 1 79.425625,659.92419 446.16724,446.16724 0 0 0 142.71467,596.21601 Z m 146.0677,-273.90325 c 0,37.09328 -0.62868,81.73107 -1.46695,129.30249 l -56.37334,214.80546 -38.97936,1.25745 z m -2.72431,183.16098 c -1.46699,53.22986 -3.35308,108.13625 -6.07743,159.27035 l -36.04542,1.2574 z m -74.81523,205.79417 66.0134,2.30522 c -1.2574,20.32798 -2.72435,39.60805 -4.40089,57.63075 a 439.62015,439.62015 0 0 1 -36.46455,-32.48275 c -8.80179,-8.80183 -17.18457,-18.02275 -25.14796,-27.45322 M 491.6426,1001.3076 A 417.59898,417.59898 0 0 1 341.174,973.64489 c -1.88608,-28.71062 -3.77221,-63.0795 -5.65829,-100.59187 l -38.35064,-12.99313 v 93.67621 c -6.07743,-3.14349 -12.15486,-6.4964 -18.02275,-10.05919 v -88.8561 l 18.02275,0.62868 v 0.62869 h 19.48966 l 35.41669,1.2574 441.55624,15.71744 c -1.6765,1.88609 -3.56267,3.56267 -5.23916,5.44876 A 417.24664,417.24664 0 0 1 491.6426,1001.3076",
      size: {
        width: 1000,
        height: 1207,
      },
    },
  },
};
