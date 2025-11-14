"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function PrivacyPolicySection() {
  return (
    <section className="mb-12" id="ppyes">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        14. PRIVACY POLICY
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          We care about data privacy and security. Please review our Privacy
          Policy:{" "}
          <strong>
            <Link
              href="/privacy-policy"
              className="text-primary hover:underline"
            >
              clamby.id/privacy-policy
            </Link>
          </strong>
          . By using the Services, you agree to be bound by our Privacy Policy,
          which is incorporated into these Legal Terms. Please be advised the
          Services are hosted in <strong>Indonesia</strong> and{" "}
          <strong>Singapore</strong>. If you access the Services from any other
          region of the world with laws or other requirements governing personal
          data collection, use, or disclosure that differ from applicable laws
          in <strong>Indonesia</strong> and <strong>Singapore</strong>, then
          through your continued use of the Services, you are transferring your
          data to <strong>Indonesia</strong> and <strong>Singapore</strong>, and
          you expressly consent to have your data transferred to and processed
          in <strong>Indonesia</strong> and <strong>Singapore</strong>.
        </p>
      </div>
    </section>
  );
}
