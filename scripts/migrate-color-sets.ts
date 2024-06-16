// import { getGeneralApolloClient } from "@/hygraph/client/general";
// import { updateTechnology } from "@/hygraph/mutations/technology";
// import { getTechnologies } from "@/hygraph/queries/technologies";
// import { parseColorSet } from "@/hygraph/utils/parse-color-set";

// const client = getGeneralApolloClient();

// const technologies = await getTechnologies({
//   client,
// });

// for (const technology of technologies) {
//   const { id, colors: unparsedColors } = technology;

//   const parsedColors = parseColorSet(unparsedColors);

//   if (!parsedColors?.primary) {
//     continue;
//   }

//   await updateTechnology({
//     client,
//     data: {
//       id,
//       data: {
//         colors: {
//           update: {
//             where: {
//               id: unparsedColors.id,
//             },
//             data: {
//               foreground: {
//                 hex: parsedColors.primary,
//               },
//             },
//           },
//         },
//       },
//     },
//   });

//   console.log("updated", id);

//   await new Promise((resolve) => {
//     setTimeout(resolve, 1000);
//   });
// }
