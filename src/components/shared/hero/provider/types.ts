import { type Dispatch, type SetStateAction } from "react";

export interface HeroProviderContextValue {
  heroHasEntered: boolean;
  setHeroHasEntered: Dispatch<SetStateAction<boolean>>;
}
