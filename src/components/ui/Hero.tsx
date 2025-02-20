import { Container, Box, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container display="flex" flexDirection="column">
      <Box>
        <Text textStyle="6xl">
          How Can Junior Web Developers Get Started with Cybersecurity?
        </Text>
      </Box>
      <Box>
        <Text textStyle="2xl" color="gray.500">
          As a beginner, you don't need to become a cybersecurity expert right
          away, but you should start learning best practices to build secure
          applications.
        </Text>
      </Box>
    </Container>
  );
}
