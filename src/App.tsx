import { Container, Box, Text } from "@chakra-ui/react";
import { MdOutlineSecurity } from "react-icons/md";
import Hero from "./components/ui/Hero";

import "./App.css";

function App() {
  return (
    <Container className="App">
      <Box
        bg="darkgreen"
        w="100%"
        p="4"
        color="white"
        display="flex"
        gap="4"
        fontSize="25px"
      >
        <MdOutlineSecurity size={40} />
        <Text>Cybersecurity Essentials</Text>
      </Box>

      <Hero />
      {/* <Container>
        <Section />
        <Footer />
      </Container> */}
    </Container>
  );
}

export default App;
