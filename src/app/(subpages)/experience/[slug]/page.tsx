import { type FunctionComponent } from "react";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { getSSRApolloClient } from "@/hygraph/client/ssr";
import { cn } from "@/utils/styling/cn";
import { Hero } from "@/components/shared/hero";
import { Card } from "@/components/shared/card";
import { MarkdownParagraph } from "@/components/shared/markdown/paragraph";
import { AfterHero } from "@/components/shared/hero/entry-provider/after-hero";
import { getCompany } from "@/hygraph/queries/company";

interface CompanyPageParams {
  slug: string;
}

interface CompanyPageProps {
  params: CompanyPageParams;
}

const CompanyPage: FunctionComponent<CompanyPageProps> = async ({
  params: { slug },
}) => {
  /**
   * Attempt to fetch the company for the given slug.
   */
  const company = await getCompany({
    client: getSSRApolloClient(),
    variables: {
      slug,
    },
  });

  /**
   * If the company is not found (either no company matches the given slug, or
   * the company is not published in Hygraph), return a 404.
   */
  if (!company) {
    notFound();
  }

  /**
   * Deconstruct the educational institution page data.
   */
  const { name, subtitle, description } = company;

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
      </AfterHero>
    </div>
  );
};

export default CompanyPage;
