import { Heading } from "@chakra-ui/layout";
import { Container } from "../components/Container";
import { Playground } from "../components/Playground";

const index = () => {
  return (
    <Container p={10} h="100vh" w="100vw">
      <Heading>Playground example</Heading>
      <Playground />
    </Container>
  );
};

export default index;
