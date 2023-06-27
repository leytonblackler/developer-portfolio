import { IconType } from "react-icons";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCode,
  HiOutlineHome,
  HiOutlineLightBulb,
  HiOutlineMail,
} from "react-icons/hi";

export interface PageNavLinkConfig {
  label: string;
  icon: IconType;
  href: string;
}

export interface PageConfig {
  hygraphPageId: string;
  navLink: PageNavLinkConfig;
}

const pagesConfig: PageConfig[] = [
  // Home
  {
    hygraphPageId: "cljdjrcrz5tyl0b19dgn4fsfb",
    navLink: {
      label: "Home",
      icon: HiOutlineHome,
      href: "/",
    },
  },
  // Work
  {
    hygraphPageId: "",
    navLink: {
      label: "Work",
      icon: HiOutlineBriefcase,
      href: "/work",
    },
  },
  // Education
  {
    hygraphPageId: "",
    navLink: {
      label: "Education",
      icon: HiOutlineAcademicCap,
      href: "/education",
    },
  },
  // Projects
  {
    hygraphPageId: "",
    navLink: {
      label: "Projects",
      icon: HiOutlineCode,
      href: "/projects",
    },
  },
  // Blog
  {
    hygraphPageId: "",
    navLink: {
      label: "Blog",
      icon: HiOutlineLightBulb,
      href: "/blog",
    },
  },
  // Contact
  {
    hygraphPageId: "",
    navLink: {
      label: "Contact",
      icon: HiOutlineMail,
      href: "/contact",
    },
  },
];

export default pagesConfig;
