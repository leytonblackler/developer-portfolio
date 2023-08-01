"use client";

import Card from "@/components/pages/home/Card";
import TypedTitle from "@/components/pages/home/TypedTitle";

const HomePage = () => (
  <div className="flex flex-col items-center justify-center">
    <div className="w-full max-w-7xl px-6 md:px-8 flex flex-col">
      <div className="mx-auto w-full max-w-[317px] sm:max-w-[396px] md:max-w-[633px] pb-36">
        <TypedTitle />
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card title="About Me" colSpan={2} />
        <Card title="Experience" colSpan={2} />
        <Card title="Projects" colSpan={3} />
        <Card title="Contact" colSpan={1} />
      </div>
    </div>
  </div>
);
export default HomePage;
