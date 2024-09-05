"use client";

import { type FunctionComponent, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { cn } from "@/utils/styling/cn";

export const TypedTitle: FunctionComponent = () => {
  const [showText, setShowText] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 1000);
  }, []);

  return (
    <div className="flex h-[90px] flex-row items-start justify-start">
      {!showText ? null : (
        <TypeAnimation
          cursor
          sequence={["Hi, I'm Leyton.\nI'm a full-stack developer."]}
          wrapper="span"
          speed={40}
          className={cn(
            "text-gray-850 dark:text-gray-100",
            "whitespace-pre-line",
            "font-bold",
            "text-4xl leading-tight"
          )}
        />
      )}
    </div>
  );
};
