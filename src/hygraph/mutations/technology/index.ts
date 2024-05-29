import { catchErrors } from "@/hygraph/errors";
import {
  UpdateTechnologyMutationDocument,
  type TechnologyUpdateInput,
} from "@/hygraph/generated/graphql";
import { type MutationFunction } from "@/hygraph/types";

export const updateTechnology: MutationFunction<
  void,
  { id: string; data: TechnologyUpdateInput }
> = ({ client, data: { id, data } }) =>
  catchErrors(async () => {
    await client.mutate({
      mutation: UpdateTechnologyMutationDocument,
      variables: { id, data },
    });
  });
