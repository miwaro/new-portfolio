/* eslint-disable react/no-unescaped-entities */
"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

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
        I am a software engineer, but I think of myself as more of a creator. I
        love the process of transforming ideas into reality. Whether I am
        coding, playing guitar, or a game of chess, it is always fascinating to
        me to analyze the endless paths to success. I find the process to be
        just as fulfilling, if not more so, than the end result.
      </p>
      <div className="flex items-center justify-center p-3 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.9,
          }}
        >
          <div className="flex flex-col sm:flex-row gap-8">
            <Image
              src="/hikingProfilePic.jpg"
              alt="Michael Rooze profile pic"
              width="300"
              height="200"
              quality="95"
              priority={true}
              className="object-cover border-[0.25rem] shadow-xl border-indigo-950 dark:border-indigo-100"
            />
            <Image
              src="/yellowstone.jpg"
              alt="Michael Rooze profile pic"
              width="300"
              height="200"
              quality="95"
              priority={true}
              className="object-cover border-[0.25rem] shadow-xl border-indigo-950 dark:border-indigo-100"
            />
          </div>
        </motion.div>
      </div>
      <p className="mt-2">
        My girlfriend and I recently moved from Denver to Philadelphia, and it
        has been great to explore the city. If you have any questions or want to
        connect, send me a message through the contact form at the bottom of
        this page. Talk to you soon!
      </p>
    </motion.section>
  );
}
