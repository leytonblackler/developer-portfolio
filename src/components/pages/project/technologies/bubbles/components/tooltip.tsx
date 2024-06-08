import { type FunctionComponent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { type BubbleNode } from "../types";
import { IDLE_SPACING } from "../constants";
import { cn } from "@/utils/styling/cn";

interface BubbleTooltipProps {
  node: BubbleNode;
  containerPosition: { x: number; y: number };
  children: string;
}

export const BubbleTooltip: FunctionComponent<BubbleTooltipProps> = ({
  node,
  containerPosition,
  children,
}) => {
  return createPortal(
    <AnimatePresence>
      {node.isHovering && !node.isPressed && !node.isDragging ? (
        <motion.div
          className={cn(
            "z-90 fixed",
            "pointer-events-none select-none",
            "-translate-x-1/2",
            "-translate-y-full"
          )}
          style={{
            left: containerPosition.x + (node.x ?? 0),
            top:
              containerPosition.y +
              (node.y ?? 0) -
              node.radius.get() -
              IDLE_SPACING,
          }}
        >
          <motion.div
            className={cn(
              "bg-gray-100",
              "text-gray-700",
              "px-6 py-1.5",
              "rounded-full",
              "drop-shadow-xl",
              "font-medium"
            )}
            style={{
              background: node.backgroundColor,
              color: node.textColor,
            }}
            initial={{ opacity: 0, y: 30, scale: 0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0 }}
          >
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
};
