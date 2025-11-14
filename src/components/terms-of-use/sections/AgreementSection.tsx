"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function AgreementSection() {
  return (
    <section className="mb-12" id="agreement">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        AGREEMENT TO OUR LEGAL TERMS
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          We are <strong>Clamby Inc.</strong> (
          <strong>&quot;Company,&quot;</strong> <strong>&quot;we,&quot;</strong>{" "}
          <strong>&quot;us,&quot;</strong> <strong>&quot;our&quot;</strong>), a
          company registered in <strong>Indonesia</strong> at{" "}
          <strong>Jalan Raya Kediri, Kuta, Tuban</strong>,{" "}
          <strong>Kabupaten Badung</strong>, <strong>Bali</strong>{" "}
          <strong>80361</strong>.
        </p>

        <p>
          We operate the mobile application <strong>Clamby</strong> (the{" "}
          <strong>&quot;App&quot;</strong>), as well as any other related
          products and services that refer or link to these legal terms (the{" "}
          <strong>&quot;Legal Terms&quot;</strong>) (collectively, the{" "}
          <strong>&quot;Services&quot;</strong>).
        </p>

        <p>
          You can contact us by phone at <strong>+6285889838142</strong>, email
          at{" "}
          <Link
            href="mailto:support@clamby.id"
            className="text-primary hover:underline"
          >
            support@clamby.id
          </Link>
          , or by mail to <strong>Jalan Raya Kediri, Kuta, Tuban</strong>,{" "}
          <strong>Kabupaten Badung</strong>, <strong>Bali</strong>{" "}
          <strong>80361</strong>, <strong>Indonesia</strong>.
        </p>

        <p>
          These Legal Terms constitute a legally binding agreement made between
          you, whether personally or on behalf of an entity (
          <strong>&quot;you&quot;</strong>), and <strong>Clamby Inc.</strong>,
          concerning your access to and use of the Services. You agree that by
          accessing the Services, you have read, understood, and agreed to be
          bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF
          THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
          SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        </p>

        <p>
          We will provide you with prior notice of any scheduled changes to the
          Services you are using. The modified Legal Terms will become effective
          upon posting or notifying you by{" "}
          <Link
            href="mailto:support@clamby.id"
            className="text-primary hover:underline"
          >
            support@clamby.id
          </Link>
          , as stated in the email message. By continuing to use the Services
          after the effective date of any changes, you agree to be bound by the
          modified terms.
        </p>

        <p>
          The Services are intended for users who are at least 18 years old.
          Persons under the age of 18 are not permitted to use or register for
          the Services.
        </p>

        <p>
          We recommend that you print a copy of these Legal Terms for your
          records.
        </p>
      </div>
    </section>
  );
}
