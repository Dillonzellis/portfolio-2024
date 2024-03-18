"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="max-w-prose scroll-mt-28 pb-28 text-center leading-8 sm:pb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="space-y-2 pb-3 text-sm md:text-base">
        <p>
          While I have expertise in the React ecosystem, my focus is on
          selecting the best technology to address specific problems,
          emphasizing a solid grasp of foundational concepts over any particular
          library. My approach is characterized by a continuous pursuit of
          knowledge and an adaptability to new challenges.
        </p>
        <p>
          I&apos;m currently seeking a full-time software development role where
          I can apply my adaptive skill set to deliver impactful solutions and
          foster technological advancement.
        </p>
      </div>
    </motion.section>
  );
};
