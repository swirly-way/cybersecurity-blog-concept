import "./App.css";
import { Container, Box, Text } from "@chakra-ui/react";
import { MdOutlineSecurity } from "react-icons/md";
import Hero from "./components/ui/Hero";
import ContentGrid from "./components/ui/ContentGrid";

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
        bg="darkgreen"
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

      <ContentGrid />
    </Container>
  );
}

export default App;
