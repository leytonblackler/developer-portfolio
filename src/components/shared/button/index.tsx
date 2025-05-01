"use client";

import { useMemo, type FunctionComponent } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { MotionLink } from "../motion-link";
import { cn } from "@/utils/styling/cn";
import {
  type ButtonAnimationProps,
  createButtonAnimationProps,
} from "@/utils/motion/create-button-animation-props";
import { type ReactIcon } from "@/utils/icons/types";
import { useStyledIcon } from "@/utils/icons/use-styled-icon";

const constructClassName = cva(
  cn(
    "flex-1 self-stretch",
    "flex items-center justify-center",
    "rounded-4xl",
    "px-14 py-6 md:px-16 md:py-8",
    "whitespace-nowrap text-base font-medium leading-tight",
    cn(
      "[&>[data-button-content=true]]:flex",
      "[&>[data-button-content=true]]:flex-row",
      "[&>[data-button-content=true]]:gap-2",
      "[&>[data-button-content=true]]:items-center",
      "[&>[data-button-content=true]]:justify-center"
    )
  ),
  {
    variants: {
      cardStyle: {
        primary: cn(
          "card-bg-primary",
          "card-border-primary",
          "card-text-primary"
        ),
        primary_light: cn(
          "card-bg-primary-light",
          "card-border-primary-light",
          "card-text-primary-light"
        ),
        primary_dark: cn(
          "card-bg-primary-dark",
          "card-border-primary-dark",
          "card-text-primary-dark"
        ),
        secondary: cn(
          "card-bg-secondary",
          "card-border-secondary",
          "card-text-secondary"
        ),
        secondary_light: cn(
          "card-bg-secondary-light",
          "card-border-secondary-light",
          "card-text-secondary-light"
        ),
        secondary_dark: cn(
          "card-bg-secondary-dark",
          "card-border-secondary-dark",
          "card-text-secondary-dark"
        ),
      },
    },
  }
);

export type ButtonProps = NonNullable<
  VariantProps<typeof constructClassName>
> & {
  label: string;
  icon: ReactIcon;
  fillHeight?: boolean;
  minSize?: "sm" | "default";
  className?: string;
} & (
    | {
        type: "button";
        onClick?: () => void;
        href?: never;
        download?: never;
      }
    | {
        type?: never;
        onClick: () => void;
        href?: never;
        download?: never;
      }
    | {
        type?: never;
        onClick?: never;
        href: string;
        download?: never;
      }
    | {
        type?: never;
        onClick?: () => void;
        href?: never;
        download: string;
      }
  );

export const Button: FunctionComponent<ButtonProps> = ({
  label,
  icon,
  fillHeight = false,
  minSize = "default",
  className: _className,
  cardStyle,
  ...props
}) => {
  /**
   * Create the necessary motion animation props for the components comprising
   * the button.
   */
  const buttonAnimationProps = useMemo<ButtonAnimationProps>(
    () =>
      createButtonAnimationProps({
        padding:
          minSize === "sm"
            ? {
                x: 30,
                y: 20,
              }
            : undefined,
        content: {
          scale: 1.05,
        },
      }),
    [minSize]
  );

  /**
   * Construct the class name for the button element, with any explicitly
   * provided classes taking precedence.
   */
  const className = cn(
    constructClassName({
      cardStyle,
    }),
    _className
  );

  /**
   * Apply styles to the icon.
   */
  const styledIcon = useStyledIcon(icon, "size-5 shrink-0");

  /**
   * Define the content for the button.
   */
  const content = (
    <motion.div data-button-content {...buttonAnimationProps.content}>
      {styledIcon}
      <span>{label}</span>
    </motion.div>
  );

  /**
   * Render as either a button element, Next.js link, or anchor element,
   * depending on the props provided.
   */
  return (
    <motion.div
      {...buttonAnimationProps.outer}
      className={cn(
        "flex flex-col items-center justify-center",
        fillHeight ? "flex-1" : "flex-initial"
      )}
    >
      {"download" in props ? (
        <motion.a
          {...buttonAnimationProps.inner}
          className={className}
          download
          href={props.download}
          onClick={props.onClick}
        >
          {content}
        </motion.a>
      ) : (
        <>
          {"onClick" in props ||
          ("type" in props && props.type === "button") ? (
            <motion.button
              {...buttonAnimationProps.inner}
              type="button"
              className={className}
              onClick={props.onClick}
            >
              {content}
            </motion.button>
          ) : (
            <MotionLink
              {...buttonAnimationProps.inner}
              className={className}
              href={props.href}
            >
              {content}
            </MotionLink>
          )}
        </>
      )}
    </motion.div>
  );
};
