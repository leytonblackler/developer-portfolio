import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useContext,
} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import Typed from "react-typed";
import { useWindowWidth } from "@react-hook/window-size";
import SplitContent from "../../layout/SplitContent";
import constants from "../../../config/constants.json";
import FloatingScrollDown from "../../context/FloatingScrollDown";

const SUBTEXT =
  "I strive to build high-quality solutions to real-world problems through modern human-centric design.";

const MainContainer = styled(({ textcolor, ...rest }) => <div {...rest} />)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ textcolor }) => textcolor};
`;

const TypedText = styled(Typed)`
  font-weight: 800;
  margin-bottom: 20px;

  /* Text spans 3 lines in mobile */
  min-height: 126px;
  max-width: 240px;
  /* Text spans 2 lines in mobile */
  @media (min-width: 476px) {
    min-height: 84px;
    max-width: none;
  }
  /* Text spans 3 lines in desktop */
  @media (min-width: ${constants.breakpoints.columnView}px) {
    min-height: 186px;
    max-width: 390px;
  }
  /* Text spans 2 lines in desktop */
  @media (min-width: 908px) {
    min-height: 124px;
    max-width: none;
  }

  font-size: 32px;
  line-height: 42px;
  margin-bottom: ${constants.mobile.minimumLayoutPadding / 2}px;
  @media (min-width: ${constants.breakpoints.columnView}px) {
    font-size: 52px;
    line-height: 62px;
    margin-bottom: ${constants.desktop.minimumLayoutPadding / 2}px;
  }
`;

const Subtext = styled.div`
  font-weight: 600;
  opacity: 0.75;

  font-size: 16px;
  line-height: 24px;
  @media (min-width: ${constants.breakpoints.columnView}px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const Introduction = ({ section, sectionActive }) => {
  const [typingComplete, setTypingComplete] = useState(false);

  const floatingScrollDown = useContext(FloatingScrollDown.Context);

  useEffect(() => {
    if (sectionActive) {
      if (typingComplete) {
        floatingScrollDown.setVisible(true);
      }
    } else {
      floatingScrollDown.setVisible(false);
    }
  }, [floatingScrollDown, sectionActive, typingComplete]);

  const onTypingComplete = useCallback(() => {
    setTypingComplete(true);
  }, [setTypingComplete]);

  return (
    <MainContainer textcolor={section.colors.text}>
      <TypedText
        // stopped={pageLoaded}
        strings={[
          '<span style="opacity: 0.75">Hi, I\'m Leyton.<br>I\'m a </span>Software Developer<span style="opacity: 0.75">.</span></span>',
        ]}
        typeSpeed={40}
        backDelay={1500}
        onComplete={onTypingComplete}
      />
      <Subtext>{SUBTEXT}</Subtext>
    </MainContainer>
  );
};

Introduction.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
    content: PropTypes.elementType,
    colors: PropTypes.shape({
      text: PropTypes.string,
      background: PropTypes.string,
    }),
    indexRange: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  sectionActive: PropTypes.bool.isRequired,
};

export default Introduction;
