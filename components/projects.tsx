"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

interface ProjectData {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  tags: string[];
  type: string;
}

export default function Projects() {
  const [selectedValue, setSelectedValue] =
    useState<string>("Company Projects");
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
    <section id="projects">
      <div className="flex justify-center flex-col gap-4">
        <SectionHeading>My projects</SectionHeading>
        {selectedValue === "Company Projects" ? (
          <p className="mx-auto text-xs italic">
            * Company projects are not public facing
          </p>
        ) : (
          ""
        )}
        <div className="mx-auto mb-4">
          <select
            value={selectedValue}
            onChange={handleSelectChange}
            className="block w-96 bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 focus:ring-blue-200"
          >
            <option value="Company Projects">Company Projects</option>
            <option value="All Projects">All Projects</option>
            <option value="Freelance Projects">Freelance Projects</option>
            <option value="Personal Projects">Personal Projects</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap md:w-[1000px] justify-center gap-4">
        {filteredProjects.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
