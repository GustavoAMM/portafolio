import { Outlet, Link } from "react-router-dom";
import {
  RiGithubLine,
  RiTwitterLine,
  RiLinkedinBoxLine,
  RiInstagramLine,
} from "react-icons/ri";
import {
  TiFolderOpen,
  TiInfoLargeOutline,
  TiHomeOutline,
} from "react-icons/ti";
import { useState } from "react";
function Navbar() {
  const [dir, setDir] = useState(() => {
    const path = window.location.pathname;
    if (path === "/skills") {
      return "Skills";
    } else if (path === "/projects") {
      return "Projects";
    } else {
      return "Home";
    }
  });

  return (
    <div className="flex flex-col h-screen">
      <div className="flex bg-[#191724] text-white rounded-xl h-12 my-5 mx-12 ">
        <nav className="flex items-center justify-start gap-10 px-10 w-1/2">
          <Link to="/" onClick={() => setDir("Home")}>
            <p
              className={
                dir === "Home"
                  ? "text-red-500 flex items-center gap-2"
                  : "fill-white flex items-center gap-2"
              }
            >
              <TiHomeOutline
                className={dir === "Home" ? "fill-red-500" : "fill-white"}
              />
              Home
            </p>
          </Link>
          <Link to="/skills" onClick={() => setDir("Skills")}>
            <p
              className={
                dir === "Skills"
                  ? "text-red-500 flex items-center gap-2"
                  : "fill-white flex items-center gap-2"
              }
            >
              <TiInfoLargeOutline
                className={dir === "Skills" ? "fill-red-500" : "fill-white"}
              />
              Skills
            </p>
          </Link>
          <Link to="/projects" onClick={() => setDir("Projects")}>
            <p
              className={
                dir === "Projects"
                  ? "text-red-500 flex items-center gap-2"
                  : "fill-white flex items-center gap-2"
              }
            >
              <TiFolderOpen
                className={dir === "Projects" ? "fill-red-500" : "fill-white"}
              />
              Projects
            </p>
          </Link>
        </nav>
        <nav className="w-1/2 flex items-center justify-end gap-10 px-10">
          <a href="https://github.com/GustavoAMM" target="_blank">
            <RiGithubLine className="fill-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/angel-montoya-mtz"
            target="_blank"
          >
            <RiLinkedinBoxLine className="fill-blue-400" />
          </a>
          <a href="https://twitter.com/soyangel_m245" target="_blank">
            <RiTwitterLine className="fill-blue-600" />
          </a>
          <a href="https://www.instagram.com/soyangel_m/" target="_blank">
            <RiInstagramLine className="fill-red-400" />
          </a>
        </nav>
      </div>
      <div className="mx-12 flex-1 overflow-y-aut mb-5 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
