import Image from "next/image";
import React from "react";
import TitleMain from "./Title";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface cardType {
  title:string,
  image:string,
  href:string,
  bgColor?:string,
  textColor?:string,
  textHighlightColor?:string,
}

export default function Card({title, bgColor,href, image, textColor, textHighlightColor}:cardType) {
  return (
    <div className={`w-[37.5rem] h-[19.39rem] border rounded-3xl p-10  grid grid-cols-2 items-start justify-between ${bgColor}`}>
     
      <div className={`grid items-center gap-y-10 m-auto`}>
        <div>
          <TitleMain className={`text-[30px] px-0 ${textHighlightColor}`}>Search engine</TitleMain>
          <TitleMain className={`text-[30px] px-0 ${textHighlightColor}`}>optimization</TitleMain>
        </div>

        <Link href={href} className={`flex items-center gap-4 text-xl font-normal ${textColor}`}>
          <ArrowUpRight
            className="border rounded-full bg-black"
            color="var(--bgGreen)"
            size={40}
          />
          <span>Learn more</span>
        </Link>
      </div>
      <div className="m-auto">
        <Image
          width={210}
          height={166.05}
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
}
