import { type FunctionComponent, type ReactNode } from "react";

interface ConditionalWrapperProps {
  condition: boolean;
  wrapper: (children: ReactNode) => ReactNode;
  children: ReactNode;
}

export const ConditionalWrapper: FunctionComponent<ConditionalWrapperProps> = ({
  condition,
  wrapper,
  children,
}) => (condition ? wrapper(children) : children);
