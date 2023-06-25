import React, { Component } from "react";
import styled from "styled-components";

export default class About extends Component {
  render = () => (
    <MainContainer className="disable-select">
      <InnerContent>About</InnerContent>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContent = styled.div`
  // background-color: rgba(92, 211, 255, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media (min-width: 0px) {
    width: 900px;
    max-width: 900px;
  }
  @media (min-width: 1300px) {
    width: 1200px;
    max-width: 1200px;
  }
`;
