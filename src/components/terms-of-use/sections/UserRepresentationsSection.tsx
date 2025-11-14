"use client";

import { motion } from "motion/react";

export function UserRepresentationsSection() {
  return (
    <section className="mb-12" id="userreps">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        3. USER REPRESENTATIONS
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>By using the Services, you represent and warrant that:</p>
        <ol className="list-decimal list-inside ml-4 space-y-2">
          <li>
            all registration information you submit will be true, accurate,
            current, and complete;
          </li>
          <li>
            you will maintain the accuracy of such information and promptly
            update such registration information as necessary;
          </li>
          <li>
            you have the legal capacity and you agree to comply with these Legal
            Terms;
          </li>
          <li>you are not a minor in the jurisdiction in which you reside;</li>
          <li>
            you will not access the Services through automated or non-human
            means, whether through a bot, script or otherwise;
          </li>
          <li>
            you will not use the Services for any illegal or{" "}
            <strong>unauthorized</strong> purpose; and
          </li>
          <li>
            your use of the Services will not violate any applicable law or
            regulation.
          </li>
        </ol>
        <p>
          If you provide any information that is untrue, inaccurate, not
          current, or incomplete, we have the right to suspend or terminate your
          account and refuse any and all current or future use of the Services
          (or any portion thereof).
        </p>
      </div>
    </section>
  );
}
