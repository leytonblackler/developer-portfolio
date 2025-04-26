"use client";

import {
  type ReactNode,
  type FunctionComponent,
  useCallback,
  type PointerEvent,
  useMemo,
} from "react";
import { Drawer as Vaul } from "vaul";
import { useScrollInstance } from "../smooth-scroller/use-scroll-instance";
import { ScrollInstanceId } from "@/constants/scroll-instance-ids";

/**
 * From: https://github.com/emilkowalski/vaul/blob/main/src/constants.ts
 */
const TRANSITIONS = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1],
};

/**
 * From: https://github.com/emilkowalski/vaul/blob/main/src/constants.ts
 */
export const WINDOW_TOP_OFFSET = 26;

/**
 * The maximum scale value for the drawer.
 * From: https://github.com/emilkowalski/vaul/blob/main/src/index.tsx#L258
 */
const getScale = (): number => {
  return (window.innerWidth - WINDOW_TOP_OFFSET) / window.innerWidth;
};

/**
 * The maximum vertical translation value for the drawer.
 */
const getTranslateY = (): number =>
  -(window.innerHeight * (1 - getScale())) / 2;

export const Drawer: FunctionComponent<{
  trigger: ReactNode;
  children: ReactNode;
}> = ({ trigger, children }) => {
  /**
   * Access the main scroll instance.
   */
  const mainScrollInstance = useScrollInstance(ScrollInstanceId.Main);

  /**
   * Get the parent element of the main scroll instance.
   */
  const mainScrollInstanceParent = useMemo<HTMLElement | null>(
    () => mainScrollInstance?.ref.current?.parentElement ?? null,
    [mainScrollInstance]
  );

  /**
   * Animate the vertical translation of the element containing the main scroll
   * container when the drawer opens and closes to avoid clipping the top.
   */
  const onOpenChange = useCallback(
    (open: boolean) => {
      if (mainScrollInstanceParent) {
        /**
         * Set the transition for the vertical translation.
         */
        mainScrollInstanceParent.style.transition = `translate ${
          TRANSITIONS.DURATION
        }s cubic-bezier(${TRANSITIONS.EASE.join(",")})`;

        /**
         * Set the vertical translation.
         */
        mainScrollInstanceParent.style.translate = open
          ? `0 ${getTranslateY()}px`
          : "0 0";
      }
    },
    [mainScrollInstanceParent]
  );

  /**
   * Animate the vertical translation of the element containing the main scroll
   * container when the drawer is dragged to ensure a smooth transition and
   * that the translation does not jump when the drawer is swiped/dragged
   * closed.
   */
  const onDrag = useCallback(
    (_event: PointerEvent<HTMLDivElement>, percentageDragged: number) => {
      if (mainScrollInstanceParent) {
        /**
         * Clear the transition for the vertical translation.
         */
        mainScrollInstanceParent.style.transition = "";

        /**
         * Set the new vertical translation.
         */
        const translateY = Math.min(
          getTranslateY() + percentageDragged * (1 - getTranslateY()),
          1
        );
        mainScrollInstanceParent.style.translate = `0 ${translateY}px`;
      }
    },
    [mainScrollInstanceParent]
  );

  return (
    <Vaul.Root
      noBodyStyles
      shouldScaleBackground
      onOpenChange={onOpenChange}
      onDrag={onDrag}
    >
      <Vaul.Trigger>{trigger}</Vaul.Trigger>
      <Vaul.Portal>
        <Vaul.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-xs" />
        <Vaul.Content className="fixed inset-x-0 bottom-0 h-fit bg-gray-100 outline-none">
          <div className="bg-white p-4">{children}</div>
        </Vaul.Content>
      </Vaul.Portal>
    </Vaul.Root>
  );
};
