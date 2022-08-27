import React, { useState } from "react";
import "./style.css";

const ProjectTile = ({ data }) => {
  const [img] = useState(data.img.url);

  return (
    <div className="project-tile p-2">
      <a
        className="project-tile-container"
        href={data.url}
        target={"_blank"}
        rel="noreferrer"
      >
        <img
          className="project-icon"
          width={data.img.style.width ? data.img.style.width : "80px"}
          src={img}
          alt={data.name}
        />
        <div className="project-name text-center">{data.name}</div>
      </a>
    </div>
  );
};
export default ProjectTile;
