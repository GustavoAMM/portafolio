import { Typewriter } from "react-simple-typewriter";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { SiNestjs } from "react-icons/si";
import "../styles/Main.css";
function Main() {
  return (
    <div className="bg-[#191724] xl:flex sm:flex grid justify-items-center rounded-xl xl:w-full sm:w-full w-full h-full gap-4">
      <div className="xl:w-1/3 sm:w-80 w-52 grid justify-items-center content-center text-base font-[Poppins] md:mx-12">
        <img className="logo my-4 w-36" src="logo.png" />
        <div className="grid justify-center items-center">
          <p className="job-description text-yellow-300">
            <IoLogoJavascript /> JavaScript Developer
          </p>
          <p className="job-description text-cyan-400">
            <GrReactjs /> React Frontend
          </p>
          <p className="job-description text-red-500">
            <SiNestjs /> Nest Backend
          </p>
        </div>
      </div>
      <div className="w-full grid content-center">
        {
          <div className="xl:px-2 px-12">
            <h1 className="text-white xl:text-[26px] md:text-[20px] font-[Poppins]">I'm</h1>
            <span className="text-red-500 font-extrabold xl:text-[50px] md:text-[21px] sm:text-[50px] text-[30px] font-[Poppins]">
              <Typewriter
                words={["Angel Montoya", "Developer"]}
                loop={100}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
        }
        <p className="text-white font-[Poppins] text-justify  xl:mr-12 xl:m-0 m-12">
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
