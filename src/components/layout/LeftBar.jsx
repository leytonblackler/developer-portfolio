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
      style={{
        transform: `translateY(${sectionIndex * -100}vh)`,
        transition: `transform ${
          general.sectionTransitionDuration * 0.9
        }ms ease 0s`,
      }}
    >
      {sections.map((section, index) => (
        <ContentContainer
          key={section.title}
          colour={section.colours.text}
          style={{
            opacity: sectionIndex === index ? 1 : 0,
            transition: `opacity ${
              general.sectionTransitionDuration * 0.3
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
