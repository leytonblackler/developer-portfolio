import React from "react";
import styled from "styled-components";
import posed from "react-pose";
import Icon from "@mdi/react";

const IconButton = props => (
  <MainContainer className="disable-select" onClick={props.onClick}>
    <Icon path={props.icon} size={0.8} color="#424963" />
  </MainContainer>
);

const MainContainer = posed(styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-left: 20px;
  border-radius: 100px;
  cursor: pointer;
`)({
  hoverable: true,
  init: {
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  hover: {
    backgroundColor: "#f2f3f5"
  },
  inactive: {
    color: "#424963"
  },
  active: {
    color: "#8a2be2"
  }
});

export default IconButton;
