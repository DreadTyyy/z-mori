const ease = () => {
  return {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        // type: "spring",
        delay: 0.6,
        duration: 0.8,
      },
    },
  };
};
const easeTop = (delay: number = 0, duration: number = 0.5) => {
  return {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        // type: "spring",
        delay: delay,
        bounce: 0.4,
        duration: duration,
      },
    },
  };
};
const easeBottom = () => {
  return {
    offscreen: {
      y: -100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        // type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
};
const easeLeft = () => {
  return {
    offscreen: {
      x: 50,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        // type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
};
const easeRight = () => {
  return {
    offscreen: {
      x: -100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        // type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
};

export { ease, easeTop, easeBottom, easeLeft, easeRight };
