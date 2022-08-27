import React from "react";
import projects from "../../data/projects";
import ProjectTile from "../../components/ProjectTile";
const Projects = () => {
  return (
    <div id="projects" className="projects-container p-2 pt-10">
      <div className="section-heading text-center border-b text-lg">
        Projects
      </div>
      <div className="p-2 text-center text-md">
        I've worked on many projects from scratch, are:
      </div>
      <div className="p-2 sm:p-14 flex flex-wrap text-md justify-center md:justify-between">
        {projects.length > 0 &&
          projects.map((project) => {
            return <ProjectTile key={project.name} data={project} />;
          })}
      </div>
    </div>
  );
};

export default Projects;
