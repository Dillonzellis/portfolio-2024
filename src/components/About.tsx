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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus
        viverra vitae congue eu consequat ac. Mauris vitae ultricies leo integer
        malesuada. Viverra adipiscing at in tellus integer feugiat scelerisque.
        Facilisis gravida neque convallis a cras semper auctor neque vitae. Mi
        eget mauris pharetra et ultrices neque.
      </p>
    </motion.section>
  );
};
