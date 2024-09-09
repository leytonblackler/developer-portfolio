"use client";

import { type FunctionComponent } from "react";
import Image from "next/image";
import { pick } from "lodash";
import { motion } from "framer-motion";
import { MotionLink } from "../motion-link";
import { type CardListItemDataFragment } from "./types";
import { ProjectCategory } from "./project-category";
import { CardListItemTag } from "./tag";
import { Credentials } from "./credentials";
import { EducationalInstitutionCategory } from "./educational-institution-category";
import { parseColorSet } from "@/hygraph/utils/parse-color-set";
import { cn } from "@/utils/styling/cn";
import { ENTITY_BASE_PATHS } from "@/constants/paths";
import { formatDateRange } from "@/utils/date";
import { useSchemedColorSet } from "@/hooks/color-scheme/use-schemed-color-set";
import { IN_VIEW_MOTION_PROPS } from "@/constants/in-view-motion-props";

/**
 * A card reflecting an item within a card list section.
 */
export const CardListItem: FunctionComponent<CardListItemDataFragment> = (
  item
) => {
  /**
   * Deconstruct the required common properties from the item.
   */
  const {
    __typename,
    id,
    slug,
    name,
    logo,
    colors: unparsedColorSet,
    timeFrame,
  } = item;

  /**
   * Parse the HEX color values from the color set.
   */
  const parsedColorSet = parseColorSet(unparsedColorSet);

  /**
   * Select the colors to use from this based on the current colour scheme mode.
   */
  const schemedColorSet = useSchemedColorSet(parsedColorSet);

  const href = `${ENTITY_BASE_PATHS[__typename]}/${slug}`;

  return (
    <motion.li className="flex flex-1" {...IN_VIEW_MOTION_PROPS}>
      <MotionLink
        key={id}
        href={href}
        className={cn(
          "group",
          "h-72",
          "relative flex-1",
          "overflow-hidden rounded-6xl"
        )}
        style={{
          ...(schemedColorSet?.cssVariableDeclarations ?? {}),
        }}
        initial="idle"
        whileHover="hover"
        transition={{
          type: "tween",
          ease: "easeOut",
        }}
        variants={{
          idle: {
            scale: 1,
          },
          hover: {
            scale: 0.98,
          },
        }}
      >
        <div
          className={cn(
            "size-full",
            "px-8 py-6",
            "flex items-center justify-center",
            schemedColorSet?.classNames.background
          )}
        >
          <motion.div
            className="relative box-border size-full max-h-[90px] max-w-[160px]"
            transition={{
              type: "tween",
              ease: "easeOut",
            }}
            variants={{
              idle: {
                scale: 1,
              },
              hover: {
                scale: 1.1,
              },
            }}
          >
            {/* Logo for light mode */}
            {logo?.primaryLight?.url ? (
              <Image
                fill
                src={logo.primaryLight.url}
                alt={`${name} Logo`}
                className={cn("object-contain", "block dark:hidden")}
              />
            ) : null}

            {/* Logo for dark mode */}
            {logo?.primaryDark?.url ? (
              <Image
                fill
                src={logo.primaryDark.url}
                alt={`${name} Logo`}
                className={cn("object-contain", "hidden dark:block")}
              />
            ) : null}
          </motion.div>

          <motion.div
            className={cn(
              "pointer-events-none",
              "absolute inset-0 px-10 py-8",
              "flex flex-col justify-between"
            )}
            transition={{
              type: "tween",
              ease: "easeOut",
            }}
            variants={{
              idle: {
                scale: 1,
              },
              hover: {
                scale: 0.98,
              },
            }}
          >
            <div className="flex flex-row justify-between">
              {/* Main card title */}
              <CardListItemTag type="primary" schemedColorSet={schemedColorSet}>
                {name}
              </CardListItemTag>

              {/* Project category */}
              {item.__typename === "Project" ? (
                <CardListItemTag
                  type="secondary"
                  schemedColorSet={schemedColorSet}
                >
                  <ProjectCategory
                    {...pick(item, ["personalProject", "company", "courses"])}
                  />
                </CardListItemTag>
              ) : null}

              {/* Educational institution type */}
              {item.__typename === "EducationalInstitution" ? (
                <CardListItemTag
                  type="secondary"
                  schemedColorSet={schemedColorSet}
                >
                  <EducationalInstitutionCategory
                    {...pick(item, ["category"])}
                  />
                </CardListItemTag>
              ) : null}
            </div>
            <div className="flex flex-row justify-between">
              {/* Time frame */}
              <CardListItemTag
                type="secondary"
                schemedColorSet={schemedColorSet}
              >
                {formatDateRange(timeFrame, {
                  fullMonth: false,
                })}
              </CardListItemTag>

              {/* Credentials */}
              {item.__typename === "EducationalInstitution" ? (
                <CardListItemTag
                  type="secondary"
                  schemedColorSet={schemedColorSet}
                >
                  <Credentials {...pick(item, ["credentials"])} />
                </CardListItemTag>
              ) : null}
            </div>
          </motion.div>
        </div>
      </MotionLink>
    </motion.li>
  );
};
