import React from "react";
import TitleMain, { TitleSub } from "./Title";
import Button from "./Button";
import Image from "next/image";

export default function Cta() {
  return (
    <div className="flex items-center justify-between p-16 bg-[var(--colorGray)] rounded-3xl relative mt-20">
      <div className="grid gap-4 flex-1/3">
        <TitleMain className="bg-transparent text-[30px]">
          Let’s make things happen
        </TitleMain>
        <TitleSub>
          Contact us today to learn more about how our digital <br /> marketing
          services can help your business grow and succeed online.
        </TitleSub>
        <Button className="">Get your free proposal</Button>
      </div>

      <div className="m-auto flex-1/3 absolute right-16">
        <Image
          className="m-auto "
          width={359}
          height={394.27}
          src={"/images/Illustration6.png"}
          alt=""
        />
      </div>
    </div>
  );
}
