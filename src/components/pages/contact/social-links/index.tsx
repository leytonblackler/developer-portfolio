"use client";

import { type FunctionComponent } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { SocialLink, type SocialLinkProps } from "./social-link";
import { cn } from "@/utils/styling/cn";
import { useInView } from "@/components/shared/smooth-scroller/use-in-view";

export const SOCIAL_LINKS_PROPS: SocialLinkProps[] = [
  /**
   * LinkedIn
   */
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/leytonblackler",
    color: {
      base: "#0077B5",
      contrast: "#FFF",
    },
  },
  /**
   * GitHub
   */
  {
    icon: FaGithub,
    href: "https://github.com/leytonblackler",
    color: {
      base: "#333",
      contrast: "#FAFAFA",
    },
  },
  /**
   * Unicorn Factory
   */
  // {
  //   icon: UnicornFactory,
  //   href: "TODO",
  //   color: {
  //     base: "#5E6AC6",
  //     contrast: "#FFF",
  //   },
  // },
  /**
   * Email
   */
  {
    icon: HiOutlineMail,
    href: "mailto:hello@leytonblackler.dev",
  },
];

/**
 * A grid of buttons linking to social media profiles or contact methods.
 */
export const SocialLinks: FunctionComponent = () => {
  /**
   * Observe when the links container first enter the viewport.
   */
  const [ref, isInView] = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="@container">
      <motion.ul
        animate={isInView ? "visible" : "hidden"}
        transition={{
          staggerChildren: 0.2,
        }}
        className={cn("grid", "grid-cols-3", "gap-2")}
      >
        {SOCIAL_LINKS_PROPS.map((linkProps) => (
          <SocialLink key={linkProps.href} {...linkProps} />
        ))}
      </motion.ul>
    </div>
  );
};
