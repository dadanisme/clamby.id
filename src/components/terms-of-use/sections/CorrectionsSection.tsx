"use client";

import { motion } from "motion/react";

export function CorrectionsSection() {
  return (
    <section className="mb-12" id="corrections">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        20. CORRECTIONS
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          There may be information on the Services that contains typographical
          errors, inaccuracies, or omissions, including descriptions, pricing,
          availability, and various other information. We reserve the right to
          correct any errors, inaccuracies, or omissions and to change or update
          the information on the Services at any time, without prior notice.
        </p>
      </div>
    </section>
  );
}
