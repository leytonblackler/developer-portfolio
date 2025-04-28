"use client";

import { useState, type FunctionComponent } from "react";
import { motion } from "framer-motion";
import { type NavigationComponentProps } from "../types";
import { useHeaderRect } from "../../use-header-rect";
import { NavigationDrawerLinkItem } from "./link-item";
import { cn } from "@/utils/styling/cn";
import { Drawer } from "@/components/shared/drawer";
import { pagesConfig } from "@/config/pages";

export const NavigationDrawer: FunctionComponent<NavigationComponentProps> = ({
  activePageIndex,
}) => {
  /**
   * Access the current bounding client rect for the header element.
   */
  const headerRect = useHeaderRect();

  /**
   * Track when the drawer opens and closes.
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);

  console.log("headerRect", headerRect);

  return (
    <Drawer
      title="Navigation"
      hideTitle
      allowBackgroundInteraction
      onOpenChange={setIsOpen}
      contentHeight={`calc(100dvh - ${headerRect.height}px - ${
        headerRect.top * 2
      }px)`}
      trigger={
        <motion.button
          type="button"
          className="rounded-full p-2"
          whileTap={{
            scale: 0.9,
            opacity: 0.8,
            transition: {
              type: "spring",
              duration: 0.3,
            },
          }}
        >
          <div
            className={cn("tham tham-e-squeeze tham-w-7 !opacity-100", {
              "tham-active": isOpen,
            })}
          >
            <div className="tham-box">
              <div
                className={cn("tham-inner", "bg-gray-850 dark:bg-gray-100")}
              />
            </div>
          </div>
        </motion.button>
      }
    >
      {/* Items */}
      <ul className={cn("flex flex-col gap-y-2", "justify-start")}>
        {Object.values(pagesConfig).map(({ navLink }, index) => (
          <li key={navLink.href}>
            <NavigationDrawerLinkItem
              {...navLink}
              active={activePageIndex === index}
            />
          </li>
        ))}
      </ul>
    </Drawer>
  );
};
