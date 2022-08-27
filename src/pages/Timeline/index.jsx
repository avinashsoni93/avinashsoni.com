import React from "react";
import timeline from "../../data/timeline";
import { Chrono } from "react-chrono";
import "./style.css";

const Timeline = () => {
  return (
    <div id="exp" className="experience-container p-2 pt-12">
      <div className="section-heading text-center border-b text-lg">
        Experience
      </div>
      <div className="p-2 text-center text-md">
        I'm proud to have worked with some awesome companies:
      </div>
      <div className="exp section-description">
        <Chrono items={timeline} />
      </div>
    </div>
  );
};

export default Timeline;
