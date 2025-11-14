"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function SubscriptionsSection() {
  return (
    <section className="mb-12" id="subscriptions">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        6. SUBSCRIPTIONS
      </motion.h2>

      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Billing and Renewal
          </h3>
          <p>
            Your subscription will continue and automatically renew unless{" "}
            <strong>canceled</strong>. You consent to our charging your payment
            method on a recurring basis without requiring your prior approval
            for each recurring charge, until such time as you cancel the
            applicable order. The length of your billing cycle will depend on
            the type of subscription plan you choose when you subscribed to the
            Services.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Free Trial
          </h3>
          <p>
            We offer a <strong>7</strong>-day free trial to new users who
            register with the Services.{" "}
            <strong>
              The account will be charged according to the user&apos;s chosen
              subscription
            </strong>{" "}
            at the end of the free trial.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Cancellation
          </h3>
          <p>
            You can cancel your subscription at any time by logging into your
            account. Your cancellation will take effect at the end of the
            current paid term. If you have any questions or are unsatisfied with
            our Services, please email us at{" "}
            <Link
              href="mailto:support@clamby.id"
              className="text-primary hover:underline"
            >
              support@clamby.id
            </Link>
            .
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Fee Changes
          </h3>
          <p>
            We may, from time to time, make changes to the subscription fee and
            will communicate any price changes to you in accordance with
            applicable law.
          </p>
        </div>
      </div>
    </section>
  );
}
