import { type FunctionComponent } from "react";
import { cn } from "@/utils/styling/cn";

export const CardTitle: FunctionComponent<{
  centred?: boolean;
  children: string;
}> = ({ centred = false, children }) => (
  <h2
    className={cn(
      "text-xl",
      "font-semibold",
      "whitespace-nowrap",
      "card-text-primary",
      centred ? "text-center" : "text-left"
    )}
  >
    {children}
  </h2>
);
