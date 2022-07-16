import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ChevronsDown } from "@styled-icons/boxicons-regular";
import theme from "../../config/theme.json";

const MainContainer = styled(motion.div)`
  user-select: none;
  opacity: 0.75;
  color: ${theme.color.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: 10px;
`;

const HoveringContainer = styled(motion.div)`
  user-select: none;
  opacity: 0.75;
  color: ${theme.color.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-weight: 800;
  font-size: 16px;
  text-transform: uppercase;
`;

const ScrollDownIndicator = ({ show }) => (
  <MainContainer
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: show ? 1 : 0,
    }}
    transition={{
      duration: 2,
      delay: show ? 1 : 0,
    }}
  >
    <HoveringContainer
      animate={{ y: [0, -15, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
    >
      <Label>Scroll down</Label>
      <ChevronsDown size="38" />
    </HoveringContainer>
  </MainContainer>
);

ScrollDownIndicator.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default ScrollDownIndicator;
