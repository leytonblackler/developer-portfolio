"use client";

import * as RadixTooltip from "@radix-ui/react-tooltip";
import { type ReactNode, type FunctionComponent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/styling/cn";

interface TooltipProps {
  children: ReactNode;
  text: string;
}

export const Tooltip: FunctionComponent<TooltipProps> = ({
  children,
  text,
}) => {
  /**
   * Whether the tooltip is currently open/visible.
   */
  const [open, setOpen] = useState<boolean>(false);

  return (
    <RadixTooltip.Root open={open} onOpenChange={setOpen} delayDuration={0}>
      <RadixTooltip.Trigger>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal forceMount>
        <AnimatePresence>
          {open ? (
            <RadixTooltip.Content asChild forceMount>
              <motion.div
                className={cn(
                  "bg-gray-100",
                  "text-gray-700",
                  "px-6 py-1.5",
                  "rounded-full",
                  "drop-shadow-lg",
                  "font-medium"
                )}
                initial={{ opacity: 0, y: 30, scale: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0 }}
              >
                {text}
              </motion.div>
            </RadixTooltip.Content>
          ) : null}
        </AnimatePresence>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
};
