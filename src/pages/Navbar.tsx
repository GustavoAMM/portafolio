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

import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const paths: { [key: string]: string } = {
    "/skills": "Skills",
    "/projects": "Projects",
    "/": "Home",
  };
  const [dir, setDir] = useState(
    () => paths[window.location.pathname] || "Home"
  );

  let active = "text-red-500 flex items-center gap-2";
  let inactive = "fill-white flex items-center gap-2";

  return (
    <div className="flex flex-col h-screen">
      <div className="flex bg-[#191724] text-white rounded-xl h-12 my-5 mx-12 ">
        <nav className="flex items-center justify-start gap-10 px-10 w-1/2">
          <Link to="/" onClick={() => setDir("Home")}>
            <p className={dir === "Home" ? active : inactive}>
              <TiHomeOutline className={dir === "Home" ? active : inactive} />
              Home
            </p>
          </Link>
          <Link to="/skills" onClick={() => setDir("Skills")}>
            <p className={dir === "Skills" ? active : inactive}>
              <TiInfoLargeOutline
                className={dir === "Skills" ? active : inactive}
              />
              Skills
            </p>
          </Link>
          <Link to="/projects" onClick={() => setDir("Projects")}>
            <p className={dir === "Projects" ? active : inactive}>
              <TiFolderOpen
                className={dir === "Projects" ? active : inactive}
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
