"use client";

import { motion } from "motion/react";

export function SoftwareSection() {
  return (
    <section className="mb-12" id="software">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        7. SOFTWARE
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          We may include software for use in connection with our Services. If
          such software is accompanied by an end user <strong>license</strong>{" "}
          agreement (<strong>&quot;EULA&quot;</strong>), the terms of the EULA
          will govern your use of the software. If such software is not
          accompanied by a EULA, then we grant to you a non-exclusive,
          revocable, personal, and non-transferable <strong>license</strong> to
          use such software solely in connection with our services and in
          accordance with these Legal Terms. Any software and any related
          documentation is provided <strong>&quot;AS IS&quot;</strong> without
          warranty of any kind, either express or implied, including, without
          limitation, the implied warranties of merchantability, fitness for a
          particular purpose, or non-infringement. You accept any and all risk
          arising out of use or performance of any software. You may not
          reproduce or redistribute any software except in accordance with the
          EULA or these Legal Terms.
        </p>
      </div>
    </section>
  );
}
