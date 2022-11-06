import React from "react";
import { handsOn } from "../data";
import { BookOpenIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { CourseFeatures } from "../data";

const Courses = () => {
  return (
    <div
      id="course"
      className="relative min-h-screen-50 overflow-hidden z-0 bg-slate-800 py-8 lg:py-2"
    >
      {/* overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-tl md:bg-gradient-to-l from-indigo-800 via-purple-500 to-pink-500 opacity-90 z-0 "></div>
      {/* background */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src={handsOn}
          alt="bg"
          loading="lazy"
          className="w-full h-full object-cover object-center grayscale"
        />
      </div>

      {/* courses */}
      <div className="relative container mx-auto p-4 lg:p-16 flex items-center justify-center gap-2 flex-col ">
        {/* top */}
        <Link to={`/courses`} className="justify-self-start ">
          <div className="w-full text-center  md:text-xl px-6 py-1 rounded-full bg-white text-indigo-600 font-medium lg:font-semibold flex items-center justify-center gap-x-1">
            <BookOpenIcon className="w-6 h-6" /> Explore Courses{" "}
            <ArrowRightIcon className="w-6 h-6" />
          </div>
        </Link>
        {/* bottom */}
        <div className="w-full lg:max-w-2xl">
          {/* head */}
          <h1 className="text-slate-200 font-extrabold text-xl md:text-4xl font-lexend tracking-tight">
            Boost your career with{" "}
            <span className=" text-4xl leading-6 md:text-6xl capitalize text-white">
              Hands On Courses
            </span>
          </h1>
          {/* desc */}
          <Advantages />
        </div>
      </div>
    </div>
  );
};

export default Courses;

function Advantages() {
  return (
    <div className="mt-4 px-2">
      {CourseFeatures.map((adv, index) => (
        <div
          key={index}
          className="relative pl-6 md:pl-8 py-3 border-l-2 border-slate-300/40"
        >
          {/* Floating Icon  */}
          <div className="absolute top-6 left-0 -translate-x-1/2 -translate-y-1/2 p-1 md:p-2 rounded-full bg-white text-indigo-600">
            <adv.icon className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          {/* Main Title */}
          <h4 className="text-lg md:text-xl font-semibold text-slate-100 leading-5">
            {adv.title}
          </h4>
          {/* Desc */}
          <p className=" leading-4 md:leading-5 text-sm md:text-base font-medium tracking-tight text-slate-200 pt-2">
            {adv.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
