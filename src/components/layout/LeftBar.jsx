import React, { useState, useEffect } from "react";
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

const SECTIONS = [
  {
    content: <SocialIconButtons />,
    indexRange: [0, 0],
    colour: "#FFFFFF",
  },
  {
    content: <SectionTitle>ABOUT</SectionTitle>,
    indexRange: [1, 2],
    colour: "#000000",
  },
  {
    content: <SectionTitle>PROJECTS</SectionTitle>,
    indexRange: [3, 3],
    colour: "#000000",
  },
  {
    content: <SectionTitle>CONTACT</SectionTitle>,
    indexRange: [4, 4],
    colour: "#000000",
  },
];

const LeftBar = ({ scrollIndex, label, showSocialIcons }) => {
  // console.log("label", label);

  const [titleIndex, setTitleIndex] = useState(0);
  useEffect(() => {
    setTitleIndex(
      SECTIONS.findIndex(
        (section) =>
          scrollIndex >= section.indexRange[0] &&
          scrollIndex <= section.indexRange[1]
      )
    );
  }, [scrollIndex]);

  return (
    <ScrollArea
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: general.sectionTransitionDuration * 0.8,
      }}
      initial={{ top: 0 }}
      animate={{
        top: `${titleIndex * -100}vh`,
      }}
    >
      {SECTIONS.map((section, index) => (
        <ContentContainer
          colour={section.colour}
          transition={{
            type: "tween",
            ease: "easeOut",
            duration: general.sectionTransitionDuration * 0.6,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity:
              scrollIndex >= section.indexRange[0] &&
              scrollIndex <= section.indexRange[1]
                ? 1
                : 0,
          }}
        >
          {section.content}
        </ContentContainer>
      ))}
    </ScrollArea>
  );
};

SectionTitle.defaultProps = {
  label: null,
  showSocialIcons: false,
};

SectionTitle.propTypes = {
  label: PropTypes.string,
  showSocialIcons: PropTypes.bool,
};

export default LeftBar;
