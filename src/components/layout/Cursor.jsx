import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "../../config/theme.json";

const Circle = styled(motion.div)`
  border-radius: 1000px;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 200;
  transform: translate(-50%, -50%) translate3d(var(--x), var(--y), 0);
  pointer-events: none;
  border: none;
  background-color: ${theme.color.secondary};
`;

const Cursor = ({ sectionIndex }) => {
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseInWindow, setMouseInWindow] = useState(false);
  const [mouseOverClickable, setMouseOverClickable] = useState(false);

  useEffect(() => {
    // Add mouse down and mouse up listeners to set whether the cursor is being pressed.
    document.onmousedown = () => setMouseDown(true);
    document.onmouseup = () => setMouseDown(false);

    // Add mouse leave and enter listeners to set whether the cursor is in the window.
    document.onmouseleave = () => setMouseInWindow(false);
    document.onmouseenter = () => setMouseInWindow(true);

    // Add a mouse move listener to set the cursor position.
    document.onmousemove = (event) => {
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
    width: 15,
    height: 15,
    opacity: 1,
  };

  if (!mouseInWindow) {
    currentStyle.width = 0;
    currentStyle.height = 0;
    currentStyle.opacity = 1;
  }

  if (mouseOverClickable) {
    currentStyle.width = 20;
    currentStyle.height = 20;
    currentStyle.opacity = 1;
  }

  let sizeDuration = 0.5;
  if (mouseDown) {
    sizeDuration = 3;
  } else if (mouseOverClickable) {
    sizeDuration = 0.1;
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
          duration: sizeDuration,
        },
        height: {
          type: "tween",
          duration: sizeDuration,
        },
      }}
      initial={{
        width: 0,
        height: 0,
        opacity: 0,
      }}
      animate={currentStyle}
    />
  );
};

Cursor.propTypes = {
  sectionIndex: PropTypes.number.isRequired,
};

export default Cursor;
