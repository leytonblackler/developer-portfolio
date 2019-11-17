import React, { Component } from "react";
import styled from "styled-components";
import windowSize from "react-window-size";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from "./header/Header";
import Introduction from "./sections/introduction/Introduction";
import About from "./sections/about/About";
import Portfolio from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact";
import MobileComingSoon from "./MobileComingSoon";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 1
    };
  }

  handleSectionChange = section => {
    this.fullpageApi.moveTo(section, 0);
    this.setState({ currentSection: section });
  };

  onLeave(origin, destination, direction) {
    this.setState({ currentSection: destination.index + 1 });
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }

  render = () => {
    const mobileView = this.props.windowWidth < 1000;
    return !mobileView ? (
      <React.Fragment>
        <HeaderContainer>
          <Header
            onPageLinkClicked={this.handleSectionChange}
            currentSection={this.state.currentSection}
          />
        </HeaderContainer>
        <ReactFullpage
          licenseKey="7CDGxdU?n5"
          scrollOverflow={true}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            this.fullpageApi = fullpageApi;
            console.log("state", state.destination);
            return (
              <MainContainer>
                <Section className="section">
                  <Introduction />
                </Section>
                <Section className="section">
                  <About />
                </Section>
                <Section className="section">
                  <Portfolio />
                </Section>
                <Section className="section">
                  <Contact />
                </Section>
              </MainContainer>
            );
          }}
        />
      </React.Fragment>
    ) : (
      <MobileComingSoonContainer>
        <MobileComingSoon />
      </MobileComingSoonContainer>
    );
  };
}

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px !important;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const MobileComingSoonContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1001px) {
    visibility: hidden;
  }
  @media (max-width: 1000px) {
    visibility: visible;
  }
`;

export default windowSize(Main);

// @media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
// @media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }
// @media (min-width:600px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
// @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
// @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
// @media (min-width:1281px) { /* hi-res laptops and desktops */ }
