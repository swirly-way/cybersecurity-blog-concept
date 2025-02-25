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
    description: `Understanding fundamental security principles is crucial for any developer. This includes knowledge of concepts like confidentiality, integrity, and availability (the CIA triad). These principles are the foundation of cybersecurity and guide how you handle data, resources, and interactions between users and your application. Confidentiality ensures that data is only accessible to authorized parties, integrity maintains the accuracy and reliability of data, and availability ensures that information and services are accessible when needed. Mastering these concepts will provide you with the basis for building secure systems and applications.`,
    icon: FaLock,
    accordionItems: AccordionA,
  },

  {
    title: "Tools And Practices",
    description: `As a developer, it's important to know about some essential security tools and best practices to implement in your daily work. Security tools help automate security tasks, reduce human error, and enforce best practices for secure coding. Best practices, on the other hand, help you implement proven security measures like input validation, secure authentication, and secure session management. Some tools and practices include using HTTPS, setting security headers, and employing automated vulnerability scanners. By incorporating these tools and practices into your development workflow, you can protect your applications from common security threats and maintain a high level of security throughout the development lifecycle.`,
    icon: FaToolbox,
    accordionItems: AccordionB,
  },

  {
    title: "Stay Updated",
    description: `Cybersecurity is always evolving, and staying up-to-date with the latest trends, vulnerabilities, and security practices is essential for any developer. With new vulnerabilities and attack techniques emerging regularly, it's critical to keep learning and adapting your security approach. Following security blogs, forums, and attending webinars or conferences can provide valuable insights into the most current threats and industry developments. Some great resources to follow include OWASP (Open Web Application Security Project), The Hacker News, and Security Weekly. By staying updated, you'll be prepared to handle emerging threats and proactively address security issues before they impact your applications.`,
    icon: GrUpdate,
    accordionItems: AccordionC,
  },

  {
    title: "Real World Applications",
    description: `Learning from existing secure applications is one of the best ways to understand how security measures are implemented in real-world scenarios. By reviewing how popular applications and frameworks have addressed common security challenges, you can apply the same best practices to your own projects. Real-world applications also provide valuable case studies for identifying vulnerabilities and designing more secure systems. Analyzing code reviews, security audits, or source code from open-source projects can help you gain insights into practical implementation and security considerations that you may not have considered otherwise. These real-world examples serve as a foundation for applying security principles in your own codebase.`,
    icon: FaCode,
    accordionItems: AccordionD,
  },

  {
    title: "Get To Practice",
    description: `Hands-on experience with security concepts is essential for solidifying your understanding and improving your practical skills. Theory alone isn't enough to master cybersecurity; you need to practice and test your knowledge in real-world scenarios. Participating in Capture The Flag (CTF) competitions, bug bounty programs, or setting up your own security challenges allows you to apply what you've learned and gain valuable experience in a controlled environment. These activities challenge you to think creatively, solve problems, and apply security principles in a fun, competitive way. Additionally, online platforms like Try Hack Me and OverTheWire provide safe environments to practice ethical hacking and penetration testing.`,
    icon: GiWeightLiftingUp,
    accordionItems: AccordionE,
  },

  {
    title: "Security Tools",
    description: `Tools that enhance your development security practices are essential to streamline security efforts and ensure high-quality, secure code. Integrating security tools into your development workflow can help detect vulnerabilities early, enforce secure coding standards, and automate key tasks like dependency management and code analysis. Some popular tools include ESLint and Prettier for secure coding styles, SonarQube for static code analysis, and Dependabot for keeping dependencies up to date. By incorporating security tools like these, you'll be able to catch vulnerabilities before they make it to production and ensure that your development process follows secure practices from start to finish.`,
    icon: AiFillSecurityScan,
    accordionItems: AccordionF,
  },
];
