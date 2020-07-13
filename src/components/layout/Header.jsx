import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { breakpoints, mobile, desktop } from "../../config/constants.json";
import Menu from "../common/Menu";

import LogoSvg from "../common/LogoSvg";

const HeaderBar = styled(motion.div)`
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: center;
  position: fixed;
  box-sizing: border-box;
  z-index: 100;

  padding-left: ${mobile.minimumLayoutPadding}px;
  padding-right: ${mobile.minimumLayoutPadding}px;
  @media (min-width: ${breakpoints.columnView}px) {
    padding-left: ${desktop.minimumLayoutPadding}px;
    padding-right: ${desktop.minimumLayoutPadding}px;
  }
`;

const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  max-width: none;
  height: ${mobile.logoSize}px;
  margin-top: ${mobile.logoSize}px;
  @media (min-width: ${breakpoints.columnView}px) {
    max-width: ${desktop.maximumContentWidth}px;
    height: ${desktop.logoSize}px;
    margin-top: ${desktop.logoSize}px;
  }
`;

const LogoContainer = styled(motion.div)`
  cursor: pointer;
  width: ${mobile.logoSize}px;
  height: ${mobile.logoSize}px;
  @media (min-width: ${breakpoints.columnView}px) {
    width: ${desktop.logoSize}px;
    height: ${desktop.logoSize}px;
  }
`;

const variants = {
  logo: {
    default: {
      transform: "scale(1)",
    },
    hover: {
      transform: "scale(1.15)",
    },
  },
};

const Header = ({ colour }) => {
  const history = useHistory();
  return (
    <HeaderBar>
      <HeaderContent>
        <LogoContainer
          className="clickable"
          initial={variants.logo.default}
          whileHover={variants.logo.hover}
          whileTap={variants.logo.default}
          onClick={() => {
            history.replace("/");
          }}
        >
          <LogoSvg fill={colour} />
        </LogoContainer>
        <Menu />
      </HeaderContent>
    </HeaderBar>
  );
};

export default Header;
