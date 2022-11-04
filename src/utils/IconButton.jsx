import React from "react";

const IconButton = ({ className, children }) => {
  return (
    <button
      className={`outline-none p-2 rounded-full hover:bg-slate-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
