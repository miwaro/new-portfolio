"use client";

import { useState, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FaInfoCircle } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";

interface ProjectProps {
  title?: string | undefined;
  description?: string | undefined;
  imageUrl: string | StaticImport;
  url?: string | undefined;
  tags?: string[] | undefined;
  type?: string | undefined;
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
  const [isRotated, setRotated] = useState(true);

  const handleCardClick = () => {
    setRotated(!isRotated);
  };
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
      className="group"
    >
      <section
        className="cursor-pointer bg-gray-100 p-4 max-w-[42rem] h-[26rem] border border-black/5 rounded-lg transition-all duration-700 [transform-style:preserve-3d] dark:text-white dark:bg-white/10"
        onClick={handleCardClick}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 dark:bg-white dark:bg-opacity-10"
            onClick={handleCardClick}
          >
            <>
              View Info <FaInfoCircle />{" "}
            </>
          </button>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="sm:block top-8 -right-40 w-[28.25rem] rounded-lg shadow-2xl h-80 transition hover:scale-105 duration-700 object-cover"
        />

        <div
          className={` ${
            isRotated ? " [transform:rotateY(180deg)]" : ""
          } absolute bg-gray-300 dark:bg-gray-800 inset-0 w-full rounded-lg px-12 text-center [backface-visibility:hidden]`}
        >
          <button
            type="submit"
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60 absolute top-5 right-5"
            onClick={handleCardClick}
          >
            <FaArrowRotateLeft className="text-xs opacity-70 transition-all" />{" "}
          </button>
          <div className="flex min-h-full flex-col items-center justify-center">
            <ul className="flex flex-wrap mt-4 gap-2">
              {tags?.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-black text-xs leading-8 dark:text-white/70">
              {description}
            </p>
            <div className="flex gap-4 text-xs">
              {url ? (
                <button className="mt-8 bg-gray-200 hover:bg-gray-600 hover:text-white transition-all duration-500 text-black font-bold py-2 px-4 rounded-full focus:scale-110 hover:scale-110 active:scale-105">
                  <a href={url} target="blank">
                    Explore the App
                  </a>
                </button>
              ) : null}
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
