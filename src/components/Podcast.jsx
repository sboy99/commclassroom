import React from "react";
import { MegaphoneIcon } from "@heroicons/react/24/outline";
import { MegaphoneIcon as MegaphoneSolid } from "@heroicons/react/24/solid";
import { podcastImg } from "../data";
import { IoHeadset } from "react-icons/io5";

const Podcast = () => {
  return (
    <div id="podcast" className="relative pt-8 z-10">
      <div className="relative container mx-auto p-6 md:p-16 md:pt-20 bg-violet-500/10 rounded-xl min-h-64 flex items-center justify-center gap-8 flex-wrap-reverse">
        {/* left */}
        <div className="max-w-2xl space-y-3 ">
          {/* title */}
          <h1 className="relative text-4xl md:text-6xl leading-8 md:leading-[3.25rem] font-poppins font-extrabold capitalize text-transparent bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text">
            Open Source Cafe Podcast
            <span className="text-indigo-600 absolute -top-1 md:-top-2 left-0 -translate-x-1/2 -translate-y-1/2 -rotate-[16deg]">
              <MegaphoneIcon className="w-12 h-12 md:w-24 md:h-24" />
            </span>
          </h1>
          {/* desc */}
          <p className="md:text-lg font-inter font-medium leading-5 md:leading-6 text-purple-700">
            The Open Source Cafe, Out of Syllabus, KlassTime with Karuna, AMA
            session on Discord is an initiative to highlight the stories,
            journeys, tips & tricks of some of the amazing community leaders and
            members. Learn from their experiences and get mentored on your
            journey by folks from around the world.
          </p>
        </div>
        {/* right */}
        <a
          href="https://www.youtube.com/playlist?list=PL9gnSGHSqcnqwmKYZ5rHuzqe32Di47KMr"
          className="relative z-0"
        >
          {/* mike */}
          <div className=" hidden md:block absolute -top-56 rotate-[18deg] text-indigo-800 translate-y-1/2 right-2 translate-x-1/2 -z-10">
            <MegaphoneSolid className="w-44 h-44 -scale-x-100 " />
          </div>
          <img
            src={podcastImg}
            alt="podcast"
            className="w-full h-full object-cover object-center rounded-lg z-10"
          />
          {/* open podcast */}
          <div className="absolute -bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 md:py-2 rounded-full flex items-center justify-center gap-x-2 text-white bg-gradient-to-r from-purple-600 to-pink-500 font-semibold whitespace-nowrap font-poppins capitalize w-fit text-lg md:text-xl ">
            <IoHeadset className="w-5 h-5 md:w-6 md:h-6" /> Listen all episodes
          </div>
        </a>
      </div>
    </div>
  );
};

export default Podcast;
