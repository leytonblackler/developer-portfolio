import { type FunctionComponent } from "react";
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
  const project = await getProject({
    client: getSSRApolloClient(),
    variables: {
      slug,
    },
  });

  console.log("project", project);

  if (!project) {
    return <div>page not found</div>;
  }

  return (
    <div className="bounded-page-content-x">
      <LaptopCard />
      <PhoneCard />
    </div>
  );
};

export default ProjectPage;
