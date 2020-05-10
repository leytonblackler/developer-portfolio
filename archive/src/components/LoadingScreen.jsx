import React from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { motion } from "framer-motion";

const LoadingScreen = props => {
  const mainContainerVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };
  const loaderContainerVariants = {
    visible: { opacity: 1, transform: "scale(1)" },
    hidden: { opacity: 0, transform: "scale(0.6)" }
  };
  return (
    <MainContainer
      variants={mainContainerVariants}
      initial={mainContainerVariants.visible}
      animate={props.visible ? "visible" : "hidden"}
      style={{ pointerEvents: props.visible ? "default" : "none" }}
    >
      <LoaderContainer
        variants={loaderContainerVariants}
        animate={props.visible ? "visible" : "hidden"}
      >
        <Logo src="/images/logo.png" alt="Logo" />
        <ClipLoader size={110} color="#0F6BDF" loading={true} />
      </LoaderContainer>
    </MainContainer>
  );
};

const MainContainer = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  transform-origin: center;
`;

const LoaderContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
`;

export default LoadingScreen;
