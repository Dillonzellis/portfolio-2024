import React from "react";
import pika from "/public/pika-fishing.jpeg";
import { LuGraduationCap } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "RLM Affairs",
    description: "Marketing site for wedding buisness",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: pika,
  },
  {
    title: "Walking After Midnight",
    description:
      "A site for a family to upload and share photos. Complete with accounts and a database.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "MongoDB",
      "Payload",
      "Express",
      "AWS",
    ],
    imageUrl: pika,
  },
  {
    title: "OOT Tracker",
    description:
      "An application to track the progress of a playthrough of the Legend of Zelda: Ocarina of Time",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: pika,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "React",
  "JavaScript",
  "Node",
  "Git",
  "Prisma",
  "Nextjs",
  "CSS",
  "SASS",
  "HTML",
  "Tailwind",
  "Framer Motion",
  "MongoDB",
  "Bootstrap",
  "WordPress",
  "Express",
  "AWS",
  "SQL",
  "Python",
] as const;

export const experiencesData = [
  {
    title: "Graduated UNG",
    location: "Dalonegha, GA",
    description:
      "I graduated from the University of North Georgia with a Bachelors's of Science in Pyschological Science. I also minored in Computer Science. I lead several independent Experimental Studies and presented independent research at SEPA.",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "DZ Designs",
    location: "Atlanta, GA",
    description: "I worked as full stack developer as a freelancer.",
    icon: React.createElement(FaReact),
    date: "2018",
  },
  {
    title: "LSCU",
    location: "Duluth, GA",
    description:
      "I work as a web developer for the League of Southeastern Credit Unions.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
] as const;
