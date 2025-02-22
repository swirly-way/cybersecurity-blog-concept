export interface Accordion {
  value: string;
  title: string;
  text: string;
}

export const AccordionA: Accordion[] = [
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

export const AccordionB: Accordion[] = [
  {
    value: "a",
    title: "Use HTTPS: ",
    text: "Ensure all data sent to and from your site is encrypted with HTTPS. You can use services like Let's Encrypt for free SSL certificates.",
  },

  {
    value: "b",
    title: "Security Headers:",
    text: " Learn about HTTP security headers like Content-Security-Policy and Strict-Transport-Security to help prevent attacks.",
  },
  {
    value: "c",
    title: "Cross-Site Scripting (XSS):",
    text: " Understand how to sanitize and escape user inputs to avoid running harmful scripts in your website.",
  },
  {
    value: "d",
    title: "SQL Injection Protection:",
    text: " Always use parameterized queries or ORMs to avoid SQL injection vulnerabilities.",
  },
];

export const AccordionC: Accordion[] = [
  {
    value: "a",
    title: "OWASP:",
    text: "The Open Web Application Security Project (OWASP) is a nonprofit organization that focuses on improving the security of software. It maintains a widely recognized list known as the OWASP Top 10, which highlights the most common and critical web application vulnerabilities. This list is updated regularly to reflect emerging security threats and helps developers, security professionals, and organizations focus on the most prevalent risks.",
  },
  {
    value: "b",
    title: "Web Security News:",
    text: "Follow blogs and communities like Security Weekly, The Hacker News, or SANS Institute.",
  },
];

export const AccordionD: Accordion[] = [
  {
    value: "a",
    title: "Study open-source projects:",
    text: "You can learn a lot from reading the source code of popular open-source projects. Look for security-related features and how they are implemented.",
  },
  {
    value: "b",
    title: "Search for Security Audits",
    text: "Well-documented examples of secure application structure involved in code reviews or security audits to learn from other developers.",
  },
];

export const AccordionE: Accordion[] = [
  {
    value: "a",
    title: "Try Hack Me or OverTheWire:",
    text: "Safe environments for practicing ethical hacking. These platforms provide controlled, legal environments where you can learn and practice various hacking techniques, such as exploiting vulnerabilities and performing penetration testing. They offer hands-on challenges that simulate real-world scenarios, allowing you to build and test your skills without the risk of breaking the law. ",
  },
  {
    value: "b",
    title: "OWASP Juice Shop:",
    text: " A deliberately insecure web application for practice.",
  },
];

export const AccordionF: Accordion[] = [
  {
    value: "a",
    title: "ESLint and Prettier: ",
    text: "Code formatting tools with security plugins. ",
  },
  {
    value: "b",
    title: "Helmet:",
    text: "For securing your Node.js app with HTTP headers.",
  },
  {
    value: "c",
    title: "Dependabot:",
    text: "Keeps dependencies updated to prevent vulnerabilities.",
  },
  {
    value: "d",
    title: "SonarQube:",
    text: "Continuous inspection of code quality to perform automatic reviews with static analysis of code to detect bugs and vulnerabilities.",
  },
  {
    value: "e",
    title: "Snyk:",
    text: "Find and fix vulnerabilities in your dependencies, container images, and other applications.",
  },
];
