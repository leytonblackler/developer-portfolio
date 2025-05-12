"use client";

import { type FunctionComponent } from "react";
import { motion } from "framer-motion";
import { ProjectTag } from "./project-tag";
import { type EducationalInstitutionPageCredentialCourseProjectDataFragment } from "@/hygraph/generated/graphql";
import { useInView } from "@/components/shared/smooth-scroller/use-in-view";
import { cn } from "@/utils/styling/cn";

interface CredentialProjectsProps {
  projectsData: readonly EducationalInstitutionPageCredentialCourseProjectDataFragment[];
}

export const CredentialProjects: FunctionComponent<CredentialProjectsProps> = ({
  projectsData,
}) => {
  /**
   * Observe when the card first enters the viewport.
   */
  const [ref, isInView] = useInView<HTMLUListElement>();

  return projectsData.length === 0 ? null : (
    <div className="flex flex-col">
      <div
        className={cn("card-text-primary", "font-semibold", "text-xl", "mb-4")}
      >
        <span>Projects</span>
      </div>
      <motion.ul
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          delayChildren: 0.3,
          staggerChildren: 0.05,
        }}
        className={cn(
          "relative",
          "grid grid-cols-1 xs:grid-cols-2",
          "md:flex md:flex-row md:flex-wrap",
          "gap-2"
        )}
      >
        {projectsData.map((projectData) => (
          <ProjectTag key={projectData.id} {...projectData} />
        ))}
      </motion.ul>
    </div>
  );
};
