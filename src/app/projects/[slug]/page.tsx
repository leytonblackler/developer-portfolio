import { type FunctionComponent } from "react";
import { notFound } from "next/navigation";
import { getProject } from "@/hygraph/queries/project";
import { getSSRApolloClient } from "@/hygraph/client/ssr";
import { LaptopCard } from "@/components/shared/device-cards/laptop";
import { PhoneCard } from "@/components/shared/device-cards/phone";

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

  console.log("project", project);

  /**
   * If the project is not found (either no project matches the given slug, or
   * the project is not published in Hygraph), return a 404.
   */
  if (!project) {
    notFound();
  }

  return (
    <div className="bounded-page-content-x">
      <LaptopCard />
      <PhoneCard />
    </div>
  );
};

export default ProjectPage;
