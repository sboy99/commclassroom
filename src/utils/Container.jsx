import React from "react";

const Container = ({
  children,
  Before = null,
  After = null,
  className = "",
}) => {
  return (
    <main className="relative z-0">
      {Before && <Before />}
      <div className="container mx-auto p-4">
        <div className={className}>{children}</div>
      </div>
      {After && <After />}
    </main>
  );
};

export default Container;
