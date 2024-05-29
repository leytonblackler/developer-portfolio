import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import constants from "../../config/constants.json";

const Button = styled(motion.a)`
  cursor: pointer;
  user-select: none;
  width: ${constants.desktop.logoSize / 2}px;
  height: ${constants.desktop.logoSize / 2}px;
  margin-top: ${constants.desktop.logoSize / 2}px;
  margin-bottom: ${constants.desktop.logoSize / 2}px;
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

const IconButton = ({ Icon, href = null, onClick = null }) => (
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

IconButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  Icon: PropTypes.object.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

export default IconButton;
