import React from "react";
import { compile } from "@onedoc/react-print";
import { ResumeDocument } from "./document";
import { type ResumeDataFragment } from "@/hygraph/generated/graphql";

export const compileDocument = (
  resumeData: ResumeDataFragment
): Promise<string> => compile(<ResumeDocument {...resumeData} />);
