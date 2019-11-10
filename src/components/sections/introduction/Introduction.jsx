import React, { Component } from "react";
import styled from "styled-components";
import Typed from "react-typed";
import RoundedButton from "../../common/RoundedButton";

export default class Introduction extends Component {
  render = () => (
    <MainContainer>
      <LeftSection>
        <TypedText
          strings={["Hi, I'm Leyton.<br> I'm a Software Developer."]}
          typeSpeed={40}
          backDelay={1500}
        />
        <SecondaryText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed justo
          orci.
        </SecondaryText>
        <RoundedButton> Hire Me</RoundedButton>
      </LeftSection>
      <PhotoCircle src="/images/profile_photo.png" />
      <BackgroundShape />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const LeftSection = styled.div`
  height: 340px;
  width: 700px;
  margin: 50px;
  margin-right: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const TypedText = styled(Typed)`
  height: 110px;
  font-size: 32pt;
  font-weight: 600;
  color: #272d43;
`;

const SecondaryText = styled.div`
  font-size: 16pt;
  font-weight: 500;
  color: #272d43;
`;

const PhotoCircle = styled.img`
  width: 45vh;
  height: 45vh;
  margin: 50px;
  max-width: 380px;
  max-height: 380px;
  border-radius: 340px;
  box-shadow: 10px 20px 34px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.12);
`;

const BackgroundShape = styled.div`
  position: absolute;
  top: -600px;
  right: -1100px;
  @media (min-width: 2000px) {
    right: -800px;
  }
  width: 1500px;
  height: 1500px;
  background-color: #8a2be2;
  transform: rotate(45deg);
  z-index: -10;
  border-radius: 140px;
`;
