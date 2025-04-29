import { type ComponentType, useMemo, type FunctionComponent } from "react";
import { usePathname } from "next/navigation";
import { type Entries } from "type-fest";
import { isEqual } from "lodash";
import { useMediaQuery } from "usehooks-ts";
import { NavigationBar } from "./bar";
import { NavigationDrawer } from "./drawer";
import { type NavigationComponentProps } from "./types";
import { type TopLevelPage } from "@/hygraph/generated/graphql";
import { type PageConfig, pagesConfig } from "@/config/pages";

export const Navigation: FunctionComponent = () => {
  /**
   * Display the navigation in the header as a drawer on screen widths up to
   * 650 pixels, otherwise display the navigation directly as a bar.
   */
  const isDrawerMode = useMediaQuery("(max-width: 650px)");

  const pathname = usePathname();
  /**
   * Determine the component to use for navigation.
   */
  const NavigationComponent = useMemo<ComponentType<NavigationComponentProps>>(
    () => (isDrawerMode ? NavigationDrawer : NavigationBar),
    [isDrawerMode]
  );

  const { activePageIndex } = useMemo<
    | {
        pageId: TopLevelPage;
        pageConfig: PageConfig;
        activePageIndex: number;
      }
    | {
        pageId: null;
        pageConfig: null;
        activePageIndex: null;
      }
  >(() => {
    const currentPathParts = pathname.split("/").slice(0, 2);

    const index = (
      Object.entries(pagesConfig) as Entries<typeof pagesConfig>
    ).findIndex(([_, { navLink }]) =>
      isEqual(currentPathParts, navLink.href.split("/").slice(0, 2))
    );

    if (index === -1) {
      return { pageId: null, pageConfig: null, activePageIndex: null };
    }

    const entry = (Object.entries(pagesConfig) as Entries<typeof pagesConfig>)[
      index
    ];

    const [id, config] = entry;
    return { pageId: id, pageConfig: config, activePageIndex: index };
  }, [pathname]);

  return <NavigationComponent activePageIndex={activePageIndex} />;
};
