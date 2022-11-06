import React from "react";
import { notFound } from "../data";
import { HashLink } from "react-router-hash-link";

const ErrorPage = () => {
  return (
    <section className="h-screen grid place-content-center">
      <div className="relative">
        {/* image */}
        <div className="w-full h-full max-w-[40rem] max-h-[40rem]">
          <img
            src={notFound}
            alt="page not found"
            loading="lazy"
            className="w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] lg:w-[40rem] lg:h-[40rem] object-cover object-center"
          />
        </div>
        {/* action */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 translate-y-1/2 text-center flex flex-col justify-center items-center gap-y-1">
          <h1 className=" text-4xl sm:text-6xl lg:text-7xl font font-inter font-extrabold tracking-tighter px-4 bg-gradient-to-r from-blue-600 to-blue-500 text-transparent bg-clip-text">
            Oops
          </h1>
          <p className="text-slate-700 text-xl font-semibold capitalize">
            Page Not Found!{" "}
          </p>
          {/* action */}
          <HashLink
            smooth
            to="/#top"
            className="px-6 py-1 rounded-full bg-blue-600/20 text-blue-600 font-medium text-lg "
          >
            {" "}
            Back To Home
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
