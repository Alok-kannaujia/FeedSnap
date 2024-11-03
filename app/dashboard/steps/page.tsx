import { StepsPage } from "@/components/steps-page";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Steps",
};

const page = () => {
  return (
    <div className="bg-card-foreground w-full min-h-[80vh]">
      <StepsPage />
    </div>
  );
};

export default page;
