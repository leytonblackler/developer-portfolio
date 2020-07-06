import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Header from "./Header";
import LeftBar from "./LeftBar";
import SectionContainer from "./SectionContainer";
import {
  general,
  breakpoints,
  mobile,
  desktop,
} from "../../config/constants.json";

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
`;

const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  max-width: ${desktop.maximumContentWidth}px;
`;

const Layout = ({ sections, scrollIndex }) => {
  const wideView = useMediaQuery({
    query: `(min-width: ${breakpoints.columnView}px)`,
  });

  // Evaluate the section index based on the current scroll index and the index ranges of the sections.
  const [indexes, setIndexes] = useState({ section: 0, subSection: 0 });
  useEffect(() => {
    const sectionIndex = sections.findIndex(
      (section) =>
        scrollIndex >= section.indexRange[0] &&
        scrollIndex <= section.indexRange[1]
    );
    setIndexes({
      section: sectionIndex,
      subSection: scrollIndex - sections[sectionIndex].indexRange[0],
    });
  }, [scrollIndex, sections]);

  return (
    <LayoutContainer
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: general.sectionTransitionDuration * 0.5,
      }}
      initial={{ backgroundColor: sections[0].colours.background }}
      animate={{
        backgroundColor: sections[indexes.section].colours.background,
      }}
    >
      <Header colour={sections[indexes.section].colours.text} />
      <Body>
        {wideView && (
          <LeftBar sections={sections} sectionIndex={indexes.section} />
        )}
        <SectionContainer sections={sections} indexes={indexes} />
      </Body>
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
      colours: PropTypes.shape({
        text: PropTypes.string,
        background: PropTypes.string,
      }),
      indexRange: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
};

export default Layout;
