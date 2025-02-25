export interface Accordion {
  value: string;
  title: string;
  text: string;
}

export const AccordionA: Accordion[] = [
  {
    value: "a",
    title: "Encryption",
    text: "Learn about HTTPS and SSL certificates to protect the data exchanged between your website and users. Encryption ensures that the data remains private and secure during transmission, preventing eavesdropping or tampering. Start by understanding the difference between HTTP and HTTPS and learn to install SSL certificates using services like Let's Encrypt for secure communication.",
  },
  {
    value: "b",
    title: "Authentication & Authorization",
    text: "Understand how to properly handle user login, secure passwords, and implement role-based access control. Authentication verifies a user’s identity, while authorization defines the user’s access level. Focus on learning OAuth 2.0 and OpenID Connect for secure logins, and implement multi-factor authentication (MFA) and role-based access control (RBAC) to protect user data and resources.",
  },
  {
    value: "c",
    title: "Input Validation",
    text: "Always sanitize user inputs to prevent harmful data from being submitted to your server. Input validation helps avoid vulnerabilities like SQL injection and cross-site scripting (XSS). Learn techniques like regular expressions, input sanitization, and escaping characters to prevent malicious code execution.",
  },
  {
    value: "d",
    title: "Secure session management",
    text: "Learn how to manage sessions and cookies securely to prevent hijacking or other exploits. Proper session management involves storing session identifiers securely and implementing best practices like session expiration and secure cookies (e.g., HttpOnly, Secure, SameSite attributes). This minimizes the risk of session fixation and CSRF attacks.",
  },
];

export const AccordionB: Accordion[] = [
  {
    value: "a",
    title: "Use HTTPS: ",
    text: "Ensure all data sent to and from your site is encrypted with HTTPS. HTTPS ensures secure communication between the user and the server, protecting sensitive information from being intercepted. Learn to configure SSL/TLS certificates and use tools like Let's Encrypt to enable HTTPS on your website.",
  },
  {
    value: "b",
    title: "Security Headers:",
    text: "Learn about HTTP security headers like Content-Security-Policy (CSP) and Strict-Transport-Security (HSTS) to help prevent attacks. CSP mitigates XSS attacks, while HSTS forces browsers to only use HTTPS, preventing man-in-the-middle attacks. Implement these headers to harden your web application’s security.",
  },
  {
    value: "c",
    title: "Cross-Site Scripting (XSS):",
    text: "Understand how to sanitize and escape user inputs to avoid running harmful scripts in your website. XSS attacks occur when an attacker injects malicious scripts into your site, which then executes in users' browsers. Learn about different types of XSS and best practices like output encoding and input validation to prevent these attacks.",
  },
  {
    value: "d",
    title: "SQL Injection Protection:",
    text: "Always use parameterized queries or Object-Relational Mappers (ORMs) to avoid SQL injection vulnerabilities. SQL injection attacks occur when malicious SQL code is injected into your application’s database queries. Prevent this by avoiding raw SQL queries and using prepared statements or ORM tools for safer database interaction.",
  },
];

export const AccordionC: Accordion[] = [
  {
    value: "a",
    title: "OWASP:",
    text: "The Open Web Application Security Project (OWASP) is a nonprofit organization that focuses on improving the security of software. It maintains a widely recognized list known as the OWASP Top 10, which highlights the most common and critical web application vulnerabilities. This list is updated regularly to reflect emerging security threats and helps developers, security professionals, and organizations focus on the most prevalent risks. Learn about the OWASP Top 10 to understand common vulnerabilities and how to mitigate them in your own applications.",
  },
  {
    value: "b",
    title: "Web Security News:",
    text: "Follow blogs and communities like Security Weekly, The Hacker News, or SANS Institute to stay up-to-date with the latest trends and security threats. These resources offer insights into current security issues, expert opinions, and real-time news updates. Keeping informed is essential for adapting your security practices to emerging threats.",
  },
];

export const AccordionD: Accordion[] = [
  {
    value: "a",
    title: "Study open-source projects:",
    text: "You can learn a lot from reading the source code of popular open-source projects. Look for security-related features and how they are implemented. Open-source repositories often have well-documented code reviews and security discussions that can help you understand the best practices in secure application development.",
  },
  {
    value: "b",
    title: "Search for Security Audits",
    text: "Well-documented examples of secure application structure involved in code reviews or security audits can provide valuable learning. Reviewing how other developers have secured their applications and participated in security audits can help you apply best practices to your own projects.",
  },
];

export const AccordionE: Accordion[] = [
  {
    value: "a",
    title: "Try Hack Me or OverTheWire:",
    text: "Safe environments for practicing ethical hacking. These platforms provide controlled, legal environments where you can learn and practice various hacking techniques, such as exploiting vulnerabilities and performing penetration testing. They offer hands-on challenges that simulate real-world scenarios, allowing you to build and test your skills without the risk of breaking the law.",
  },
  {
    value: "b",
    title: "OWASP Juice Shop:",
    text: "A deliberately insecure web application for practice. OWASP Juice Shop is designed to be vulnerable, allowing you to identify and exploit security flaws. It’s a great resource for learning common web application security issues and how to mitigate them by practicing in a safe, controlled environment.",
  },
];

export const AccordionF: Accordion[] = [
  {
    value: "a",
    title: "ESLint and Prettier: ",
    text: "Code formatting tools with security plugins. ESLint and Prettier are static code analysis tools that help ensure your code is well-structured and secure. ESLint, when paired with security-focused plugins, can identify potential security vulnerabilities like improper input validation or unsafe practices. Learn how to configure these tools to enforce secure coding standards.",
  },
  {
    value: "b",
    title: "Helmet:",
    text: "For securing your Node.js app with HTTP headers. Helmet is a middleware for Express.js that helps you secure your Node.js app by setting various HTTP headers, including those for preventing clickjacking, XSS, and other types of attacks. Learn how to integrate Helmet into your Express.js applications to enhance security.",
  },
  {
    value: "c",
    title: "Dependabot:",
    text: "Keeps dependencies updated to prevent vulnerabilities. Dependabot automates the process of checking your project dependencies for known vulnerabilities and submitting pull requests to update outdated libraries. Learning to integrate Dependabot into your workflow ensures your dependencies are secure and up-to-date.",
  },
  {
    value: "d",
    title: "SonarQube:",
    text: "Continuous inspection of code quality to perform automatic reviews with static analysis of code to detect bugs and vulnerabilities. SonarQube helps identify code smells, bugs, and security issues early in the development process. Learn how to set up SonarQube in your project to continuously monitor code quality and security.",
  },
  {
    value: "e",
    title: "Snyk:",
    text: "Find and fix vulnerabilities in your dependencies, container images, and other applications. Snyk provides automated security checks for your dependencies and helps you identify vulnerabilities in your codebase. Learn to use Snyk to monitor and fix security issues in open-source libraries, container images, and infrastructure-as-code.",
  },
];
