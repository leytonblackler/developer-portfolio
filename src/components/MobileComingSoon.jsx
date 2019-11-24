import React from "react";
import styled from "styled-components";

const MobileComingSoon = props => (
  <MainContainer>
    <Logo src="/images/logo.png" />
    <Text>The mobile version of this site is still in development.</Text>
    <Text>
      To view the full content, please try viewing this site on a larger device.
    </Text>
  </MainContainer>
);

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 50px;
`;

const Text = styled.div`
  color: #424963;
  font-weight: 600;
  font-size: 12pt;
  width: 350px;
  text-align: center;
  margin-bottom: 25px;
`;

export default MobileComingSoon;
