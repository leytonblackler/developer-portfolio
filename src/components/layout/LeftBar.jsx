import React from "react";
import styled from "styled-components";
import SocialIconButtons from "../common/SocialIconButtons";
import { desktop } from "../../config/constants.json";

const MainContainer = styled.div`
  width: ${desktop.logoSize}px;
  min-width: ${desktop.logoSize}px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: magenta;
`;

const LeftBar = () => {
  //
  return (
    <MainContainer>
      <SocialIconButtons />
    </MainContainer>
  );
};

export default LeftBar;
