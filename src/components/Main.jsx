import React, { Component } from "react";
import styled from "styled-components";
import Introduction from "./sections/introduction/Introduction";

class Main extends Component {
  render = () => {
    return (
      <MainContainer>
        <Introduction />
      </MainContainer>
    );
  };
}

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default Main;
