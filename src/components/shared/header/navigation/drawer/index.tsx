"use client";

import { useCallback, useState, type FunctionComponent } from "react";
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
   * Whether the drawer is currently open.
   */
  const [isOpen, setIsOpen] = useState<boolean>(false);

  /**
   * Handle closing the drawer.
   */
  const closeDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Drawer
      title="Navigation"
      hideTitle
      open={isOpen}
      onOpenChange={setIsOpen}
      contentHeight={`calc(100dvh - ${headerRect.height}px - ${
        headerRect.top * 2
      }px)`}
      trigger={
        <motion.button
          type="button"
          /**
           * Prevent the drawer from closing via the onPointerDownOutside event
           * on the drawer content if the button is clicked, since this would
           * cause a double invocation of toggling the drawer's open state.
           */
          data-vaul-overlay-ignore
          className="rounded-full p-2"
          onClick={() => {
            setIsOpen((current) => !current);
          }}
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
      <ul className={cn("h-full", "flex flex-col gap-y-2", "justify-start")}>
        {Object.values(pagesConfig).map(({ navLink }, index) => {
          const isActive = activePageIndex === index;
          // TODO: Show in disabled state when active rather than omitting
          return isActive ? null : (
            <li key={navLink.href} className="relative flex flex-1 flex-col">
              <NavigationDrawerLinkItem
                {...navLink}
                active={activePageIndex === index}
                onClick={closeDrawer}
              />
            </li>
          );
        })}
      </ul>
    </Drawer>
  );
};
