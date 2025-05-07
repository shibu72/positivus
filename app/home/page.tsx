import Case from "@/components/shared/Case";
import Header from "@/components/shared/Header";
import Service from "@/components/shared/Service";
import Cta from "@/components/ui/Cta";
import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <Service/>
      <Cta/>
      <Case/>
    </div>
  );
}
