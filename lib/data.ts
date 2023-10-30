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
import oldPortfolio from "@/public/portfolio-page.png";
import newPortfolio from "@/public/newPortfolio.png";
import wordvark from "@/public/wordvark.png";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";
import { FaAppleWhole } from "react-icons/fa6";

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
    name: "Experience",
    hash: "#experience",
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
      "The main project I contributed to was 'Star'. Star provides multiple features to assist county clerks across the state of Tennessee in handling transactions for license plates and vehicle registrations as well as manage inventory.",
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
  {
    title: "This Portfolio Site",
    description:
      "You have arrived. I wanted to learn more about new technologies and also update my portfolio site. I was able to do both with building this site.",
    tags: ["React", "Next.JS", "TypeScript", "Tailwind"],
    imageUrl: newPortfolio,
    srcCode: "https://github.com/miwaro/new-portfolio",
    type: "Personal Projects",
  },
  {
    title: "Old Portfolio Site",
    description:
      "This is my old portfolio site. It contains most of the info you see here, but was built a long time ago with some outdated practices and tech",
    tags: ["React", "JavaScript", "SCSS"],
    imageUrl: oldPortfolio,
    srcCode: "https://github.com/miwaro/my-portfolio",
    type: "Personal Projects",
  },
  {
    title: "Wordvark",
    description:
      "This is a word game web app I created. You start with two letters and attempt to extend the word as many times as you can for points.",
    tags: ["React", "JavaScript", "CSS"],
    imageUrl: wordvark,
    srcCode: "https://github.com/miwaro/wordvark",
    url: "https://miwaro.github.io/wordvark/",
    type: "Personal Projects",
  },
];

export const skillsData = [
  "HTML",
  "CSS/SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
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
  "GraphQL",
] as const;

export const experiencesData = [
  {
    title: "Graduated from Indiana State University",
    location: "Terre Haute, IN",
    description: "Bachelor of Science Degree",
    icon: React.createElement(LuGraduationCap),
    date: "May-2012",
  },
  {
    title: "Teacher in Public School system",
    location: "Crawfordsville, IN",
    description: "Substitute => Teacher's Assistant => Student Aid",
    icon: React.createElement(FaAppleWhole),
    date: "2012-2015",
  },
  {
    title: "CED Greentech",
    location: "Austin, TX",
    description:
      "Realizing that teaching is not something I want to do for my whole career I took a chance in the solar industry, but this was also not what I was looking for",
    icon: React.createElement(CgWorkAlt),
    date: "2015-2016",
  },
  {
    title: "Self-taught coding journey begins!",
    location: "Crawfordsville, Indiana (hometown)",
    description:
      "Moved back home and began learning to code. Acquired certificates through various online resources: Team Treehouse, Codecademy, countless Udemy courses, YouTube tutorials, etc",
    icon: React.createElement(MdLibraryBooks),
    date: "2016-2017",
  },

  {
    title: "Angi - Web Developer",
    location: "Indianapolis, IN",
    description:
      "Landed first dev role with Angi, formerly known as Angie's List.",
    icon: React.createElement(FaReact),
    date: "2017 - 2019",
  },
  {
    title: "Beaverton Toyota - Web Developer",
    location: "Beaverton, OR",
    description:
      "Wanting to explore a bit more, I Moved out of the midwest to Portland, Oregon where I was able to find my next role with Beaverton Toyota",
    icon: React.createElement(FaReact),
    date: "2019 - 2021",
  },
  {
    title: "Business Information Systems - Web Developer",
    location: "Piney Flats, TN",
    description:
      "After a couple years in the Pacific Northwest, I was Looking to get a little closer to home, so I took a new role in Tennessee with Business Information Systems",
    icon: React.createElement(FaReact),
    date: "2021 - 2022",
  },
  {
    title: "Charter Communications (Spectrum) - Software Developer IV",
    location: "St Louis, MO (remote)",
    description:
      "I wanted to work for a larger company and work completely remotely and was able to do that with Charter and moved to Colorado at the beginning of 2023",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
] as const;
