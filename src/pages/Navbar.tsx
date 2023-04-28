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

function Navbar() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex bg-[#191724] text-white rounded-xl h-12 my-5 mx-12 ">
        <nav className="flex items-center justify-start gap-10 px-10 w-1/2">
          <Link to="/">
            <p className="flex items-center gap-2">
              <TiHomeOutline /> Home
            </p>
          </Link>
          <Link to="/skills">
            <p className="flex items-center gap-2">
              <TiInfoLargeOutline />
              Skills
            </p>
          </Link>
          <Link to="/projects">
            <p className="flex items-center gap-2">
              <TiFolderOpen />
              Projects
            </p>
          </Link>
        </nav>
        <nav className="w-1/2 flex items-center justify-end gap-10 px-10">
          <RiGithubLine />
          <RiLinkedinBoxLine />
          <RiTwitterLine />
          <RiInstagramLine />
        </nav>
      </div>
      <div className="mx-12 flex-1 overflow-y-aut mb-5 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
