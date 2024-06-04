import { type FunctionComponent } from "react";
import { notFound } from "next/navigation";
import { getProject } from "@/hygraph/queries/project";
import { getSSRApolloClient } from "@/hygraph/client/ssr";
import { LaptopCard } from "@/components/shared/device-cards/laptop";
import { PhoneCard } from "@/components/shared/device-cards/phone";
import { cn } from "@/utils/styling/cn";
import { TechnologiesCard } from "@/components/pages/project/technologies";
import { getFragmentData } from "@/hygraph/generated";
import { ProjectPageTechnologyDataFragmentDoc } from "@/hygraph/generated/graphql";

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
  const { name, technologies } = project;
  console.log("technologies", technologies);

  return (
    <div className={cn("bounded-page-content-x", "flex flex-col gap-y-2")}>
      <TechnologiesCard technologies={technologies} />
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
