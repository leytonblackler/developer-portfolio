import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Swipeable, useSwipeable } from "react-swipeable";
import { useLocation, useNavigate } from "react-router-dom";
import constants from "../../config/constants.json";

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

// Represents whether a scroll change is causing the path to update.
const updatingPath = false;

// Represents whether pages are currently being transitioned between.
let transitionActive = false;

// Determines whether a given index is within a given range.
const indexWithinRange = (index, range) =>
  index >= range[0] && index <= range[1];

const ScrollProvider = ({ provideTo, sections }) => {
  // Find the max index based on sections on mount, and set it in the ScrollProvider.
  const maxScrollIndex = sections[sections.length - 1].indexRange[1];

  const [scrollIndex, setScrollIndex] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  // When the path changes, update the scroll index if needed (first load or manually navigated).
  // useEffect(() => {
  //   const sectionToRouteTo = sections.find(
  //     (section) =>
  //       section.path === location.pathname &&
  //       !indexWithinRange(scrollIndex, section.indexRange) &&
  //       !updatingPath
  //   );

  //   if (sectionToRouteTo) {
  //     setScrollIndex(sectionToRouteTo.indexRange[0]);
  //   }

  //   if (updatingPath) {
  //     updatingPath = false;
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [location.pathname]);

  // useEffect(() => {
  //   // Set the new path if the section has changed.
  //   const newPath = sections.find((section) =>
  //     indexWithinRange(scrollIndex, section.indexRange)
  //   ).path;
  //   if (location.pathname !== newPath) {
  //     updatingPath = true;
  //     navigate(newPath, { replace: true });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [scrollIndex]);

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
          }, constants.general.sectionTransitionDuration);
        }

        return nextScrollIndex;
      });
    }
  };

  const onSwipedUp = () => handleScroll({ deltaY: 1 });
  const onSwipedDown = () => handleScroll({ deltaY: -1 });

  const swipeHandlers = useSwipeable({
    onSwipedUp,
    onSwipedDown
  });

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

  const Child = provideTo;

  return (
    <div {...swipeHandlers}>
      <Child scrollIndex={scrollIndex} sections={sections} />
    </div>
  );
};

ScrollProvider.propTypes = {
  provideTo: PropTypes.elementType.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
      content: PropTypes.elementType,
      colors: PropTypes.shape({
        text: PropTypes.string,
        background: PropTypes.string,
      }),
      indexRange: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
};

export default ScrollProvider;
