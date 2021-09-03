import React from "react";

export const Row = ({ children }: { children: object }) => {
  return (
    <>
      <div className="row">
        <div className="column column-20"></div>
        <div className="column column-60">{children}</div>
      </div>
    </>
  );
};
