import { Grid, Box, Text } from "@chakra-ui/react";
// import AccordionA from "../accordionA";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import {
  boxContentA,
  boxContentB,
  boxContentC,
  boxContentD,
  boxContentE,
  boxContentF,
} from "@/utils/textContent";
import { FaLock } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa6";
import { GrUpdate } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { GiWeightLiftingUp } from "react-icons/gi";
import { AiFillSecurityScan } from "react-icons/ai";

export default function Content() {
  // I want to pass the grid items as props to the ContentGrid component
  // Every single grid item will be the text content of its own box component

  return (
    <Grid
      mt={10}
      templateColumns="repeat(3, 1fr)"
      gap="6"
      maxW="container.lg"
      width="90%"
      mx="auto"
    >
      <Box
        bg="darkblue"
        height="400px"
        display="flex"
        flexDirection={"column"}
        justifyContent="space-evenly"
        alignItems="center"
        color="white"
      >
        <Box display="flex" alignItems="center" fontSize="25px" ml="4">
          <FaLock />{" "}
          <Text as="strong" ml="2">
            Basic Web Security Concepts
          </Text>
        </Box>
        <br></br>
        <Text fontSize="20px">
          Basic Web Security Concepts Understanding fundamental security
          principles is crucial for any developer. This includes knowledge of
          concepts like confidentiality, integrity, and availability (the CIA
          triad).
        </Text>
        <AccordionRoot collapsible defaultValue={["info"]}>
          {boxContentA.map((item, index) => (
            <AccordionItem key={index} value={item.value} bg="black">
              <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
              <AccordionItemContent color="gray.400">
                {item.text}
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </Box>

      <Box
        bg="darkblue"
        height="400px"
        display="flex"
        flexDirection={"column"}
        justifyContent="space-evenly"
        alignItems="center"
        color="white"
      >
        <Box display="flex" alignItems="center" fontSize="25px" ml="4">
          <FaToolbox />{" "}
          <Text as="strong" ml="2">
            Tools And Practices
          </Text>
        </Box>
        <br></br>
        <Text fontSize="20px">
          As a developer it's important to know about some essential security
          tools and best practices to implement.
        </Text>
        <AccordionRoot collapsible defaultValue={["info"]}>
          {boxContentB.map((item, index) => (
            <AccordionItem key={index} value={item.value} bg="black">
              <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
              <AccordionItemContent color="gray.400">
                {item.text}
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </Box>

      <Box
        bg="darkblue"
        height="400px"
        display="flex"
        flexDirection={"column"}
        justifyContent="space-evenly"
        alignItems="center"
        color="white"
      >
        <Box display="flex" alignItems="center" fontSize="25px" ml="4">
          <GrUpdate />{" "}
          <Text as="strong" ml="2">
            Stay Updated
          </Text>
        </Box>
        <br></br>
        <Text fontSize="20px">
          Keep up with the latest security trends Cybersecurity is always
          evolving, and you should stay up-to-date with the latest trends and
          practices. Some great resources to follow:
        </Text>
        <AccordionRoot collapsible defaultValue={["info"]}>
          {boxContentC.map((item, index) => (
            <AccordionItem key={index} value={item.value} bg="black">
              <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
              <AccordionItemContent color="gray.400">
                {item.text}
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </Box>

      <Box
        bg="darkblue"
        height="400px"
        display="flex"
        flexDirection={"column"}
        justifyContent="space-evenly"
        alignItems="center"
        color="white"
      >
        <Box display="flex" alignItems="center" fontSize="25px" ml="4">
          <FaCode />{" "}
          <Text as="strong" ml="2">
            Real Word Applications
          </Text>
        </Box>
        <br></br>
        <Text fontSize="20px">
          Learn from existing secure applications to understand how security is
          implemented in real-world scenarios. This can provide practical
          insights and help you apply security best practices in your own
          projects.
        </Text>
        <AccordionRoot collapsible defaultValue={["info"]}>
          {boxContentD.map((item, index) => (
            <AccordionItem key={index} value={item.value} bg="black">
              <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
              <AccordionItemContent color="gray.400">
                {item.text}
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </Box>

      <Box
        bg="darkblue"
        height="400px"
        display="flex"
        flexDirection={"column"}
        justifyContent="space-evenly"
        alignItems="center"
        color="white"
      >
        <Box display="flex" alignItems="center" fontSize="25px" ml="4">
          <GiWeightLiftingUp />{" "}
          <Text as="strong" ml="2">
            Get To Practice
          </Text>
        </Box>
        <br></br>
        <Text fontSize="20px">
          Hands-on experience with security concepts is essential for learning.
          You can practice by participating in Capture The Flag (CTF)
          competitions, bug bounty programs, or by setting up your own security
          challenges. Other resources you can find helpful:
        </Text>
        <AccordionRoot collapsible defaultValue={["info"]}>
          {boxContentE.map((item, index) => (
            <AccordionItem key={index} value={item.value} bg="black">
              <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
              <AccordionItemContent color="gray.400">
                {item.text}
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </Box>

      <Box
        bg="darkblue"
        height="400px"
        display="flex"
        flexDirection={"column"}
        justifyContent="space-evenly"
        alignItems="center"
        color="white"
      >
        <Box display="flex" alignItems="center" fontSize="25px" ml="4">
          <AiFillSecurityScan />{" "}
          <Text as="strong" ml="2">
            Security Tools
          </Text>
        </Box>
        <br></br>
        <Text fontSize="20px">
          Tools to enhance your development security practices are essential.
          Here are some popular tools to consider integrating into your
          workflow:
        </Text>
        <AccordionRoot collapsible defaultValue={["info"]}>
          {boxContentF.map((item, index) => (
            <AccordionItem key={index} value={item.value} bg="black">
              <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
              <AccordionItemContent color="gray.400">
                {item.text}
              </AccordionItemContent>
            </AccordionItem>
          ))}
        </AccordionRoot>
      </Box>
    </Grid>
  );
}
