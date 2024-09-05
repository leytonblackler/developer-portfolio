"use client";

import { type FunctionComponent } from "react";
import { type Entries } from "type-fest";
import { motion } from "framer-motion";
import { PageLink } from "./page-link";
import { cn } from "@/utils/styling/cn";
import { type PageLinkItemsReturn } from "@/hygraph/queries/page-link-items";
import { useInView } from "@/components/shared/smooth-scroller/use-in-view";

export const PageLinksSectionContent: FunctionComponent<{
  data: PageLinkItemsReturn;
}> = ({ data }) => {
  /**
   * Observe when the section first enters the viewport.
   */
  const [ref, isInView] = useInView<HTMLUListElement>();

  return (
    <motion.ul
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      transition={{
        delayChildren: 0.3,
        staggerChildren: 0.3,
      }}
      className={cn(
        "bounded-page-content-x relative",
        "grid gap-2",
        "grid-cols-1 md:grid-cols-3"
      )}
    >
      {(Object.entries(data) as Entries<typeof data>).map(([pageId, items]) => (
        <PageLink key={pageId} pageId={pageId} items={items} />
      ))}
    </motion.ul>
  );
};
