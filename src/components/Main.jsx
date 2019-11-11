import React, { Component } from "react";
import styled from "styled-components";
import ReactPageScroller from "react-page-scroller";
import Header from "./header/Header";
import Introduction from "./pages/introduction/Introduction";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import MobileComingSoon from "./MobileComingSoon";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    };
  }

  handlePageChange = page => {
    this.reactPageScroller.goToPage(page);
    this.setState({ currentPage: page });
  };

  render = () => {
    return (
      <React.Fragment>
        <MainContainer>
          <Header
            onPageLinkClicked={this.handlePageChange}
            currentPage={this.state.currentPage}
          />
          <ReactPageScroller
            ref={element => (this.reactPageScroller = element)}
            pageOnChange={this.handlePageChange}
            animationTimer={750}
          >
            <Introduction />
            <About />
            <Portfolio />
            <Contact />
          </ReactPageScroller>
        </MainContainer>
        <MobileComingSoonContainer>
          <MobileComingSoon />
        </MobileComingSoonContainer>
      </React.Fragment>
    );
  };
}

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
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

export default Main;

// @media (min-width:320px)  { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
// @media (min-width:480px)  { /* smartphones, Android phones, landscape iPhone */ }
// @media (min-width:600px)  { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
// @media (min-width:801px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
// @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
// @media (min-width:1281px) { /* hi-res laptops and desktops */ }
