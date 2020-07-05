import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled, { useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Header from "./Header";
import PageContent from "./PageContent";
import Introduction from "../sections/introduction/Introduction";
import About from "../sections/about/About";
import Projects from "../sections/projects/Projects";
import Contact from "../sections/contact/Contact";
import LeftBar from "./LeftBar";
import SectionContainer from "./SectionContainer";
import { setMaxScrollIndex } from "../util/ScrollProvider";
import {
  general,
  breakpoints,
  mobile,
  desktop,
} from "../../config/constants.json";
import { colour } from "../../config/theme.json";

const LayoutContainer = styled(motion.div)`
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

  /* background-color: ${({ theme }) => theme.colour.primary}; */
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  max-width: ${desktop.maximumContentWidth}px;
  /* background-color: yellow; */
`;

// const TITLES = [{'ABOUT'}]

const SECTIONS = [
  {
    title: null,
    component: Introduction,
    indexRange: [0, 0],
  },
  {
    title: "ABOUT",
    component: About,
    indexRange: [1, 2],
  },
  {
    title: "PROJECTS",
    component: Projects,
    indexRange: [2, 3],
  },
  {
    title: "CONTACT",
    component: Contact,
    indexRange: [4, 4],
  },
];

const Layout = ({ scrollIndex }) => {
  const wideView = useMediaQuery({
    query: `(min-width: ${breakpoints.columnView}px)`,
  });

  // Find the max index based on sections, and set it in the ScrollProvider.
  useEffect(
    () => setMaxScrollIndex(SECTIONS[SECTIONS.length - 1].indexRange[1]),
    []
  );

  return (
    <LayoutContainer
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: general.sectionTransitionDuration * 0.5,
      }}
      initial={{ backgroundColor: colour.primary }}
      animate={{
        backgroundColor: scrollIndex > 0 ? "#FFFFFF" : colour.primary,
      }}
    >
      <Header colour={scrollIndex > 0 ? "#000000" : "#FFFFFF"} />
      <Body>
        {wideView && <LeftBar scrollIndex={scrollIndex} />}
        <SectionContainer scrollIndex={scrollIndex}>
          {SECTIONS.map((section) => {
            const LeftContent = section.component;
            return (
              <PageContent
                leftContent={<LeftContent />}
                rightContent={<LeftContent />}
              />
            );
          })}
        </SectionContainer>
      </Body>
    </LayoutContainer>
  );
};

Layout.propTypes = {
  scrollIndex: PropTypes.number.isRequired,
};

export default Layout;
