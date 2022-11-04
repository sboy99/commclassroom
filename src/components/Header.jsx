import React from "react";
import {
  ChevronRightIcon,
  MegaphoneIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <section
      id="hero"
      className="min-h-screen-50 flex items-center flex-col gap-y-4 justify-center"
    >
      {/* podcast */}
      <a
        href="#podcast"
        className="bg-purple-50 text-purple-600 font-inter font-medium capitalize px-4 py-2 rounded-full flex items-center gap-x-2 text-sm md:text-base "
      >
        <span>
          <MegaphoneIcon className="w-6 h-6 md:w-8 md:h-8 -rotate-12" />
        </span>
        <p> Check out our most recent podcast</p>
        <span>
          <ChevronRightIcon className="w-5 h-5" />
        </span>
      </a>
      {/* big text */}
      <div className="flex flex-col gap-y-3 items-center ">
        <h1 className="font-inter text-slate-800 font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-tight text-center leading-8">
          The{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-400">
            Free Community
          </span>{" "}
          for <br />
          Modern Learning.
        </h1>
        {/* sub text */}
        <p className="font-inter tracking-tight text-center  md:text-lg xl:text-xl font-semibold text-slate-500 leading-6 max-w-4xl">
          This is a community which provides{" "}
          <span className="text-blue-600 capitalize">
            free hands-on training{" "}
          </span>{" "}
          in various fields of computer science and have an inclusive community
          focussing on a{" "}
          <span className="text-teal-500 capitalize"> learn by doing </span>{" "}
          approach.
        </p>
      </div>

      {/* buttons */}
      <div className="mt-2 flex items-center gap-2 flex-wrap">
        <a
          href="#course"
          className="px-4 w-full md:w-fit text-center py-2 bg-slate-700 hover:bg-slate-600 transition-all duration-300 text-white font-medium capitalize text-lg rounded-md"
        >
          See Courses
        </a>
        <a
          href="https://www.youtube.com/c/KunalKushwaha"
          className="group w-full md:w-fit flex items-center justify-center hover:gap-x-4 gap-x-2 transition-all duration-300 ease-in-out font-medium capitalize px-4 py-2 border border-rose-600 rounded-md bg-rose-50 text-rose-600"
        >
          Visit Youtube
          <ArrowRightIcon className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Header;
