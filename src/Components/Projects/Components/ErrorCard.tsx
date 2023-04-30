import { Card, CardBody, Stack, Heading, Image, Tag, TagLabel } from "@chakra-ui/react";
import "../styles/Main.css";

function ErrorCard() {
  return (
    <>
      <Card w="60" h="330px" bg="#23253B" borderRadius="2xl">
        <CardBody>
          <Image src="error.jpg" alt="Green double couch with wooden legs" borderRadius="md" />
          <Stack mt="2" spacing="3">
            <Heading size="md" color="white" textAlign="center">
              Not found
            </Heading>
            <div className="container_text text-lg text-center">There are no projects with that name</div>
          </Stack>
          <div className="container_tags flex justify-center">
            <Tag size="xs" colorScheme="red" borderRadius="md">
              <TagLabel p={1} fontSize={12}>
                404
              </TagLabel>
            </Tag>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default ErrorCard;
