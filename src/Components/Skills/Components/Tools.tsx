import Iconos from "./Label";
import { skillsData } from "../data/skills";

function Tools() {
  return (
    <div className="grid gap-5">
      {skillsData.map((category, index) => (
        <div className="flex gap-4" key={index}>
          <Iconos data={category.items} />
        </div>
      ))}
    </div>
  );
}
export default Tools;
