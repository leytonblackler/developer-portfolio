import hygraph from "@/hygraph";
import { gql } from "@apollo/client";
import { GetStaticProps } from "next";

const ProjectPage = () => <div>project</div>;
export default ProjectPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    // TODO: Handle this error
    throw new Error("Params is undefined");
  }

  const slug = params.slug as string;

  const query = gql`
    query Project($slug: String!) {
      project(where: { slug: $slug }) {
        id
        title
      }
    }
  `;

  try {
    const result = await hygraph.query({
      query,
      variables: {
        slug,
      },
    });
    console.log("result", result);
  } catch (error) {
    console.error("Error fetching project data from Hygraph", error);
  }
  return {
    props: {
      revalidate: 60 * 60, // Cache response for 1 hour (60 seconds * 60 minutes)
    },
  };
};
