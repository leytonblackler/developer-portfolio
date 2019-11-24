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
import LoadingScreen from "./LoadingScreen";
import OnImagesLoaded from "react-on-images-loaded";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesLoaded: false,
      loaderShownForMinimumTime: false,
      currentSection: 1
    };
    setTimeout(() => this.setState({ loaderShownForMinimumTime: true }), 1000);
  }

  handleSectionChange = section => {
    this.fullpageApi.moveTo(section, 0);
    this.setState({ currentSection: section });
  };

  onLeave(origin, destination, direction) {
    this.setState({ currentSection: destination.index + 1 });
  }

  render = () => {
    const { imagesLoaded, loaderShownForMinimumTime } = this.state;
    const pageLoaded = imagesLoaded && loaderShownForMinimumTime;
    const mobileView = this.props.windowWidth < 1000;
    return !mobileView ? (
      <React.Fragment>
        <LoadingScreen visible={!pageLoaded} />
        <OnImagesLoaded
          onLoaded={() => this.setState({ imagesLoaded: true })}
          onTimeout={() => console.log("OnImagesLoaded timeout.")}
          timeout={7000}
        >
          <Header
            onPageLinkClicked={this.handleSectionChange}
            currentSection={this.state.currentSection}
          />
          <ReactFullpage
            licenseKey="7CDGxdU?n5"
            scrollOverflow={true}
            onLeave={this.onLeave.bind(this)}
            render={({ state, fullpageApi }) => {
              this.fullpageApi = fullpageApi;
              return (
                <MainContainer>
                  <Section className="section">
                    <Introduction pageLoaded={pageLoaded} />
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
        </OnImagesLoaded>
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

const MobileComingSoonContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 90;
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
