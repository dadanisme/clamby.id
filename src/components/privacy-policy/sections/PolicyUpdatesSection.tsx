"use client";

import { motion } from "motion/react";

export function PolicyUpdatesSection() {
  return (
    <section className="mb-12" id="policyupdates">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        14. DO WE MAKE UPDATES TO THIS NOTICE?
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          <em>
            <strong>In Short:</strong> Yes, we will update this notice as
            necessary to stay compliant with relevant laws.
          </em>
        </p>

        <p>
          We may update this Privacy Notice from time to time. The updated
          version will be indicated by an updated &quot;Revised&quot; date at
          the top of this Privacy Notice. If we make material changes to this
          Privacy Notice, we may notify you either by prominently posting a
          notice of such changes or by directly sending you a notification. We
          encourage you to review this Privacy Notice frequently to be informed
          of how we are protecting your information.
        </p>
      </div>
    </section>
  );
}
