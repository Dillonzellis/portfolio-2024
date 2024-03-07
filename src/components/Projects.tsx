"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Project } from "./Project";
import { useSectionInView } from "@/lib/hooks";

export const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
