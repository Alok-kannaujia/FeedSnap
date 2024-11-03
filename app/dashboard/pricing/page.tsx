import PricingPage from "@/components/Pricing";
import { auth } from "@/lib/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Pricing",
};

const page = async () => {
  const user = await auth();

  if (!user) {
    return redirect("/");
  }

  return (
    <div className="bg-card-foreground w-full min-h-[80vh]">
      <PricingPage />
      {/* <h1>hello</h1> */}
    </div>
  );
};

export default page;
