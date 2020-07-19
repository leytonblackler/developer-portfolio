import React from "react";
import styled from "styled-components";
import { desktop, mobile, breakpoints } from "../../../config/constants.json";

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Image = styled.div`
  flex: 1;

  margin-top: ${mobile.logoSize * 2}px;
  margin-bottom: ${mobile.logoSize * 1}px;
  max-width: none;
  @media (min-width: ${breakpoints.columnView}px) {
    margin-top: ${desktop.logoSize * 2}px;
    margin-bottom: ${desktop.logoSize * 1}px;
    max-width: 500px;
  }
  background-image: url("/images/portrait.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const Portrait = () => {
  return (
    <ImageContainer>
      <Image src="/images/portrait.jpg" />
    </ImageContainer>
  );
};

export default Portrait;
