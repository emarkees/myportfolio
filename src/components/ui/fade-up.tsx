"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

export const fadeUpVariants = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.15 },
  viewport: { once: true, margin: "-50px" }
};

export function FadeUp({ children, className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div {...fadeUpVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
}
