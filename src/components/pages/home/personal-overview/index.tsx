import {
  type FunctionComponent,
  type HTMLAttributes,
  type ClassAttributes,
} from "react";
import { HiUser } from "react-icons/hi";
import Markdown, { type ExtraProps } from "react-markdown";
import { SocialLinks } from "../../contact/social-links";
import { SpotifyCard } from "../spotify-card";
import { LocationCard } from "../location-card";
import {
  LocationDataFragmentDoc,
  type PersonalOverviewSectionDataFragment,
} from "@/hygraph/generated/graphql";
import { Card } from "@/components/shared/card";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";
import { getFragmentData } from "@/hygraph/generated";
import { cn } from "@/utils/styling/cn";

const MarkdownParagraph = (
  props: ClassAttributes<HTMLParagraphElement> &
    HTMLAttributes<HTMLParagraphElement> &
    ExtraProps
): JSX.Element => (
  <p
    className="card-text-secondary text-sm font-medium leading-loose"
    {...props}
  />
);

export const PersonalOverviewSection: FunctionComponent<
  PersonalOverviewSectionDataFragment
> = ({
  profilePhoto,
  name,
  pronouns,
  description,
  location,
  enableResumeDownload,
}) => {
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
              <div className="flex flex-col gap-y-4 pb-6">
                <div
                  className={cn("relative flex gap-6", "flex-col sm:flex-row")}
                >
                  <div className={cn("flex flex-col", "mb-6 sm:mb-0")}>
                    <ImageWithFallback
                      fallbackIcon={HiUser}
                      containerClassName={cn(
                        "rounded-full sm:rounded-6xl",
                        "max-w-auto",
                        "w-auto sm:w-48",
                        "h-48 sm:h-full",
                        "aspect-square md:aspect-auto",
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
                      <span className="card-text-secondary text-base font-medium opacity-70">
                        ({pronouns})
                      </span>
                    </div>
                    {/* TODO: Add <p> styling from markdown: "text-gray-700 dark:text-gray-400" */}
                    <Markdown
                      components={{
                        p: MarkdownParagraph,
                      }}
                    >
                      {firstDescriptionParagraph}
                    </Markdown>
                  </div>
                </div>
                {/* TODO: Add <p> styling from markdown: "text-gray-700 dark:text-gray-400" */}
                {remainingDescriptionParagraphs.map((paragraph) => (
                  <Markdown
                    key={paragraph}
                    components={{
                      p: MarkdownParagraph,
                    }}
                  >
                    {paragraph}
                  </Markdown>
                ))}
              </div>
              {/* TODO: Add link to download and download icon */}
              {enableResumeDownload ? (
                <button
                  type="button"
                  className={cn(
                    "mt-auto",
                    "bg-gray-100 dark:bg-gray-900",
                    "rounded-4xl p-10"
                  )}
                >
                  Download resume
                </button>
              ) : null}
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
