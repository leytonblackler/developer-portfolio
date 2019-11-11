import React, { Component } from "react";
import styled from "styled-components";
import Typed from "react-typed";
import RoundedButton from "../../common/RoundedButton";

export default class Introduction extends Component {
  render = () => (
    <MainContainer className="disable-select">
      <InnerContent>
        <LeftSection>
          <TypedText
            strings={["Hi, I'm Leyton.<br> I'm a Software Developer."]}
            typeSpeed={40}
            backDelay={1500}
          />
          <SecondaryText>
            I'm currently looking for my next exciting career opportunity, keep
            scrolling to learn more about me.
          </SecondaryText>
          <RoundedButton> Hire Me</RoundedButton>
        </LeftSection>
        <PhotoCircle src="/images/profile_photo.png" />
      </InnerContent>
      <BackgroundShape />
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

const LeftSection = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const TypedText = styled(Typed)`
  @media (min-width: 0px) {
    height: 180px;
    width: 320px;
  }
  @media (min-width: 1300px) {
    height: 140px;
    width: auto;
  }
  font-size: 32pt;
  font-weight: 700;
  color: #272d43;
`;

const SecondaryText = styled.div`
  font-size: 13pt;
  font-weight: 500;
  color: #696e82;
  margin-bottom: 40px;
`;

const PhotoCircle = styled.img`
  width: 45vh;
  height: 45vh;
  margin-left: 50px;
  max-width: 380px;
  max-height: 380px;
  border-radius: 340px;
  box-shadow: 10px 20px 34px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.12);
`;

const BackgroundShape = styled.div`
  position: absolute;
  @media (min-width: 0px) {
    top: -20vh;
    right: -50vh;
    width: 140vh;
    height: 90vh;
    transform: rotate(35deg);
    background-image: url("/images/overlay_35deg_light.png");
  }
  @media (min-width: 2100px) {
    top: -30vh;
    right: -45vh;
    width: 170vh;
    height: 100vh;
    transform: rotate(25deg);
    background-image: url("/images/overlay_25deg_light.png");
  }
  background-color: #8a2be2;

  z-index: -10;
  border-radius: 100px;
`;
