import { Proyectos } from "../data/ProjectsData";
import Card from "./TemplateCard";
function Pro() {
  return (
    <div className="bg-red-800 p-5">
      <Card data={Proyectos[0]} />
    </div>
  );
}

export default Pro;
