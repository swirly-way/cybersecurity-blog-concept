import { FaLock } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa6";
import { GrUpdate } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { GiWeightLiftingUp } from "react-icons/gi";
import { AiFillSecurityScan } from "react-icons/ai";
import {
  Accordion,
  AccordionA,
  AccordionB,
  AccordionC,
  AccordionD,
  AccordionE,
  AccordionF,
} from "./accordionData";

interface BoxData {
  title: string;
  description: string;
  icon: React.ComponentType;
  accordionItems: Accordion[];
}

export const boxData: BoxData[] = [
  {
    title: "Basic Web Security Concepts",
    description: `Understanding fundamental security principles is crucial for any developer. This includes knowledge of concepts like confidentiality, integrity, and availability (the CIA triad).`,
    icon: FaLock,
    accordionItems: AccordionA,
  },
  {
    title: "Tools And Practices",
    description: `As a developer it's important to know about some essential security
          tools and best practices to implement.`,
    icon: FaToolbox,
    accordionItems: AccordionB,
  },
  {
    title: " Stay Updated",
    description: `Keep up with the latest security trends Cybersecurity is always
                evolving, and you should stay up-to-date with the latest trends and
                practices. Some great resources to follow: `,
    icon: GrUpdate,
    accordionItems: AccordionC,
  },
  {
    title: "Real Word Applications",
    description: `Learn from existing secure applications to understand how security is
          implemented in real-world scenarios. This can provide practical
          insights and help you apply security best practices in your own
          projects.`,
    icon: FaCode,
    accordionItems: AccordionD,
  },
  {
    title: "Get To Practice",
    description: ` Hands-on experience with security concepts is essential for learning.
          You can practice by participating in Capture The Flag (CTF)
          competitions, bug bounty programs, or by setting up your own security
          challenges. Other resources you can find helpful:`,
    icon: GiWeightLiftingUp,
    accordionItems: AccordionE,
  },
  {
    title: "Security Tools",
    description: `Tools to enhance your development security practices are essential.
          Here are some popular tools to consider integrating into your
          workflow:`,
    icon: AiFillSecurityScan,
    accordionItems: AccordionF,
  },
];
