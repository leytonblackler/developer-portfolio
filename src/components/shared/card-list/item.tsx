"use client";

import { type FunctionComponent } from "react";
import Image from "next/image";
import { pick } from "lodash";
import { motion } from "framer-motion";
import { cleanEnv, str } from "envalid";
import { MotionLink } from "../motion-link";
import { Logo } from "../navigation-bar/logo";
import { type CardListItemDataFragment } from "./types";
import { ProjectCategory } from "./project-category";
import { CardListItemTag } from "./tag";
import { Qualifications } from "./qualifications";
import { EducationalInstitutionCategory } from "./educational-institution-category";
import { parseColorSet } from "@/hygraph/utils/parse-color-set";
import { cn } from "@/utils/styling/cn";
import { ENTITY_BASE_PATHS } from "@/constants/paths";
import { formatDateRange } from "@/utils/date";

/**
 * Parse the environment variable for the Hygraph project entry ID reflecting
 * this website..
 */
const {
  NEXT_PUBLIC_HYGRAPH_PORTFOLIO_WEBSITE_PROJECT_ENTRY_ID:
    HYGRAPH_PORTFOLIO_WEBSITE_PROJECT_ENTRY_ID,
} = cleanEnv(
  {
    NEXT_PUBLIC_HYGRAPH_PORTFOLIO_WEBSITE_PROJECT_ENTRY_ID:
      process.env.NEXT_PUBLIC_HYGRAPH_PORTFOLIO_WEBSITE_PROJECT_ENTRY_ID,
  },
  {
    NEXT_PUBLIC_HYGRAPH_PORTFOLIO_WEBSITE_PROJECT_ENTRY_ID: str(),
  }
);

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
    colors: unparsedColors,
    timeFrame,
  } = item;

  /**
   * Parse the HEX color values from the color set.
   */
  const colors = parseColorSet(unparsedColors);

  const href = `${ENTITY_BASE_PATHS[__typename]}/${slug}`;

  const isPortfolioProjectEntry =
    id === HYGRAPH_PORTFOLIO_WEBSITE_PROJECT_ENTRY_ID;

  return (
    <MotionLink
      href={href}
      className={cn(
        "group",
        "h-72",
        "relative flex-1 px-8 py-6",
        "overflow-hidden rounded-7xl",
        "flex items-center justify-center",
        "bg-gray-100 dark:bg-gray-900"
      )}
      style={{
        backgroundColor: colors?.background ?? undefined,
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
      <motion.div
        className="relative box-border h-full max-h-[90px] w-full max-w-[160px]"
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
        {isPortfolioProjectEntry ? (
          <Logo
            className={cn("mx-auto h-full text-gray-900 dark:text-gray-100")}
          />
        ) : (
          <>
            {logo?.primary ? (
              <Image
                fill
                src={logo.primary.url}
                alt={`${name} Logo`}
                className="object-contain"
              />
            ) : null}
          </>
        )}
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
          <CardListItemTag type="primary" colors={colors}>
            {name}
          </CardListItemTag>

          {/* Project category */}
          {item.__typename === "Project" ? (
            <CardListItemTag type="secondary" colors={colors}>
              <ProjectCategory
                {...pick(item, ["personalProject", "company", "courses"])}
              />
            </CardListItemTag>
          ) : null}

          {/* Educational institution type */}
          {item.__typename === "EducationalInstitution" ? (
            <CardListItemTag type="secondary" colors={colors}>
              <EducationalInstitutionCategory {...pick(item, ["category"])} />
            </CardListItemTag>
          ) : null}
        </div>
        <div className="flex flex-row justify-between">
          {/* Time frame */}
          <CardListItemTag type="secondary" colors={colors}>
            {formatDateRange(timeFrame, {
              fullMonth: false,
            })}
          </CardListItemTag>

          {/* Qualifications */}
          {item.__typename === "EducationalInstitution" ? (
            <CardListItemTag type="secondary" colors={colors}>
              <Qualifications {...pick(item, ["qualifications"])} />
            </CardListItemTag>
          ) : null}
        </div>
      </motion.div>
    </MotionLink>
  );
};
