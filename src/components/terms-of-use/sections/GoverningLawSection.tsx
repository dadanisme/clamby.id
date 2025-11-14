"use client";

import { motion } from "motion/react";

export function GoverningLawSection() {
  return (
    <section className="mb-12" id="law">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        18. GOVERNING LAW
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          These Legal Terms shall be governed by and defined following the laws
          of <strong>Indonesia</strong>. <strong>Clamby Inc.</strong> and
          yourself irrevocably consent that the courts of{" "}
          <strong>Indonesia</strong> shall have exclusive jurisdiction to
          resolve any dispute which may arise in connection with these Legal
          Terms.
        </p>
      </div>
    </section>
  );
}
