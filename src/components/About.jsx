import React from "react";
import { AboutUs, aboutUsImage } from "../data";

const About = () => {
  return (
    <section className="relative overflow-hidden z-0 h-screen-75 bg-slate-700 flex items-center">
      <div className="relative container mx-auto p-4 ">
        {/* image */}
        <div className="flex-auto absolute right-0 md:right-16 -top-44 pointer-events-none overflow-hidden -z-10">
          <div className="flex items-center w-[72rem]">
            <img
              src={aboutUsImage}
              alt="AboutUs"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="z-10">
          {/* Head */}
          <h1 className="font-lexend font-extrabold text-4xl md:text-6xl text-white capitalize">
            About Us
          </h1>
          {/* about us */}
          <div className="mt-4 flex flex-col justify-center gap-y-2">
            {AboutUs.map((about, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-r from-white/70 to-white/50 border border-white/30 rounded-md text-slate-700 backdrop-blur-xl max-w-3xl"
              >
                <p className="font-inter  md:text-xl font-medium leading-6">
                  {about.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
