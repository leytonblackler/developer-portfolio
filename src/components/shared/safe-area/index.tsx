import { type FunctionComponent, type ReactNode } from "react";

interface SafeAreaProps {
  children: ReactNode;
}

export const SafeArea: FunctionComponent<SafeAreaProps> = ({ children }) => (
  <div className="flex flex-1 flex-col pb-14 pt-28 md:pt-36">{children}</div>
);
