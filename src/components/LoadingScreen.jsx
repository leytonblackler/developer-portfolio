import React from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import posed from "react-pose";

const LoadingScreen = props => (
  <MainContainer
    pose={props.visible ? "visible" : "hidden"}
    style={{ pointerEvents: props.visible ? "default" : "none" }}
  >
    <LoaderContainer pose={props.visible ? "visible" : "hidden"}>
      <Logo src="/images/logo.png" alt="Logo" />
      <ClipLoader size={110} color="#8a2be2" loading={true} />
    </LoaderContainer>
  </MainContainer>
);

const MainContainer = posed(styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  transform-origin: center;
`)({
  visible: {
    transition: { duration: 200 },
    opacity: 1
  },
  hidden: { transition: { duration: 200 }, opacity: 0 }
});

const LoaderContainer = posed(styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`)({
  visible: {
    opacity: 1,
    transform: "scale(1)"
  },
  hidden: {
    opacity: 0,
    transform: "scale(0.6)"
  }
});

const Logo = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
`;

export default LoadingScreen;
