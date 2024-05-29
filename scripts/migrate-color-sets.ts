// import { getGeneralApolloClient } from "@/hygraph/client/general";
// import { updateTechnology } from "@/hygraph/mutations/technology";
// import { getTechnologies } from "@/hygraph/queries/technologies";

// const client = getGeneralApolloClient();

// const technologies = await getTechnologies({
//   client,
// });

// for (const technology of technologies) {
//   const { id, primaryColor, textColor, backgroundColor } = technology;

//   console.log(id, primaryColor, textColor, backgroundColor);

//   await updateTechnology({
//     client,
//     data: {
//       id,
//       data: {
//         colors: {
//           create: {
//             primary: {
//               hex: primaryColor.hex as string,
//             },
//             text: {
//               hex: textColor.hex as string,
//             },
//             background: {
//               hex: backgroundColor.hex as string,
//             },
//           },
//         },
//       },
//     },
//   });

//   await new Promise((resolve) => {
//     setTimeout(resolve, 1000);
//   });
// }
