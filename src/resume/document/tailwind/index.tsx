import { createTw } from "react-pdf-tailwind";
import { type ClassValue } from "clsx";
import tailwindConfig from "../../../../tailwind.config";
import { cn } from "@/utils/styling/cn";

const parseTailwind = createTw({
  theme: tailwindConfig.theme,
});

export const tw = (...args: ClassValue[]): ReturnType<typeof parseTailwind> =>
  parseTailwind(cn(...args));
