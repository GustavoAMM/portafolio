import Button from "./Button";

function Curriculum() {
  return (
    <div className="bg-[#191724] rounded-xl text-white font-Poppins">
      <h2 className="font-extrabold text-[24px] my-5 flex justify-center font-[Poppins]">
        Curri<span className="text-red-500">culumn</span>
      </h2>
      <div className="flex justify-center mb-6">
        <Button />
      </div>
    </div>
  );
}

export default Curriculum;