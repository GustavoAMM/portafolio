import { data } from "../data/data";
import { labels } from "../data/labels";
import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import ErrorCard from "./ErrorCard";
import Card from "./TemplateCard";
import "../styles/Main.css";

function Pro() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter((item) => {
    let datanew = item.name.toLowerCase().includes(search.toLowerCase());
    let datanew2 = cat === "All" || item.tags.includes(cat);
    return datanew && datanew2;
  });

  return (
    <div className="container_main  xl:w-[900px] md:w-[700px] w-[350px] xl:h-[500px] md:h-[900px] h-[700px] xl:mb-0 md:mb-4 mt-0">
      <Input
        placeholder="Search"
        value={search}
        onChange={handleChange}
        color={"white"}
        autoFocus={true}
        width='auto'
      />

      <div className="container_labels">
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
        <div className="container_cards p-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {filteredData.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Pro;
