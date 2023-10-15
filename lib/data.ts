import React from "react";
import angi from "@/public/Angi.png";
import beaverton from "@/public/Beaverton.png";
import bis from "@/public/BIS.png";
import charter from "@/public/charter.png";
import knecht from "@/public/knecht-insurance.png";
import cricketTracker from "@/public/cricketTracker.png";
import ringtones from "@/public/ringtones.png";
import chanceChess from "@/public/chanceChess.png";
import theFleaZorkus from "@/public/theFleaZorkus.png";
import songwriting from "@/public/songwriting.png";
import invoice from "@/public/invoice (2).png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Charter Communications",
    description:
      "FMS and Helios. FMS provides multiple features to assist sales support in managing “fallouts”, issues that need to be resolved to complete orders. Helios is an internal testing harness for the Charter ordering services. It allows developers, business analysts, and QA testers to validate the successful and failure cases for the various ordering scenarios of the different clients.",
    tags: ["React", "Context API", "MUI"],
    imageUrl: charter,
    type: "Company Projects",
    url: "https://corporate.charter.com/",
  },
  {
    title: "Business Information Systems",
    description:
      "The main project I contributed to was called Star. Star is a React/Redux web application that provides multiple features to assist county clerks across the state of Tennessee in the handling of transactions for new license plates and vehicle registrations as well as the management of inventory.",
    tags: ["React", "Redux", "Typescript", "PHP"],
    imageUrl: bis,
    type: "Company Projects",
    url: "https://www.bisonline.com/",
  },
  {
    title: "Beaverton Toyota",
    description:
      "This app provides multiple features and tools for handling the management of car sales in the automotive retail industry, including a virtual showroom, a feature that allowed a customer to view details about each car.",
    tags: ["React", "Redux", "HTML", "CSS", "Javascript"],
    imageUrl: beaverton,
    url: "https://www.beavertontoyota.com/",
    type: "Company Projects",
  },
  {
    title: "Angi",
    description:
      "This is a web application where service providers can manage jobs for their customers by adding notes, communicate with clients via a chat service, as well as post progress pictures.",
    tags: ["React", "Redux", "HTML", "CSS", "Javascript"],
    imageUrl: angi,
    url: "https://www.angi.com/",
    type: "Company Projects",
  },
  {
    title: "Knecht Insurance",
    description:
      "This is a modern website I built for an insurance broker. The client requested the inclusion of a customer contact form to enable prospective customers to request a service quote. The backend seamlessly integrates with Sendinblue API and Google's reCaptcha security service has also been implemented.",
    tags: ["HTML", "CSS", "Javascript", "NodeJS", "Express"],
    imageUrl: knecht,
    type: "Freelance Projects",
    srcCode: "https://github.com/miwaro/knecht-insurance",
    backEndCode: "https://github.com/miwaro/emailer-api",
    url: "https://www.knechtinsurance.com/",
  },
  {
    title: "The Flea Zorkus",
    description:
      "This web app features artist, Ken Zell, an industrial artist based out of Portland, Oregon. The site features categories containing photographs of his work, videos, and a contact form.",
    tags: ["WordPress", "CSS"],
    imageUrl: theFleaZorkus,
    url: "https://thefleazorkus.com/",
    type: "Freelance Projects",
  },
  {
    title: "Songwriting-Inspirationator",
    description:
      "I collaborated with a colleague of mine on this really unique React project. It gives songwriters a wide array of options to enhance their approach to songwriting. Specific features I developed include mapping chord extensions, tooltip labeling, and SCSS styles.",
    tags: ["React", "SCSS"],
    imageUrl: songwriting,
    url: "https://www.songwriting-inspirationator.com/#/progressionator",
    srcCode: "https://github.com/alextotheroh/songwriting-inspirationator",
    type: "Freelance Projects",
  },
  {
    title: "Invoice Generator",
    description:
      "Here is a prototype that I constructed for a client launching a small business geared toward helping freelance developers. Users can create an invoice and generate a printable PDF. The app includes a wide array of options including the ability to calculate discounts and taxes. Additionally, the user can customize the theme as well as append notes to the document.",
    tags: ["React", "Redux"],
    imageUrl: invoice,
    srcCode: "https://github.com/miwaro/invoice-generator",
    type: "Freelance Projects",
  },
  {
    title: "Chance Chess",
    description:
      "This is an online multiplayer chess game I invented where moves are determined by cards drawn from a deck. (Each card correlates with a piece on the board). It includes a fully customized deck with sound and animation.",
    tags: ["React", "Redux", "WebSocket API", "Chess.JS"],
    imageUrl: chanceChess,
    url: "https://miwaro.github.io/",
    srcCode: "https://github.com/miwaro/chance-chess",
    type: "Personal Projects",
  },
  {
    title: "Cricket Tracker",
    description:
      "Cricket-Tracker is a web app that tracks up to 6 players or teams scores in Cricket, a popular version of darts.",
    tags: ["React", "Redux", "SCSS"],
    imageUrl: cricketTracker,
    type: "Personal Projects",
    url: "https://miwaro.github.io/cricket-tracker/",
    srcCode: "https://github.com/miwaro/cricket-tracker",
  },
  {
    title: "Phone Phonics",
    description:
      "I created Phone Phonics as a website hub to download free ringtones and text tones. The website currently features tracks produced by myself and my peers, with the capability to expand its library globally.",
    tags: ["React", "SCSS"],
    imageUrl: ringtones,
    srcCode: "https://github.com/miwaro/phone-phonics",
    type: "Personal Projects",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Jenkins",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Webpack",
  "Express",
  "Babel",
  "Jira",
  "Bash",
  "Framer Motion",
] as const;
