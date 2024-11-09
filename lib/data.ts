import React from "react";
import bidMax from "@/public/bidMax.png";
import beaverton from "@/public/Beaverton.png";
import bis from "@/public/BIS.png";
import charter from "@/public/charter.png";
import knecht from "@/public/knecht-insurance.png";
import cricketTracker from "@/public/cricketTracker.png";
import ringtones from "@/public/ringtones.png";
import chanceChess from "@/public/chanceChess.png";
import theFleaZorkus from "@/public/theFleaZorkus.png";
import songwriting from "@/public/songwriting.png";
import wordvark from "@/public/wordvark.png";
import loopList from "@/public/loopList.png";
import deftones from "@/public/deftones.png";
import suffix from "@/public/suffix-screenshot.png";

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
    title: "Coconut Tree Software Inc.",
    description:
      "BidMax is a real estate application that allows users to view, buy, and sell properties. As the lead developer, I initiated the project as well as many of the core features.",
    tags: ["React", "Context API", "MUI", "Tailwind"],
    imageUrl: bidMax,
    type: "Company Projects",
  },
  {
    title: "Charter Communications",
    description:
      "Projects: FMS, Helios - FMS provides multiple features to assist sales support in managing “fallouts”, issues that need to be resolved to complete orders. Helios is an internal testing harness for the Charter ordering services. It allows developers, business analysts, and QA testers to validate the successful and failure cases for the various ordering scenarios of the different clients.",
    tags: ["React", "Context API", "MUI"],
    imageUrl: charter,
    type: "Company Projects",
    url: "https://corporate.charter.com/",
  },
  {
    title: "Suffix",
    description:
      "Suffix is a unique word game with authentication and a serverless database. Features include a leaderboard with time filters, language and difficulty selection, and much more. Try it out!",
    tags: [
      "Next.js",
      "React",
      "Zustand",
      "Clerk",
      "Xata",
      "Tailwind",
      "Framer-Motion",
    ],
    imageUrl: suffix,
    url: "https://next-suffix.vercel.app/",
    srcCode: "https://github.com/miwaro/next-suffix",
    type: "Personal Projects",
  },
  {
    title: "Business Information Systems",
    description:
      "The main project I contributed to was 'Star'. Star provides multiple features to assist county clerks across the state of Tennessee in handling transactions for license plates and vehicle registrations as well as manage inventory.",
    tags: ["Vue", "Vuex", "Typescript", "PHP"],
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
      "This web app features Ken Zell, an industrial artist, based out of Portland, Oregon. The site displays his art and multiple features including a contact and testimonial form.",
    tags: ["WordPress", "PHP", "CSS"],
    imageUrl: theFleaZorkus,
    url: "https://thefleazorkus.com/",
    type: "Freelance Projects",
  },
  {
    title: "Cricket Tracker",
    description:
      "Cricket-Tracker is a stylish web app that tracks up to 6 players or teams scores in Cricket, a popular version of darts. I plan on converting this to a mobile app with React Native at some point in the future.",
    tags: ["React", "Redux", "SCSS"],
    imageUrl: cricketTracker,
    type: "Personal Projects",
    url: "https://miwaro.github.io/cricket-tracker/",
    srcCode: "https://github.com/miwaro/cricket-tracker",
  },
  {
    title: "Songwriting-Inspirationator",
    description:
      "I collaborated with a colleague of mine on this really unique React project. It gives songwriters a wide array of options to enhance their approach to songwriting. Specific features I developed include mapping chord extensions, tooltip labeling, and SCSS styles.",
    tags: ["React", "Redux", "SCSS"],
    imageUrl: songwriting,
    url: "https://www.songwriting-inspirationator.com/#/progressionator",
    srcCode: "https://github.com/alextotheroh/songwriting-inspirationator",
    type: "Freelance Projects",
  },
  {
    title: "Loop-List",
    description:
      "This app allows you to not only create notes for each loop for each track for each song for multiple setlists, but you can also upload documents like tablature, lyrics, or even a video of yourself playing whatever instrument you play so you will always have a reference of what you played.",
    tags: ["React", "Typescript", "Tailwind"],
    imageUrl: loopList,
    srcCode: "https://github.com/miwaro/loop-manager",
    url: "https://loop-list.vercel.app/",
    type: "Personal Projects",
  },
  {
    title: "Chance Chess",
    description:
      "I am currently rebuilding this application due to the chess library no longer being maintained, package deprecations, and general architectural issues. However, this is an online multiplayer chess game I invented where moves are determined by drawing from a deck of cards",
    tags: ["React", "Redux", "WebSocket API", "Chess.JS"],
    imageUrl: chanceChess,
    url: "https://miwaro.github.io/chance-chess/",
    srcCode: "https://github.com/miwaro/chance-chess",
    type: "Personal Projects",
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
  {
    title: "Wordvark",
    description:
      "This is another word game I created. You start with two letters and attempt to extend the word as many times as you can for points.",
    tags: ["React", "JavaScript", "CSS"],
    imageUrl: wordvark,
    srcCode: "https://github.com/miwaro/wordvark",
    url: "https://miwaro.github.io/wordvark/",
    type: "Personal Projects",
  },
  {
    title: "Deftones Live",
    description:
      "This app allows you to search, sort, and filter through thousands of Deftones live shows. AWS has been used to implement a sign in page, but this has not been deployed and the site is still under construction.",
    tags: ["React", "Redux Toolkit", "AWS Amplify"],
    imageUrl: deftones,
    srcCode: "https://github.com/artslop/deftoneslive",
    url: "https://main.d7yvy6xnw6s8e.amplifyapp.com/",
    type: "Freelance Projects",
  },
];

export const skillsData = [
  "HTML",
  "CSS/SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Vue",
  "Vuex",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "Jenkins",
  "Jest",
  "Jira",
  "MUI",
  "Tailwind",
  "Framer Motion",
  "Webpack",
  "Babel",
  "Bash",
  "MongoDB",
] as const;
