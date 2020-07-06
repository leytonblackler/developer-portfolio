import React from "react";
import styled from "styled-components";
import SplitContent from "../../layout/SplitContent";
import SlidingArea from "../../layout/SlidingArea";

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
  background-color: tomato;
`;

const About = ({ section, subSectionIndex }) => (
  <MainContainer textColour={section.colours.text}>
    <SplitContent
      leftContent={<PlaceholderContainer>About Left</PlaceholderContainer>}
      rightContent={
        <SlidingArea index={subSectionIndex}>
          <PlaceholderContainer>About Right 0</PlaceholderContainer>
          <PlaceholderContainer>About Right 1</PlaceholderContainer>
        </SlidingArea>
      }
    />
  </MainContainer>
);

export default About;
