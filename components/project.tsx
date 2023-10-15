"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: StaticImageData | string;
  url: string;
  tags: string[];
  type: string;
  srcCode?: string | undefined;
  backEndCode?: string | undefined;
}

export default function Project({
  title,
  description,
  imageUrl,
  tags,
  url,
  srcCode,
  backEndCode,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 p-4 max-w-[42rem] h-96 border border-black/5 rounded-lg [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-all duration-700">
        <h3 className="text-xl font-semibold">{title}</h3>
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="sm:block top-8 -right-40 w-[28.25rem] rounded-lg shadow-2xl h-80 transition"
        />
        <div className="absolute bg-gray-300 inset-0 h-full w-full rounded-lg px-12 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <ul className="flex flex-wrap mt-4 gap-2">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-black text-xs leading-8">{description}</p>
            <div className="flex gap-4 text-xs">
              <button className="mt-8 bg-gray-200 hover:bg-gray-600 hover:text-white transition-all duration-500 text-black font-bold py-2 px-4 rounded-full focus:scale-110 hover:scale-110 active:scale-105">
                <a href={url} target="blank">
                  Explore the App
                </a>
              </button>
              {srcCode ? (
                <button className="mt-8 bg-gray-200 hover:bg-gray-600 hover:text-white transition-all duration-500 text-black font-bold py-2 px-4 rounded-full focus:scale-110 hover:scale-110 active:scale-105">
                  <a href={srcCode} target="blank">
                    View Source Code
                  </a>
                </button>
              ) : null}
              {backEndCode ? (
                <button className="mt-8 bg-gray-200 hover:bg-gray-600 hover:text-white transition-all duration-500 text-black font-bold py-2 px-4 rounded-full focus:scale-110 hover:scale-110 active:scale-105">
                  <a href={srcCode} target="blank">
                    Back-End Code
                  </a>
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
