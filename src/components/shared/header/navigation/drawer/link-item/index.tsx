import { type FunctionComponent } from "react";
import { type NavigationLinkItemProps } from "../../types";
import { Button } from "@/components/shared/button";

// TODO: Display active state
export const NavigationDrawerLinkItem: FunctionComponent<
  NavigationLinkItemProps
> = ({
  label,
  icon,
  href,
  // active
}) => (
  <Button
    label={label}
    icon={icon}
    cardStyle="secondary"
    fillHeight
    minSize="sm"
    href={href}
  />
);
