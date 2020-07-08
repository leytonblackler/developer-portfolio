import React from "react";
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

export default About;
