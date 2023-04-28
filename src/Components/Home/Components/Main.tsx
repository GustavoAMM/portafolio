import { Typewriter } from "react-simple-typewriter";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { SiNestjs } from "react-icons/si";
import "../styles/Main.css";
function Main() {
  return (
    <div className="bg-[#191724] flex rounded-xl p-11 gap-x-10">
      {/* User - Info */}
      <div style={{ fontFamily: "Poppins" }} className="w-1/3 grid text-base ">
        <img className="my-4" src="logo.png" alt="" />
        <p className="flex justify-center items-center gap-3 text-yellow-300">
          {" "}
          <IoLogoJavascript /> JavaScript Developer
        </p>
        <p className="flex justify-center items-center gap-3 text-cyan-400">
          {" "}
          <GrReactjs /> React Frontend
        </p>
        <p className="flex justify-center items-center gap-3 text-red-500">
          {" "}
          <SiNestjs /> Nest Backend
        </p>
      </div>

      {/* User - Text */}
      <div className="w-2/3 grid content-center gap-5 ">
        <div>
          <h1
            style={{ fontFamily: "Poppins" }}
            className="text-white text-[26px]"
          >
            I'm
          </h1>
          <span
            style={{ fontFamily: "Poppins" }}
            className="text-red-500 font-extrabold text-[50px]"
          >
            <Typewriter
              words={["Angel Montoya", "Developer", "CompSysEng"]}
              loop={100}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
        <p style={{ fontFamily: "Poppins" }} className="text-white">
          My name is Angel, I am a 20-year-old Mexican programmer who likes to
          develop many different things that come from my imagination. I am very
          passionate about programming and cybersecurity, I am fullstack but I
          prefer backend. I really like Python and JavaScript.
        </p>
      </div>
    </div>
  );
}
export default Main;
