import React from "react";
import styled from "styled-components";
import SplitContent from "../../layout/SplitContent";

const MainContainer = styled(({ textColour, ...rest }) => <div {...rest} />)`
  width: 100%;
  height: 100%;
  color: ${({ textColour }) => textColour};
`;

const PlaceholderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: mediumvioletred; */
`;

const Contact = ({ section }) => (
  <MainContainer textColour={section.colours.text}>
    <SplitContent
      leftContent={<PlaceholderContainer>Contact Left</PlaceholderContainer>}
      rightContent={<PlaceholderContainer>Contact Right</PlaceholderContainer>}
    />
  </MainContainer>
);

export default Contact;
