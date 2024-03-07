import React from "react";
import pika from "/public/pika-fishing.jpeg";
import { LuGraduationCap } from "react-icons/lu";

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
    title: "Acme",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit adipiscing bibendum est ultricies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: pika,
  },
  {
    title: "Acme",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit adipiscing bibendum est ultricies.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: pika,
  },
  {
    title: "Acme",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit adipiscing bibendum est ultricies.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: pika,
  },
] as const;

export const skillsData = [
  "dank memes",
  "dank memes",
  "dank memes",
  "dank memes",
  "dank memes",
  "dank memes",
  "dank memes",
  "dank memes",
  "dank memes",
  "dank memes",
  "dank memes",
  "dank memes",
  "dank memes",
  "dank memes",
  "dank memes",
  "dank memes",
  "dank memes",
] as const;

export const experiencesData = [
  {
    title: "Acme",
    location: "Atlanta, GA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Acme",
    location: "Atlanta, GA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Acme",
    location: "Atlanta, GA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;
