import { motion } from "framer-motion";
import { type HTMLAttributes, type FunctionComponent } from "react";

interface AnimatedTextProps {
  children: string;
  element: "h1" | "h2";
  className?: HTMLAttributes<HTMLElement>["className"];
}

export const AnimatedText: FunctionComponent<AnimatedTextProps> = ({
  children,
  element: Wrapper,
  className,
}) => {
  // const Wrapper = motion(element);

  return <Wrapper className={className}>{children}</Wrapper>;
};
