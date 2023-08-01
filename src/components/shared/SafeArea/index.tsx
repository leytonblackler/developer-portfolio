import { FunctionComponent, ReactNode } from "react";

interface SafeAreaProps {
  children: ReactNode;
}

const SafeArea: FunctionComponent<SafeAreaProps> = ({ children }) => (
  <div className="flex-1 pt-40 md:pt-56 pb-20 md:pb-44 flex flex-col">
    {children}
  </div>
);

export default SafeArea;
