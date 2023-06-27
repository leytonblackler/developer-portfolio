import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useWindowWidth } from "@react-hook/window-size";
import constants from "../../../config/constants.json";

const MainContainer = styled(motion.div)`
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  margin-left: ${constants.desktop.minimumLayoutPadding * 2}px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Banner = styled.div`
  width: 100%;
  height: 100%;
  background-color: #014ccc;
  margin-left: ${constants.desktop.minimumLayoutPadding}px;
  clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%);
`;

const PhotoContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border: 4px solid #ffffff;
  border-radius: 300px;
  background-color: #014ccc;
  overflow: hidden;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
`;

const IntroductionBanner = ({ visible }) => {
  const windowWidth = useWindowWidth();
  const [bannerWidth, setBannerWidth] = useState(0);

  useEffect(() => {
    const bannerArea = document.getElementById("banner");
    if (bannerArea) {
      setBannerWidth(
        windowWidth -
          bannerArea.getBoundingClientRect().left -
          constants.desktop.minimumLayoutPadding * 2
      );
    }
  }, [windowWidth]);

  return (
    <MainContainer
      style={{ width: bannerWidth }}
      transition={{
        x: {
          type: "tween",
          ease: "easeOut",
          duration: constants.general.sectionTransitionDuration * 1,
        },
        opacity: {
          type: "tween",
          ease: "easeOut",
          duration: constants.general.sectionTransitionDuration * 0.2,
        },
      }}
      initial={{ x: 0, opacity: 1 }}
      animate={
        visible ? { x: 0, opacity: 1 } : { x: bannerWidth / 4, opacity: 0 }
      }
    >
      <Banner />
      <PhotoContainer>
        <Photo src="/images/avatar.png" />
      </PhotoContainer>
    </MainContainer>
  );
};

IntroductionBanner.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default IntroductionBanner;
