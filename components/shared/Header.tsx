import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

export default function Header() {
  const companys = [
    "/images/Company logo.png",
    "/images/Company1 logo.png",
    "/images/Company2 logo.png",
    "/images/Company3 logo.png",
    "/images/Company4 logo.png",
    "/images/Company5 logo.png",
  ];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center">
        <div className="flex-1/2 grid gap-9 items-center justify-between ">
          <h1 className="text-6xl font-semibold leading-snug">
            Navigating the digital landscape for success
          </h1>
          <p className="text-xl font-normal">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Button className="">Book a consultation</Button>
        </div>

        <div className="flex-1/2">
          <Image
            width={600}
            height={515}
            src={"/images/header.png"}
            alt="header image represents to share positivetis"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-16 grayscale">
        {companys.map((company, _) => (
          <Image
            key={_}
            width={100}
            height={100}
            src={company}
            alt="companys logo"
          />
        ))}
      </div>
    </div>
  );
}
