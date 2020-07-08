import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Linkedin, Github, Instagram } from "@styled-icons/boxicons-logos";
import { Send } from "@styled-icons/boxicons-regular";
import IconButton from "./IconButton";

const BUTTONS = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/leytonblackler/",
  },
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/leytonblackler",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/leytonblackler/",
  },
  {
    label: "Contact",
    icon: Send,
    path: "/contact",
  },
];

const MainContainer = styled(({ direction, ...rest }) => <div {...rest} />)`
  display: flex;
  flex-direction: ${({ direction }) => direction};
`;

const SocialIconButtons = ({ direction }) => {
  const history = useHistory();
  return (
    <MainContainer direction={direction}>
      {BUTTONS.map((button) => (
        <IconButton
          key={button.label}
          Icon={button.icon}
          href={button.href || null}
          onClick={button.path ? () => history.replace(button.path) : null}
        />
      ))}
    </MainContainer>
  );
};

SocialIconButtons.defaultProps = {
  direction: "column",
};

SocialIconButtons.propTypes = {
  direction: PropTypes.oneOf(["column", "row"]),
};

export default SocialIconButtons;
