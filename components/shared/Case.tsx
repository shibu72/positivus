import React from "react";
import TitleMain, { TitleSub } from "../ui/Title";

export default function Case() {
  return (
    <div className="bg-gray-900 p-10">
      <div className="flex gap-10 items-center">
        <TitleMain className="">Case Studies</TitleMain>
        <TitleSub>
          Explore Real-Life Examples of Our Proven Digital Marketing <br />{" "}
          Success through Our Case Studies{" "}
        </TitleSub>
      </div>

      <div>
        <div> 
          <TitleSub> For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</TitleSub>
        </div>
      </div>
    </div>
  );
}
