import React from "react";
import { Container } from "../../utils";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { credits } from "../../data";

const Credit = () => {
  return (
    <Container className="rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
      {credits.map((credit, index) => (
        <div
          key={credit.toWhom + index}
          className="w-full max-w-2xl p-4 divide-y divide-blue-600/25 rounded-md bg-white drop-shadow-md shadow-slate-300/50"
        >
          <div className="px-2 py-1 sm:px-4 sm:pb-2 flex items-center justify-between gap-4 text-blue-600">
            <p className=" font-poppins font-extrabold text-3xl sm:text-5xl ">
              {credit.toWhom}
            </p>
            <a href={credit.visit} target={`_blank`} rel="noreferrer">
              <ArrowTopRightOnSquareIcon className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </div>
          <p className=" p-2 leading-5 sm:leading-normal sm:p-4 tracking-tight sm:text-lg font-medium text-slate-700">
            {credit.desc}
          </p>
        </div>
      ))}
    </Container>
  );
};

export default Credit;
