"use client";

import {
  type FunctionComponent,
  type ReactNode,
  useContext,
  useRef,
} from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const FrozenRoute: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
};
