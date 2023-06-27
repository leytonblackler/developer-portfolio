"use client";

import clsx from "clsx";
import {
  RefObject,
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import { isEqual } from "lodash";

import { AnimatePresence, motion } from "framer-motion";
import pagesConfig from "@/constants/pages";
import LinkItem from "./LinkItem";

const NavigationBar = () => {
  const [linkItemRefs] = useState<Array<RefObject<HTMLLIElement>>>(
    [...Array(pagesConfig.length)].map(() => createRef<HTMLLIElement>())
  );

  const pathname = usePathname();

  const activeLinkIndex = useMemo<number>(() => {
    const currentPathParts = pathname.split("/").slice(0, 2);
    return pagesConfig.findIndex(({ navLink }) =>
      isEqual(currentPathParts, navLink.href.split("/").slice(0, 2))
    );
  }, [pathname]);

  const activeLinkItemRef = useMemo<RefObject<HTMLLIElement> | null>(
    () => (activeLinkIndex > -1 ? linkItemRefs[activeLinkIndex] : null),
    [activeLinkIndex, linkItemRefs]
  );

  const [selectorWidth, setSelectorWidth] = useState<number | undefined>();

  const [selectorXPosition, setSelectorXPosition] = useState<
    number | undefined
  >();

  const [selectorInitialised, setSelectorInitialised] =
    useState<boolean>(false);

  const handleSelectorUpdate = useCallback((element: HTMLLIElement) => {
    setSelectorWidth(element.getBoundingClientRect().width);
    setSelectorXPosition(element.offsetLeft);
    if (!selectorInitialised) {
      setSelectorInitialised(true);
    }
  }, []);

  useEffect(() => {
    if (activeLinkItemRef?.current) {
      const activeLinkItemElement = activeLinkItemRef.current;
      const resizeObserver = new ResizeObserver(() =>
        handleSelectorUpdate(activeLinkItemElement)
      );
      resizeObserver.observe(activeLinkItemElement);
      return () => {
        resizeObserver.unobserve(activeLinkItemElement);
      };
    }
    return () => {};
  }, [activeLinkItemRef?.current]);

  return (
    <div
      className={clsx(
        "fixed",
        "top-6 left-0 right-0",
        "flex",
        "justify-center items-center"
      )}
    >
      <nav
        className={clsx(
          "bg-sky-200/10 backdrop-blur-sm",
          "rounded-full",
          "relative",
          "mx-6 box-border",
          "w-full sm:w-auto"
        )}
      >
        {/* Selector */}
        <AnimatePresence>
          {selectorInitialised && (
            <motion.div
              className={clsx("pointer-events-none", "absolute", "h-full")}
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
                className="bg-sky-200/10 rounded-full h-full w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tabs */}
        <ul
          className={clsx("flex flex-row", "items-center", "justify-between")}
        >
          {pagesConfig.map(({ navLink }, index) => (
            <li key={navLink.href} ref={linkItemRefs[index]}>
              <LinkItem {...navLink} active={activeLinkIndex === index} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
