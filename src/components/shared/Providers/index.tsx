import { FunctionComponent, ReactNode } from "react";
import { HygraphProvider } from "@/hygraph";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FunctionComponent<ProvidersProps> = ({ children }) => (
  <HygraphProvider>{children}</HygraphProvider>
);

export default Providers;
