import React, { Fragment } from "react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Links, ExternalLinks } from "../data";
import { useApp } from "../context/AppProvider";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AiFillGithub } from "react-icons/ai";
import { Popover, Transition } from "@headlessui/react";

const Navbar = () => {
  const { width } = useApp();

  return (
    <nav className="w-full sticky inset-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-300/50">
      {/* upper nav */}
      <div className="lg:border-b-0 lg:border-transparent border-b border-slate-300/50 lg:h-20 gap-16 w-full container mx-auto flex items-center justify-between px-4 lg:px-0">
        {/* logo */}
        <div className="py-3 lg:py-0">
          <img
            src={Logo}
            alt="logo"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </div>

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
                <span className="hidden md:block">{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* lower nav */}
      {width < 1024 && <SmallScreenNavbar />}
    </nav>
  );
};

export default Navbar;

const SmallScreenNavbar = () => {
  return (
    <div className="h-16 flex items-center container mx-auto sm:px-4">
      <Popover className="relative z-0 px-4">
        {({ open }) => (
          <>
            <Popover.Button
              className={`outline-none z-10 p-2 rounded-full hover:bg-slate-50`}
            >
              <div className={`${open ? `text-rose-600` : `text-blue-600`}`}>
                {open ? (
                  <XMarkIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                ) : (
                  <Bars3Icon className="w-6 h-6 sm:w-7 sm:h-7" />
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
              <Popover.Overlay className="fixed inset-0 bg-blue-300/20 backdrop-blur-xl h-screen -z-10" />
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
              <Popover.Panel className="fixed inset-0 z-20 mt-[8.5rem] h-fit w-full max-w-md mx-auto p-4 rounded-md bg-white shadow-md shadow-slate-300/50">
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
  );
};
