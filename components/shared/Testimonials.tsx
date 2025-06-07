import React from "react";
import TitleMain, { TitleSub } from "../ui/Title";

export default function Testimonials() {
  return (
    <div className="mt-40">
      <div className="flex items-center gap-10">
        <TitleMain className=""> Testimonials</TitleMain>
        <TitleSub>
          {" "}
          Hear from Our Satisfied Clients: Read Our Testimonials <br /> to Learn
          More about Our Digital Marketing Services
        </TitleSub>
      </div>

      <div className="bg-[var(--colorDark)] py-20 rounded-4xl mt-20">
        <div className="max-w-2xl border-2 border-[var(--colorGreen)] m-auto p-10 text-[var(--colorGray)]">
          <article>
            &quot;We have been working with Positivus for the past year and have
            seen a significant increase in website traffic and leads as a result
            of their efforts. The team is professional, responsive, and truly
            cares about the success of our business. We highly recommend
            Positivus to any company looking to grow their online
            presence.&quot;
          </article>
        </div>
      </div>
    </div>
  );
}
