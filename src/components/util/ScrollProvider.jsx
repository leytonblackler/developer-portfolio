import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Swipeable } from "react-swipeable";
import { useLocation, useHistory } from "react-router-dom";
import { general } from "../../config/constants.json";

const evaluateNextScrollIndex = (deltaY, currentIndex, maxIndex) => {
  if (deltaY < 0) {
    if (currentIndex > 0) {
      return currentIndex - 1;
    }
  } else if (currentIndex < maxIndex) {
    return currentIndex + 1;
  }
  return currentIndex; // Don't update state if the index remains the same.
};

let updatingPath = false;
let transitionActive = false;

const indexWithinRange = (index, range) =>
  index >= range[0] && index <= range[1];

const ScrollProvider = ({ children, sections }) => {
  // Find the max index based on sections on mount, and set it in the ScrollProvider.
  const maxScrollIndex = sections[sections.length - 1].indexRange[1];

  const [scrollIndex, setScrollIndex] = useState(0);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    // TODO: Convert to use find().
    // TODO
    for (
      let sectionIndex = 0;
      sectionIndex < sections.length;
      sectionIndex += 1
    ) {
      if (
        sections[sectionIndex].path === location.pathname &&
        !indexWithinRange(scrollIndex, sections[sectionIndex].indexRange) &&
        !updatingPath
      ) {
        // eslint-disable-next-line prefer-destructuring
        setScrollIndex(sections[sectionIndex].indexRange[0]);
        break;
      }
    }
    if (updatingPath) {
      updatingPath = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    // Set the new path if the section has changed.
    const newPath = sections.find((section) =>
      indexWithinRange(scrollIndex, section.indexRange)
    ).path;
    if (location.pathname !== newPath) {
      console.log("replacing path");
      updatingPath = true;
      history.replace(newPath);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollIndex]);

  const handleScroll = ({ deltaY, shiftKey }) => {
    // Only trigger a scroll if:
    // - There is no current transition.
    // - The scroll is vertical (shift key not being held).
    if (!transitionActive && !shiftKey) {
      setScrollIndex((currentIndex) => {
        const nextScrollIndex = evaluateNextScrollIndex(
          deltaY,
          currentIndex,
          maxScrollIndex
        );

        if (nextScrollIndex !== currentIndex) {
          transitionActive = true;
          setTimeout(() => {
            transitionActive = false;
          }, general.sectionTransitionDuration * 1000);
        }

        return nextScrollIndex;
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
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
      content: PropTypes.elementType,
      colours: PropTypes.shape({
        text: PropTypes.string,
        background: PropTypes.string,
      }),
      indexRange: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
};

export default ScrollProvider;
