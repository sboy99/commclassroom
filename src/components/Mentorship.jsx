import React from "react";
import { Link } from "react-router-dom";
import { ImMap } from "react-icons/im";
import { MapIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { road, RoadmapPoints } from "../data";

const Mentorship = () => {
  return (
    <div id="roadmap" className="relative ">
      {/* map icon */}
      <div className="text-white absolute -top-20 md:-top-36 left-1/2 -translate-x-1/2  pointer-events-none">
        <ImMap className="w-40 h-40 md:w-80 md:h-80 " />
      </div>
      {/* bg road */}
      <div className="w-full h-80 -z-10 absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          <img
            src={road}
            alt="roadmap"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center bg-blend-hard-light opacity-50"
          />
          <div className="bg-gradient-to-t from-white to-white/0 absolute inset-x-0 bottom-0 h-32"></div>
        </div>
      </div>
      <div className="bg-white/80 min-h-64 backdrop-sm relative w-full h-full z-10 p-4">
        {/* main */}
        <div className="container mx-auto min-h-16 flex flex-col items-center gap-y-4">
          {/* head */}
          <h1 className="text-4xl md:text-6xl font-extrabold font-lexend tracking-tight uppercase text-transparent bg-gradient-to-r from-indigo-600 to-rose-500 bg-clip-text w-fit">
            Mentorship
            <p className="-mt-1 text-slate-600 text-lg md:text-2xl capitalize flex items-center justify-end gap-x-2 ">
              <ImMap className="h-5 w-5 md:w-8 md:h-8 " />
              by best in the industry
            </p>
          </h1>
          {/* navigate */}
          <Link
            to={`/roadmaps`}
            className="flex items-center gap-x-1 justify-center px-6 py-2 rounded-full text-sky-500 bg-sky-50 border border-sky-500 font-medium "
          >
            {" "}
            <MapIcon className="w-6 h-6" /> Explore all Roadmaps{" "}
            <ArrowRightIcon className="w-6 h-6" />
          </Link>
          <div className="space-y-4">
            {RoadmapPoints.map((points, index) => (
              <div
                key={index}
                className="max-w-md flex items-start justify-center gap-x-2 text-slate-700"
              >
                <span>{<points.icon className="w-7 h-7" />}</span>
                <p className="text-lg font-medium  leading-6">{points.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
