/* eslint-disable react/no-unescaped-entities */
"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-2">
        I am a software developer, but above all, I am a creator. I thrive on
        solving real-world problems through creative solutions, which fuels my
        passion for software development. Continuously seeking new challenges
        and opportunities for growth, I recently rebuilt this portfolio to
        reflect my evolving skills, particularly with React, Next.js, and
        TypeScript.
      </p>
      <hr />

      <p className="mb-2">
        Beyond coding, I enjoy chess and recently taught a class. I also play
        classical guitar and produce music with a home studio I've built over
        the years. Recently, I just relocated to Philadelphia, and I'm excited
        to explore the city and immerse myself in its rich history.
      </p>
      <hr />

      <p>
        I am currently pursuing a full-time position as a software developer so
        feel free to reach out through the contact form at the bottom of this
        page. Thank you for checking out my site!
      </p>
    </motion.section>
  );
}
