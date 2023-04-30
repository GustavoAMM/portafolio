import { Card, CardBody, Heading, Image, Tag, TagLabel } from "@chakra-ui/react";
import {Link } from "react-router-dom";
import "../styles/Main.css";

function TemplateCard(props: {
  data: {
    id: number;
    name: string;
    description: string;
    tags: string[];
    image: string;
    url: string;
  };
}) {
  return (
    <>
      <Link to={props.data.url} target="_blank">
        <Card className="w-60 h-[310px] text-white" bg={"#23253B"} borderRadius={"2xl"}>
          <CardBody>
            <Image src={props.data.image} alt="Green double couch with wooden legs" borderRadius="md" />
            <Heading size="md" color={"white"} marginTop={1}>{props.data.name}</Heading>
            <div className="container_text">{props.data.description}</div>
            <div className="container_tags">
              {props.data.tags.map((tag) => (
                <Tag mx={1} size="xs" colorScheme="red" borderRadius="md" key={tag}>
                  <TagLabel p={1} fontSize={12}>{tag}</TagLabel>
                </Tag>
              ))}
            </div>
          </CardBody>
        </Card>
      </Link>
    </>
  );
}

export default TemplateCard;
