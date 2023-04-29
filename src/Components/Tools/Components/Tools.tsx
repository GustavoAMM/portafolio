import Iconos from "./Label";

import {
  progra,
  frontEnd,
  backEnd,
  bd,
  software,
  others,
} from "../data/skills";

function Tools() {
  const data_progra = progra;
  const data_frontEnd = frontEnd;
  return (
    <div className="grid gap-5">
      <div className="flex gap-4">
        <Iconos data={data_progra} />
      </div>
      <div className="flex gap-4">
        <Iconos data={data_frontEnd} />
      </div>
      <div className="flex gap-4">
        <Iconos data={backEnd} />
      </div>
      <div className="flex gap-4">
        <Iconos data={bd} />
      </div>
      <div className="flex gap-4">
        <Iconos data={software} />
      </div>
      <div className="flex gap-4">
        <Iconos data={others} />
      </div>
    </div>
  );
}
export default Tools;
