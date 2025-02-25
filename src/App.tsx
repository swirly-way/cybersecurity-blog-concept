import "./App.css";
import { Container } from "@chakra-ui/react";
import Navbar from "./components/ui/Navbar.tsx";
import Hero from "./components/ui/Hero";
import ContentStack from "./components/ui/ContentStack.tsx";
import Footer from "./components/ui/Footer.tsx";

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
      <Navbar />
      <Hero />

      <ContentStack />
      <Footer />
    </Container>
  );
}

export default App;
