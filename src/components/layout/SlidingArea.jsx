import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { general } from "../../config/constants.json";

const MainContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
`;

const SlidingArea = ({ children, index }) => {
  return (
    <MainContainer
      style={{
        transform: `translateY(${index * -100}vh)`,
        transition: `transform ${general.sectionTransitionDuration}ms ease 0s`,
      }}
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
