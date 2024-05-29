import { GenIcon, type IconBaseProps } from "react-icons";
import { data } from "./data";

export const UnicornFactory = (props: IconBaseProps): JSX.Element =>
  GenIcon(data)(props);
