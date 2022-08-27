import React from "react";
import "./style.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="header banner-bg bg-no-repeat bg-center opacity-25"></div>
      <div
        className="super-heading absolute top-0 p-2 text-2xl text-center text-slate-900
      sm:text-left sm:text-5xl sm:p-14 sm:w-3/6"
      >
        Hello, I'm <span className="highlight">Avinash Soni</span>.<br />A
        Front-End Developer living in Gurugram, Harayana, India.
      </div>
      <div
        className="super-heading absolute bottom-0 left-0 sm:right-0 p-2 text-lg text-slate-900
      text-left sm:text-xl sm:p-14 w-5/6"
      >
        For over 7 years, I have studied and inscribed the sacred runes and
        performed the arcane rituals that breathe life into the realm of the
        internet. <br />
        The web can sometimes be indistinguishable from magic, but I have the
        knowledge and patience required to make just about anything.
        <br /> I have recently jumped in to hybrid app development, which help
        me to connect more with a broader audience.
      </div>
    </div>
  );
};

export default Home;
