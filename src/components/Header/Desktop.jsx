import React from "react";
import NavBar from "../NavBar";
import "./style.css";

const Desktop = () => {
  return (
    <div className="header flex justify-between ">
      <div className="logo font-bold text-sm sm:text-xl text-white p-2.5">
        AS
      </div>
      <div className="navbar p-2.5">
        <NavBar />
      </div>
    </div>
  );
};

export default Desktop;
