import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { breakpoints, mobile, desktop } from "../../config/constants.json";

const Button = styled(motion.a)`
  cursor: pointer;
  user-select: none;
  /* color: #FFFFFF; */
  /* width: ${mobile.logoSize / 2}px;
  height: ${mobile.logoSize / 2}px;
  margin-top: ${mobile.logoSize / 2}px;
  margin-bottom: ${mobile.logoSize / 2}px;
  @media (min-width: ${breakpoints.wideView}px) {
    width: ${desktop.logoSize / 2}px;
    height: ${desktop.logoSize / 2}px;
    margin-top: ${desktop.logoSize / 2}px;
    margin-bottom: ${desktop.logoSize / 2}px;
  } */

  width: ${desktop.logoSize / 2}px;
  height: ${desktop.logoSize / 2}px;
  margin-top: ${desktop.logoSize / 2}px;
  margin-bottom: ${desktop.logoSize / 2}px;
`;

const variants = {
  button: {
    default: {
      transform: "scale(1)",
    },
    hover: {
      transform: "scale(1.15)",
    },
  },
};

const IconButton = ({ Icon, href, onClick }) => (
  <Button
    className="clickable"
    initial={variants.button.default}
    whileHover={variants.button.hover}
    whileTap={variants.button.default}
    href={href}
    onClick={onClick}
    target="_blank"
  >
    <Icon />
  </Button>
);

IconButton.defaultProps = {
  href: null,
  onClick: null,
};

IconButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  Icon: PropTypes.object.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default IconButton;
