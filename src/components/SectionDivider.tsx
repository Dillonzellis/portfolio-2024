"use client";

import React from "react";
import { motion } from "framer-motion";

export const SectionDivider = () => {
  return (
    <motion.div
      className="dark:bg-opacity-2 my-24 hidden h-32 w-0.5 rounded-full bg-gray-400 sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
};
