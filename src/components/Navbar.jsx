import React, { Fragment } from "react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Links, ExternalLinks } from "../data";
import { useApp } from "../context/AppProvider";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AiFillGithub } from "react-icons/ai";
import { Popover, Transition } from "@headlessui/react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const { width } = useApp();

  return (
    <>
      <nav className="w-full min-h-16 sm:sticky sm:inset-0 z-50 backdrop-blur-lg bg-white/90 border-b border-slate-300/50">
        {/* upper nav */}
        <div className="lg:h-20 gap-16 w-full container mx-auto flex items-center justify-between px-4 lg:px-0">
          {/* logo */}
          <HashLink
            smooth
            to="/#top"
            className="py-3 lg:py-0 max-w-[7rem] sm:max-w-[9rem]"
          >
            <img
              src={Logo}
              alt="logo"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </HashLink>

          {/*links */}
          <div className="lg:divide-x-2 lg:divide-slate-300 flex items-center gap-x-2">
            {/* navigations */}
            {width >= 1024 && (
              // large & larger screens
              <ul className="items-center gap-x-2 hidden lg:flex">
                {Links.map((link, index) => (
                  <NavLink
                    to={link.to}
                    end
                    key={index}
                    className={({ isActive }) =>
                      `px-3 py-1 font-semibold rounded-md ${
                        isActive
                          ? `bg-blue-50 text-blue-600`
                          : `text-slate-500 hover:text-blue-600`
                      }`
                    }
                  >
                    {link.title}
                  </NavLink>
                ))}
              </ul>
            )}

            {/* external links */}
            <div className="flex items-center lg:pl-2 lg:divide-x-0 lg:divide-slate-300 divide-x-2 ">
              {ExternalLinks.map((link, index) => (
                <a
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  href={link.to}
                  className={`px-3 py-1 font-semibold flex items-center gap-x-1 ${link.color}`}
                >
                  {" "}
                  <link.Icon className="w-6 h-6" />{" "}
                  <span className="hidden sm:block">{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {/* lower nav */}
      {width < 1024 && <SmallScreenNavbar />}
    </>
  );
};

export default Navbar;

const SmallScreenNavbar = () => {
  return (
    <nav className="w-full sticky inset-x-0 top-0 sm:top-16 z-50 backdrop-blur-lg bg-white/90 border-b border-slate-300/50">
      <div className="min-h-16 sm:min-h-[3rem] flex items-center container mx-auto">
        <Popover className="relative z-0 px-4">
          {({ open }) => (
            <>
              <Popover.Button
                className={`outline-none z-10 p-2 rounded-full hover:bg-slate-50`}
              >
                <div className={`${open ? `text-rose-600` : `text-blue-600`}`}>
                  {open ? (
                    <XMarkIcon className="sm:w-6 sm:h-6 w-7 h-7" />
                  ) : (
                    <Bars3Icon className="sm:w-6 sm:h-6 w-7 h-7" />
                  )}
                </div>
              </Popover.Button>

              {/* overlay */}
              <Transition
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-20"
                leaveFrom="opacity-100 "
                leaveTo="opacity-0"
              >
                <Popover.Overlay className="fixed inset-0 bg-blue-300/20 backdrop-blur-2xl h-screen -z-10" />
              </Transition>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="fixed inset-0 z-20 mt-16 sm:mt-12 h-fit w-full max-w-md mx-auto p-4 rounded-md bg-white shadow-md shadow-slate-300/50">
                  <ul className="grid grid-cols-2 gap-2 place-content-center">
                    {Links.map((link, index) => (
                      <Popover.Button
                        as={NavLink}
                        key={index + 1}
                        to={link.to}
                        className={`
                          hover:text-blue-600 text-slate-700
                         font-semibold flex items-center gap-x-3 px-4 py-2 `}
                      >
                        <span>{<link.icon className="w-6 h-6" />}</span>{" "}
                        {link.title}
                      </Popover.Button>
                    ))}
                  </ul>
                  <a
                    href="https://github.com/commclassroom/commclassroom"
                    target={`_blank`}
                    rel="noreferrer"
                    className="text-center w-full bg-slate-100 rounded-md text-slate-700 font-semibold capitalize py-2 px-4 mt-2 flex items-center justify-center gap-x-2"
                  >
                    <AiFillGithub className="w-6 h-6" />
                    Github
                  </a>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </nav>
  );
};
