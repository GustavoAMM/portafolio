import { BiUser, BiCake, BiBuildingHouse } from "react-icons/bi";

function Sidebar() {
  return (
    <div className="bg-[#191724] rounded-xl text-white grid justify-items-center gap-y-5 p-10">
      <h2 className="font-extrabold text-2xl">
        About <span className="text-red-500">Me</span>
      </h2>
      <div className="grid gap-3 items-center">
        <p className="flex items-center">
          <BiUser className="mr-2" /> 21 years old
        </p>
        <p className="flex items-center">
          <BiCake className="mr-2" /> Born on March 31st
        </p>
        <p className="flex items-center">
          <BiBuildingHouse className="mr-2" /> From México
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
