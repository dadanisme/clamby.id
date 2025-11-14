"use client";

import { motion } from "motion/react";

export function CaliforniaUsersSection() {
  return (
    <section className="mb-12" id="california">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        26. CALIFORNIA USERS AND RESIDENTS
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          If any complaint with us is not satisfactorily resolved, you can
          contact the Complaint Assistance Unit of the Division of Consumer
          Services of the California Department of Consumer Affairs in writing
          at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834
          or by telephone at (800) 952-5210 or (916) 445-1254.
        </p>
      </div>
    </section>
  );
}
