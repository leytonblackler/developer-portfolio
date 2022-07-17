import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import constants from "../../config/constants.json";
import SlidingArea from "./SlidingArea";
import FadingContainer from "./FadingContainer";

const MainContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  margin-left: 0;
  padding-right: 0;
  @media (min-width: ${constants.breakpoints.columnView}px) {
    margin-left: 7%;
  }
`;

const calculateSubSectionIndex = (scrollIndex, sectionIndexRange) => {
  // If the section hasn't been reached yet, the subsection should be the first subsection.
  if (scrollIndex < sectionIndexRange[0]) {
    return 0;
  }
  // If the section has been passed, the subsection should be the last subsection.
  if (scrollIndex > sectionIndexRange[1]) {
    return sectionIndexRange[1] - sectionIndexRange[0];
  }
  // Otherwise, if within the section index range, calculate the subsection based on the scroll index.
  return scrollIndex - sectionIndexRange[0];
};

const SectionsContainer = ({ sections, sectionIndex, scrollIndex }) => (
  <MainContainer>
    <SlidingArea index={sectionIndex}>
      {sections.map((section, index) => {
        const Content = section.content;
        const sectionActive = sectionIndex === index;
        return (
          <FadingContainer key={section.title} visible={sectionActive}>
            <Content
              section={section}
              sectionActive={sectionActive}
              subSectionIndex={calculateSubSectionIndex(
                scrollIndex,
                section.indexRange
              )}
            />
          </FadingContainer>
        );
      })}
    </SlidingArea>
  </MainContainer>
);

SectionsContainer.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
      content: PropTypes.elementType,
      colors: PropTypes.shape({
        text: PropTypes.string,
        background: PropTypes.string,
      }),
      indexRange: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
  sectionIndex: PropTypes.number.isRequired,
  scrollIndex: PropTypes.number.isRequired,
};

export default SectionsContainer;
