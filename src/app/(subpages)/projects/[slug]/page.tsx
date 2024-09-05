import { type FunctionComponent } from "react";
import { notFound } from "next/navigation";
import { getProject } from "@/hygraph/queries/project";
import { getSSRApolloClient } from "@/hygraph/client/ssr";
import { LaptopCard } from "@/components/shared/device-cards/laptop";
import { PhoneCard } from "@/components/shared/device-cards/phone";
import { cn } from "@/utils/styling/cn";
import { TechnologiesCard } from "@/components/pages/project/technologies";
import { Hero } from "@/components/shared/hero";
import { parseColorSet } from "@/hygraph/utils/parse-color-set";
import { Card } from "@/components/shared/card";

interface ProjectPageParams {
  slug: string;
}

interface ProjectPageProps {
  params: ProjectPageParams;
}

const ProjectPage: FunctionComponent<ProjectPageProps> = async ({
  params: { slug },
}) => {
  /**
   * Attempt to fetch the project for the given slug.
   */
  const project = await getProject({
    client: getSSRApolloClient(),
    variables: {
      slug,
    },
  });

  /**
   * If the project is not found (either no project matches the given slug, or
   * the project is not published in Hygraph), return a 404.
   */
  if (!project) {
    notFound();
  }

  /**
   * Deconstruct the project page data.
   */
  const {
    name,
    subtitle,
    description,
    logo,
    colors: unparsedColorSet,
    technologies,
  } = project;

  /**
   * Parse the HEX color values from the color set.
   */
  const parsedColorSet = parseColorSet(unparsedColorSet);

  return (
    <div className={cn("bounded-page-content-x", "flex flex-col gap-y-2")}>
      <Hero heading={name} subHeading={subtitle} />
      <Card title="About" parsedColorSet={parsedColorSet}>
        {/* <div className="flex flex-row gap-x-12"> */}
        {/* <div
          className="relative max-w-xs flex-1 rounded-6xl px-8 py-6"
          style={{
            background: colors?.background ?? undefined,
          }}
        >
          {logo?.primary ? (
            <Image
              fill
              src={logo.primary.url}
              alt={`${name} Logo`}
              className="object-contain"
            />
          ) : null}
        </div> */}
        <div className="h-96">{description}</div>
        {/* </div> */}
      </Card>
      <TechnologiesCard
        technologies={technologies}
        parsedColorSet={parsedColorSet}
      />
      <LaptopCard />
      <PhoneCard />
    </div>
  );
};

export default ProjectPage;

// getFragmentData(
//   ProjectPageTechnologyDataFragmentDoc,
//   technologies
// )
