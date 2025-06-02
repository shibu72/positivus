import Case from "@/components/shared/Case";
import Header from "@/components/shared/Header";
import Service from "@/components/shared/Service";
import Testimonials from "@/components/shared/Testimonials";
import Work from "@/components/shared/Work";
import Cta from "@/components/ui/Cta";
import Team from "@/components/shared/Team";
import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <Service/>
      <Cta/>
      <Case/>
      <Work/>
      <Team/>
      <Testimonials/>
    </div>
  );
}
