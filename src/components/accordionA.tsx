import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";

export default function AccordionA() {
  return (
    <AccordionRoot>
      {items.map((item, index) => (
        <AccordionItem key={index} value={item.value}>
          <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
          <AccordionItemContent>{item.text}</AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
}

const items = [
  {
    value: "a",
    title: "Encryption",
    text: "Learn about HTTPS and SSL certificates to protect the data exchanged between your website and users.",
  },
  {
    value: "b",
    title: "Authentication & Authorisation",
    text: "Understand how to properly handle user login, secure passwords, and implement role-based access control.",
  },
  {
    value: "c",
    title: "Input Validation",
    text: "Always sanitize user inputs to prevent harmful data from being submitted to your server.",
  },
  {
    value: "d",
    title: "Secure session management",
    text: "Learn how to manage sessions and cookies securely to prevent hijacking or other exploits.",
  },
];
