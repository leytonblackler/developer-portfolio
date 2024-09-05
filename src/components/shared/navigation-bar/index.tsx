"use client";

import {
  type RefObject,
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type FunctionComponent,
} from "react";
import { usePathname } from "next/navigation";
import { isEqual } from "lodash";
import { AnimatePresence, motion, useTransform } from "framer-motion";
import { type Entries } from "type-fest";
import { useScrollMotionValues } from "../smooth-scroller/use-scroll-motion-values";
import { LinkItem } from "./link-item";
import { Logo } from "./logo";
import { cn } from "@/utils/styling/cn";
import { type PageConfig, pagesConfig } from "@/config/pages";
import { ScrollInstanceId } from "@/constants/scroll-instance-ids";
import { type TopLevelPage } from "@/hygraph/generated/graphql";

export const NavigationBar: FunctionComponent = () => {
  const [linkItemRefs] = useState<RefObject<HTMLLIElement>[]>(
    [...(Array(Object.entries(pagesConfig).length) as unknown[])].map(() =>
      createRef<HTMLLIElement>()
    )
  );

  const pathname = usePathname();

  const { pageIndex } = useMemo<
    | {
        pageId: TopLevelPage;
        pageConfig: PageConfig;
        pageIndex: number;
      }
    | {
        pageId: null;
        pageConfig: null;
        pageIndex: null;
      }
  >(() => {
    const currentPathParts = pathname.split("/").slice(0, 2);

    const index = (
      Object.entries(pagesConfig) as Entries<typeof pagesConfig>
    ).findIndex(([_, { navLink }]) =>
      isEqual(currentPathParts, navLink.href.split("/").slice(0, 2))
    );

    if (index === -1) {
      return { pageId: null, pageConfig: null, pageIndex: null };
    }

    const entry = (Object.entries(pagesConfig) as Entries<typeof pagesConfig>)[
      index
    ];

    const [id, config] = entry;
    return { pageId: id, pageConfig: config, pageIndex: index };
  }, [pathname]);

  const activeLinkItemRef = useMemo<RefObject<HTMLLIElement> | null>(
    () => (pageIndex === null ? null : linkItemRefs[pageIndex]),
    [pageIndex, linkItemRefs]
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

  /**
   * Access the scroll instance for the main scroll container.
   */
  const { y: scrollY } = useScrollMotionValues(ScrollInstanceId.Main);

  const visibilityDelta = useTransform(
    () => 1 - Math.min(Math.max(scrollY.get() - 40, 0), 100) / 100
  );

  const scale = useTransform(() => 0.9 + 0.1 * visibilityDelta.get());

  const translateY = useTransform(
    () => `-${(1 - visibilityDelta.get()) * 40}%`
  );

  return (
    <motion.div
      style={{
        scale,
        translateY,
        // filter: `blur(${blur})`,
        opacity: visibilityDelta,
      }}
      className={cn("fixed", "inset-x-0 top-0", "pt-4 sm:pt-6")}
    >
      <div
        className={cn(
          "relative",
          "flex flex-row",
          "items-center justify-between",
          "mx-auto w-full max-w-7xl",
          "pl-8 sm:pl-10",
          "pr-6 sm:pr-8",
          "transition-opacity duration-300",
          selectorInitialised ? "opacity-100" : "opacity-0"
        )}
      >
        <Logo
          className={cn(
            "shrink-0",
            "size-10",
            "text-gray-850 dark:text-gray-100"
          )}
        />
        <nav className={cn("relative", "w-full sm:w-auto")}>
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
                    "bg-gray-100 dark:bg-gray-925"
                  )}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Tabs */}
          <ul
            className={cn("flex flex-row", "items-center", "justify-between")}
          >
            {Object.values(pagesConfig).map(({ navLink }, index) => (
              <li key={navLink.href} ref={linkItemRefs[index]}>
                <LinkItem {...navLink} active={pageIndex === index} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};
