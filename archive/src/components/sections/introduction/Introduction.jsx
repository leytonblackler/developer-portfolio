import React, { Component } from "react";
import styled from "styled-components";
import Typed from "react-typed";
import RoundedButton from "../../common/RoundedButton";

export default class Introduction extends Component {
  renderDesktopView = () => {
    const { pageLoaded } = this.props;
    return (
      <React.Fragment>
        <LeftSection>
          <TypedText
            stopped={pageLoaded}
            strings={["Hi, I'm Leyton.<br> I'm a Software Developer."]}
            typeSpeed={40}
            backDelay={1500}
          />
          <SecondaryText>
            I'm a full-stack developer who enjoys creating useful and
            interesting solutions and has a passion for clean design.
          </SecondaryText>
          <RoundedButton>Contact Me</RoundedButton>
        </LeftSection>
        <PhotoCircle src="/images/profile_photo.png" alt="Profile photo" />
      </React.Fragment>
    );
  };

  renderMobileView = () => <div>mobile</div>;

  render = () => {
    const { mobileView } = this.props;
    return (
      <MainContainer>
        <InnerContent>
          {mobileView ? this.renderMobileView() : this.renderDesktopView()}
        </InnerContent>
        <BackgroundShape />
      </MainContainer>
    );
  };
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  @media (min-width: 0px) {
    width: 100vw;
    max-width: 100vw;
  }
  @media (min-width: 1025px) {
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
    height: 190px;
    width: 320px;
  }
  @media (min-width: 1300px) {
    height: 135px;
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
    top: 22vh;
    right: -110vh;
    width: 140vh;
    height: 90vh;
    transform: rotate(55deg);
    background-image: url("/images/overlay_35deg_light.png");
  }
  @media (min-width: 1025px) {
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
  background-color: #0F6BDF;

  z-index: -10;
  border-radius: 100px;
`;
