"use client";

import { motion } from "motion/react";

export function InformationRetentionSection() {
  return (
    <section className="mb-12" id="inforetain">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        7. HOW LONG DO WE KEEP YOUR INFORMATION?
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          <em>
            <strong>In Short:</strong> We keep your information for as long as
            necessary to fulfill the purposes outlined in this Privacy Notice
            unless otherwise required by law.
          </em>
        </p>

        <p>
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this Privacy Notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting, or other legal requirements). No purpose in this notice
          will require us keeping your personal information for longer than six
          (6) months past the termination of the user&apos;s account.
        </p>

        <p>
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymize such
          information, or, if this is not possible (for example, because your
          personal information has been stored in backup archives), then we will
          securely store your personal information and isolate it from any
          further processing until deletion is possible.
        </p>
      </div>
    </section>
  );
}
