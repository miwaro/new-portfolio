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
      <p className="mb-3">
        After earning my degree in Physical Education, I soon realized I wanted
        to pursue a different path—one that would challenge me and allow me to
        apply my problem-solving skills creatively. That’s when I started my
        coding journey! My primary stack includes React.js, Next.js, Node.js,
        and MongoDB. I'm passionate about learning new technologies, which led
        me to rebuild my portfolio site from scratch. Currently, I'm seeking a
        full-time role as a software developer.
      </p>

      <p>
        Beyond coding, I enjoy chess and recently taught a class. I also play
        classical guitar and produce music with a home studio I've built over
        the years. Recently, I just relocated to Philadelphia, and I'm excited
        to explore the city and immerse myself in its rich history.
      </p>
    </motion.section>
  );
}
