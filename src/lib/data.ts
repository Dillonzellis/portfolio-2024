import React from "react";
import pika from "/public/pika-fishing.jpeg";
import walking from "/public/walking.jpg";
import rlm from "/public/rlm-affairs.jpg";
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
    link: "https://github.com/Dillonzellis/family-pic-blog",
    title: "Walking After Midnight",
    description:
      "A site for a family to upload and share photos. Complete with accounts and a database.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "MongoDB",
      "Express",
      "AWS",
    ],
    imageUrl: walking,
  },
  {
    link: "https://github.com/Dillonzellis/rlmaffairs-v4",
    title: "RLM Affairs",
    description:
      "A fully responsive marketing site for a wedding business. Following modern design trends that prioritizes accessibility and applies best SEO practices",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: rlm,
  },
  // {
  //   link: "https://github.com/Dillonzellis/tracker-hub",
  //   title: "OOT Tracker",
  //   description:
  //     "An application to track the progress of a playthrough of the Legend of Zelda: Ocarina of Time",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: pika,
  // },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "HTML",
  "CSS",
  "SASS",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express",
  "PHP",
  "Python",
  "Prisma",
  "Drizzle",
  "PostgreSQL",
  "MongoDB",
  "SQL",
  "TanStack",
  "AWS",
  "Git",
  "Figma",
] as const;

export const experiencesData = [
  {
    title: "Graduated UNG",
    location: "Dalonegha, GA",
    description:
      "I graduated from the University of North Georgia with a Bachelors's of Science in Pyschological Science. I also minored in Computer Science. I led several independent Experimental Studies and presented independent research at SEPA.",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "DZ Designs",
    location: "Atlanta, GA",
    description:
      "I worked as a full stack developer doing freelance work. Designed and developed visually captivating and functional websites for businesses, individuals, and artists, using React, WordPress, and other frameworks and libraries",
    icon: React.createElement(FaReact),
    date: "2018",
  },
  {
    title: "LSCU",
    location: "Duluth, GA",
    description:
      "I work as a software developer for the League of Southeastern Credit Unions where I design and develop web applications using React and other libraries and frameworks. ",

    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
] as const;
