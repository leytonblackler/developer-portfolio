import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SectionTitleContainer = styled.div`
  writing-mode: vertical-lr;
  transform: rotate(-180deg);
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  user-select: none;
`;

const SectionTitle = ({ children }) => (
  <SectionTitleContainer>{children}</SectionTitleContainer>
);

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionTitle;
