"use client";

import { motion } from "motion/react";

export function InformationProcessingSection() {
  return (
    <section className="mb-12" id="infouse">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        2. HOW DO WE PROCESS YOUR INFORMATION?
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          <em>
            <strong>In Short:</strong> We process your information to provide,
            improve, and administer our Services, communicate with you, for
            security and fraud prevention, and to comply with law. We process
            the personal information for the following purposes listed below. We
            may also process your information for other purposes only with your
            prior explicit consent.
          </em>
        </p>

        <p>
          <strong className="text-foreground">
            We process your personal information for a variety of reasons,
            depending on how you interact with our Services, including:
          </strong>
        </p>

        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>
            <strong>
              To facilitate account creation and authentication and otherwise
              manage user accounts.
            </strong>{" "}
            We may process your information so you can create and log in to your
            account, as well as keep your account in working order.
          </li>
          <li>
            <strong>
              To save or protect an individual&apos;s vital interest.
            </strong>{" "}
            We may process your information when necessary to save or protect an
            individual&apos;s vital interest, such as to prevent harm.
          </li>
        </ul>
      </div>
    </section>
  );
}
