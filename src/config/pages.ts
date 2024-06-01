import { type IconType } from "react-icons";
import {
  HiOutlineAcademicCap,
  HiOutlineCode,
  HiOutlineHome,
  HiOutlineLightBulb,
  HiOutlineMail,
  HiOutlineUser,
} from "react-icons/hi";
import colors from "tailwindcss/colors";

export interface PageConfigNavLink {
  label: string;
  icon: IconType;
  href: string;
}

export enum PageId {
  Home = "home",
  About = "about",
  Education = "education",
  Experience = "experience",
  Projects = "projects",
  Contact = "contact",
}

export interface PageConfigColors {
  primary: string;
  secondary: string;
}

export interface PageConfig {
  hygraphPageId: string;
  colors: PageConfigColors | null;
  navLink: PageConfigNavLink;
}

export const pagesConfig: Record<PageId, PageConfig> = {
  [PageId.Home]: {
    hygraphPageId: "cljdjrcrz5tyl0b19dgn4fsfb",
    colors: null,
    navLink: {
      label: "Home",
      icon: HiOutlineHome,
      href: "/",
    },
  },
  [PageId.About]: {
    hygraphPageId: "clkui88ov1ks90b2muws8z6d4",
    colors: {
      primary: colors.sky[300],
      secondary: colors.sky[900],
    },
    navLink: {
      label: "About",
      icon: HiOutlineUser,
      href: "/about",
    },
  },
  [PageId.Education]: {
    hygraphPageId: "cljdo403r5v250b2u7e3ddfdo",
    colors: {
      primary: colors.yellow[300],
      secondary: colors.yellow[900],
    },
    navLink: {
      label: "Education",
      icon: HiOutlineAcademicCap,
      href: "/education",
    },
  },
  [PageId.Experience]: {
    hygraphPageId: "cljdo1jix5t9x0b2wemymmqhb",
    colors: {
      primary: colors.lime[300],
      secondary: colors.lime[900],
    },
    navLink: {
      label: "Experience",
      icon: HiOutlineLightBulb,
      href: "/experience",
    },
  },
  [PageId.Projects]: {
    hygraphPageId: "cljdo5imm5tfl0b2w62oy93cf",
    colors: {
      primary: colors.violet[300],
      secondary: colors.violet[900],
    },
    navLink: {
      label: "Projects",
      icon: HiOutlineCode,
      href: "/projects",
    },
  },
  // {
  //   id: "blog",
  //   hygraphPageId: "cljdoaccx5to40b2w56fpuk66",
  //   navLink: {
  //     label: "Blog",
  //     icon: HiOutlineLightBulb,
  //     href: "/blog",
  //   },
  // },
  [PageId.Contact]: {
    hygraphPageId: "cljdog1ky5v9a0c2vf8m0la75",
    colors: null,
    navLink: {
      label: "Contact",
      icon: HiOutlineMail,
      href: "/contact",
    },
  },
};
