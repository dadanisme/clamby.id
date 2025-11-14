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
        28. CONTACT US
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          In order to resolve a complaint regarding the Services or to receive
          further information regarding use of the Services, please contact us
          at:
        </p>

        <div className="ml-4 space-y-1">
          <p className="font-semibold text-foreground">
            <strong>Clamby Inc.</strong>
          </p>
          <p>
            <strong>Jalan Raya Kediri, Kuta, Tuban</strong>
          </p>
          <p>
            <strong>Kabupaten Badung, Bali 80361</strong>
          </p>
          <p>
            <strong>Indonesia</strong>
          </p>
          <p>
            <strong>Phone: +6285889838142</strong>
          </p>
          <p>
            <strong>
              <Link
                href="mailto:support@clamby.id"
                className="text-primary hover:underline"
              >
                support@clamby.id
              </Link>
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
