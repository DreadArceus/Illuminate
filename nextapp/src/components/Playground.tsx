import { Stack, Box } from "@chakra-ui/layout";
import { LiveProvider, LivePreview, LiveEditor, LiveError } from "react-live";
import { Container } from "./Container";

interface PlaygroundProps {}

const code = `const Example = () => {
  const [count, setCount] = React.useState(1);
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={(e) => {
          setCount(count + 1);
        }}
      >
        click me daddy
      </button>
    </div>
  );
}
render(Example);`;

export const Playground: React.FC<PlaygroundProps> = ({}) => {
  return (
    <Container p={50}>
      <LiveProvider code={code} noInline={true}>
        <Stack direction="row">
          <Box mr={10}>
            <LiveEditor
              style={{ fontSize: "16px", boxShadow: "0px 0px 13px 0px" }}
            />
          </Box>
          <LivePreview />
          <LiveError />
        </Stack>
      </LiveProvider>
    </Container>
  );
};
