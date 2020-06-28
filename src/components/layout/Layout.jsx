import React, { useEffect } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Header from "./Header";
import PageContent from "./PageContent";
import Introduction from "../sections/introduction/Introduction";
import About from "../sections/about/About";
import LeftBar from "./LeftBar";
import SectionContainer from "./SectionContainer";
import { breakpoints, mobile, desktop } from "../../config/constants.json";

const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  position: relative;

  padding-left: ${mobile.minimumLayoutPadding}px;
  padding-right: ${mobile.minimumLayoutPadding}px;
  @media (min-width: ${breakpoints.columnView}px) {
    padding-left: ${desktop.minimumLayoutPadding}px;
    padding-right: ${desktop.minimumLayoutPadding}px;
  }

  background-color: ${({ theme }) => theme.colour.primary};
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  max-width: ${desktop.maximumContentWidth}px;
  background-color: yellow;
`;

export default ({ sectionIndex }) => {
  const wideView = useMediaQuery({
    query: `(min-width: ${breakpoints.columnView}px)`,
  });

  // useEffect(() => {
  //   console.log("sectionIndex", sectionIndex);
  // }, [sectionIndex]);

  return (
    <LayoutContainer>
      <Header />
      <Body>
        {wideView && <LeftBar />}
        <SectionContainer sectionIndex={sectionIndex}>
          <PageContent>
            <Introduction />
          </PageContent>
          <PageContent>
            <About />
          </PageContent>
        </SectionContainer>

        {/* <PageContent>
          <Introduction />
          <About />
        </PageContent> */}
      </Body>
    </LayoutContainer>
  );
};
