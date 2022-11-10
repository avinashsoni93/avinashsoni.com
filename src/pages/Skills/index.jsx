import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="skills-container p-2 pt-10">
      <div className="section-heading text-center border-b p-2 text-lg">
        Skills & Tools
      </div>
      <div className="section-description flex justify-evenly">
        <div>
          <div className="text-sm">Languages</div>
          <div className="text-sm">Design</div>
          <div className="text-sm">JS Libraries and Frameworks</div>
          <div className="text-sm">Unit Testing</div>
          <div className="text-sm">Performance Profiling</div>
          <div className="text-sm">Analytics Tools</div>
        </div>

        <div>
          <div className="text-sm">JavaScript, TypeScript</div>
          <div className="text-sm">
            HTML, CSS, TailwindCSS, ANTDesign and Material
          </div>
          <div className="text-sm">
            React.js, Next.js, Redux, ReactNative, Backbone, Marionette, Underscore,
            Handlebars, and Require
          </div>
          <div className="text-sm">Jest, Karma, Jasmine and RTL</div>
          <div className="text-sm">
            Page Speed Insight, and Performance by Sentry
          </div>
          <div className="text-sm">Google Analytics, and MixPanel</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
