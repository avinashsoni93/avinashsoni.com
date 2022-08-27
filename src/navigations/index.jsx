import React from "react";
import { Route, Routes } from "react-router";

import Home from "../pages/Home";
import Timeline from "../pages/Timeline";
import Portfolio from "../pages/Portfolio";
import ContactMe from "../pages/ContactMe";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/timeline" element={<Timeline />} />
      <Route exact path="/portfolio" element={<Portfolio />} />
      <Route exact path="/contact-me" element={<ContactMe />} />
    </Routes>
  );
};
export default Router;
