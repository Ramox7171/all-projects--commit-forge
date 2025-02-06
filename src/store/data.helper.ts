import { v4 as uuidv4 } from "uuid";

export interface ProjectItem {
  id: string;
  imgSrc: string;
  title: string;
  description: string;
  stack: string[];
  live: string;
  github: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: uuidv4(),
    imgSrc: "/img/only-card.png",
    title: "Fans Only Calculator",
    description:
      "This project is an  Fans Platform Calculator built with React, TypeScript, and Material-UI. It allows content creators to estimate their potential earnings on fan-based platforms by inputting key metrics such as reach, conversion rate, subscription price, and platform commission.",
    stack: ["React", "Vite.js", "TypeScript", "Material-UI"],
    live: "https://only-calc-alpha.vercel.app/",
    github: "https://github.com/Ramox7171/only-calc",
  },
  {
    id: uuidv4(),
    imgSrc: "/img/bakery-card.png",
    title: "Bakery Landing Page",
    description:
      "A modern, responsive landing page for a bakery offering home delivery subscriptions. Built using React and TypeScript, styled with Tailwind CSS, and featuring Lucide icons. The project includes sections such as hero, features, pricing, testimonials, and a step-by-step process showcase.",
    stack: [
      "React",
      "TypeScript",
      "Vite.js",
      "Tailwind CSS",
      "Lucide Icons",
      "Framer Motion",
    ],
    live: "https://lp-bakery.vercel.app/",
    github: "https://github.com/Ramox7171/lp-bakery",
  },
  {
    id: uuidv4(),
    imgSrc: "/img/qr-card.png",
    title: "QR generator",
    description:
      "This project is a QR Code Generator built using React and TypeScript. It allows users to input a URL, generate a QR code, and download it as a PNG file. The app uses the qrcode library to generate QR codes and is styled using SCSS for a clean and responsive user interface.",
    stack: ["React", "Vite.js", "TypeScript", "CSS/SCSS"],
    live: "https://qrgenerator-f6t8du4d2-ramox7171s-projects.vercel.app/",
    github: "https://github.com/Ramox7171/qrgenerator",
  },
  {
    id: uuidv4(),
    imgSrc: "/img/hood-card.png",
    title: "The Hood Project",
    description:
      "Project The Hood revitalizes the MTA game mod for GTA San Andreas. In collaboration with other developers and fans of this classic title, I create graphical interfaces for a custom server system. The project is centered around roleplay gameplay, where players immerse themselves in the server's life by portraying characters they've imagined, all within a unique district-based system.",
    stack: ["React", "Vite.js", "TypeScript", "CSS/SCSS"],
    live: "https://qrgenerator-f6t8du4d2-ramox7171s-projects.vercel.app/",
    github: "https://www.git.com",
  },
  {
    id: uuidv4(),
    imgSrc: "/img/quiz.png",
    title: "Roleplay Quiz",
    description:
      "Quiz App is an interactive quiz application built with React. It was created to verify the knowledge of players on the GTA San Andreas Roleplay server, but you can integrate any question source you like.",
    stack: ["JavaScript", "React.JS", "UUIDv4", "CSS/SCSS", "ADOBE PHOTOSHOP"],
    live: "https://hood-quiz.vercel.app/",
    github: "https://github.com/Ramox7171/roleplay-quiz",
  },
  {
    id: uuidv4(),
    imgSrc: "/img/website-card.png",
    title: "Personal Website",
    description:
      "A personal website project showcasing information about my work as a developer. The design evolves with me, incorporating various technologies, and includes a hidden link to my photography portfolio. Try to find it :)",
    stack: [
      "JavaScript",
      "React.JS",
      "React Router",
      "FRAMER MOTION",
      "CSS/SCSS",
      "EMAIL.JS",
      "ADOBE PHOTOSHOP",
    ],
    live: "https://ramoxpl.vercel.app/",
    github: "https://github.com/Ramox7171/RamoxMainPage",
  },
  {
    id: uuidv4(),
    imgSrc: "/img/rsp-card.png",
    title: "RSP Console",
    description:
      "This is a simple yet fun project developed while I was learning JavaScript in November 2023. The game mimics a classic handheld console experience, where you can play the iconic Rock, Paper, Scissors game.",
    stack: ["JavaScript", "HTML", "CSS/SCSS"],
    live: "https://ramox-rsp-game.vercel.app",
    github: "https://github.com/Ramox7171/Ramox-RSP-Game",
  },
  {
    id: uuidv4(),
    imgSrc: "/img/calc-card.png",
    title: "Retro Calculator",
    description:
      " This is a web-based calculator with a delightful retro design reminiscent of old-school displays. It features animated buttons and a stylish interface to make calculations enjoyable. Note: This project was created at the very beginning of my journey with JavaScript.",
    stack: ["JavaScript", "HTML", "CSS"],
    live: "https://ramox-retro-calc.vercel.app",
    github: "https://github.com/Ramox7171/Ramox-Retro-Calc",
  },
];
