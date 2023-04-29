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
    <div className="bg-[#991714] flex gap-5">
      <Iconos data={data_progra} />
      <Iconos data={data_frontEnd} />
      <Iconos data={backEnd} />
      <Iconos data={bd} />
      <Iconos data={software} />
      <Iconos data={others} />
    </div>
  );
}
export default Tools;
