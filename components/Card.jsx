import React from "react";

export default function Card({
  icon,
  header = "header text",
  body = "body text"
}) {
  return (
    <div
      className="w-[300px] h-[400px] flex flex-col gap-32 py-8 px-4 rounded-xl bg-gradient-to-b from-[#688296] to-[#148282] ">
      <div
        className=" text-white text-2xl text-center justify-start flex flex-row gap-9 border-b-2">
        <h1 className="text-5xl">{icon}</h1>
        <h1>{header}</h1>
      </div>
      <div className=" text-white text-2xl text-center">
        <h1>{body}</h1>
      </div>
    </div>
  );
}
