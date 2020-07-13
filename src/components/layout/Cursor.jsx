import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Circle = styled(motion.div)`
  border-radius: 1000px;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 200;
  border-color: #ffffff;
  border-style: solid;
  transform: translate(-50%, -50%) translate3d(var(--x), var(--y), 0);
  mix-blend-mode: difference;
  pointer-events: none;
`;

const Cursor = ({ sectionIndex }) => {
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseInWindow, setMouseInWindow] = useState(false);
  const [mouseOverClickable, setMouseOverClickable] = useState(false);

  // const

  useEffect(() => {
    // Add mouse down and mouse up listeners to set whether the cursor is being pressed.
    document.onmousedown = () => setMouseDown(true);
    document.onmouseup = () => setMouseDown(false);

    // Add mouse leave and enter listeners to set whether the cursor is in the window.
    document.onmouseleave = () => setMouseInWindow(false);
    document.onmouseenter = () => setMouseInWindow(true);

    // Add a mouse move listener to set the cursor position.
    document.onmousemove = (event) => {
      console.log("mouse move");
      // if (!mouseInWindow) {
      //   setMouseInWindow(true);
      // }

      const x = event.clientX;
      const y = event.clientY;

      const hoverElement = document.elementFromPoint(x, y);

      if (hoverElement && hoverElement.closest(".clickable")) {
        setMouseOverClickable(true);
      } else {
        setMouseOverClickable(false);
      }

      document.body.style.setProperty("--x", `${x}px`);
      document.body.style.setProperty("--y", `${y}px`);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentStyle = {
    width: mouseDown ? 400 : 20,
    height: mouseDown ? 400 : 20,
    backgroundColor: mouseDown
      ? "rgba(255, 255, 255, 1)"
      : "rgba(255, 255, 255, 0)",
    borderWidth: mouseDown ? 0 : 5,
  };

  if (sectionIndex > 0) {
    currentStyle.borderWidth = 0;
    currentStyle.width = 15;
    currentStyle.height = 15;
    currentStyle.backgroundColor = "rgba(255, 255, 255, 1)";
  }

  if (!mouseInWindow) {
    currentStyle.borderWidth = 0;
    currentStyle.width = 0;
    currentStyle.height = 0;
  }

  if (mouseOverClickable) {
    currentStyle.borderWidth = 0;
    currentStyle.width = 15;
    currentStyle.height = 15;
    currentStyle.backgroundColor = "rgba(255, 255, 255, 1)";
  }

  return (
    <Circle
      transition={{
        backgroundColor: {
          type: "tween",
          duration: 0.15,
        },
        width: {
          type: "tween",
          duration: mouseDown ? 3 : 0.5,
        },
        height: {
          type: "tween",
          duration: mouseDown ? 3 : 0.5,
        },
      }}
      initial={{
        width: 0,
        height: 0,
        backgroundColor: "rgba(255, 255, 255, 0)",
        borderWidth: 0,
      }}
      animate={currentStyle}
    />
  );
};

export default Cursor;
