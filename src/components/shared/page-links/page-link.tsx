"use client";

import { useRef, type FunctionComponent } from "react";
import { HiArrowUp } from "react-icons/hi";
import { capitalCase } from "change-case";
import { useHover } from "usehooks-ts";
import { motion } from "framer-motion";
import { PageLinkItem } from "./item";
import { cn } from "@/utils/styling/cn";
import { Marquee } from "@/components/shared/marquee";
import { MotionLink } from "@/components/shared/motion-link";
import { type TopLevelPage } from "@/hygraph/generated/graphql";
import { type PageLinkItemData } from "@/hygraph/queries/page-link-items";
import { IN_VIEW_MOTION_PROPS } from "@/constants/in-view-motion-props";

interface PageLinkProps {
  pageId: TopLevelPage;
  items: PageLinkItemData[];
}

export const PageLink: FunctionComponent<PageLinkProps> = ({
  pageId,
  items,
}) => {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const isHovering = useHover(containerRef);

  return (
    <motion.li {...IN_VIEW_MOTION_PROPS}>
      <MotionLink
        href={`/${pageId}`}
        ref={containerRef}
        className={cn(
          "select-none",
          "outline-none focus:outline-none",
          "relative w-full",
          "flex flex-col items-center justify-center",
          "rounded-6xl",
          "card-bg-primary",
          "card-border-primary",
          "box-border p-6"
        )}
        whileTap={{
          scale: 0.95,
          transition: {
            type: "spring",
            duration: 0.3,
          },
        }}
      >
        <div
          className={cn(
            "size-full",
            "flex flex-col items-center justify-evenly"
          )}
        >
          <span
            className={cn(
              "h-12",
              "flex items-center justify-center",
              "font-medium",
              "card-text-primary text-center text-xl",
              "mb-6"
            )}
          >
            {capitalCase(pageId)}
          </span>
          <motion.div
            animate={isHovering ? "hover" : "idle"}
            variants={{
              idle: {
                scale: 1,
              },
              hover: {
                scale: 1.05,
              },
            }}
            transition={{
              type: "spring",
              duration: 0.5,
            }}
            className={cn(
              "h-28 w-full rounded-4xl",
              "card-bg-secondary",
              "card-border-secondary border",
              "relative box-border p-3",
              "overflow-hidden"
            )}
          >
            <motion.div
              className="size-full"
              variants={{
                idle: {
                  scale: 1,
                },
                hover: {
                  scale: 0.9,
                },
              }}
              transition={{
                type: "spring",
                duration: 0.5,
              }}
            >
              <Marquee
                contentClassName={cn("flex flex-row", "gap-3 pr-3")}
                active={isHovering}
              >
                {items.map((item) => (
                  <PageLinkItem key={item.id} {...item} />
                ))}
              </Marquee>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className={cn("absolute", "right-6 top-6", "size-12")}
          animate={isHovering ? "pulse" : "idle"}
        >
          <motion.div
            className="card-bg-secondary card-border-secondary size-full rounded-full"
            variants={{
              idle: {
                scale: 2,
                opacity: 0,
              },
              pulse: {
                scale: [1, 2],
                opacity: [1, 0],
              },
            }}
            transition={{
              duration: 0.75,
              repeat: isHovering ? Infinity : 0,
              repeatDelay: 1.5 + 0.75,
              repeatType: "loop",
            }}
          />
          <motion.div
            className={cn(
              "absolute inset-0",
              "rounded-full",
              "card-bg-secondary",
              "flex items-center justify-center"
            )}
            variants={{
              idle: {
                scale: 1,
              },
              pulse: {
                scale: [1, 1.2],
              },
            }}
            transition={{
              duration: 0.75,
              type: "tween",
              ease: "linear",
              repeat: isHovering ? Infinity : 0,
              repeatType: "reverse",
            }}
          >
            <HiArrowUp className="card-text-secondary size-2/5 rotate-45 opacity-50" />
          </motion.div>
        </motion.div>
      </MotionLink>
    </motion.li>
  );
};
