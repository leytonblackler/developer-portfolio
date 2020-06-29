import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { general, breakpoints } from "../../config/constants.json";

const ScrollArea = styled(motion.div)`
  width: 100%;
  box-sizing: border-box;
  position: relative;

  margin-left: 0;
  padding-right: 0;
  @media (min-width: ${breakpoints.columnView}px) {
    margin-left: 7%;
  }
`;

const SectionContainer = ({ children, scrollIndex }) => (
  <ScrollArea
    transition={{
      type: "tween",
      ease: "easeOut",
      duration: general.sectionTransitionDuration,
    }}
    initial={{ top: 0 }}
    animate={{ top: `${scrollIndex * -100}vh` }}
  >
    {children}
  </ScrollArea>
);

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  scrollIndex: PropTypes.number.isRequired,
};

export default SectionContainer;
