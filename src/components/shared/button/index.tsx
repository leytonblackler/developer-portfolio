"use client";

import { type FunctionComponent } from "react";
import { type IconType } from "react-icons";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { MotionLink } from "../motion-link";
import { cn } from "@/utils/styling/cn";
import {
  BUTTON_INNER_MOTION_PROPS,
  BUTTON_OUTER_MOTION_PROPS,
  createButtonContentMotionProps,
} from "@/constants/button-motion-props";

const constructClassName = cva(
  cn(
    "flex-1",
    "flex items-center justify-center",
    "rounded-3xl md:rounded-4xl",
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
  icon: IconType;
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
        onClick?: never;
        href?: never;
        download: string;
      }
  );

export const Button: FunctionComponent<ButtonProps> = ({
  label,
  icon: Icon,
  className: _className,
  cardStyle,
  ...props
}) => {
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
   * Define the content for the button.
   */
  const content = (
    <motion.div
      data-button-content
      {...createButtonContentMotionProps({
        scale: 1.05,
      })}
    >
      <Icon className="size-5 shrink-0" />
      <span>{label}</span>
    </motion.div>
  );

  /**
   * Render as either a button element or a Next.js link depending on the props
   * provided.
   */
  return (
    <motion.div
      {...BUTTON_OUTER_MOTION_PROPS}
      className="flex flex-1 items-center justify-center"
    >
      {"onClick" in props || ("type" in props && props.type === "button") ? (
        <motion.button
          {...BUTTON_INNER_MOTION_PROPS}
          type="button"
          className={className}
          onClick={props.onClick}
        >
          {content}
        </motion.button>
      ) : (
        <>
          {"href" in props && props.href !== undefined ? (
            <MotionLink
              {...BUTTON_INNER_MOTION_PROPS}
              className={className}
              href={props.href}
            >
              {content}
            </MotionLink>
          ) : (
            <motion.a
              {...BUTTON_INNER_MOTION_PROPS}
              className={className}
              download
              href={props.download}
            >
              {content}
            </motion.a>
          )}
        </>
      )}
    </motion.div>
  );
};
