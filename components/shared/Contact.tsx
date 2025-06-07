import React from "react";
import TitleMain, { TitleSub } from "../ui/Title";
import Button from "../ui/Button";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="mt-36">
      <div className="flex items-center gap-10 ">
        <TitleMain className=""> Contact Us</TitleMain>
        <TitleSub>
          {" "}
          Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
        </TitleSub>
      </div>

      <div className="mt-20 bg-[var(--colorGray)] py-14 px-24 rounded-2xl flex items-center justify-between relative">
        <div>
          <div className="flex items-center gap-6">
            
            <label htmlFor="hi" ><input type="radio" name="option" id="hi" className="" />Say Hi</label>
            
            <label htmlFor="quote"><input type="radio" name="option" id="quote" />Get a Quote</label>
          </div>

          <div className="grid items-center mt-10 w-2xl">
            <label htmlFor="name">
              Name <br />{" "}
              <input
                type="text"
                id="name"
                className="border rounded-2xl text-lg p-4 w-full"
              />
            </label>
            <br />
            <label htmlFor="name">
              Name <br />{" "}
              <input
                type="text"
                id="name"
                className="border rounded-2xl text-lg p-4 w-full"
              />
            </label>
            <br />
            <label htmlFor="message">
              Message <br />
              <textarea
                name=""
                id="message"
                cols={30}
                rows={5}
                placeholder="Message"
                className="border rounded-2xl outline-0 py-6 px-8 w-full"
              ></textarea>
            </label>
            <Button className="w-full"> Send Message</Button>
          </div>
        </div>
        <Image
          src={"/images/form.png"}
          alt="the side image of form"
          width={691}
          height={648}
        />
      </div>
    </div>
  );
}
