import Iconos from "./Label";
import { skillsData } from "../data/skills";

function Tools() {
  return (
    <div className="grid gap-5">
      {skillsData.map(({ name, items }) => (
        <div className="xl:flex grid grid-cols-2 xl:my-0 my-4 gap-4" key={name}>
          <Iconos data={items} />
        </div>
      ))}
    </div>
  );
}

export default Tools;
