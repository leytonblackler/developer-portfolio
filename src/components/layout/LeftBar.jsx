import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SocialIconButtons from "../common/SocialIconButtons";
import SectionTitle from "./SectionTitle";
import { desktop } from "../../config/constants.json";

const MainContainer = styled.div`
  width: ${desktop.logoSize}px;
  min-width: ${desktop.logoSize}px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: magenta;
`;

const LeftBar = ({ label, showSocialIcons }) => {
  // console.log("label", label);
  return (
    <MainContainer>
      {label && <SectionTitle>{label}</SectionTitle>}
      {showSocialIcons && <SocialIconButtons />}
    </MainContainer>
  );
};

SectionTitle.defaultProps = {
  label: null,
  showSocialIcons: false,
};

SectionTitle.propTypes = {
  label: PropTypes.string,
  showSocialIcons: PropTypes.bool,
};

export default LeftBar;
