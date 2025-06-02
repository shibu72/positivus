import React from "react";
import TitleMain, { TitleSub } from "../ui/Title";

interface accordingType {
  id: string;
  title: string;
  description: string;
  checking: string;
}

export default function Work() {
  const accordingsData = [
    {
      id: "01",
      checking: "defaultChecked",
      title: "Consultation ",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: "02",
      checking: "none",
      title: "Research and Strategy Development",
      description: "",
    },
    { id: "03", checking: "none", title: "Implementation", description: "" },
    {
      id: "04",
      checking: "none",
      title: "Monitoring and Optimization",
      description: "",
    },
    {
      id: "05",
      checking: "none",
      title: "Reporting and Communication",
      description: "",
    },
    {
      id: "06",
      checking: "none",
      title: "Continual Improvement",
      description: "",
    },
  ];
  return (
    <div className="mt-40">
      <div className="flex items-center  gap-10">
        <TitleMain className="">Our Working Process </TitleMain>
        <TitleSub>
          {" "}
          Step-by-Step Guide to Achieving <br /> Your Business Goals{" "}
        </TitleSub>
      </div>

      <div className="mt-20 ">
        {accordingsData.map((according: accordingType) => (
          <div
            key={according.id}
            className="collapse collapse-plus bg-[var(--colorGray)] transition-all duration-400 ease-in-out focus-within:bg-[var(--colorGreen)] border-1 border-base-black rounded-4xl shadow shadow-black drop-shadow-base-content p-5 group mt-6"
          >
            <input
              type="radio"
              name="my-accordion-3"
              defaultChecked={according.checking == "defaultChecked"}
            />
            <div className="collapse-title text-3xl font-semibold flex gap-2 items-center group-focus-within:border-b group-focus-within:mb-6">
              <span className="text-6xl">{according.id}</span>
              <span>{according.title}</span>
            </div>

            <div className="collapse-content text-lg">
              {according.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
