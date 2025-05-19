import React from "react";
import TitleMain, { TitleSub } from "../ui/Title";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Case() {
  const cases = [{}, {}, {}];
  return (
    <div className="mt-40">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
        <TitleMain className="">Case Studies</TitleMain>
        <TitleSub>
          Explore Real-Life Examples of Our Proven Digital Marketing <br />
          Success through Our Case Studies
        </TitleSub>
      </div>

      <div className="bg-gray-900 p-10 md:p-20 mt-20 rounded-3xl overflow-hidden">
        <div
          className="flex gap-10 overflow-x-auto scroll-smooth scroll-px-6 snap-x"
        >
          {cases.map((_, i) => (
            <div
              key={i}
              className="text-white min-w-[100px] md:min-w-[150px] snap-start  flex-[50%] flex gap-10"
            >
              <div className="grid gap-4">
                <TitleSub>
                  For a local restaurant, we implemented a targeted PPC
                  campaign that resulted in a 50% increase in website traffic
                  and a 25% increase in sales.
                </TitleSub>
                <Link
                  className="text-xl text-[var(--colorGreen)] flex items-center gap-1"
                  href="#"
                >
                  Learn More
                  <ArrowUpRight size={20} />
                </Link>
              </div>
              {/* Vertical separator */}
              {i !== cases.length - 1 && (
                <i className="h-[186px] border-l border-white" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
