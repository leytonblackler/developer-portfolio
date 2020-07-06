import React, { useEffect } from "react";
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

const SectionContainer = ({ sections, indexes }) => {
  return (
    <ScrollArea
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: general.sectionTransitionDuration,
      }}
      initial={{ top: 0 }}
      animate={{ top: `${indexes.section * -100}vh` }}
    >
      {sections.map((section) => {
        const Content = section.content;
        return (
          <Content key={section.title} subSectionIndex={indexes.subSection} />
        );
      })}
    </ScrollArea>
  );
};

SectionContainer.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
      content: PropTypes.elementType,
      colours: PropTypes.shape({
        text: PropTypes.string,
        background: PropTypes.string,
      }),
      indexRange: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
  indexes: PropTypes.shape({
    section: PropTypes.number,
    subSection: PropTypes.number,
  }).isRequired,
};

export default SectionContainer;
