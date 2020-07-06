import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import SocialIconButtons from "../common/SocialIconButtons";
import SectionTitle from "./SectionTitle";
import { general, desktop } from "../../config/constants.json";

const ScrollArea = styled(motion.div)`
  width: ${desktop.logoSize}px;
  min-width: ${desktop.logoSize}px;
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

  /* Apply colour to section titles. */
  color: ${({ colour }) => colour};

  /* Apply colour to icon buttons. */
  div > a {
    color: ${({ colour }) => colour};
  }
`;

const LeftBar = ({ sections, sectionIndex }) => {
  return (
    <ScrollArea
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: general.sectionTransitionDuration * 0.8,
      }}
      initial={{ top: 0 }}
      animate={{
        top: `${sectionIndex * -100}vh`,
      }}
    >
      {sections.map((section, index) => (
        <ContentContainer
          key={section.title}
          colour={section.colours.text}
          transition={{
            type: "tween",
            ease: "easeOut",
            duration: general.sectionTransitionDuration * 0.3,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: sectionIndex === index ? 1 : 0,
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
};

LeftBar.propTypes = {
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
  sectionIndex: PropTypes.number.isRequired,
};

export default LeftBar;
