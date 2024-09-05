"use client";

import {
  type ComponentProps,
  useCallback,
  useState,
  type FunctionComponent,
} from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { AnimatePresence, motion } from "framer-motion";
import colors from "tailwindcss/colors";
import { cn } from "@/utils/styling/cn";
import { type PageLinkItemData } from "@/hygraph/queries/page-link-items";
import { useIsDarkMode } from "@/hooks/color-scheme/use-color-scheme-mode";
import { useSchemedColorSet } from "@/hooks/color-scheme/use-schemed-color-set";

export const PageLinkItem: FunctionComponent<PageLinkItemData> = ({
  name,
  iconUrls,
  parsedColorSet,
}) => {
  /**
   * State to track if the icon is loading.
   */
  const [isLoading, setIsLoading] = useState(true);
  const onLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  /**
   * Get whether the current color scheme is dark.
   */
  const isDarkMode = useIsDarkMode();

  /**
   * Select the colors to use from this based on the current colour scheme mode.
   */
  const schemedColorSet = useSchemedColorSet(parsedColorSet);

  /**
   * Define the props for the icon image component.
   */
  const iconImageProps: Omit<ComponentProps<typeof Image>, "src"> = {
    alt: `${name} icon`,
    width: 64,
    height: 64,
    className: "size-full object-contain",
    onLoad,
  };

  return (
    <div
      className={cn(
        "aspect-square h-full",
        "overflow-hidden rounded-3xl",
        "relative"
      )}
      style={{
        ...(schemedColorSet?.cssVariableDeclarations ?? {}),
      }}
    >
      <div
        className={cn(
          "size-full",
          "flex items-center justify-center",
          schemedColorSet?.classNames.background
        )}
      >
        <AnimatePresence>
          {isLoading ? (
            <motion.div
              key="loading"
              className="size-full leading-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Skeleton
                inline
                width="100%"
                height="100%"
                className="block opacity-70"
                baseColor="transparent"
                highlightColor={
                  isDarkMode ? colors.gray[700] : colors.gray[400]
                }
              />
            </motion.div>
          ) : null}

          <motion.div
            className={cn(
              "absolute",
              "size-3/5",
              "left-1/2 top-1/2",
              "-translate-x-1/2 -translate-y-1/2"
            )}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Icon for light mode */}
            <Image
              {...iconImageProps}
              src={iconUrls.light}
              className={cn("block dark:hidden", iconImageProps.className)}
            />

            {/* Icon for light mode */}
            <Image
              {...iconImageProps}
              src={iconUrls.dark}
              className={cn("hidden dark:block", iconImageProps.className)}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
