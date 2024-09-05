import { useMemo, type FunctionComponent } from "react";
import pluralize from "pluralize";
import { type Entries } from "type-fest";
import { capitalCase } from "change-case";
import {
  type CredentialType,
  type CardListSectionEducationalInstitutionItemDataFragment,
} from "@/hygraph/generated/graphql";

/**
 * The formatted text for a credential type and count.
 */
const CredentialText: FunctionComponent<{
  type: CredentialType;
  count: number;
}> = ({ type, count }) => capitalCase(pluralize(type, count, true));

/**
 * An overlay description for an educational institution card list item
 * indicating the number of credentials awarded.
 */
export const Credentials: FunctionComponent<
  Pick<CardListSectionEducationalInstitutionItemDataFragment, "credentials">
> = ({ credentials }) => {
  /**
   * Calculate the total number of each credential type.
   */
  const totals = useMemo<Entries<Record<CredentialType, number>>>(
    () =>
      Object.entries(
        credentials.reduce<Partial<Record<CredentialType, number>>>(
          (result, { type }) => {
            return {
              ...result,
              ...("type" in result && typeof result[type] === "number"
                ? { [type]: (result[type] ?? 0) + 1 }
                : { [type]: 1 }),
            };
          },
          {}
        )
      ) as Entries<Record<CredentialType, number>>,
    [credentials]
  );

  /**
   * Do not render if there are no credentials.
   */
  if (totals.length === 0) {
    return null;
  }

  /**
   * Render without any wrapping elements if there is only one credential type.
   */
  if (totals.length === 1) {
    const [[type, count]] = totals;
    return <CredentialText type={type} count={count} />;
  }

  /**
   * If there are multiple credential types, render them as a vertical list.
   */
  return (
    <div className="flex flex-col justify-end gap-y-1">
      {totals.map(([type, total]) => (
        <span key={type}>
          <CredentialText type={type} count={total} />
        </span>
      ))}
    </div>
  );
};
