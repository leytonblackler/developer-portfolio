import { type FunctionComponent } from "react";
import Link from "next/link";
import { type NavigationLinkItemProps } from "../../types";
import { cn } from "@/utils/styling/cn";
import { Button } from "@/components/shared/button";

export const NavigationDrawerLinkItem: FunctionComponent<
  NavigationLinkItemProps
> = ({ label, icon, href, active }) => (
  // <Link href={href} className=>
  //   <Icon className={cn("w-5", "h-5")} />
  //   <span className={cn("font-medium", "overflow-hidden")}>{label}</span>
  // </Link>
  <Button label={label} icon={icon} cardStyle="secondary" href={href} />
);
