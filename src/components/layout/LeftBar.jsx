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
  background-color: magenta;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: navy;
`;

const LeftBar = ({ sectionIndex, label, showSocialIcons }) => {
  // console.log("label", label);
  return (
    <ScrollArea
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: general.sectionTransitionDuration * 0.7,
      }}
      initial={{ top: 0 }}
      animate={{ top: `${sectionIndex * -100}vh` }}
    >
      <ContentContainer>
        <SocialIconButtons />
      </ContentContainer>
      <ContentContainer>
        <SectionTitle>ABOUT</SectionTitle>
      </ContentContainer>
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
