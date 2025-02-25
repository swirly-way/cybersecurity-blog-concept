import { MdOutlineSecurity } from "react-icons/md";
import { Box, Text } from "@chakra-ui/react";

export default function Navbar() {
    return (
        <div>
        <Box
        bg="rgba(7, 8, 55, 0.87)"
        p="4"
        color="white"
        display="flex"
        gap="4"
        fontSize="25px"
        alignItems="center"
      >
        <MdOutlineSecurity size={40} />
        <Text>Cybersecurity Essentials for Web Development</Text>
      </Box>
      </div>
    );


}