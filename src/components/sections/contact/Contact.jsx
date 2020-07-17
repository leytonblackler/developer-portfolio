import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SplitContent from "../../layout/SplitContent";

const MainContainer = styled(({ textColour, ...rest }) => <div {...rest} />)`
  width: 100%;
  height: 100%;
  color: ${({ textColour }) => textColour};
`;

const PlaceholderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: mediumvioletred; */
`;

const Contact = ({ section }) => (
  <MainContainer textColour={section.colours.text}>
    <SplitContent
      leftContent={<PlaceholderContainer>Contact Left</PlaceholderContainer>}
      rightContent={<PlaceholderContainer>Contact Right</PlaceholderContainer>}
    />
  </MainContainer>
);

Contact.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
    content: PropTypes.elementType,
    colours: PropTypes.shape({
      text: PropTypes.string,
      background: PropTypes.string,
    }),
    indexRange: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};

export default Contact;
