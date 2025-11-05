"use client";

import { motion } from "motion/react";
import { Instagram } from "lucide-react";
import Link from "next/link";

export function InstagramLink() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Custom ease-out similar to power2.out
      }}
    >
      <Link
        href="https://instagram.com/clamby.app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-muted-foreground transition-all duration-200 hover:text-foreground hover:scale-105"
      >
        <Instagram className="h-5 w-5" />
        <span className="text-sm sm:text-base">@clamby.app</span>
      </Link>
    </motion.div>
  );
}
