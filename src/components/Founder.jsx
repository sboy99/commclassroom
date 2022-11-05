import React from "react";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Socials = [
  {
    icon: FaTwitter,
    url: `https://twitter.com/kunalstwt`,
  },
  {
    icon: FaLinkedinIn,
    url: `https://www.linkedin.com/in/kunal-kushwaha/`,
  },
  {
    icon: FaInstagram,
    url: `https://www.instagram.com/kunalsig/`,
  },
];

const Founder = () => {
  return (
    <div
      id="founder"
      className="relative py-8 bg-gradient-to-tr from-indigo-600 to-cyan-500"
    >
      <div className="container mx-auto p-4 flex items-center justify-center">
        <div className="flex flex-col gap-y-4">
          {/* profile */}
          <div className="flex items-center justify-center gap-x-4">
            {/* photo */}
            <div className="p-1 bg-white rounded-full flex-shrink-0">
              <img
                src={"https://avatars.githubusercontent.com/u/42698533?v=4"}
                alt="founder"
                loading="lazy"
                decoding="async"
                className=" w-16 h-16 sm:w-20 sm:h-20 object-cover object-center rounded-full bg-slate-600"
              />
            </div>
            {/* bio */}
            <div className="font-inter text-white font-bold tracking-tight">
              <h1 className="text-2xl sm:text-3xl">Kunal Kushwaha</h1>
              <p className="text-slate-200 font-medium">
                Founder of Community Classroom
              </p>
            </div>
          </div>
          {/* details */}
          <p className="leading-5 max-w-3xl text-center text-slate-200 font-inter font-medium">
            Kunal is a developer from India. He is working towards empowering
            communities via Open Source and Education. He is currently doing
            Developer Advocacy at Civo, community management at Major League
            Hacking, is a CNCF Ambassador, GitHub Campus Expert, Gold Microsoft
            Learn Student Ambassador, Google Summer of Code Mentor at Red Hat
            Middleware.
          </p>
          {/* social handles */}
          <div className="flex flex-col items-center justify-center gap-y-2 divide-y divide-slate-300/50">
            <p className="text-lg text-white font-medium leading-none">
              Follow Kunal
            </p>
            <div className="flex items-center justify-center gap-x-4">
              {Socials.map((social, index) => (
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  className="p-2 rounded-full bg-sky-50 text-sky-600 mt-2"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
