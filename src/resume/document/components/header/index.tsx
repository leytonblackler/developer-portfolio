import React from "react";
import { type FunctionComponent } from "react";
import { HiOutlineGlobe, HiOutlineMail } from "react-icons/hi";
import { TbBrandLinkedin } from "react-icons/tb";
import { ResumeContactDetail } from "./contact-detail";
import { cn } from "@/utils/styling/cn";

export const ResumeHeader: FunctionComponent = () => (
  <header
    className={cn(
      "w-full",
      "flex flex-row",
      "items-center justify-between",
      "mb-4",
      "px-6 py-4"
    )}
  >
    <div className="my-auto flex flex-col text-left">
      <h1 className="mb-1 text-4xl font-bold text-gray-800">Leyton Blackler</h1>
      <p className="text-xl font-medium text-gray-700">Software Engineer</p>
    </div>
    <div>
      <ResumeContactDetail
        href="https://leytonblackler.dev"
        icon={HiOutlineGlobe}
        className="mb-2"
      >
        leytonblackler.dev
      </ResumeContactDetail>
      <ResumeContactDetail
        href="mailto:hello@leytonblackler.dev"
        icon={HiOutlineMail}
        className="mb-2"
      >
        hello@leytonblackler.dev
      </ResumeContactDetail>
      <ResumeContactDetail
        href="https://linkedin.com/in/leytonblackler"
        icon={TbBrandLinkedin}
      >
        leytonblackler
      </ResumeContactDetail>
    </div>
  </header>
);
