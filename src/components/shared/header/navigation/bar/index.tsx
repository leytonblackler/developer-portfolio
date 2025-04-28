"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  type RefObject,
  useMemo,
  useState,
  type FunctionComponent,
  createRef,
  useCallback,
  useEffect,
} from "react";
import { type NavigationComponentProps } from "../types";
import { NavigationBarLinkItem } from "./link-item";
import { cn } from "@/utils/styling/cn";
import { pagesConfig } from "@/config/pages";

export const NavigationBar: FunctionComponent<NavigationComponentProps> = ({
  activePageIndex,
}) => {
  const linkItemRefs = useMemo<RefObject<HTMLLIElement>[]>(
    () =>
      [...(Array(Object.entries(pagesConfig).length) as unknown[])].map(() =>
        createRef<HTMLLIElement>()
      ),
    []
  );

  const activeLinkItemRef = useMemo<RefObject<HTMLLIElement> | null>(
    () => (activePageIndex === null ? null : linkItemRefs[activePageIndex]),
    [activePageIndex, linkItemRefs]
  );

  const [selectorWidth, setSelectorWidth] = useState<number | undefined>();

  const [selectorXPosition, setSelectorXPosition] = useState<
    number | undefined
  >();

  const [selectorInitialised, setSelectorInitialised] =
    useState<boolean>(false);

  const handleSelectorUpdate = useCallback(
    (element: HTMLLIElement) => {
      setSelectorWidth(element.getBoundingClientRect().width);
      setSelectorXPosition(element.offsetLeft);
      if (!selectorInitialised) {
        setSelectorInitialised(true);
      }
    },
    [selectorInitialised]
  );

  useEffect(() => {
    if (activeLinkItemRef?.current) {
      const activeLinkItemElement = activeLinkItemRef.current;
      const resizeObserver = new ResizeObserver(() => {
        handleSelectorUpdate(activeLinkItemElement);
      });
      resizeObserver.observe(activeLinkItemElement);
      return () => {
        resizeObserver.unobserve(activeLinkItemElement);
      };
    }
    setSelectorInitialised(true);
  }, [activeLinkItemRef, handleSelectorUpdate]);

  return (
    <nav
      className={cn(
        "relative",
        "w-auto",
        "transition-opacity duration-300",
        selectorInitialised ? "opacity-100" : "opacity-0"
      )}
    >
      {/* Selector */}
      <AnimatePresence>
        {selectorInitialised ? (
          <motion.div
            className={cn(
              "pointer-events-none",
              "absolute -z-10",
              "h-full",
              "box-border p-2"
            )}
            transition={{
              ease: "easeOut",
              width: {
                duration: 0.05,
              },
              x: {
                duration: 0.3,
              },
            }}
            initial={false}
            animate={{
              width: selectorWidth,
              x: selectorXPosition,
            }}
          >
            <motion.div
              className={cn(
                "size-full rounded-full",
                "transition-colors duration-300",
                "card-bg-primary card-border-primary"
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Tabs */}
      <ul className={cn("flex flex-row", "items-center", "justify-between")}>
        {Object.values(pagesConfig).map(({ navLink }, index) => (
          <li key={navLink.href} ref={linkItemRefs[index]}>
            <NavigationBarLinkItem
              {...navLink}
              active={activePageIndex === index}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
