import React from "react";
import { FooterLinks } from "../data";
import { HashLink } from "react-router-hash-link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="Footer" className="relative bg-slate-800 ">
      <div className="container mx-auto px-4 py-6 ">
        <div className="flex justify-center flex-col divide-y-2 divide-sky-400">
          {/* link section */}
          <div className="py-4 flex items-start justify-between flex-wrap gap-4">
            {/* logo & and socials */}
            <h1 className="text-3xl leading-7 sm:text-4xl font-extrabold font-poppins tracking-tight max-w-md text-sky-500">
              Be a Part & Spread the Knowledge
            </h1>
            {/* Navigation links */}
            <NavigationLinks />
          </div>
          {/* copyright section */}
          <div className="p-4 flex items-center justify-center sm:justify-between flex-wrap gap-4">
            <p className="font-medium font-inter text-slate-100 tracking-tight text-center">
              © 2022 Community Classroom · All rights reserved.
            </p>
            {/* star us */}
            <a
              href={`https://github.com/commclassroom`}
              className="flex items-center gap-2 text-lg font-semibold capitalize px-4 py-1 rounded-lg bg-slate-300 text-slate-700 w-fit"
              target="_blank"
              rel="noreferrer"
            >
              {<FaGithub className="w-6 h-6" />} Star
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

function NavigationLinks() {
  return (
    <div className="w-full max-w-xl grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 my-4">
      {FooterLinks.map((footer, index) => (
        <div
          key={footer.heading + index}
          className="space-y-2 divide-y divide-sky-600 max-w-[10rem]"
        >
          {/* heading */}
          <h1 className="text-lg font-lexend font-semibold text-sky-400">
            {footer.heading}
          </h1>
          {/* links */}
          <div className="font-medium font-inter text-slate-300 flex flex-col justify-center gap-y-2 pt-2">
            {footer.links.map((link, index) => (
              <div key={link.title + index}>
                {/* lvl 1 linking */}
                {link?.isExternal ? (
                  <a
                    href={link.to}
                    className="hover:text-sky-400 flex items-center gap-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.title}{" "}
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>
                ) : (
                  <HashLink to={link.to} smooth className="hover:text-sky-400">
                    {link.title}
                  </HashLink>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// attribution:
// {/* <a href="https://storyset.com/business">Business illustrations by Storyset</a>; */}
// {/* <a href="https://storyset.com/work">Work illustrations by Storyset</a>; */}
// {/* <a href="https://storyset.com/web">Web illustrations by Storyset</a>; */}
