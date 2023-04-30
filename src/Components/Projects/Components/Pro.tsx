import "../styles/Main.css";
import { data } from "../data/data";
import { labels } from "../data/labels";
import Card from "./TemplateCard";
import ErrorCard from "./ErrorCard";
import { Tag, TagLabel, Input, Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";

function Pro() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");

  console.log(cat);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter((item) => {
    let datanew = item.name.toLowerCase().includes(search.toLowerCase());
    let datanew2 = cat === "All" || item.tags.includes(cat);
    return datanew && datanew2;
    /* return item.name.toLowerCase().includes(search.toLowerCase()); */
  });
  console.log("filteredData", filteredData);

  return (
    <div className="grid bg-[#191724] p-12 rounded-lg w-[900px] h-[500px]">
      <Input
        placeholder="Search"
        value={search}
        onChange={handleChange}
        color={"white"}
      />

      <div className="flex justify-center my-4">
        {labels.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center m-2"
          >
            <Button
              colorScheme="linkedin"
              variant="outline"
              mx={1}
              size={"xs"}
              borderRadius={"md"}
              key={item.id}
              onClick={() => setCat(item.name)}
              isActive={cat === item.name}
            >
              {item.name}
            </Button>
          </div>
        ))}
      </div>
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
