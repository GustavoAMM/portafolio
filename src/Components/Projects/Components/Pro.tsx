import { data } from "../data/data";
import Card from "./TemplateCard";
import { Input } from "@chakra-ui/react";
import { useState } from "react";

function Pro() {
  const [search, setSearch] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="grid bg-red-800">
      <Input placeholder="Search" value={search} onChange={handleChange} />
      <div className=" p-5 flex gap-4">
        {filteredData.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Pro;
