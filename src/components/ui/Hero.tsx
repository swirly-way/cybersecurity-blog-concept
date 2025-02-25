import { Container, Box, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container
      mt={20}
      p={10}
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      maxW="100%"
      bg="rgba(7, 8, 55, 0.87)"
    >
      <Box mb={6}>
        <Text
          textStyle="7xl"
          maxW={["550px", "600px", "700px", "900px"]}
          width="full"
          fontSize={["40px", "20px", "50px", "60px"]}
        >
          How Can I As a Junior Web Developer Get Started with Cybersecurity?
        </Text>
      </Box>
      <Box>
        <Text textStyle="3xl" color="gray.500" maxW="600px" width="full" mt={5}>
          As a beginner, you don't need to become a cybersecurity expert right
          away, but you should start learning best practices to build secure
          applications.
        </Text>
      </Box>
    </Container>
  );
}
