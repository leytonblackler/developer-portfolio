import { type FunctionComponent } from "react";
import { cn } from "@/utils/styling/cn";
import { type ReactIcon } from "@/utils/icons/types";
import { useStyledIcon } from "@/utils/icons/use-styled-icon";

export interface StatItemProps {
  label: string;
  value: number | string;
  icon: ReactIcon;
}

// TODO: Count up animation
export const StatItem: FunctionComponent<StatItemProps> = ({
  label,
  value,
  icon,
}) => {
  const styledIcon = useStyledIcon(icon, "-ml-2 size-4 shrink-0 opacity-70");
  return (
    <div className="flex flex-col items-center gap-y-2 text-center">
      <div className="text-xl">{value}</div>
      <div
        className={cn(
          "card-text-secondary",
          "flex flex-row items-center gap-x-1.5",
          "text-sm font-medium"
        )}
      >
        {styledIcon}
        <span className="whitespace-nowrap leading-none">{label}</span>
      </div>
    </div>
  );
};
