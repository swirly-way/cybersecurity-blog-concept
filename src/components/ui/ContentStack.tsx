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
    <Stack mt={10} maxW="container.lg" width="90%" mx="auto">
      {boxData.map((box, index) => (
        <Box
          key={index}
          bg="darkblue"
          height="auto"
          display="flex"
          flexDirection={"column"}
          justifyContent="space-evenly"
          alignItems="center"
          color="white"
          mb={6} // Add margin for spacing between boxes
        >
          <Box display="flex" alignItems="center" fontSize="25px" ml="4">
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
