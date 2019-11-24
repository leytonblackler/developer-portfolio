import React from "react";
import styled from "styled-components";
import posed from "react-pose";
import IconButton from "./IconButton";
import { mdiGithubCircle, mdiLinkedin } from "@mdi/js";

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

const Header = props => {
  const { onPageLinkClicked, currentSection } = props;
  return (
    <MainContainer className="disable-select">
      <InnerContent>
        <Left>
          <Logo
            src="/images/logo.png"
            alt="Logo"
            onClick={() => onPageLinkClicked(1)}
          />
          <LinkText
            onClick={() => onPageLinkClicked(2)}
            pose={currentSection === 2 ? "active" : "inactive"}
          >
            About
          </LinkText>
          <LinkText
            onClick={() => onPageLinkClicked(3)}
            pose={currentSection === 3 ? "active" : "inactive"}
          >
            Portfolio
          </LinkText>
          <LinkText
            onClick={() => onPageLinkClicked(4)}
            pose={currentSection === 4 ? "active" : "inactive"}
          >
            Contact
          </LinkText>
        </Left>
        <Right>
          {iconButtons.map(iconButton => (
            <IconButton key={iconButton.id} {...iconButton} />
          ))}
        </Right>
      </InnerContent>
    </MainContainer>
  );
};

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
    width: 900px;
    max-width: 900px;
  }
  @media (min-width: 1300px) {
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

const Logo = posed(styled.img`
  cursor: pointer;
`)({
  hoverable: true,
  init: {
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
});

const LinkText = posed(styled.div`
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

export default Header;
