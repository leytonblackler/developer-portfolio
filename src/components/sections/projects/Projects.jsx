import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SplitContent from "../../layout/SplitContent";
import SlidingArea from "../../layout/SlidingArea";
import FadingContainer from "../../layout/FadingContainer";

import projects from "./data.json";

const MainContainer = styled(({ textcolor, ...rest }) => <div {...rest} />)`
  width: 100%;
  height: 100%;
  color: ${({ textcolor }) => textcolor};
`;

const PlaceholderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Projects = ({ section, subSectionIndex }) => (
  <MainContainer textcolor={section.colors.text}>
    <SplitContent
      leftContent={<PlaceholderContainer>Projects Left</PlaceholderContainer>}
      rightContent={
        <SlidingArea index={subSectionIndex}>
          {projects.map(({ title }, index) => (
            <FadingContainer visible={subSectionIndex === index}>
              <PlaceholderContainer>{title}</PlaceholderContainer>
            </FadingContainer>
          ))}
        </SlidingArea>
      }
    />
  </MainContainer>
);

Projects.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
    content: PropTypes.elementType,
    colors: PropTypes.shape({
      text: PropTypes.string,
      background: PropTypes.string,
    }),
    indexRange: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  subSectionIndex: PropTypes.number.isRequired,
};

export default Projects;
