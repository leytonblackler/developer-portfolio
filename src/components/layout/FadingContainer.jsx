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

const FadingContainer = ({ children, visible }) => {
  return (
    <MainContainer
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity ${
          general.sectionTransitionDuration * 0.3
        }ms ease 0s`,
      }}
    >
      {children}
    </MainContainer>
  );
};

FadingContainer.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default FadingContainer;
