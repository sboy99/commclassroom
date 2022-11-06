import React from "react";
import { blogingBro, BlogPoints } from "../data";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { SiHashnode } from "react-icons/si";

const Blog = () => {
  return (
    <div id="blog" className="relative py-8 ">
      <div className="relative container mx-auto px-4 py-8 bg-blue-600/10 rounded-lg overflow-hidden min-h-screen-50">
        {/* overlay */}
        <div className="absolute -left-1/2 translate-x-1/2 -bottom-44 -z-10 grayscale -scale-x-100 bg-blend-lighten opacity-5 ">
          <img
            src={blogingBro}
            alt="blog"
            loading="lazy"
            decoding="async"
            className="w-[60rem] h-[60rem]"
          />
        </div>

        <div className="flex items-center gap-x-4 justify-center flex-wrap">
          {/* image section */}
          <div className="w-full h-full max-w-[35rem] max-h-[35rem]">
            <img
              src={blogingBro}
              alt="blog"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* text section */}
          <div className="max-w-2xl flex flex-col items-center justify-center gap-2">
            {/* action */}
            <a
              href="https://blog.commclassroom.org/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-1 rounded-full flex items-center gap-x-2 text-lg font-inter font-semibold text-white bg-blue-600"
            >
              <SiHashnode className="w-5 h-5" /> Expore Blogs{" "}
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </a>
            {/* heads */}
            <h2 className="text-center text-slate-700 font-lexend leading-8 sm:leading-10 font-extrabold tracking-tight text-4xl sm:text-5xl">
              Write{" "}
              <span className="text-5xl sm:text-6xl text-blue-600">Blogs</span>{" "}
              to win Amazing prizes
            </h2>

            {/* points */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 ">
              {BlogPoints.map((blog, index) => (
                <div key={index} className="flex items-start gap-4 max-w-sm">
                  {/* icon */}
                  <div className="p-1 border border-blue-600 text-blue-600 rounded-md">
                    {<blog.icon className="w-6 h-6" />}
                  </div>
                  {/* title & desc */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-inter font-semibold text-slate-800 tracking-tight capitalize">
                      {blog.title}
                    </h4>
                    <p className="font-inter font-medium text-slate-600 tracking-tight leading-5">
                      {blog.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
