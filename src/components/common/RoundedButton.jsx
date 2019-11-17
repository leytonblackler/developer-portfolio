import React from "react";
import styled from "styled-components";
import posed from "react-pose";

const RoundedButton = props => (
  <MainContainer className="disable-select">
    <Text>{props.children}</Text>
  </MainContainer>
);

const MainContainer = posed(styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 100px;
  box-shadow: 0px 8px 30px rgba(138, 43, 226, 0.3);
  cursor: pointer;
  font-weight: 600;
`)({
  hoverable: true,
  init: {
    backgroundColor: "#8a2be2"
  },
  hover: {
    backgroundColor: "#5e16a2"
  }
});

const Text = styled.span`
  color: white;
  font-size: 12pt;
`;

export default RoundedButton;

// init: {
//   backgroundColor: "#8a2be2"
// },
// hover: {
//   backgroundColor: "#5e16a2"
// }
