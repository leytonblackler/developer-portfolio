import { EntityTypeName } from "@/hygraph/generated/graphql";

export const ENTITY_BASE_PATHS: Record<
  | EntityTypeName.Project
  | EntityTypeName.Company
  | EntityTypeName.EducationalInstitution,
  string
> = {
  [EntityTypeName.Project]: "/projects",
  [EntityTypeName.Company]: "/companies",
  [EntityTypeName.EducationalInstitution]: "/education",
};
