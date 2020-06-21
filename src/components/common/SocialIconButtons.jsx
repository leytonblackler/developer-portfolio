import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Linkedin, Github } from "@styled-icons/boxicons-logos";
import { Send } from "@styled-icons/boxicons-regular";
import IconButton from "./IconButton";

const BUTTONS = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/leytonblackler/",
  },
  {
    label: "GitHub",
    icon: Github,
    url: "https://github.com/leytonblackler",
  },
  {
    label: "Contact",
    icon: Send,
  },
];

const MainContainer = styled(({ direction, ...rest }) => <div {...rest} />)`
  display: flex;
  flex-direction: ${({ direction }) => direction};
`;

const SocialIconButtons = ({ direction }) => (
  <MainContainer direction={direction}>
    {BUTTONS.map((button) => (
      <IconButton
        key={button.label}
        Icon={button.icon}
        href={button.url || null}
        onClick={button.onClick || null}
      />
    ))}
  </MainContainer>
);

SocialIconButtons.defaultProps = {
  direction: "column",
};

SocialIconButtons.propTypes = {
  direction: PropTypes.oneOf(["column", "row"]),
};

export default SocialIconButtons;
