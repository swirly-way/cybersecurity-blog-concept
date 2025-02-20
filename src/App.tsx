import "./App.css";
import { Container, Box, Text } from "@chakra-ui/react";
import { MdOutlineSecurity } from "react-icons/md"; // Ensure this is properly imported
import Hero from "./components/ui/Hero"; // Assuming Hero component is in the same folder

function App() {
  return (
    <Container
      className="App"
      width="100%"
      h="100vh" // Ensures the container takes the full viewport height
      display="flex"
      flexDirection="column" // Stack elements vertically
      maxW="none"
    >
      <Box
        bg="darkgreen"
        p="4"
        color="white"
        display="flex"
        gap="4"
        fontSize="25px"
        alignItems="center" // Centers content vertically in the header
      >
        <MdOutlineSecurity size={40} />
        <Text>Cybersecurity Essentials</Text>
      </Box>
      <Hero />

      {/* Footer or additional content */}
      {/* <Container>
        <Section />
        <Footer />
      </Container> */}
    </Container>
  );
}

export default App;
