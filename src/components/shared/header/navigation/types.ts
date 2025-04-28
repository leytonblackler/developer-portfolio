import { type PageConfigNavLink } from "@/config/pages";

export interface NavigationComponentProps {
  activePageIndex: number | null;
}

export interface NavigationLinkItemProps extends PageConfigNavLink {
  active: boolean;
}
