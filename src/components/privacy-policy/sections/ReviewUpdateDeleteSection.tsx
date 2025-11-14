"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function ReviewUpdateDeleteSection() {
  return (
    <section className="mb-12" id="request">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          Based on the applicable laws of your country or state of residence in
          the US, you may have the right to request access to the personal
          information we collect from you, details about how we have processed
          it, correct inaccuracies, or delete your personal information. You may
          also have the right to withdraw your consent to our processing of your
          personal information. These rights may be limited in some
          circumstances by applicable law. To request to review, update, or
          delete your personal information, please fill out and submit a{" "}
          <Link
            href="https://app.termly.io/dsar/88b1a9ed-cd18-4b1c-ad6c-615e467afd55"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            data subject access request
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
