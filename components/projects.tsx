"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { StaticImageData } from "next/image";
import { useSectionInView } from "@/lib/hooks";
import Project from "./project";
interface ProjectData {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  url?: string;
  tags?: string[];
  type?: string;
  srcCode?: string;
  backEndCode?: string;
}

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);
  const [selectedValue, setSelectedValue] =
    useState<string>("Personal Projects");
  const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>([]);

  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const filtered = projectsData.filter(
      (project) => project.type === selectedValue
    );

    if (selectedValue === "All Projects") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(filtered);
    }
  }, [selectedValue]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <div className="flex justify-center flex-col">
        <SectionHeading>My projects</SectionHeading>
        {selectedValue === "Company Projects" ? (
          <p className="mx-auto text-s text-gray-400 ">
            * Most company projects are not public facing
          </p>
        ) : (
          ""
        )}
        <div className="mx-auto mb-4">
          <select
            value={selectedValue}
            onChange={handleSelectChange}
            className="w-72 sm:w-96 block bg-gray-100 border cursor-pointer border-gray-300 text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-200 mt-3"
          >
            <option value="Company Projects">Company Projects</option>
            <option value="All Projects">All Projects</option>
            <option value="Freelance Projects">Freelance Projects</option>
            <option value="Personal Projects">Personal Projects</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap md:w-[1000px] justify-center gap-4 mt-8">
        {filteredProjects.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
