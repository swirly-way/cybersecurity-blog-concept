import { Box, Text, Stack } from "@chakra-ui/react";
import { boxData } from "../../utils/boxData";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";

export default function Content() {
  return (
    <Stack mt={10} maxW="container.lg" width="70%" mx="auto">
      {boxData.map((box, index) => (
        <Box
          key={index}
          bg="darkblue"
          height="400px"
          display="flex"
          flexDirection={"column"}
          justifyContent="space-evenly"
          alignItems="center"
          borderRadius="12px"
          p={6}
          color="white"
          mb={6}
        >
          <Box
            display="flex"
            alignItems="center"
            fontSize={["16px", "20px", "40px", "35px"]}
            ml="4"
            bg="rgba(255,255,255,0.1)" // Add a subtle background
            p="3" // Add some padding
            borderRadius="12px" // Your border radius
            border="1px solid rgba(255,255,255,0.2)" // Optional: add a subtle border
          >
            <box.icon />{" "}
            <Text as="strong" ml="2">
              {box.title}
            </Text>
          </Box>
          <br />
          <Text fontSize="20px">{box.description}</Text>
          <AccordionRoot collapsible defaultValue={["info"]}>
            {box.accordionItems.map((item, index) => (
              <AccordionItem key={index} value={item.value} bg="black">
                <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                <AccordionItemContent color="gray.400">
                  {item.text}
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </Box>
      ))}
    </Stack>
  );
}
