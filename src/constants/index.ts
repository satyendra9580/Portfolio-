import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  sales_studio,
  codenet,
  threejs,
  chat_app,
  book_Circle,
  task_managment,
  university,
  github_,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";
// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Competitive Programmer",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "React.js Developer",
    company_name: "Codenet Software Pvt Ltd.",
    icon: codenet,
    iconBg: "#383E56",
    date: "November 2024 - December 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "The Sales Studio",
    icon: sales_studio,
    iconBg: "#383E56",
    date: "March 2025 - September 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Creating and optimizing APIs for seamless integration between different system components.",
      "Working on the admin panel to input, update, and manage data and Developing a dashboard for store owners to manage their offers and promotions.",
      "Ensuring application security, performance optimization, and scalability.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Chat-Application",
    description:
      "Implemented features such as user authentication, one-to-one and group chat, and real-time message      updates and Optimized backend for secure and scalable message storage and retrieval.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chat_app,
    source_code_link: "https://github.com/satyendra9580/Chat-App-",
    live_site_link: "https://chat-app-gzdz.onrender.com/",
  },
  {
    name: "Book Circle",
    description:
      "BookCircle is a full-stack web application that connects book owners with book seekers, allowing users to exchange, rent, or give away books within their community.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Shad-cn",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: book_Circle,
    source_code_link: "https://github.com/satyendra9580/Book-Circle",
    live_site_link: "https://book-circle-eight.vercel.app/",
  },
  {
    name: "Task Management App",
    description:
      "A modern task management application built with React.js, Node.js, Express.js, and MongoDB.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Shadcn",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: task_managment,
    source_code_link: "https://github.com/satyendra9580/Task-Managment",
    live_site_link: "https://task-managment-rho.vercel.app/",
  },
  {
    name: "University Clone",
    description:
      "This project showcases a responsive and interactive website to help students find the best study abroad options.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: university,
    source_code_link: "https://github.com/satyendra9580/University_Insight",
    live_site_link: "https://university-insight.vercel.app/",
  },
  {
    name: "Github Hero Section Clone",
    description:
      "This project is clone of Github Hero Section using HTML CSS and core Javascript.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: github_,
    source_code_link: "https://github.com/satyendra9580/Github-Hero-Section-Clone",
    live_site_link: "https://satyendra9580.github.io/Github-Hero-Section-Clone/",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/satyendra-singh-8b265a255/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/satyendra9580",
  },
] as const;
