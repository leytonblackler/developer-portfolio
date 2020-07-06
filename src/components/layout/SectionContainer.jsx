import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { general, breakpoints } from "../../config/constants.json";
import SlidingArea from "./SlidingArea";

const MainContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  margin-left: 0;
  padding-right: 0;
  @media (min-width: ${breakpoints.columnView}px) {
    margin-left: 7%;
  }
`;

const SectionContainer = ({ sections, indexes }) => {
  return (
    <MainContainer>
      <SlidingArea index={indexes.section}>
        {sections.map((section) => {
          const Content = section.content;
          return (
            <Content key={section.title} subSectionIndex={indexes.subSection} />
          );
        })}
      </SlidingArea>
    </MainContainer>
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
