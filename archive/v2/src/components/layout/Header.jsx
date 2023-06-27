import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import constants from "../../config/constants.json";
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

  padding-left: ${constants.mobile.minimumLayoutPadding}px;
  padding-right: ${constants.mobile.minimumLayoutPadding}px;
  @media (min-width: ${constants.breakpoints.columnView}px) {
    padding-left: ${constants.desktop.minimumLayoutPadding}px;
    padding-right: ${constants.desktop.minimumLayoutPadding}px;
  }
`;

const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  max-width: none;
  height: ${constants.mobile.logoSize}px;
  margin-top: ${constants.mobile.logoSize}px;
  @media (min-width: ${constants.breakpoints.columnView}px) {
    max-width: ${constants.desktop.maximumContentWidth}px;
    height: ${constants.desktop.logoSize}px;
    margin-top: ${constants.desktop.logoSize}px;
  }
`;

const LogoContainer = styled(motion.div)`
  cursor: pointer;
  width: ${constants.mobile.logoSize}px;
  height: ${constants.mobile.logoSize}px;
  @media (min-width: ${constants.breakpoints.columnView}px) {
    width: ${constants.desktop.logoSize}px;
    height: ${constants.desktop.logoSize}px;
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

const Header = ({ color }) => {
  const navigate = useNavigate();
  return (
    <HeaderBar>
      <HeaderContent>
        <LogoContainer
          className="clickable"
          initial={variants.logo.default}
          whileHover={variants.logo.hover}
          whileTap={variants.logo.default}
          onClick={() => {
            navigate('/', { replace: true });
          }}
        >
          <LogoSvg fill={color} />
        </LogoContainer>
        <Menu />
      </HeaderContent>
    </HeaderBar>
  );
};

Header.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Header;
