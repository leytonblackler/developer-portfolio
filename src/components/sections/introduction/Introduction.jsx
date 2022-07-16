import React, { useRef, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import Typed from "react-typed";
import { useWindowWidth } from "@react-hook/window-size";
import SplitContent from "../../layout/SplitContent";
import constants from "../../../config/constants.json";
import ScrollDownIndicator from "../../layout/ScrollDownIndicator";

const SUBTEXT =
  "I strive to build high-quality solutions to real-world problems through modern human-centric design.";

const MainContainer = styled(({ textcolor, ...rest }) => <div {...rest} />)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ textcolor }) => textcolor};
`;

const TypedText = styled(Typed)`
  font-weight: 800;
  margin-bottom: 20px;

  /* Text spans 3 lines in mobile */
  min-height: 126px;
  max-width: 240px;
  /* Text spans 2 lines in mobile */
  @media (min-width: 476px) {
    min-height: 84px;
    max-width: none;
  }
  /* Text spans 3 lines in desktop */
  @media (min-width: ${constants.breakpoints.columnView}px) {
    min-height: 186px;
    max-width: 390px;
  }
  /* Text spans 2 lines in desktop */
  @media (min-width: 908px) {
    min-height: 124px;
    max-width: none;
  }

  font-size: 32px;
  line-height: 42px;
  margin-bottom: ${constants.mobile.minimumLayoutPadding / 2}px;
  @media (min-width: ${constants.breakpoints.columnView}px) {
    font-size: 52px;
    line-height: 62px;
    margin-bottom: ${constants.desktop.minimumLayoutPadding / 2}px;
  }
`;

const Subtext = styled.div`
  font-weight: 600;
  opacity: 0.75;

  font-size: 16px;
  line-height: 24px;
  @media (min-width: ${constants.breakpoints.columnView}px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const Banner = styled(motion.div)`
  height: 100%;
  clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
  position: fixed;
  top: 0;
  left: 0;
  margin-left: ${constants.desktop.minimumLayoutPadding * 2}px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Introduction = ({ section, sectionActive }) => {
  const bannerRef = useRef();
  const windowWidth = useWindowWidth();
  const [bannerWidth, setBannerWidth] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    if (bannerRef.current) {
      setBannerWidth(
        windowWidth - bannerRef.current.getBoundingClientRect().left
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bannerRef, windowWidth]);

  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(false);
  useEffect(() => {
    if (sectionActive) {
      if (typingComplete) {
        setScrollIndicatorVisible(true);
      }
    } else {
      setScrollIndicatorVisible(false);
    }
  }, [sectionActive, typingComplete]);

  const onTypingComplete = useCallback(() => {
    setTypingComplete(true);
  }, [setTypingComplete]);

  return (
    <>
      <SplitContent
        leftContent={
          <MainContainer textcolor={section.colors.text}>
            <TypedText
              // stopped={pageLoaded}
              strings={[
                '<span style="opacity: 0.75">Hi, I\'m Leyton.<br>I\'m a </span>Software Developer<span style="opacity: 0.75">.</span></span>',
              ]}
              typeSpeed={40}
              backDelay={1500}
              onComplete={onTypingComplete}
            />
            <Subtext>{SUBTEXT}</Subtext>
          </MainContainer>
        }
        rightContent={<div id="banner" />}
      />
      <Banner
        style={{
          width: bannerWidth,
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: constants.general.sectionTransitionDuration * 1,
        }}
        initial={{
          x: 0,
          opacity: 1,
        }}
        animate={
          sectionActive
            ? {
                x: bannerRef.current
                  ? bannerRef.current.getBoundingClientRect().left
                  : 0,
                opacity: 1,
              }
            : {
                x: bannerWidth + 2 * constants.desktop.minimumLayoutPadding,
                opacity: 0,
              }
        }
      />
      <ScrollDownIndicator show={scrollIndicatorVisible} />
    </>
  );
};

Introduction.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
    content: PropTypes.elementType,
    colors: PropTypes.shape({
      text: PropTypes.string,
      background: PropTypes.string,
    }),
    indexRange: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  sectionActive: PropTypes.bool.isRequired,
};

export default Introduction;
