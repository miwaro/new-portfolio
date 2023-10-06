import React from "react";
import angi from "@/public/Angi.png";
import beaverton from "@/public/Beaverton.png";
import bis from "@/public/BIS.png";
import charter from "@/public/charter.png";

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
      "I primarily worked on two projects, FMS and Helios. FMS provides multiple features to assist sales support in managing “fallouts”,issues that need to be resolved to complete orders. Helios is an internal testing harness for the Charter ordering services. It allows developers, business analysts, and QA testers to validate the successful and failure cases for the various ordering scenarios of the different clients. Both projects were built with React, Material UI, and React's Context API.",
    tags: ["React", "Context API", "MUI", "React Testing Library", "Jenkins"],
    imageUrl: charter,
  },
  {
    title: "Business Information Systems",
    description:
      "The main project I contributed to was called Star. Star is a React/Redux web application that provides multiple features to assist county clerks across the state of Tennessee in the handling of transactions for new license plates and vehicle registrations as well as the management of inventory.",
    tags: ["React", "Redux", "HTML", "CSS", "Javascript", "Typescript", "PHP"],
    imageUrl: bis,
  },
  {
    title: "Beaverton Toyota",
    description:
      "This is a web application built primarily with the React library, utilizing Redux for global state management. It provides multiple features and tools for handling the management of car sales in the automotive retail industry.",
    tags: ["React", "Redux", "HTML", "CSS", "Javascript"],
    imageUrl: beaverton,
  },
  {
    title: "Angi",
    description:
      "This is a web application where service providers can manage jobs for their customers by adding notes, communicate with clients via a chat service, as well as post progress pictures.",
    tags: ["React", "Redux", "HTML", "CSS", "Javascript"],
    imageUrl: angi,
  },
] as const;

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
