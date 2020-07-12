import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Typed from "react-typed";
import { useWindowWidth } from "@react-hook/window-size";
import SplitContent from "../../layout/SplitContent";
import {
  general,
  breakpoints,
  mobile,
  desktop,
} from "../../../config/constants.json";

const MainContainer = styled(({ textColour, ...rest }) => <div {...rest} />)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ textColour }) => textColour};
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
  @media (min-width: ${breakpoints.columnView}px) {
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
  margin-bottom: ${mobile.minimumLayoutPadding / 2}px;
  @media (min-width: ${breakpoints.columnView}px) {
    font-size: 52px;
    line-height: 62px;
    margin-bottom: ${desktop.minimumLayoutPadding / 2}px;
  }
`;

const Subtext = styled.div`
  font-weight: 600;
  opacity: 0.8;

  font-size: 16px;
  line-height: 24px;
  @media (min-width: ${breakpoints.columnView}px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

// const BannerContainer = styled(motion.div)`
//   height: 100%;
//   position: relative;
//   clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
//   position: fixed;
//   top: 0;
//   margin-left: ${desktop.minimumLayoutPadding * 2}px;
// `;

const Banner = styled(motion.div)`
  height: 100%;
  clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
  position: fixed;
  top: 0;
  left: 0;
  margin-left: ${desktop.minimumLayoutPadding * 2}px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Introduction = ({ section, sectionActive }) => {
  const bannerRef = useRef();
  const windowWidth = useWindowWidth();
  const [bannerWidth, setBannerWidth] = useState(0);

  useEffect(() => {
    if (bannerRef.current) {
      console.log("left", bannerRef.current.getBoundingClientRect().left);
      setBannerWidth(
        windowWidth - bannerRef.current.getBoundingClientRect().left
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bannerRef, windowWidth]);

  useEffect(() => console.log("bannerRef", bannerRef.current), []);

  return (
    <>
      <SplitContent
        leftContent={
          <MainContainer textColour={section.colours.text}>
            <TypedText
              // stopped={pageLoaded}
              strings={["Hi, I'm Leyton.<br>I'm a Software Developer."]}
              typeSpeed={40}
              backDelay={1500}
            />
            <Subtext>
              {
                "I build useful and high quality software solutions to real-world problems through modern human-centric design."
              }
            </Subtext>
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
          duration: general.sectionTransitionDuration * 1,
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
                x: bannerWidth + 2 * desktop.minimumLayoutPadding,
                opacity: 0,
              }
        }
      />
    </>
  );
};

export default Introduction;
