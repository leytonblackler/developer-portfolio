import React, { useEffect } from "react";
import PropTypes from "prop-types";
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

// const TITLES = [{'ABOUT'}]

const SECTIONS = [
  { title: null, component: Introduction },
  { title: "ABOUT", component: About },
];

const Layout = ({ sectionIndex }) => {
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
        {wideView && (
          <LeftBar
            sectionIndex={sectionIndex}
            // showSocialIcons={sectionIndex === 0}
            // label={sectionIndex > 0 ? "ABOUT" : null}
          />
        )}
        <SectionContainer sectionIndex={sectionIndex}>
          {SECTIONS.map((section) => {
            const LeftContent = section.component;
            return <PageContent leftContent={<LeftContent />} />;
          })}
        </SectionContainer>
      </Body>
    </LayoutContainer>
  );
};

Layout.propTypes = {
  sectionIndex: PropTypes.number.isRequired,
};

export default Layout;
