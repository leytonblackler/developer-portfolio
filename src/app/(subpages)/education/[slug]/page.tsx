import { type FunctionComponent } from "react";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { getSSRApolloClient } from "@/hygraph/client/ssr";
import { cn } from "@/utils/styling/cn";
import { Hero } from "@/components/shared/hero";
import { Card } from "@/components/shared/card";
import { MarkdownParagraph } from "@/components/shared/markdown/paragraph";
import { AfterHero } from "@/components/shared/hero/entry-provider/after-hero";
import { getEducationalInstitution } from "@/hygraph/queries/educational-institution";
import { CredentialsCard } from "@/components/pages/educational-institution/credentials-card";

interface EducationalInstitutionPageParams {
  slug: string;
}

interface EducationalInstitutionPageProps {
  params: EducationalInstitutionPageParams;
}

const EducationalInstitutionPage: FunctionComponent<
  EducationalInstitutionPageProps
> = async ({ params: { slug } }) => {
  /**
   * Attempt to fetch the educational institution for the given slug.
   */
  const educationalInstitution = await getEducationalInstitution({
    client: getSSRApolloClient(),
    variables: {
      slug,
    },
  });

  /**
   * If the educational institution is not found (either no educational
   * institution matches the given slug, or the educational institution is not
   * published in Hygraph), return a 404.
   */
  if (!educationalInstitution) {
    notFound();
  }

  /**
   * Deconstruct the educational institution page data.
   */
  const { name, subtitle, description, credentials } = educationalInstitution;

  return (
    <div className={cn("bounded-page-content-x", "flex flex-col gap-y-2")}>
      <Hero heading={name} subHeading={subtitle} reposition />
      <AfterHero>
        <Card title="About">
          <Markdown
            components={{
              p: MarkdownParagraph,
            }}
          >
            {description.markdown}
          </Markdown>
        </Card>
        <CredentialsCard credentials={credentials} />
      </AfterHero>
    </div>
  );
};

export default EducationalInstitutionPage;
