import hygraph from "@/hygraph";
import { gql } from "@apollo/client";
import { GetStaticProps } from "next";

const ProjectsPage = () => <div>projects</div>;
export default ProjectsPage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const result = await hygraph.query({
      query: gql`
        query Projects {
          projects {
            id
            slug
            title
          }
        }
      `,
    });
    console.log("result", result);
  } catch (error) {
    console.error("Error fetching data from Hygraph", error);
  }
  return {
    props: {
      revalidate: 60 * 60, // Cache response for 1 hour (60 seconds * 60 minutes)
    },
  };
};
