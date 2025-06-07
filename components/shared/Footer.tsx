import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import Button from "../ui/Button";
import TitleMain from "../ui/Title";

export default function Footer() {
  const navLinks = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

  const icons = [
    { icon: FaFacebook },
    { icon: TbBrandLinkedinFilled },
    { icon: AiFillTwitterCircle },
  ];
  return (
    <div className="bg-[var(--colorDark)] p-14 rounded-t-4xl mt-40 ">
      <div className="flex items-center justify-between mb-16">
        <Image
          src={"/images/logo_white.png"}
          alt="positivus footer white logo"
          width={180}
          height={29}
        />

        <div className="flex items-center gap-8 text-lg">
          {navLinks.map((nav, i) => (
            <Link key={i} href={"#"} className="text-white underline">
              {nav}
            </Link>
          ))}
        </div>

        <div className="flex gap-5">
          {icons.map((Icon, i) => (
            <Link key={i} href={"#"} className="">
              <Icon.icon fill="white" size={30} />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <TitleMain className="text-[20px] mb-6">Contact us: </TitleMain>
          <ul className="grid gap-5 items-center text-white text-lg list-none">
            <li>Email: info@positivus.com</li>
            <li>Phone: 555-567-8901</li>
            <li>Address: 1234 Main St Moonstone City, Stardust State 12345</li>
          </ul>
        </div>

        <div className="flex items-center gap-4 p-14 bg-[#292A32] rounded-2xl">
          <input
            className="bg-[(var--colorDark)] text-xl text-[var(--colorGray)] p-6 border outline-0 rounded-2xl"
            type="text"
            placeholder="Email"
          />
          <Button className="bg-[var(--colorGreen)] text-zinc-900">
            Subscribe to news{" "}
          </Button>
        </div>
      </div>

      <hr className="border border-white my-10" />

      <span className="text-white flex items-center space-x-10 text-lg">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <Link href={""} className="underline">
          Privacy Policy
        </Link>
      </span>
    </div>
  );
}
