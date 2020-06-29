import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Swipeable } from "react-swipeable";
import { general } from "../../config/constants.json";

const MAX_SCROLL_INDEX = 4;

const evaluateNextSectionIndex = (deltaY, currentIndex) => {
  if (deltaY < 0) {
    if (currentIndex > 0) {
      return currentIndex - 1;
    }
  } else if (currentIndex < MAX_SCROLL_INDEX) {
    return currentIndex + 1;
  }
  return currentIndex; // Don't update state if the index remains the same.
};

let transitionActive = false;

const ScrollProvider = ({ children }) => {
  const [scrollIndex, setSectionIndex] = useState(0);

  const handleScroll = ({ deltaY, shiftKey }) => {
    // Only trigger a scroll if:
    // - There is no current transition.
    // - The scroll is vertical (shift key not being held).
    if (!transitionActive && !shiftKey) {
      setSectionIndex((currentIndex) => {
        const nextSectionIndex = evaluateNextSectionIndex(deltaY, currentIndex);

        if (nextSectionIndex !== currentIndex) {
          transitionActive = true;
          setTimeout(() => {
            transitionActive = false;
          }, general.sectionTransitionDuration * 1000);
        }

        return nextSectionIndex;
      });
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
      {React.cloneElement(children, { scrollIndex })}
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
