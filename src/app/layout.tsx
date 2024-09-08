import {
  Plus_Jakarta_Sans as PlusJakartaSans,
  Noto_Color_Emoji as NotoColorEmoji,
} from "next/font/google";
import { type FunctionComponent, type ReactNode } from "react";
import { NavigationBar } from "@/components/shared/navigation-bar";
import { Providers } from "@/components/shared/providers";
import { AnimatePagePresence } from "@/components/page-animation/animate-page-presence";
import { cn } from "@/utils/styling/cn";

/**
 * Import global styles.
 */
import "./global.css";

/**
 * Import styles required for react-loading-skeleton.
 */
import "react-loading-skeleton/dist/skeleton.css";
import { SmoothScroller } from "@/components/shared/smooth-scroller";
import { ScrollInstanceId } from "@/constants/scroll-instance-ids";

const plusJakartaSansFont = PlusJakartaSans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const notoColorEmojiFont = NotoColorEmoji({
  weight: ["400"],
  subsets: ["emoji"],
  variable: "--font-noto-color-emoji",
});

export const metadata = {
  title: "Leyton Blackler",
  description: "TODO",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => (
  <html
    lang="en"
    className={cn(
      "bg-gradient-to-b",
      "dark:from-gray-975 dark:via-gray-950 dark:to-gray-950",
      "from-white via-gray-50 to-gray-50",
      "h-dvh max-h-dvh",
      "max-w-dvw h-dvw",
      "relative"
    )}
  >
    <body
      className={cn(
        plusJakartaSansFont.variable,
        notoColorEmojiFont.variable,
        "font-sans"
      )}
    >
      <Providers>
        <SmoothScroller id={ScrollInstanceId.Main}>
          <AnimatePagePresence>{children}</AnimatePagePresence>
        </SmoothScroller>
        <NavigationBar />
      </Providers>
    </body>
  </html>
);

export default RootLayout;
