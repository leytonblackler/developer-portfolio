import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { general, breakpoints } from "../../config/constants.json";

const MainContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
`;

const SlidingArea = ({ children, index }) => {
  return (
    <MainContainer
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: general.sectionTransitionDuration,
      }}
      initial={{ top: 0 }}
      animate={{ top: `${index * -100}vh` }}
    >
      {children}
    </MainContainer>
  );
};

SlidingArea.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
};

export default SlidingArea;
