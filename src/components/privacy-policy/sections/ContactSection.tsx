"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section className="mb-12" id="contact">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          If you have questions or comments about this notice, you may email us
          at{" "}
          <Link
            href="mailto:support@clamby.id"
            className="text-primary hover:underline"
          >
            support@clamby.id
          </Link>{" "}
          or contact us by post at:
        </p>

        <div className="ml-4 space-y-1">
          <p className="font-semibold text-foreground">Clamby Inc.</p>
          <p>Jalan Raya Kediri, Kuta, Tuban</p>
          <p>Kabupaten Badung, Bali 80361</p>
          <p>Indonesia</p>
        </div>
      </div>
    </section>
  );
}
