import { type FunctionComponent } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { ErrorPageLayout } from "@/components/pages/error/layout";
import { GlitchText } from "@/components/pages/not-found/glitch-text";
import { cn } from "@/utils/styling/cn";

const NotFoundPage: FunctionComponent = () => (
  <ErrorPageLayout
    button={{
      label: "Go back home",
      icon: HiOutlineArrowLeft,
      href: "/",
    }}
  >
    <div className="flex flex-col items-center gap-y-4">
      <GlitchText>404</GlitchText>
      <p
        className={cn(
          "text-gray-900 dark:text-gray-100",
          "text-3xl font-medium"
        )}
      >
        This page does not exist.
      </p>
    </div>
  </ErrorPageLayout>
);

export default NotFoundPage;
