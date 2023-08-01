import { ApolloProvider } from "@apollo/client";
import { FunctionComponent, ReactNode } from "react";
import apolloClient from "./client";

interface HygraphProviderProps {
  children: ReactNode;
}

const HygraphProvider: FunctionComponent<HygraphProviderProps> = ({
  children,
}) => <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;

export default HygraphProvider;
