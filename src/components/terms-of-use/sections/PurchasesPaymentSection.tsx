"use client";

import { motion } from "motion/react";

export function PurchasesPaymentSection() {
  return (
    <section className="mb-12" id="purchases">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        5. PURCHASES AND PAYMENT
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>We accept the following forms of payment:</p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Visa</li>
          <li>Mastercard</li>
          <li>American Express</li>
          <li>Discover</li>
          <li>Apple</li>
        </ul>
        <p>
          You agree to provide current, complete, and accurate purchase and
          account information for all purchases made via the Services. You
          further agree to promptly update account and payment information,
          including email address, payment method, and payment card expiration
          date, so that we can complete your transactions and contact you as
          needed. Sales tax will be added to the price of purchases as deemed
          required by us. We may change prices at any time. All payments shall
          be in <strong>US dollars</strong>.
        </p>
        <p>
          You agree to pay all charges at the prices then in effect for your
          purchases and any applicable shipping fees, and you{" "}
          <strong>authorize</strong> us to charge your chosen payment provider
          for any such amounts upon placing your order. We reserve the right to
          correct any errors or mistakes in pricing, even if we have already
          requested or received payment.
        </p>
        <p>
          We reserve the right to refuse any order placed through the Services.
          We may, in our sole discretion, limit or cancel quantities purchased
          per person, per household, or per order. These restrictions may
          include orders placed by or under the same customer account, the same
          payment method, and/or orders that use the same billing or shipping
          address. We reserve the right to limit or prohibit orders that, in our
          sole <strong>judgment</strong>, appear to be placed by dealers,
          resellers, or distributors.
        </p>
      </div>
    </section>
  );
}
