import { type FunctionComponent } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SocialLink, type SocialLinkProps } from "./social-link";
import { cn } from "@/utils/styling/cn";
import { UnicornFactory } from "@/components/shared/Icons";

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
  {
    icon: UnicornFactory,
    href: "TODO",
    color: {
      base: "#5E6AC6",
      contrast: "#FFF",
    },
  },
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
export const SocialLinks: FunctionComponent = () => (
  <div className="@container">
    <div className={cn("grid", "grid-cols-2 @xl:grid-cols-4", "gap-2")}>
      {SOCIAL_LINKS_PROPS.map(SocialLink)}
    </div>
  </div>
);
