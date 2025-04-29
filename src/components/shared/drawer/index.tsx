"use client";

import {
  type ReactNode,
  type FunctionComponent,
  useCallback,
  type PointerEvent,
  useMemo,
  type ComponentProps,
  useEffect,
} from "react";
import { Drawer as Vaul } from "vaul";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useScrollInstance } from "../smooth-scroller/use-scroll-instance";
import { CardTitle } from "../card/title";
import { ScrollInstanceId } from "@/constants/scroll-instance-ids";
import { cn } from "@/utils/styling/cn";

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

export const Drawer: FunctionComponent<
  {
    title: string;
    hideTitle?: boolean;
    allowBackgroundInteraction?: boolean;
    trigger: ReactNode;
    contentHeight?: NonNullable<
      ComponentProps<typeof Vaul.Content>["style"]
    >["height"];
    children: ReactNode;
  } & (
    | {
        open: boolean;
        onOpenChange: (open: boolean) => void;
      }
    | {
        open?: never;
        onOpenChange?: never;
      }
  )
> = ({
  title,
  hideTitle,
  allowBackgroundInteraction = false,
  trigger,
  open,
  onOpenChange,
  contentHeight = "fit-content",
  children,
}) => {
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
  const _onOpenChange = useCallback(
    (_open: boolean, external: boolean) => {
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
        mainScrollInstanceParent.style.translate = _open
          ? `0 ${getTranslateY()}px`
          : "0 0";
      }

      /**
       * Invoke the callback in the parent component if provided and the
       * invocation was not caused by an external state change.
       */
      if (!external && onOpenChange !== undefined) {
        onOpenChange(_open);
      }
    },
    [mainScrollInstanceParent, onOpenChange]
  );

  /**
   * Invoke the internal handler when the open state changes.
   */
  useEffect(() => {
    if (typeof open === "boolean") {
      _onOpenChange(open, true);
    }
  }, [open, _onOpenChange]);

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

  /**
   * The title for the drawer content.
   */
  const titleNode = useMemo<ReactNode>(
    () => (
      <Vaul.Title
        id="dialog-title"
        className={cn("flex items-center justify-center", "pb-2 pt-6")}
      >
        <CardTitle centred>{title}</CardTitle>
      </Vaul.Title>
    ),
    [title]
  );

  return (
    <Vaul.Root
      noBodyStyles
      shouldScaleBackground
      open={open}
      onOpenChange={(_open) => {
        _onOpenChange(_open, false);
      }}
      onDrag={onDrag}
      modal={!allowBackgroundInteraction}
    >
      <Vaul.Trigger asChild>{trigger}</Vaul.Trigger>
      <Vaul.Portal>
        <Vaul.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-xs" />
        <Vaul.Content
          aria-describedby={title}
          onPointerDownOutside={(event) => {
            /**
             * If the clicked element has the  data-vaul-overlay-ignore
             * attribute set (or is a descendant of an element with this),
             * ignore the click.
             */
            if (event.target instanceof HTMLElement) {
              if (
                event.target.closest('[data-vaul-overlay-ignore="true"]') !==
                null
              ) {
                event.preventDefault();
              }
            }
          }}
          className={cn(
            "fixed bottom-0",
            "inset-x-2 mx-auto max-w-6xl",
            "rounded-t-5xl",
            "card-bg-primary",
            "card-text-primary",
            "card-border-primary"
          )}
          style={{
            height: contentHeight,
          }}
        >
          {hideTitle ? <VisuallyHidden>{titleNode}</VisuallyHidden> : titleNode}
          <div className="max-size-full relative box-border size-full p-4">
            <div className="relative size-full">{children}</div>
          </div>
        </Vaul.Content>
      </Vaul.Portal>
    </Vaul.Root>
  );
};
