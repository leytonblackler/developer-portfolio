"use client";

import { type FunctionComponent } from "react";
import { motion } from "framer-motion";
import { CourseTag } from "./course-tag";
import { type EducationalInstitutionPageCredentialCourseDataFragment } from "@/hygraph/generated/graphql";
import { useInView } from "@/components/shared/smooth-scroller/use-in-view";
import { cn } from "@/utils/styling/cn";

interface CredentialCoursesProps {
  coursesData: readonly EducationalInstitutionPageCredentialCourseDataFragment[];
}

export const CredentialCourses: FunctionComponent<CredentialCoursesProps> = ({
  coursesData,
}) => {
  /**
   * Observe when the card first enters the viewport.
   */
  const [ref, isInView] = useInView<HTMLUListElement>();

  return (
    <div className="flex flex-col">
      <div
        className={cn("card-text-primary", "font-semibold", "text-xl", "mb-4")}
      >
        <span>Courses</span>
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
        {coursesData.map((courseData) => (
          <CourseTag key={courseData.id} {...courseData} />
        ))}
      </motion.ul>
    </div>
  );
};
