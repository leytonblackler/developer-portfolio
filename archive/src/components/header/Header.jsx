import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import IconButton from "./IconButton";
import { mdiGithubCircle, mdiLinkedin } from "@mdi/js";
import { HamburgerSqueeze } from "react-animated-burgers";

const MainContainer = styled.div`
  position: absolute;
  z-index: 90;
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContent = styled.div`
  //   background-color: rgba(92, 211, 255, 0.3);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  margin-top: 20px;
  @media (min-width: 0px) {
    width: 100vw;
    max-width: 100vw;
    padding-left: 25px;
    padding-right: 15px;
  }
  @media (min-width: 1025px) {
    padding: 0;
    width: 900px;
    max-width: 900px;
  }
  @media (min-width: 1300px) {
    padding: 0;
    width: 1200px;
    max-width: 1200px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Right = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled(motion.img)`
  cursor: pointer;
`;

const LinkText = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12pt;
  font-weight: 600;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
  height: 40px;
  border-radius: 50px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 1);
`;

const Hamburger = styled(HamburgerSqueeze)`
  margin-bottom: 10px;
`;

const goToURL = url => window.open(url, "_blank");
const iconButtons = [
  {
    id: "github",
    icon: mdiGithubCircle,
    onClick: () => goToURL("https://github.com/leytonblackler")
  },
  {
    id: "linkedin",
    icon: mdiLinkedin,
    onClick: () => goToURL("https://www.linkedin.com/in/leytonblackler/")
  }
];

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { navigationOpen: false };
  }

  renderDesktopView = () => {
    const { onPageLinkClicked, currentSection } = this.props;
    const logoVariants = {
      default: {
        width: 50,
        height: 50,
        marginLeft: 0,
        marginRight: 60
      },
      hover: {
        width: 56,
        height: 56,
        marginLeft: -3,
        marginRight: 57
      }
    };
    const linkTextVariants = {
      hover: {
        backgroundColor: "#f2f3f5"
      },
      inactive: {
        color: "#424963"
      },
      active: {
        color: "#0F6BDF"
      }
    };
    return (
      <React.Fragment>
        <Left>
          <Logo
            src="/images/logo.png"
            alt="Logo"
            variants={logoVariants}
            initial={logoVariants.default}
            whileHover={logoVariants.hover}
            onClick={() => onPageLinkClicked(1)}
          />
          <LinkText
            variants={linkTextVariants}
            initial="inactive"
            whileHover={linkTextVariants.hover}
            animate={currentSection === 2 ? "active" : "inactive"}
            onClick={() => onPageLinkClicked(2)}
          >
            About
          </LinkText>
          <LinkText
            variants={linkTextVariants}
            initial="inactive"
            whileHover={linkTextVariants.hover}
            animate={currentSection === 3 ? "active" : "inactive"}
            onClick={() => onPageLinkClicked(3)}
          >
            Portfolio
          </LinkText>
          <LinkText
            variants={linkTextVariants}
            initial="inactive"
            whileHover={linkTextVariants.hover}
            animate={currentSection === 4 ? "active" : "inactive"}
            onClick={() => onPageLinkClicked(4)}
          >
            Contact
          </LinkText>
        </Left>
        <Right>
          {iconButtons.map(iconButton => (
            <IconButton key={iconButton.id} {...iconButton} />
          ))}
        </Right>
      </React.Fragment>
    );
  };

  renderMobileView = () => {
    const { navigationOpen } = this.state;
    const { onPageLinkClicked } = this.props;
    return (
      <React.Fragment>
        <Left>
          <Logo
            src="/images/logo.png"
            alt="Logo"
            onClick={() => onPageLinkClicked(1)}
          />
        </Left>
        <Right>
          <Hamburger
            buttonWidth={35}
            isActive={navigationOpen}
            toggleButton={() => {
              console.log("toggle");
              this.setState(previousState => ({
                navigationOpen: !previousState.navigationOpen
              }));
            }}
            buttonColor="rgba(255, 255, 255, 0)"
            barColor="#0F6BDF"
          />
        </Right>
      </React.Fragment>
    );
  };

  render() {
    const { mobileView } = this.props;
    return (
      <MainContainer className="disable-select">
        <InnerContent>
          {mobileView ? this.renderMobileView() : this.renderDesktopView()}
        </InnerContent>
      </MainContainer>
    );
  }
}