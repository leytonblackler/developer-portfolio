import React from "react";
import styled from "styled-components";

const RoundedButton = props => (
  <MainContainer>
    <Text>{props.children}</Text>
  </MainContainer>
);

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background-color: #8a2be2;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 100px;
  box-shadow: 0px 8px 30px rgba(138, 43, 226, 0.3);
`;

const Text = styled.span`
  color: white;
  font-size: 12pt;
`;

export default RoundedButton;
