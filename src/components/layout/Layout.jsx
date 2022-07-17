import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Header from "./Header";
import LeftBar from "./LeftBar";
import SectionsContainer from "./SectionsContainer";
import Cursor from "./Cursor";
import constants from "../../config/constants.json";
import FloatingScrollDown from "../context/FloatingScrollDown";

const LayoutContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  position: relative;

  padding-left: ${constants.mobile.minimumLayoutPadding}px;
  padding-right: ${constants.mobile.minimumLayoutPadding}px;
  @media (min-width: ${constants.breakpoints.columnView}px) {
    padding-left: ${constants.desktop.minimumLayoutPadding}px;
    padding-right: ${constants.desktop.minimumLayoutPadding}px;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  max-width: ${constants.desktop.maximumContentWidth}px;
`;

const Layout = ({ sections, scrollIndex }) => {
  // useEffect(() => {
  //   console.log("pageLoad", pageLoad);
  // }, []);

  const wideView = useMediaQuery({
    query: `(min-width: ${constants.breakpoints.columnView}px)`,
  });

  const floatingScrollDown = useContext(FloatingScrollDown.Context);

  // Evaluate the section index based on the current scroll index and the index ranges of the sections.
  const [sectionIndex, setSectionIndex] = useState(0);
  useEffect(() => {
    setSectionIndex(
      sections.findIndex(
        (section) =>
          scrollIndex >= section.indexRange[0] &&
          scrollIndex <= section.indexRange[1]
      )
    );
  }, [scrollIndex, sections]);

  const loaded = true; // TODO

  return !loaded ? null : (
    <LayoutContainer
      style={{
        backgroundColor: sections[sectionIndex].colors.background,
        transition: `background-color ${
          constants.general.sectionTransitionDuration * 0.7
        }ms ease 0s`,
      }}
    >
      <Header color={sections[sectionIndex].colors.text} />
      <Body>
        {wideView && (
          <LeftBar sections={sections} sectionIndex={sectionIndex} />
        )}
        <SectionsContainer
          sections={sections}
          sectionIndex={sectionIndex}
          scrollIndex={scrollIndex}
        />
        {floatingScrollDown.element}
      </Body>
      <Cursor sectionIndex={sectionIndex} />
    </LayoutContainer>
  );
};

Layout.defaultProps = {
  scrollIndex: 0,
};

Layout.propTypes = {
  scrollIndex: PropTypes.number,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
      content: PropTypes.elementType,
      colors: PropTypes.shape({
        text: PropTypes.string,
        background: PropTypes.string,
      }),
      indexRange: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
};

export default Layout;
