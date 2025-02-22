import "./App.css";
import { Container, Box, Text } from "@chakra-ui/react";
import { MdOutlineSecurity } from "react-icons/md";
import Hero from "./components/ui/Hero";
import ContentStack from "./components/ui/contentStack.tsx";

function App() {
  return (
    <Container
      className="App"
      width="100%"
      h="100vh"
      display="flex"
      flexDirection="column"
      maxW="none"
    >
      <Box
        bg="darkblue"
        p="4"
        color="white"
        display="flex"
        gap="4"
        fontSize="25px"
        alignItems="center"
      >
        <MdOutlineSecurity size={40} />
        <Text>Cybersecurity Essentials</Text>
      </Box>
      <Hero />

      <ContentStack />
    </Container>
  );
}

export default App;
