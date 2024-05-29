import { type FunctionComponent } from "react";
import { type IconType } from "react-icons";
import { cn } from "@/utils/styling/cn";

export interface StatItemProps {
  label: string;
  value: number | string;
  icon: IconType;
}

export const StatItem: FunctionComponent<StatItemProps> = ({
  label,
  value,
  icon: Icon,
}) => (
  // TODO: Count up animation
  <div className="flex flex-col items-center gap-y-2 text-center">
    <div className="text-xl">{value}</div>
    <div
      className={cn(
        "card-text-secondary",
        "flex flex-row items-center gap-x-1.5",
        "text-sm font-medium"
      )}
    >
      <Icon className="-ml-2 h-4 w-4 shrink-0 opacity-70" />
      <span className="leading-none">{label}</span>
    </div>
  </div>
);
