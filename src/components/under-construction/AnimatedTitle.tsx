"use client";

import { motion } from "motion/react";

export function AnimatedTitle() {
  const titleText = "clamby.id";
  const letters = titleText.split("");

  return (
    <motion.h1
      className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          style={{ display: "inline-block" }}
          initial={{
            opacity: 0,
            y: 50,
            rotateX: 90,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.05,
            ease: [0.34, 1.56, 0.64, 1], // Custom back.out easing approximation
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}
