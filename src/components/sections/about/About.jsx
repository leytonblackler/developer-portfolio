import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SplitContent from "../../layout/SplitContent";
import SlidingArea from "../../layout/SlidingArea";
import FadingContainer from "../../layout/FadingContainer";

const MainContainer = styled(({ textColour, ...rest }) => <div {...rest} />)`
  width: 100%;
  height: 100%;
  position: relative;
  color: ${({ textColour }) => textColour};
`;

const PlaceholderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: tomato; */
`;

const About = ({ section, subSectionIndex }) => (
  <MainContainer textColour={section.colours.text}>
    <SplitContent
      leftContent={
        <PlaceholderContainer>
          {"I'm a full-stack developer based in Wellington, New Zealand."}
        </PlaceholderContainer>
      }
      rightContent={
        <SlidingArea index={subSectionIndex}>
          <FadingContainer visible={subSectionIndex === 0}>
            <PlaceholderContainer>About Right 0</PlaceholderContainer>
          </FadingContainer>
          <FadingContainer visible={subSectionIndex === 1}>
            <PlaceholderContainer>About Right 1</PlaceholderContainer>
          </FadingContainer>
        </SlidingArea>
      }
    />
  </MainContainer>
);

About.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
    content: PropTypes.elementType,
    colours: PropTypes.shape({
      text: PropTypes.string,
      background: PropTypes.string,
    }),
    indexRange: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  subSectionIndex: PropTypes.number.isRequired,
};

export default About;
