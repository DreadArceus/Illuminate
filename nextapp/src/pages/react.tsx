import { Background } from "../components/Background";
import {
  Stack,
  Text,
  Box,
  ListItem,
  UnorderedList,
  Button,
  Link,
  OrderedList,
} from "@chakra-ui/react";
import React from "react";
import { LiveEditor, LivePreview, LiveProvider } from "react-live";

const scope = {
  Button,
  Text,
  useState: React.useState,
  useEffect: React.useEffect,
};

const introCode = `() => {
  const [counter, setCounter] = useState(0);
  return (
    <div style={{ padding: "6px", border: "1px white solid" }}>
      <Text align="center" p={5}>{counter}</Text>
      <Button onClick={() => setCounter(counter + 1)} colorScheme="orange">
        Increment
      </Button>
    </div>
  );
};`;

const react = () => {
  return (
    <Background>
      <Text align="center" fontSize="5xl">
        Pepega's Guide to React
      </Text>
      <Text align="center" fontSize="xl">
        by DreadArceus
      </Text>
      <Text align="center" fontSize="4xl">[Basic HTML-CSS-JS should be done before React]</Text>
      <Text fontSize="3xl">Introduction</Text>
      <Stack direction="row" maxH="60vh" spacing="3" p={5}>
        <Box>
          <Text maxW="40vw" fontSize="xl">
            So what is react? React is a javascript library for making
            UI/frontend. In this guide i will take you through creating a react
            app. Some points to keep in mind:
          </Text>
          <UnorderedList>
            <ListItem>
              If you want formal definition of anything, google.
            </ListItem>
            <ListItem>Coding along with the guide is recommended</ListItem>
            <ListItem>
              The code bit on the right is a live playground, i will use them
              whenever it fits
              <br />
              You can edit the code written and see the Result change.
              <br />
              (Try changing the colorScheme of the button from orange to blue!)
            </ListItem>
            <ListItem>I will be extending/updating this guide</ListItem>
          </UnorderedList>
        </Box>
        <LiveProvider code={introCode} scope={scope}>
          <Box>
            <Text marginBottom={3}>Live Editor</Text>
            <LiveEditor style={{ overflow: "auto", minWidth: "20vw" }} />
          </Box>
          <Box>
            <Text borderBottom="2px white solid" marginBottom={3}>
              Result
            </Text>
            <LivePreview />
          </Box>
        </LiveProvider>
      </Stack>
      <Text fontSize="3xl">Setup</Text>
      <Stack direction="row" spacing="3" p={5}>
        <Box>
          <Text maxW="40vw" fontSize="xl">
            First we gather some tools
          </Text>
          <UnorderedList>
            <ListItem>
              Install Node.js from{" "}
              <Link href="https://nodejs.org/en/" color="green.300" isExternal>
                the official website
              </Link>
            </ListItem>
            <ListItem>
              Install React Dev Tools for{" "}
              <Link
                href="https://addons.mozilla.org/en-US/firefox/addon/react-devtools/"
                color="orange"
                isExternal
              >
                Firefox
              </Link>{" "}
              or{" "}
              <Link
                href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en"
                color="yellow.300"
                isExternal
              >
                Chrome
              </Link>
              . The React Dev Tools icon will be blue/orange when the active
              page is made with react and grey otherwise.
            </ListItem>
          </UnorderedList>
        </Box>
      </Stack>
      <Stack spacing="3" p={5}>
        <Box>
          <Text maxW="40vw" fontSize="xl">
            Now we will use create-react-app to make our first react app
          </Text>
          <UnorderedList>
            <ListItem>
              Open a terminal, Run the command:{" "}
              <Text color="red.400">npx create-react-app my-app</Text>
            </ListItem>
            <ListItem>
              After its done processing, open the newly created my-app folder in
              your code editor (I will be using vscode)
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Text maxW="40vw" fontSize="xl">
            The folder should look like{" "}
            <Link href="/folder.png" isExternal color="blue.400">
              this
            </Link>
            .
          </Text>
        </Box>
      </Stack>
      <Text fontSize="3xl">Understanding the example app</Text>
      <Stack direction="row" spacing="3" p={5}>
        <Box>
          <Text maxW="40vw" fontSize="xl">
            First we should start the example app and see what it is
          </Text>
          <UnorderedList>
            <ListItem>
              Open terminal in the "my-app" directory, run the command:{" "}
              <Text color="red.400" as="span">
                yarn start
              </Text>
            </ListItem>
            <ListItem>
              The example app is now hosted at{" "}
              <Link href="http://localhost:3000/" color="grey" isExternal>
                localhost:3000
              </Link>{" "}
              (note that the page will reload automatically when files are
              changed)
            </ListItem>
            <ListItem>
              In the example app, you can see a spinning React logo and some
              text.
            </ListItem>
          </UnorderedList>
          <Text fontSize="xl">
            Now we should talk a bit about the files/folders in my-app
          </Text>
          <OrderedList>
            <ListItem>
              <Text as="span" color="aquamarine">
                package.json
              </Text>
              : this file contains dependencies, scripts and more.
              <br />
              In layman terms this file is like our project manager and it will
              be increasingly useful as we go deeper in react or any other
              javascript based technology.
            </ListItem>
            <ListItem>
              <Text as="span" color="aquamarine">
                src/App.js
              </Text>
              : Code in this file takes logo from{" "}
              <Text as="span" color="aquamarine">
                logo.svg
              </Text>{" "}
              and styles from
              <Text as="span" color="aquamarine">
                {" "}
                App.css
              </Text>
              , then it makes the HTML like structure as we saw in the example
              app and exports it for other files to use.
            </ListItem>
            <ListItem>
              <Text as="span" color="aquamarine">
                public/index.html
              </Text>
              : this html file does a few things but the main thing we care
              about is that it creates a div inside of body, with the id "root"
            </ListItem>
            <ListItem>
              <Text as="span" color="aquamarine">
                src/index.js
              </Text>
              : Code in this file takes styles from{" "}
              <Text as="span" color="aquamarine">
                index.css
              </Text>{" "}
              and the exported code from{" "}
              <Text as="span" color="aquamarine">
                App.js
              </Text>{" "}
              (wraps it in Strict Mode, for development) and renders it inside
              the root div as seen in index.html
            </ListItem>
          </OrderedList>
          <Text fontSize="l" fontStyle="italic" color="yellow">
            You can ignore the files I have not mentioned, for now
          </Text>
          <br />
          <Text fontSize="xl">
            Now you can use your HTML/CSS/JS skills to play around with App.js
            and watch the example app change.
          </Text>
          <Text fontSize="l" color="green.400">
            (Try changing text, adding HTML elements, edit the css files, as
            much as you want.)
          </Text>
        </Box>
      </Stack>
      <Text fontSize="xl">
        So far we have only done setup and then looked at and tinkered with the
        example app, with only knowledge of HTML/CSS/JS
        <br />
        Next we will see the basics of react code by making Tic-Tac-Toe
      </Text>
      <Text align="center" fontSize="5xl">
        To be continued...
      </Text>
    </Background>
  );
};

export default react;
