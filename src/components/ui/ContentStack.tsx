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
    <Stack
      mt={[4, 6, 8, 10]}
      maxW="container.lg"
      width={["90%", "85%", "80%", "70%"]}
      mx="auto"
    >
      {boxData.map((box, index) => (
        <Box
          key={index}
          bg="rgba(7, 8, 55, 0.87)"
          height={["auto", "auto", "auto"]}
          display="flex"
          flexDirection={"column"}
          justifyContent="space-evenly"
          alignItems="center"
          borderRadius="12px"
          p={[3, 4, 5, 6]}
          color="white"
          mb={[3, 4, 5, 6]}
        >
          <Box
            display="flex"
            alignItems="center"
            fontSize={["14px", "16px", "24px", "35px"]}
            ml={[2, 3, 4]}
            bg="rgba(255,255,255,0.1)"
            p={[2, 2, 3]}
            borderRadius="12px"
            border="1px solid rgba(255,255,255,0.2)"
          >
            <box.icon />{" "}
            <Text as="strong" ml="2">
              {box.title}
            </Text>
          </Box>
          <br />
          <Text fontSize={["16px", "18px", "20px"]} mt="10" mb="10">
            {box.description}
          </Text>
          <AccordionRoot collapsible defaultValue={["info"]}>
            {box.accordionItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value}
                bg="rgba(255,255,255,0.1)"
              >
                <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
                <AccordionItemContent color="gray.400" p="4">
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
