import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import LeftBar from "./LeftBar";
import { breakpoints, mobile, desktop } from "../../config/constants.json";

const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  /* box-sizing: border-box; */
  position: relative;

  background-color: lime;

  color: #ffffff;
`;

// const InnerContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   box-sizing: border-box;

//   max-width: none;
//   padding-right: 0;
//   @media (min-width: ${breakpoints.wideView}px) {
//     max-width: ${desktop.maximumContentWidth}px;
//     padding-right: ${desktop.logoSize}px;
//   }
// `;

const LeftContent = styled.div`
  /* flex: 1; */
  height: 100%;
  box-sizing: border-box;
  background-color: purple;

  width: 100%;
  max-width: 100%;
  @media (min-width: ${breakpoints.columnView}px) {
    max-width: ${desktop.leftContentWidth}px;
  }
  @media (min-width: ${breakpoints.wideView}px) {
    max-width: ${desktop.leftContentWidth}px;
  }

  /* min-width: ${desktop.leftContentWidth}px;
  max-width: ${desktop.leftContentWidth}px;
  @media (min-width: ${breakpoints.wideView}px) {
    min-width: ${desktop.leftContentWidth}px;
    max-width: ${desktop.leftContentWidth}px;
  } */
`;

const RightContent = styled.div`
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  background-color: magenta;
`;

// const TopContent = styled.div`
//   flex: 1;
//   width: 100%;
//   box-sizing: border-box;
//   background-color: magenta;
// `;

const PageContent = ({ leftContent, rightContent }) => {
  const wideView = useMediaQuery({
    query: `(min-width: ${breakpoints.wideView}px)`,
  });
  return (
    <ContentContainer>
      {/* <InnerContainer> */}
      <LeftContent>{leftContent}</LeftContent>
      {wideView && <RightContent>{rightContent}</RightContent>}
      {/* </InnerContainer> */}
    </ContentContainer>
  );
};

PageContent.defaultProps = {
  leftContent: null,
  rightContent: null,
};

PageContent.propTypes = {
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
};

export default PageContent;
