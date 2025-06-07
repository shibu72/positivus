import React from "react";
interface ButtonType {
  children: React.ReactNode;
  className: string;
}
export default function Button({ children, className }: ButtonType) {
  return (
    <>
      <button
        className={`${className} py-6 px-8 w-fit bg-[#191A23] text-xl font-normal text-white rounded-2xl hover:cursor-pointer `}
      >
        {children}
      </button>
    </>
  );
}
