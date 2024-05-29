// import { getClient } from "@/hygraph/client";
// import { catchErrors } from "@/hygraph/errors";
// import { getFragmentData } from "@/hygraph/generated";
// import {
//   PageContentFieldFragment,
//   PageContentFieldFragmentDoc,
//   PageContentQueryDocument,
// } from "@/hygraph/generated/graphql";

// const getPageData = (slug: string) =>
//   catchErrors<PageContentFieldFragment | null>(async () => {
//     const {
//       data: { primaryPage },
//     } = await getClient().query({
//       query: PageContentQueryDocument,
//       variables: {
//         slug,
//       },
//     });

//     return primaryPage
//       ? getFragmentData(PageContentFieldFragmentDoc, primaryPage)
//       : null;
//   });

// export default getPageData;
