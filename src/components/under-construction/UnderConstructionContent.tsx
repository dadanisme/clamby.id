"use client";

import { motion } from "motion/react";
import { AnimatedBackground } from "./AnimatedBackground";
import { AnimatedTitle } from "./AnimatedTitle";
import { InstagramLink } from "./InstagramLink";

export function UnderConstructionContent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      <AnimatedBackground />

      <main className="relative z-10 flex flex-col items-center justify-center gap-6 px-8 text-center">
        <AnimatedTitle />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-lg text-muted-foreground sm:text-xl"
        >
          Website Under Construction
        </motion.p>
        <InstagramLink />
      </main>

      {/* Animated decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-2 w-2 rounded-full bg-primary/50"
              style={{
                animation: `pulse 1.5s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
