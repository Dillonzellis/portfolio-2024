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
        I began my programming journey driven by a fascination with solving
        complex issues and streamlining processes. This fascination has evolved
        into a commitment to creating high-quality web apps and digital
        products. While I have expertise in the React ecosystem, my focus is on
        selecting the best technology to address specific problems, emphasizing
        a solid grasp of foundational concepts over any particular library. My
        approach is characterized by a continuous pursuit of knowledge and an
        adaptability to new challenges. I&apos;m currently seeking a full-time
        software development role where I can apply my adaptive skill set to
        deliver impactful solutions and foster technological advancement.
      </p>
    </motion.section>
  );
};
