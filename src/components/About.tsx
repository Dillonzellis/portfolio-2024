"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Impact-driven software engineer with a passion for continuous learning.
        Proven track record of delivering significant results and staying at the
        cutting edge of technology. Exceptional problem-solving skills and a
        collaborative mindset for driving innovation and achieving excellence.
      </p>
    </motion.section>
  );
};
