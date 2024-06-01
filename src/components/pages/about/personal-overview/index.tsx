import { type FunctionComponent } from "react";
import { HiUser } from "react-icons/hi";
import Markdown from "react-markdown";
import { SocialLinks } from "../../contact/social-links";
import { SpotifyCard } from "./spotify-card";
import { LocationCard } from "./location-card";
import {
  LocationDataFragmentDoc,
  type PersonalOverviewSectionDataFragment,
} from "@/hygraph/generated/graphql";
import { Card } from "@/components/shared/card";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";
import { getFragmentData } from "@/hygraph/generated";
import { cn } from "@/utils/styling/cn";

export const PersonalOverviewSection: FunctionComponent<
  PersonalOverviewSectionDataFragment
> = ({ profilePhoto, name, pronouns, description, location }) => {
  /**
   * Split the first paragraph in the description from the remaining paragraphs.
   */
  const [firstDescriptionParagraph, ...remainingDescriptionParagraphs] =
    description.markdown.split("\n\n");

  return (
    <div className="grid w-full grid-cols-1 gap-2 lg:grid-cols-2">
      <div className="row-span-2 flex flex-col gap-2">
        <div className="flex flex-1 flex-col">
          <Card title="Profile">
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex flex-col gap-y-4">
                <div
                  className={cn("relative flex gap-6", "flex-col sm:flex-row")}
                >
                  <div className="flex flex-col">
                    <ImageWithFallback
                      fallbackIcon={HiUser}
                      containerClassName={cn(
                        "rounded-7xl",
                        "sm:max-w-auto w-full max-w-[250px] sm:w-48",
                        "h-56 sm:h-full",
                        "mx-auto"
                      )}
                      imageClassName="object-cover"
                      src={profilePhoto.url}
                      alt={`${name} Profile Photo`}
                      width={512}
                      height={512}
                    />
                  </div>
                  <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col">
                      <span className="mb-1 text-3xl">{name}</span>
                      <span className="card-text-secondary text-base font-medium">
                        ({pronouns})
                      </span>
                    </div>
                    {/* TODO: Add <p> styling from markdown: "text-gray-700 dark:text-gray-400" */}

                    <Markdown>{firstDescriptionParagraph}</Markdown>
                  </div>
                </div>
                {/* TODO: Add <p> styling from markdown: "text-gray-700 dark:text-gray-400" */}
                {remainingDescriptionParagraphs.map((paragraph) => (
                  <Markdown key={paragraph}>{paragraph}</Markdown>
                ))}
              </div>
              {/* TODO: Add link to download and download icon */}
              <button
                type="button"
                className={cn(
                  "mt-auto",
                  "bg-gray-200/50 dark:bg-gray-800/50",
                  "rounded-4xl p-10"
                )}
              >
                Download resume
              </button>
            </div>
          </Card>
        </div>
        <div className="shrink-0">
          <SocialLinks />
        </div>
      </div>
      <LocationCard {...getFragmentData(LocationDataFragmentDoc, location)} />
      <SpotifyCard />
    </div>
  );
};
