import { Box, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg="rgba(7, 8, 55, 0.87)"
      p="4"
      color="white"
      display="flex"
      fontSize="15px"
      textAlign="center"
      justifyContent="center"
      alignItems="center"
    >
      <Text>
        Made with React |{" "}
        <Link href="https:/github.com/swirly-way" color="blue.200">
          My Github
        </Link>{" "}
      </Text>
    </Box>
  );
}
