"use client";

import { type RefObject, useRef } from "react";
import { useInView as useInViewFramerMotion } from "framer-motion";
import { useScrollInstance } from "./use-scroll-instance";
import { ScrollInstanceId } from "@/constants/scroll-instance-ids";

interface UseInViewOptions {
  scrollInstanceId: ScrollInstanceId;
}

type UseInViewReturn<T extends HTMLElement> = [
  ref: RefObject<T>,
  isInView: boolean
];

type UseInViewHook = <T extends HTMLElement>(
  options?: UseInViewOptions
) => UseInViewReturn<T>;

/**
 * A wrapper around the Framer Motion useInView hook for handling of setting
 * the container as a scroll instance, presetting the options and providing a
 * ref for the applicable element.
 */
export const useInView: UseInViewHook = <T extends HTMLElement>(
  { scrollInstanceId } = { scrollInstanceId: ScrollInstanceId.Main }
) => {
  /**
   * Create a reference for the element.
   */
  const ref = useRef<T>(null);

  /**
   * Access the scroll instance for the specified ID if it has been created.
   */
  const scrollInstance = useScrollInstance(scrollInstanceId);

  /**
   * Observe when the card first enters the viewport.
   */
  const isInView = useInViewFramerMotion(ref, {
    once: true,
    root: scrollInstance?.ref,
    margin: "-80px",
  });

  return [ref, isInView];
};
