import React from "react";
import { handsOn } from "../data";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { CourseFeatures } from "../data";

const Courses = () => {
  return (
    <div
      id="course"
      className="relative min-h-screen-50 overflow-hidden z-0 bg-slate-800 py-8 lg:py-2"
    >
      {/* overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-indigo-800 via-purple-500 to-pink-500 opacity-90 z-0 "></div>
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
      <div className="relative container mx-auto p-4 lg:p-16 flex items-center justify-center gap-4 xl:justify-between flex-wrap ">
        {/* left */}
        <Link
          to={`/courses`}
          className="flex flex-col items-center justify-center gap-y-4"
        >
          <div className="text-white p-4 border-2 border-white rounded-xl">
            <BookOpenIcon className="w-40 h-40 md:w-80 md:h-80 animate-pulse" />
          </div>
          <div className="w-full text-center  md:text-xl px-4 py-1 lg:py-2 rounded-full bg-white text-slate-700 font-medium lg:font-semibold">
            Explore Courses
          </div>
        </Link>
        {/* right */}
        <div className="w-full lg:max-w-2xl">
          {/* head */}
          <h1 className="text-slate-300 font-extrabold text-xl md:text-4xl font-lexend tracking-tight">
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
    <div className="mt-4">
      {CourseFeatures.map((adv, index) => (
        <div
          key={index}
          className="relative pl-6 md:pl-8 py-3 border-l-2 border-slate-300"
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
          <p className=" leading-4 md:leading-5 text-sm md:text-base font-inter font-medium tracking-tight text-slate-300 pt-2">
            {adv.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
