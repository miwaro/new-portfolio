export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Contact", hash: "#contact" },
] as const;

export const projectsData = [
  {
    title: "Lunar Cow Publishing",
    description:
      "At Lunar Cow, I design and implement new features for both the employee and client portals, leveraging Next.js for frontend development and Supabase for backend services and data management.",
    tags: ["Next.js, Supabase, AWS"],
    imageUrl: "/lunarCow.PNG",
    type: "Company Projects",
  },
  {
    title: "Coconut Tree Software Inc.",
    description:
      "BidMax is a real estate application that allows users to view, buy, and sell properties. As the lead developer, I initiated the project as well as many of the core features.",
    tags: ["React", "Context API", "MUI", "Tailwind"],
    imageUrl: "/bidMax.png",
    type: "Company Projects",
    url: "https://www.bidmax.com/",
  },
  {
    title: "Charter Communications",
    description:
      "Projects: FMS, Helios - FMS provides multiple features to assist sales support in managing “fallouts”, issues that need to be resolved to complete orders. Helios is an internal testing harness for the Charter ordering services. It allows developers, business analysts, and QA testers to validate the successful and failure cases for the various ordering scenarios of the different clients.",
    tags: ["React", "Context API", "MUI"],
    imageUrl: "/charter.png",
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
    imageUrl: "/suffix-screenshot.png",
    url: "https://next-suffix.vercel.app/",
    srcCode: "https://github.com/miwaro/next-suffix",
    type: "Personal Projects",
  },
  {
    title: "Business Information Systems",
    description:
      "The main project I contributed to was 'Star'. Star provides multiple features to assist county clerks across the state of Tennessee in handling transactions for license plates and vehicle registrations as well as manage inventory.",
    tags: ["Vue", "Vuex", "Typescript", "PHP"],
    imageUrl: "/BIS.png",
    type: "Company Projects",
    url: "https://www.bisonline.com/",
  },
  {
    title: "Knecht Insurance",
    description:
      "This is a modern website I built for an insurance broker. The client requested the inclusion of a customer contact form to enable prospective customers to request a service quote. The backend seamlessly integrates with Sendinblue API and Google's reCaptcha security service has also been implemented.",
    tags: ["HTML", "CSS", "Javascript", "NodeJS", "Express"],
    imageUrl: "/knecht-insurance.png",
    type: "Freelance Projects",
    srcCode: "https://github.com/miwaro/knecht-insurance",
    backEndCode: "https://github.com/miwaro/emailer-api",
  },
  {
    title: "The Flea Zorkus",
    description:
      "This web app features Ken Zell, an industrial artist, based out of Portland, Oregon. The site displays his art and multiple features including a contact and testimonial form.",
    tags: ["WordPress", "PHP", "CSS"],
    imageUrl: "/theFleaZorkus.png",
    url: "https://thefleazorkus.com/",
    type: "Freelance Projects",
  },
  {
    title: "Cricket Tracker",
    description:
      "Cricket-Tracker is a stylish web app that tracks up to 6 players or teams scores in Cricket, a popular version of darts. I plan on converting this to a mobile app with React Native at some point in the future.",
    tags: ["React", "Redux", "SCSS"],
    imageUrl: "/cricketTracker.png",
    type: "Personal Projects",
    url: "https://miwaro.github.io/cricket-tracker/",
    srcCode: "https://github.com/miwaro/cricket-tracker",
  },
  {
    title: "Songwriting-Inspirationator",
    description:
      "I collaborated with a colleague of mine on this really unique React project. It gives songwriters a wide array of options to enhance their approach to songwriting. Specific features I developed include mapping chord extensions, tooltip labeling, and SCSS styles.",
    tags: ["React", "Redux", "SCSS"],
    imageUrl: "/songwriting.png",
    url: "https://www.songwriting-inspirationator.com/#/progressionator",
    srcCode: "https://github.com/alextotheroh/songwriting-inspirationator",
    type: "Freelance Projects",
  },
  {
    title: "Loop-List",
    description:
      "This app allows you to not only create notes for each loop for each track for each song for multiple setlists, but you can also upload documents like tablature, lyrics, or even a video of yourself playing whatever instrument you play so you will always have a reference of what you played.",
    tags: ["React", "Typescript", "Tailwind"],
    imageUrl: "/loopList.png",
    srcCode: "https://github.com/miwaro/loop-manager",
    url: "https://loop-list.vercel.app/",
    type: "Personal Projects",
  },
  {
    title: "Lucky Rook (Chance-Chess)",
    description:
      "This is an online multiplayer chess game following a MERN stack architecture. The moves are determined by cards you draw and select. This is a rebuild of a previous app so the card aspect is still under construction.",
    tags: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Redux",
      "WebSocket API",
    ],
    imageUrl: "/chanceChess.png",
    srcCode: "https://github.com/miwaro/lucky-rook",
    type: "Personal Projects",
  },
  {
    title: "Phone Phonics",
    description:
      "I created Phone Phonics as a website hub to download free ringtones and text tones. The website currently features tracks produced by myself and my peers, with the capability to expand its library globally.",
    tags: ["React", "SCSS"],
    imageUrl: "/ringtones.png",
    srcCode: "https://github.com/miwaro/phone-phonics",
    type: "Personal Projects",
  },
  {
    title: "Invoice Generator",
    description:
      "Here is a prototype that I constructed for a client launching a small business geared toward helping freelance developers. Users can create an invoice and generate a printable PDF. The app includes a wide array of options including the ability to calculate discounts and taxes. Additionally, the user can customize the theme as well as append notes to the document.",
    tags: ["React", "Redux"],
    imageUrl: "/Invoice.png",
    srcCode: "https://github.com/miwaro/invoice-generator",
    type: "Freelance Projects",
  },
  {
    title: "Wordvark",
    description:
      "This is very simple word game I created. You start with two letters and attempt to extend the word as many times as you can for points.",
    tags: ["React", "JavaScript", "CSS"],
    imageUrl: "/wordvark.png",
    srcCode: "https://github.com/miwaro/wordvark",
    url: "https://miwaro.github.io/wordvark/",
    type: "Personal Projects",
  },
  {
    title: "Deftones Live",
    description:
      "This app allows you to search, sort, and filter through thousands of Deftones live shows.",
    tags: ["React", "Redux Toolkit", "AWS Amplify"],
    imageUrl: "/deftones.png",
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
  "Supabase",
] as const;
