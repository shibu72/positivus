import Image from "next/image";
import Link from "next/link";
import React from "react";
interface navType {
  name: string;
  url: string;
}
export default function Navbar() {
  const navLinks = [
    { name: "About us", url: "" },
    { name: "Services", url: "" },
    { name: "Use cases", url: "" },
    { name: "Pricing", url: "" },
    { name: "Blog", url: "" },
  ];
  return (
    <div className="flex items-center justify-between mt-14 mb-16">
      <div>
        <Image width={220} height={36} src={"/images/logo.png"} alt="" />
      </div>

      <div className="flex items-center justify-center gap-10 text-xl">
        {navLinks.map((navLink: navType, _) => (
          <Link key={_} href={navLink.url}>
            {navLink.name}
          </Link>
        ))}

        <button className="py-5 px-8 border rounded-2xl">
          Request a quote
        </button>
      </div>
    </div>
  );
}
