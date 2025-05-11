"use client";

import { type FunctionComponent } from "react";
import { motion } from "framer-motion";
import { Credential } from "./credential";
import { Card } from "@/components/shared/card";
import {
  EducationalInstitutionPageCredentialDataFragmentDoc,
  type EducationalInstitutionPageDataFragment,
} from "@/hygraph/generated/graphql";
import { getFragmentData } from "@/hygraph/generated";
import { useInView } from "@/components/shared/smooth-scroller/use-in-view";
import { cn } from "@/utils/styling/cn";

interface CredentialsCardProps {
  credentials: EducationalInstitutionPageDataFragment["credentials"];
}

export const CredentialsCard: FunctionComponent<CredentialsCardProps> = ({
  credentials,
}) => {
  /**
   * Get the fragment data for each of the credentials.
   */
  const credentialsData = getFragmentData(
    EducationalInstitutionPageCredentialDataFragmentDoc,
    credentials
  );

  /**
   * Observe when the card first enters the viewport.
   */
  const [ref, isInView] = useInView<HTMLUListElement>();

  return (
    <Card
      title="Credentials"
      contentClassName={cn("px-4 pb-4")}
      contentPadding={{ left: false, right: false, bottom: false }}
    >
      <motion.ul
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          delayChildren: 0.3,
          staggerChildren: 0.2,
        }}
        className={cn("flex flex-col", "gap-2")}
      >
        {credentialsData.map((credentialData) => (
          <Credential key={credentialData.id} {...credentialData} />
        ))}
      </motion.ul>
    </Card>
  );
};
