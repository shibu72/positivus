import React from "react";
import TitleMain, { TitleSub } from "../ui/Title";
import Image from "next/image";
import Button from "../ui/Button";

interface cardType {
  name: string;
  title: string;
  about: string;
  src: string;
}

export default function Team() {
  const cardsData = [
    {
      name: "John Smith",
      title: "CEO and Founder",
      about:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      src: "/images/team1.png",
    },
    {
      name: "Jane Doe",
      title: "Director of Operations",
      about:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      src: "/images/team2.png",
    },
    {
      name: "Michael Brown",
      title: "Senior SEO Specialist",
      about:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      src: "/images/team3.png",
    },
    {
      name: "Emily Johnson",
      title: "PPC Manager",
      about:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      src: "/images/team4.png",
    },
    {
      name: "Brian Williams",
      title: "Social Media Specialist",
      about:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
      src: "/images/team5.png",
    },
    {
      name: "Sarah Kim",
      title: "Content Creator",
      about: `2+ years of experience in writing and editing
Skilled in creating compelling, SEO-optimized content for various industries`,
      src: "/images/team6.png",
    },
  ];
  return (
    <div className="mt-40">
      <div className="flex items-center gap-10 mb-20">
        <TitleMain className="">Team </TitleMain>
        <TitleSub>
          {" "}
          Meet the skilled and experienced team behind our <br /> successful
          digital marketing strategies
        </TitleSub>
      </div>

      <div className="flex flex-wrap items-center gap-10 justify-between">
        {cardsData.map((card: cardType, i: number) => (
          <div key={i} className="p-10 w-[387px] border rounded-4xl shadow shadow-black">
            <div className="border-b py-2 mb-2 flex items-end gap-6">
              <Image height={100} width={100} src={card.src} alt={card.title} />
              <p>
                {" "}
                <b>{card.name}</b> <br /> {card.title}
              </p>
            </div>
            <p>{card.about}</p>
          </div>
        ))}
      </div>

    <Button className="px-20 float-right mt-10">See all team </Button>
    </div>
  );
}
