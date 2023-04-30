import { Card, CardBody } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Tag, TagLabel } from "@chakra-ui/react";
import "../styles/Main.css";
function ErrorCard() {
  return (
    <a href="">
      <Card
        className="w-60 h-[330px] text-white"
        bg={"#23253B"}
        borderRadius={"2xl"}
      >
        <CardBody>
          <Image
            src="error.jpg"
            alt="Green double couch with wooden legs"
            borderRadius="md"
          />
          <Stack mt="2" spacing="3">
            <Heading size="md" color={"white"} className="flex justify-center">
              Not found
            </Heading>
            <div className="container_text text-lg text-center">There are no projects with that name</div>
          </Stack>
          <div className="container_tags flex justify-center">
            <Tag mx={1} size="xs" colorScheme="red" borderRadius="md">
              <TagLabel p={1} fontSize={12}>
                404
              </TagLabel>
            </Tag>
          </div>
        </CardBody>
      </Card>
    </a>
  );
}
export default ErrorCard;
