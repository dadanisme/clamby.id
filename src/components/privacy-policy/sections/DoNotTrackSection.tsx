"use client";

import { motion } from "motion/react";

export function DoNotTrackSection() {
  return (
    <section className="mb-12" id="DNT">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        11. CONTROLS FOR DO-NOT-TRACK FEATURES
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          Most web browsers and some mobile operating systems and mobile
          applications include a Do-Not-Track (&quot;DNT&quot;) feature or
          setting you can activate to signal your privacy preference not to have
          data about your online browsing activities monitored and collected. At
          this stage, no uniform technology standard for recognizing and
          implementing DNT signals has been finalized. As such, we do not
          currently respond to to to to to to DNT browser signals or any other
          mechanism that automatically communicates your choice not to be
          tracked online. If a standard for online tracking is adopted that we
          must follow in the future, we will inform you about that practice in a
          revised version of this Privacy Notice.
        </p>

        <p>
          California law requires us to let you know how we respond to web
          browser DNT signals. Because there currently is not an industry or
          legal standard for recognizing or honoring DNT signals, we do not
          respond to them at this time.
        </p>
      </div>
    </section>
  );
}
