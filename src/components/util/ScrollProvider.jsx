import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Swipeable } from "react-swipeable";

const MAX_INDEX = 5;

const nextSectionIndex = (direction, currentIndex, maxIndex) => {
  if (direction === "up") {
    if (currentIndex > 0) {
      return currentIndex - 1;
    }
  } else if (direction === "down") {
    if (currentIndex < maxIndex) {
      return currentIndex + 1;
    }
  }
  return currentIndex;
};

const ScrollProvider = ({ children }) => {
  const [sectionIndex, setSectionIndex] = useState(0);

  const handleScroll = ({ deltaY }) => {
    if (deltaY !== 0) {
      if (deltaY > 0) {
        setSectionIndex((currentIndex) =>
          nextSectionIndex("down", currentIndex, MAX_INDEX)
        );
      } else {
        setSectionIndex((currentIndex) =>
          nextSectionIndex("up", currentIndex, MAX_INDEX)
        );
      }
    }
  };

  useEffect(() => {
    const scrollListener = window.addEventListener("wheel", handleScroll, {
      capture: false,
      passive: true,
    });
    return () => {
      window.removeEventListener("wheel", scrollListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Swipeable
      onSwipedUp={() => handleScroll({ deltaY: 1 })}
      onSwipedDown={() => handleScroll({ deltaY: -1 })}
    >
      {React.cloneElement(children, { sectionIndex })}
    </Swipeable>
  );
};

ScrollProvider.defaultProps = {
  children: null,
};

ScrollProvider.propTypes = {
  children: PropTypes.node,
};

export default ScrollProvider;
