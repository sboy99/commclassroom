import React from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  event,
  eventImg1,
  eventImg2,
  eventImg3,
  eventImg4,
  EventsFeatures,
} from "../data";

const Events = () => {
  return (
    <div
      id="events"
      className="min-h-screen-50 z-0 relative flex items-center justify-center py-8"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-100/80 to-slate-100/60 -z-10"></div>
      {/* bg */}
      <div className="absolute inset-0 overflow-hidden -z-20 opacity-25 pointer-events-none">
        <img
          src={event}
          alt="events"
          className="object-cover object-center w-full h-full grayscale"
        />
      </div>
      <div className="container mx-auto p-4 ">
        <div className="flex items-center justify-center gap-4 flex-wrap lg:flex-nowrap">
          {/* left */}
          <div className="w-full max-w-3xl ">
            {/* main */}
            <h2 className="text-3xl md:text-5xl text-slate-700 font-extrabold font-inter tracking-tight leading-4 md:leading-[2.75rem]">
              Join our{" "}
              <span className="capitalize text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 leading-8">
                Free and exciting
              </span>{" "}
              events
            </h2>
            {/* pointwise declaration */}
            <div className="md:border-l md:border-slate-300">
              {EventsFeatures.map((features, index) => (
                <div
                  className="relative md:px-4 py-2 flex flex-col md:flex-row items-start gap-x-3"
                  key={index}
                >
                  <span>{<features.icon className="w-8 h-8" />}</span>
                  <p className="text-slate-700 font-medium text-lg font-inter tracking-tight leading-6 pt-1 max-w-xl">
                    {features.desc}
                  </p>
                </div>
              ))}
            </div>
            {/* button */}
            <Link
              to={`/events`}
              className="flex items-center gap-x-2 w-fit mt-4 px-6 py-2 text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full capitalize font-medium text-lg"
            >
              Explore events <ChevronRightIcon className="w-5 h-5" />
            </Link>
          </div>
          {/* right */}
          <div className="mt-4 lg:mt-0">
            <ImageGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

function ImageGrid() {
  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-4 max-w-xl ">
      {/* 1st */}
      <div className="bg-slate-300 col-start-1 col-end-5 row-start-1 row-end-3 rounded-md overflow-hidden">
        <img
          src={eventImg1}
          alt="img1"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* 2nd */}
      <div className="bg-slate-300 col-start-5 col-span-full row-start-1 row-end-5 rounded-md overflow-hidden">
        <img
          src={eventImg2}
          alt="img2"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* 3rd */}
      <div className="bg-slate-300 col-start-1 col-end-5 row-start-3 row-span-full rounded-md overflow-hidden">
        <img
          src={eventImg4}
          alt="img3"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* 4th */}
      <div className="bg-slate-300 col-start-5 col-span-full row-start-5 row-span-full rounded-md overflow-hidden">
        <img
          src={eventImg3}
          alt="img4"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
}
