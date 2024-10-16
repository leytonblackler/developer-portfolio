import { type Dispatch, type SetStateAction } from "react";

export interface HeroEntryProviderContextValue {
  heroHasEntered: boolean;
  setHeroHasEntered: Dispatch<SetStateAction<boolean>>;
}
