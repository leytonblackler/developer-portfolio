import React, { useState, useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { useSwipeable } from "react-swipeable";
import constants from "../../config/constants.json";

// Represents when scrolling events are currently being fired (i.e. a continuous scroll)
let isScrolling = false;

// Represents the delay that determines whether multiple scroll events are continuous
let scrollTimeout;

// Represents when a scroll transition is ocurring (i.e. a section change)
let isTransitioning = false;

const ScrollHandler = ({ children, initialIndex, maxIndex }) => {
  const [scrollIndex, setScrollIndex] = useState(
    initialIndex === -1 ? 0 : initialIndex
  );

  // A reference to the scroll index state value is used to enable consistent
  // access to the value in functions triggered by event listeners
  const scrollIndexRef = useRef();
  scrollIndexRef.current = scrollIndex;

  const onTransition = useCallback(() => {
    isTransitioning = true;
    setTimeout(() => {
      isTransitioning = false;
    }, constants.general.sectionTransitionDuration);
  }, []);

  const scrollUp = useCallback(() => {
    if (scrollIndexRef.current > 0) {
      onTransition();
      setScrollIndex(scrollIndexRef.current - 1);
    }
  }, [scrollIndexRef, onTransition, setScrollIndex]);

  const scrollDown = useCallback(() => {
    if (scrollIndexRef.current < maxIndex) {
      onTransition();
      setScrollIndex(scrollIndexRef.current + 1);
    }
  }, [scrollIndexRef, maxIndex, onTransition, setScrollIndex]);

  const onScroll = useCallback(
    ({ deltaY, shiftKey }) => {
      // Ignore the scroll event if:
      // - there was no change
      // - the shift key was being held (horizontal scroll)
      if (deltaY === 0 || shiftKey) {
        return;
      }

      if (!isTransitioning && !isScrolling) {
        // Scroll in the direction indicated by the scroll delta
        if (deltaY > 0) {
          scrollDown();
        } else {
          scrollUp();
        }
      }

      // Set that scrolling is currently active
      isScrolling = true;

      // Scrolling is no longer active if there is a significant delay
      // between scroll events
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 100);
    },
    [scrollUp, scrollDown]
  );

  // Invoke the onScroll function when swiping to facilitate gesture scrolling
  const onSwipedUp = useCallback(() => onScroll({ deltaY: 1 }), [onScroll]);
  const onSwipedDown = useCallback(() => onScroll({ deltaY: -1 }), [onScroll]);

  const swipeHandlers = useSwipeable({
    onSwipedUp,
    onSwipedDown,
  });

  // Add a listener to the window on mount to respond to scroll events
  useEffect(() => {
    const scrollListener = window.addEventListener("wheel", onScroll, {
      capture: false,
      passive: true,
    });
    return () => {
      window.removeEventListener("wheel", scrollListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div {...swipeHandlers}>{children(scrollIndex)}</div>;
};

ScrollHandler.propTypes = {
  children: PropTypes.func.isRequired,
  initialIndex: PropTypes.number.isRequired,
  maxIndex: PropTypes.number.isRequired,
};

export default ScrollHandler;
