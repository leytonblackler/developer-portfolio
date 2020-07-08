import React from "react";
import styled from "styled-components";
import Typed from "react-typed";
import SplitContent from "../../layout/SplitContent";
import { breakpoints, mobile, desktop } from "../../../config/constants.json";

const MainContainer = styled(({ textColour, ...rest }) => <div {...rest} />)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ textColour }) => textColour};
`;

const TypedText = styled(Typed)`
  font-weight: 800;
  margin-bottom: 20px;

  /* Text spans 3 lines in mobile */
  min-height: 141px;
  /* Text spans 2 lines in mobile */
  @media (min-width: 476px) {
    min-height: 94px;
  }
  /* Text spans 3 lines in desktop */
  @media (min-width: ${breakpoints.columnView}px) {
    min-height: 186px;
  }
  /* Text spans 2 lines in desktop */
  @media (min-width: 908px) {
    min-height: 124px;
  }

  font-size: 32px;
  line-height: 47px;
  margin-bottom: ${mobile.minimumLayoutPadding / 2}px;
  @media (min-width: ${breakpoints.columnView}px) {
    font-size: 52px;
    line-height: 62px;
    margin-bottom: ${desktop.minimumLayoutPadding / 2}px;
  }
`;

const Subtext = styled.div`
  font-weight: 600;
  opacity: 0.8;

  font-size: 16px;
  line-height: 24px;
  @media (min-width: ${breakpoints.columnView}px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const Introduction = ({ section }) => (
  <SplitContent
    leftContent={
      <MainContainer textColour={section.colours.text}>
        <TypedText
          // stopped={pageLoaded}
          strings={["Hi, I'm Leyton.<br>I'm a Software Developer."]}
          typeSpeed={40}
          backDelay={1500}
        />
        <Subtext>
          {
            "I build useful and high quality software solutions to real-world problems through modern human-centric design."
          }
        </Subtext>
      </MainContainer>
    }
  />
);

export default Introduction;
