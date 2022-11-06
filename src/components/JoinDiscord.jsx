import React from "react";
import { FaDiscord } from "react-icons/fa";

const JoinDiscord = () => {
  return (
    <section className="relative overflow-hidden min-h-screen-50 bg-gradient-to-tr  from-violet-700 to-purple-500 flex items-center">
      {/* decoration */}
      <div className=" absolute -bottom-12 -right-12 -rotate-45 text-white/40 hidden md:block ">
        <FaDiscord className="w-96 h-96" />
      </div>
      <div className="container mx-auto p-4 flex flex-col items-center  gap-2">
        {/* Head */}
        <h1 className="font-lexend font-extrabold text-4xl md:text-6xl text-white capitalize flex flex-col justify-center items-center -gap-y-2">
          <FaDiscord className=" w-24 h-24 md:w-36 md:h-36 animate-bounce" />
          Join Discord
        </h1>
        {/* desc */}
        <p className="text-center max-w-md text-white/70 md:text-lg font-medium ">
          Join the vast community server only for developers with{" "}
          <span className="text-lg leading-5 md:text-2xl px-3 py-0.5 text-indigo-600 bg-indigo-50 rounded-md ">
            54751+
          </span>{" "}
          members{" "}
        </p>

        {/* button */}
        <a
          href="https://discord.io/commclassroom"
          target="_blank"
          rel="noreferrer"
          className="mt-2 text-indigo-600 font-medium px-4 py-2 rounded-lg capitalize text-xl flex items-center gap-x-2 bg-indigo-50 border border-indigo-50"
        >
          <FaDiscord className="w-7 h-7" />
          <span>Be a part today</span>
        </a>
      </div>
    </section>
  );
};

export default JoinDiscord;
