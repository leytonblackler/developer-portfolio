import {
  HiOutlineAcademicCap,
  HiOutlineCode,
  HiOutlineLightBulb,
  // HiOutlineMail,
  HiOutlineUser,
} from "react-icons/hi";
import colors from "tailwindcss/colors";
import { TopLevelPage } from "@/hygraph/generated/graphql";
import { type ReactIcon } from "@/utils/icons/types";

export interface PageConfigNavLink {
  label: string;
  icon: ReactIcon;
  href: string;
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

export const pagesConfig: Record<TopLevelPage, PageConfig> = {
  [TopLevelPage.About]: {
    hygraphPageId: "cljdjrcrz5tyl0b19dgn4fsfb",
    colors: null,
    navLink: {
      label: "About",
      icon: <HiOutlineUser />,
      href: "/",
    },
  },
  [TopLevelPage.Experience]: {
    hygraphPageId: "cljdo1jix5t9x0b2wemymmqhb",
    colors: {
      primary: colors.lime[300],
      secondary: colors.lime[900],
    },
    navLink: {
      label: "Experience",
      icon: <HiOutlineLightBulb />,
      href: "/experience",
    },
  },
  [TopLevelPage.Projects]: {
    hygraphPageId: "cljdo5imm5tfl0b2w62oy93cf",
    colors: {
      primary: colors.violet[300],
      secondary: colors.violet[900],
    },
    navLink: {
      label: "Projects",
      icon: <HiOutlineCode />,
      href: "/projects",
    },
  },
  [TopLevelPage.Education]: {
    hygraphPageId: "cljdo403r5v250b2u7e3ddfdo",
    colors: {
      primary: colors.yellow[300],
      secondary: colors.yellow[900],
    },
    navLink: {
      label: "Education",
      icon: <HiOutlineAcademicCap />,
      href: "/education",
    },
  },
  // TODO: Restore contact page
  // [TopLevelPage.Contact]: {
  //   hygraphPageId: "cljdog1ky5v9a0c2vf8m0la75",
  //   colors: null,
  //   navLink: {
  //     label: "Contact",
  //     icon: <HiOutlineMail />,
  //     href: "/contact",
  //   },
  // },
};
