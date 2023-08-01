import { IconType } from "react-icons";
import {
  HiOutlineAcademicCap,
  HiOutlineBeaker,
  HiOutlineBriefcase,
  HiOutlineCode,
  HiOutlineHome,
  HiOutlineLightBulb,
  // HiOutlineLightBulb,
  HiOutlineMail,
  HiOutlineSparkles,
  HiOutlineUser,
} from "react-icons/hi";

export interface PageNavLinkConfig {
  label: string;
  icon: IconType;
  href: string;
}

export interface PageConfig {
  id: string;
  hygraphPageId: string;
  navLink: PageNavLinkConfig;
}

const pagesConfig: PageConfig[] = [
  {
    id: "home",
    hygraphPageId: "cljdjrcrz5tyl0b19dgn4fsfb",
    navLink: {
      label: "Home",
      icon: HiOutlineHome,
      href: "/",
    },
  },
  {
    id: "about",
    hygraphPageId: "cljdjrcrz5tyl0b19dgn4fsfb",
    navLink: {
      label: "About",
      icon: HiOutlineUser,
      href: "/about",
    },
  },
  {
    id: "experience",
    hygraphPageId: "cljdo1jix5t9x0b2wemymmqhb",
    navLink: {
      label: "Experience",
      icon: HiOutlineLightBulb,
      href: "/experience",
    },
  },
  // {
  //   id: "education",
  //   hygraphPageId: "cljdo403r5v250b2u7e3ddfdo",
  //   color: colors.yellow[500],
  //   navLink: {
  //     label: "Education",
  //     icon: HiOutlineAcademicCap,
  //     href: "/education",
  //   },
  // },
  {
    id: "projects",
    hygraphPageId: "cljdo5imm5tfl0b2w62oy93cf",
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
  {
    id: "contact",
    hygraphPageId: "cljdog1ky5v9a0c2vf8m0la75",
    navLink: {
      label: "Contact",
      icon: HiOutlineMail,
      href: "/contact",
    },
  },
];

export default pagesConfig;
