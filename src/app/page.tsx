"use client";

import { type FunctionComponent } from "react";
import { Card } from "@/components/pages/home/card";
import { TypedTitle } from "@/components/pages/home/typed-title";
import { cn } from "@/utils/styling/cn";
import { PageId } from "@/config/pages";

const HomePage: FunctionComponent = () => (
  <div className="flex flex-1 flex-col">
    <div
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-row items-center justify-start",
        "px-8 sm:px-10",
        "pb-10 md:pb-16"
      )}
    >
      <TypedTitle />
    </div>
    <div
      className={cn(
        "flex-1",
        "bounded-page-content-x",
        "grid gap-2",
        "grid-cols-1",
        "xs:grid-cols-4",
        "lg:grid-cols-7",
        "auto-rows-fr"
      )}
    >
      <Card
        pageId={PageId.About}
        className={cn(
          "col-span-1 row-span-1",
          "xs:col-span-2 xs:row-span-4",
          "lg:col-span-2 lg:row-span-2",
          "text-pages-about-primary hover:text-pages-about-secondary",
          "hover:bg-pages-about-primary"
        )}
      />
      <Card
        pageId={PageId.Education}
        className={cn(
          "col-span-1 row-span-1",
          "xs:col-span-2 xs:row-span-2",
          "lg:col-span-2 lg:row-span-1",
          "text-pages-education-primary hover:text-pages-education-secondary",
          "hover:bg-pages-education-primary"
        )}
      />
      <Card
        pageId={PageId.Experience}
        className={cn(
          "col-span-1 row-span-1",
          "xs:col-span-2 xs:row-span-4",
          "lg:col-span-3 lg:row-span-1",
          "text-pages-experience-primary hover:text-pages-experience-secondary",
          "hover:bg-pages-experience-primary"
        )}
      />
      <Card
        pageId={PageId.Projects}
        className={cn(
          "col-span-1 row-span-1",
          "xs:col-span-2 xs:row-span-2",
          "lg:col-span-3 lg:row-span-1",
          "text-pages-projects-text",
          "text-pages-projects-primary hover:text-pages-projects-secondary",
          "hover:bg-pages-projects-primary"
        )}
      />
      <Card
        pageId={PageId.Contact}
        className={cn(
          "col-span-1 row-span-1",
          "xs:col-span-4 xs:row-span-1",
          "lg:col-span-2 lg:row-span-1",
          "bg-gray-100 hover:bg-gray-900",
          "dark:bg-gray-900 dark:hover:bg-gray-100",
          "dark:text-gray-500 dark:hover:text-gray-900",
          "text-gray-600 hover:text-gray-50"
        )}
      />
    </div>
  </div>
);

export default HomePage;
