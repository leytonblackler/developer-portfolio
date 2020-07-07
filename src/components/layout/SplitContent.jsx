import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { breakpoints, desktop } from "../../config/constants.json";

const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
`;

const LeftContent = styled.div`
  height: 100%;
  box-sizing: border-box;

  width: 100%;
  max-width: 100%;
  @media (min-width: ${breakpoints.columnView}px) {
    max-width: ${desktop.leftContentWidth}px;
  }
  @media (min-width: ${breakpoints.wideView}px) {
    max-width: ${desktop.leftContentWidth}px;
  }
`;

const RightContent = styled.div`
  flex: 1;
  height: 100%;
  box-sizing: border-box;
`;

// const TopContent = styled.div`
//   flex: 1;
//   width: 100%;
//   box-sizing: border-box;
//   background-color: magenta;
// `;

const SplitContent = ({ leftContent, rightContent }) => {
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

SplitContent.defaultProps = {
  leftContent: null,
  rightContent: null,
};

SplitContent.propTypes = {
  leftContent: PropTypes.node,
  rightContent: PropTypes.node,
};

export default SplitContent;
