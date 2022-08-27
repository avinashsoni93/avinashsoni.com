import * as React from "react";
import Box from "@mui/material/Box";

const preventDefault = (event) => event.preventDefault();

const NavBar = () => {
  return (
    <Box className="flex font-bold text-xs sm:text-lg" Click={preventDefault}>
      <a className="mx-1 sm:mx-2 hover:underline hover:highlight" href="#home">
        Home
      </a>
      <a
        className="mx-1 sm:mx-2 hover:underline hover:highlight"
        href="#skills"
      >
        Skills
      </a>
      <a className="mx-1 sm:mx-2 hover:underline hover:highlight" href="#exp">
        Experience
      </a>
      <a
        className="mx-1 sm:mx-2 hover:underline hover:highlight"
        href="#projects"
      >
        Projects
      </a>
      <a
        className="mx-1 sm:mx-2 hover:underline hover:highlight"
        href="#contact-me"
      >
        Contact Me
      </a>
    </Box>
  );
};
export default NavBar;
