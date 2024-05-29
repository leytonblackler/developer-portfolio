import { type FunctionComponent } from "react";
import Image from "next/image";
import { pick } from "lodash";
import { MotionLink } from "../motion-link";
import { type CardListItemDataFragment } from "./types";
import { ProjectType } from "./project-type";
import { CardListItemTag } from "./tag";
import { parseColorSet } from "@/hygraph/utils/parse-color-set";
import { cn } from "@/utils/styling/cn";
import { ENTITY_BASE_PATHS } from "@/constants/paths";
import { formatDateRange } from "@/utils/date";

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
    >
      {logo?.primary ? (
        <div className="relative box-border h-full max-h-[90px] w-full max-w-[160px]">
          <Image
            fill
            src={logo.primary.url}
            alt={`${name} Logo`}
            className="object-contain"
          />
        </div>
      ) : null}

      <div
        className={cn(
          "pointer-events-none",
          "absolute inset-0 px-10 py-8",
          "flex flex-col justify-between"
        )}
      >
        <div className="flex flex-row justify-between">
          <CardListItemTag type="primary" colors={colors}>
            {name}
          </CardListItemTag>

          {item.__typename === "Project" ? (
            <CardListItemTag type="secondary" colors={colors}>
              <ProjectType
                {...pick(item, ["personalProject", "company", "courses"])}
              />
            </CardListItemTag>
          ) : null}
        </div>
        <div className="flex flex-row justify-between">
          <CardListItemTag type="secondary" colors={colors}>
            {formatDateRange(timeFrame, {
              fullMonth: false,
            })}
          </CardListItemTag>
        </div>
      </div>
    </MotionLink>
  );
};
