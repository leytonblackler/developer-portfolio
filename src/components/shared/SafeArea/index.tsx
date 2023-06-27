import { FunctionComponent, ReactNode } from "react";

interface SafeAreaProps {
  children: ReactNode;
}

const SafeArea: FunctionComponent<SafeAreaProps> = ({ children }) => (
  <div className="pt-28">{children}</div>
);

export default SafeArea;
