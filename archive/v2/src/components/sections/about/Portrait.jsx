import React from "react";
import styled from "styled-components";
import constants from "../../../config/constants.json";

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Image = styled.div`
  flex: 1;

  margin-top: ${constants.mobile.logoSize * 2}px;
  margin-bottom: ${constants.mobile.logoSize * 1}px;
  max-width: none;
  @media (min-width: ${constants.breakpoints.columnView}px) {
    margin-top: ${constants.desktop.logoSize * 2}px;
    margin-bottom: ${constants.desktop.logoSize * 1}px;
    max-width: 500px;
  }
  background-image: url("/images/profile.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 8px;
`;

const Portrait = () => (
  <ImageContainer>
    <Image />
  </ImageContainer>
);

export default Portrait;
