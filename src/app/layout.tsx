import {
  Plus_Jakarta_Sans as PlusJakartaSans,
  Noto_Color_Emoji as NotoColorEmoji,
} from "next/font/google";
import { type FunctionComponent, type ReactNode } from "react";
import { type Metadata, type Viewport } from "next";
import colors from "tailwindcss/colors";
import { Header } from "@/components/shared/header";
import { Providers } from "@/components/shared/providers";
import { AnimatePagePresence } from "@/components/page-animation/animate-page-presence";
import { cn } from "@/utils/styling/cn";
import { SmoothScroller } from "@/components/shared/smooth-scroller";
import { ScrollInstanceId } from "@/constants/scroll-instance-ids";

/**
 * Import global styles.
 */
import "./global.css";

/**
 * Import styles required for react-loading-skeleton.
 */
import "react-loading-skeleton/dist/skeleton.css";

const plusJakartaSansFont = PlusJakartaSans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const notoColorEmojiFont = NotoColorEmoji({
  weight: ["400"],
  subsets: ["emoji"],
  variable: "--font-noto-color-emoji",
});

// eslint-disable-next-line react-refresh/only-export-components -- Metadata must be exported as per: https://nextjs.org/docs/app/building-your-application/optimizing/metadata#static-metadata
export const metadata: Metadata = {
  title: "Leyton Blackler",
  description:
    "Frontend-focused software engineer with expertise in React, TypeScript & UI/UX. View projects, skills, and experience.",
  // TODO: Support Next.js 15 for below to work
  // icons: {
  //   icon: [
  //     // Fallback (no theme mode set)
  //     {
  //       rel: "icon",
  //       type: "image/png",
  //       url: "/favicons/light.png",
  //     },
  //     // Show dark icon in light mode
  //     {
  //       rel: "icon",
  //       type: "image/png",
  //       url: "/favicons/dark.png",
  //       media: "(prefers-color-scheme: light)",
  //     },
  //     // Show light icon in dark mode
  //     {
  //       rel: "icon",
  //       type: "image/png",
  //       url: "/favicons/light.png",
  //       media: "(prefers-color-scheme: dark)",
  //     },
  //   ],
  // },
};

// eslint-disable-next-line react-refresh/only-export-components -- Viewport must be exported as per: https://nextjs.org/docs/app/api-reference/functions/generate-viewport#the-viewport-object
export const viewport: Viewport = {
  width: "device-width",
  userScalable: false,
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,

  /**
   * Same colors as the root background elements (root-bg class).
   */
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: colors.gray[100] },
    { media: "(prefers-color-scheme: dark)", color: colors.gray[950] },
  ],
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => (
  <html
    lang="en"
    className={cn("root-bg", "h-dvh max-h-dvh", "max-w-dvw h-dvw", "relative")}
  >
    <head>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/agnostic-32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/agnostic-16.png"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        href="/favicons/agnostic-apple-touch-icon.png"
        sizes="180x180"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/dark-32.png"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/dark-16.png"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/light-32.png"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/light-16.png"
        media="(prefers-color-scheme: dark)"
      />
    </head>
    <body
      className={cn(
        plusJakartaSansFont.variable,
        notoColorEmojiFont.variable,
        "font-sans"
      )}
    >
      <Providers>
        <SmoothScroller id={ScrollInstanceId.Main} correctOnWindowResize>
          <AnimatePagePresence>{children}</AnimatePagePresence>
        </SmoothScroller>
        <Header />
      </Providers>
    </body>
  </html>
);

export default RootLayout;
