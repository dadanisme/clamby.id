"use client";

import { motion } from "motion/react";

export function UserDataSection() {
  return (
    <section className="mb-12" id="userdata">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        24. USER DATA
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          We will maintain certain data that you transmit to the Services for
          the purpose of managing the performance of the Services, as well as
          data relating to your use of the Services. Although we perform regular
          routine backups of data, you are solely responsible for all data that
          you transmit or that relates to any activity you have undertaken using
          the Services. You agree that we shall have no liability to you for any
          loss or corruption of any such data, and you hereby waive any right of
          action against us arising from any such loss or corruption of such
          data.
        </p>
      </div>
    </section>
  );
}
