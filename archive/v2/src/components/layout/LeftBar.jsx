import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import SocialIconButtons from "../common/SocialIconButtons";
import SectionTitle from "./SectionTitle";
import constants from "../../config/constants.json";

const ScrollArea = styled(motion.div)`
  width: ${constants.desktop.logoSize}px;
  min-width: ${constants.desktop.logoSize}px;
  box-sizing: border-box;
  position: relative;
  /* background-color: magenta; */
`;

const ContentContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* Apply color to section titles. */
  color: ${({ color }) => color};

  /* Apply color to icon buttons. */
  div > a {
    color: ${({ color }) => color};
  }
`;

const LeftBar = ({ sections, sectionIndex }) => (
  <ScrollArea
    style={{
      transform: `translateY(${sectionIndex * -100}vh)`,
      transition: `transform ${
        constants.general.sectionTransitionDuration * 0.9
      }ms ease 0s`,
    }}
  >
    {sections.map((section, index) => (
      <ContentContainer
        key={section.title}
        color={section.colors.text}
        style={{
          opacity: sectionIndex === index ? 1 : 0,
          transition: `opacity ${
            constants.general.sectionTransitionDuration * 0.3
          }ms ease 0s`,
        }}
      >
        {/* Render the title if it exists for the given section, otherwise render social icon buttons. */}
        {section.title ? (
          <SectionTitle>{section.title}</SectionTitle>
        ) : (
          <SocialIconButtons />
        )}
      </ContentContainer>
    ))}
  </ScrollArea>
);

LeftBar.propTypes = {
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
  sectionIndex: PropTypes.number.isRequired,
};

export default LeftBar;
