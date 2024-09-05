import Image, { type ImageProps } from "next/image";
import { type FunctionComponent } from "react";
import { type IconType } from "react-icons";
import { cn } from "@/utils/styling/cn";

interface FallbackProps {
  icon: IconType;
}

const Fallback: FunctionComponent<FallbackProps> = ({ icon: Icon }) => (
  <div className="flex size-full flex-1 items-center justify-center">
    <Icon className="size-6 text-gray-400 dark:text-gray-600" />
  </div>
);

type ImageWithFallbackProps = Omit<ImageProps, "className" | "placeholder"> & {
  containerClassName?: string;
  imageClassName?: string;
  src?: ImageProps["src"] | null;
  fallbackIcon: IconType;
};

export const ImageWithFallback: FunctionComponent<ImageWithFallbackProps> = ({
  containerClassName = "",
  imageClassName = "",
  fallbackIcon,
  ...props
}) => (
  <div
    className={cn(
      "shrink-0",
      "bg-gray-200 dark:bg-gray-800",
      "overflow-hidden",
      "relative",
      containerClassName
    )}
  >
    {props.src ? (
      <Image
        {...props}
        className={cn("absolute left-0 top-0", "size-full", imageClassName)}
        placeholder="empty"
      />
    ) : null}
    <Fallback icon={fallbackIcon} />
  </div>
);
