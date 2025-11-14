"use client";

import { motion } from "motion/react";

export function UserRegistrationSection() {
  return (
    <section className="mb-12" id="userreg">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        4. USER REGISTRATION
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          You may be required to register to use the Services. You agree to keep
          your password confidential and will be responsible for all use of your
          account and password. We reserve the right to remove, reclaim, or
          change a username you select if we determine, in our sole discretion,
          that such username is inappropriate, obscene, or otherwise
          objectionable.
        </p>
      </div>
    </section>
  );
}
