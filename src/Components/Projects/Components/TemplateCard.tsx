import { Card, CardBody } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Tag, TagLabel } from "@chakra-ui/react";
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
    <a href="">
      <Card
        className="w-60 h-[330px] text-white"
        bg={"#191724"}
        borderRadius={"2xl"}
      >
        <CardBody>
          <Image
            src={props.data.image}
            alt="Green double couch with wooden legs"
            borderRadius="md"
          />
          <Stack mt="2" spacing="3">
            <Heading size="md" color={"white"}>
              {props.data.name}
            </Heading>
            <div className="container_text">{props.data.description}</div>
          </Stack>
          <div className="container_tags">
            {props.data.tags.map((tag) => (
              <Tag
                mx={1}
                size="xs"
                colorScheme="red"
                borderRadius="md"
                key={tag}
              >
                <TagLabel p={1} fontSize={12}>
                  {tag}
                </TagLabel>
              </Tag>
            ))}
          </div>
        </CardBody>
      </Card>
    </a>
  );
}
export default TemplateCard;
