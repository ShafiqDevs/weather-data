import React from "react";
import Image from "next/image";

export default function SquareCard({ img, label, onClick }) {
  return (
    <div
      className="relative flex justify-center items-center w-[390px] h-[300px] bg-green-50 rounded-xl overflow-hidden hover:border-[4px] border-purple-700"
      onClick={() => {
        onClick(label);
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <Image src={img} alt={"city img"} layout="fill" />
      </div>
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 rounded-xl z-[1] hover:hidden" />
      <h1 className="z-[2] text-white text-2xl">{label}</h1>
    </div>
  );
}
