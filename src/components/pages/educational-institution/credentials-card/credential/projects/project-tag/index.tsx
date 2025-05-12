import { type FunctionComponent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { type EducationalInstitutionPageCredentialCourseProjectDataFragment } from "@/hygraph/generated/graphql";
import { IN_VIEW_ANIMATION_PROPS } from "@/constants/in-view-animation-props";
import { cn } from "@/utils/styling/cn";
import { MotionLink } from "@/components/shared/motion-link";
import { parseColorSet } from "@/hygraph/utils/parse-color-set";
import { useSchemedColorSet } from "@/hooks/color-scheme/use-schemed-color-set";

export const ProjectTag: FunctionComponent<
  EducationalInstitutionPageCredentialCourseProjectDataFragment
> = ({ name, slug, logo, colors: unparsedColors }) => {
  /**
   * Parse the HEX color values from the color set.
   */
  const parsedColorSet = parseColorSet(unparsedColors);

  /**
   * Throw an error the project if it does not have both a light and dark icon,
   * or the color set could not be parsed.
   */
  if (!logo?.iconLight || !logo.iconDark || !parsedColorSet) {
    throw new Error(`${name} is missing necessary data.`);
  }

  /**
   * Select the colors to use from the parsed colour set based on the current
   * colour scheme mode.
   */
  const schemedColorSet = useSchemedColorSet(parsedColorSet);

  return (
    <motion.li
      {...IN_VIEW_ANIMATION_PROPS}
      className="relative max-w-full"
      style={{
        ...(schemedColorSet?.cssVariableDeclarations ?? {}),
      }}
    >
      <MotionLink
        href={`/projects/${slug}`}
        target="_blank"
        className={cn(
          "relative",
          "flex items-center gap-x-1.5",
          "transition-colors duration-300",
          "rounded-full",
          "w-full max-w-full md:w-fit",
          "py-2",
          "pl-3 pr-4",
          "whitespace-nowrap text-xs leading-none",
          schemedColorSet?.classNames.background
        )}
        initial={{
          scale: 1,
        }}
        whileHover={{
          scale: 1.035,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <div className="relative size-6">
          {/* Icon for light mode */}
          {logo.iconLight.url ? (
            <Image
              fill
              src={logo.iconLight.url}
              alt={`${name} Icon`}
              className={cn("object-contain", "block dark:hidden")}
            />
          ) : null}

          {/* Icon for dark mode */}
          {logo.iconLight.url ? (
            <Image
              fill
              src={logo.iconDark.url}
              alt={`${name} Icon`}
              className={cn("object-contain", "hidden dark:block")}
            />
          ) : null}
        </div>

        <div className={cn("font-medium", schemedColorSet?.classNames.text)}>
          {name}
        </div>
      </MotionLink>
    </motion.li>
  );
};
