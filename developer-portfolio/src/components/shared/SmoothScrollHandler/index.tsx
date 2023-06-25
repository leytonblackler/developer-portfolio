"use client";

import { FunctionComponent, useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

const SmoothScrollHandler: FunctionComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const element = document.getElementById("root-scroll-container");
      if (element) {
        Scrollbar.init(element);
      }
    }
  }, []);

  return null;
};

export default SmoothScrollHandler;
