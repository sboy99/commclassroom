import React from "react";

const IconButton = ({ className, children, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className={`outline-none p-2 rounded-full hover:bg-slate-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
