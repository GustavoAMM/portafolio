import { BiUser, BiCake, BiBuildingHouse } from "react-icons/bi";

function Slidebar() {
  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="bg-[#191724] rounded-xl text-white grid justify-items-center gap-y-5"
    >
      <h2 className="font-extrabold text-[24px] mt-10">
        About <span className="text-red-500">Me</span>
      </h2>
      <div className="grid gap-3 items-center mb-10">
        <p className="flex gap-x-4 items-center">
          <BiUser /> Age 21
        </p>
        <p className="flex gap-x-4 items-center">
          <BiCake /> BIrthday: 31 March
        </p>
        <p className="flex gap-x-4 items-center">
          <BiBuildingHouse /> Country: México
        </p>
      </div>
    </div>
  );
}
export default Slidebar;
