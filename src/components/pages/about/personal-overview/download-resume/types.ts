import { type ColorScheme } from "@/hooks/color-scheme/types";

export type DownloadResumeHandler = (props: {
  colorScheme: ColorScheme;
}) => void;
