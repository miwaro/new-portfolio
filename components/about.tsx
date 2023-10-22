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
        After graduating with a degree in
        <span> Physical Education</span>, I eventually realized I wanted to
        pursue something different, something that would really challenge me and
        enable me to utilize my problem solving skills in a creative way. So, I
        began my journey of learning how to code! My core stack is {""}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB. {""}
        </span>
        I am always looking to learn new technologies which is part of the
        reason I rebuilt my portfolio site. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">Aside from coding,</span> I enjoy playing
        chess, and have even started teaching a class. I play classical guitar
        and produce music with a small studio of equipment I have accumulated
        over the years. I moved to <span className="font-medium">Colorado</span>{" "}
        earlier this year and have really enjoyed exploring some of the amazing
        natural beauty here. I also picked up mountain biking, bouldering, and I
        can&apos;t forget to mention my favorite video game, Zelda.
      </p>
    </motion.section>
  );
}
