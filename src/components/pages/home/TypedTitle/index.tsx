"use client";

import clsx from "clsx";
import { FunctionComponent, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const TypedTitle: FunctionComponent = () => {
  const [showText, setShowText] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 1000);
  }, []);

  return !showText ? null : (
    <TypeAnimation
      cursor={false}
      sequence={!showText ? [] : ["Hi, I'm Leyton.\nI build things."]}
      wrapper="span"
      speed={40}
      className={clsx(
        "text-gray-700 dark:text-gray-50",
        "whitespace-pre-line",
        "text-5xl sm:text-6xl md:text-8xl font-bold",
        "!leading-tight"
      )}
    />
  );
};

export default TypedTitle;
