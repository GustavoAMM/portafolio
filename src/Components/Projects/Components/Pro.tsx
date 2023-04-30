import { data } from "../data/data";
import { Input } from "@chakra-ui/react";
import { useState } from "react";
import Card from "./TemplateCard";
import ErrorCard from "./ErrorCard";
import "../styles/Main.css";

function Pro() {
  const [search, setSearch] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="grid bg-[#191724] p-12 rounded-lg w-[900px] h-[500px]">
      <Input
        placeholder="Search"
        value={search}
        onChange={handleChange}
        color={"white"}
      />
      {filteredData.length === 0 ? (
        <div className="flex justify-center mt-4">
          <ErrorCard />
        </div>
      ) : (
        <div className="container_cards p-5 grid grid-cols-3 gap-4">
          {filteredData.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Pro;
