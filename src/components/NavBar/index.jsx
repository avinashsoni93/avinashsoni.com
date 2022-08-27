import * as React from "react";
import Box from "@mui/material/Box";
import pdf from "../../images/resume/resume.pdf";

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
        href={pdf}
        download="Resume_Avinash_Soni.pdf"
      >
        Get Resume
      </a>
    </Box>
  );
};
export default NavBar;
