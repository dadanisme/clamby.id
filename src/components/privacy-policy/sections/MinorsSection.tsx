"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function MinorsSection() {
  return (
    <section className="mb-12" id="infominors">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        9. DO WE COLLECT INFORMATION FROM MINORS?
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          <em>
            <strong>In Short:</strong> We do not knowingly collect data from or
            market to children under 18 years of age or the equivalent age as
            specified by law in your jurisdiction.
          </em>
        </p>

        <p>
          We do not knowingly collect, solicit data from, or market to children
          under 18 years of age or the equivalent age as specified by law in
          your jurisdiction, nor do we knowingly sell such personal information.
          By using the Services, you represent that you are at least 18 or the
          equivalent age as specified by law in your jurisdiction or that you
          are the parent or guardian of such a minor and consent to such minor
          dependent&apos;s use of the Services. If we learn that personal
          information from users less than 18 years of age or the equivalent age
          as specified by law in your jurisdiction has been collected, we will
          deactivate the account and take reasonable measures to promptly delete
          such data from our records. If you become aware of any data we may
          have collected from children under age 18 or the equivalent age as
          specified by law in your jurisdiction, please contact us at{" "}
          <Link
            href="mailto:support@clamby.id"
            className="text-primary hover:underline"
          >
            support@clamby.id
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
