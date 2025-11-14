"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function PrivacyRightsSection() {
  return (
    <section className="mb-12" id="privacyrights">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        10. WHAT ARE YOUR PRIVACY RIGHTS?
      </motion.h2>

      <div className="space-y-6 text-muted-foreground">
        <p>
          <em>
            <strong>In Short:</strong> Depending on your state of residence in
            the US or in some regions, such as the European Economic Area (EEA),
            United Kingdom (UK), Switzerland, and Canada, you have rights that
            allow you greater access to and control over your personal
            information. You may review, change, or terminate your account at
            any time, depending on your country, province, or state of
            residence.
          </em>
        </p>

        <p>
          In some regions (like the EEA, UK, Switzerland, and Canada), you have
          certain rights under applicable data protection laws. These may
          include the right (i) to request access and obtain a copy of your
          personal information, (ii) to request rectification or erasure; (iii)
          to restrict the processing of your personal information; (iv) if
          applicable, to data portability; and (v) not to be subject to
          automated decision-making. If a decision that produces legal or
          similarly significant effects is made solely by automated means, we
          will inform you, explain the main factors, and offer a simple way to
          request human review. In certain circumstances, you may also have the
          right to object to the processing of your personal information. You
          can make such a request by contacting us by using the contact details
          provided in the section{" "}
          <Link href="#contact" className="text-primary hover:underline">
            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </Link>{" "}
          below.
        </p>

        <p>
          We will consider and act upon any request in accordance with
          applicable data protection laws.
        </p>

        <p>
          If you are located in the EEA or UK and you believe we are unlawfully
          processing your personal information, you also have the right to
          complain to your{" "}
          <Link
            href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Member State data protection authority
          </Link>{" "}
          or{" "}
          <Link
            href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            UK data protection authority
          </Link>
          .
        </p>

        <p>
          If you are located in Switzerland, you may contact the{" "}
          <Link
            href="https://www.edoeb.admin.ch/edoeb/en/home.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Federal Data Protection and Information Commissioner
          </Link>
          .
        </p>

        <div id="withdrawconsent">
          <strong className="text-foreground">
            <u>Withdrawing your consent:</u>
          </strong>{" "}
          If we are relying on your consent to process your personal
          information, which may be express and/or implied consent depending on
          the applicable law, you have the right to withdraw your consent at any
          time. You can withdraw your consent at any time by contacting us by
          using the contact details provided in the section{" "}
          <Link href="#contact" className="text-primary hover:underline">
            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </Link>{" "}
          below.
        </div>

        <p>
          However, please note that this will not affect the lawfulness of the
          processing before its withdrawal nor, when applicable law allows, will
          it affect the processing of your personal information conducted in
          reliance on lawful processing grounds other than consent.
        </p>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Account Information
          </h3>
          <p className="mb-2">
            If you would at any time like to review or change the information in
            your account or terminate your account, you can:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Log in to your account settings and update your user account.
            </li>
          </ul>
          <p className="mt-4">
            Upon your request to terminate your account, we will deactivate or
            delete your account and information from our active databases.
            However, we may retain some information in our files to prevent
            fraud, troubleshoot problems, assist with any investigations,
            enforce our legal terms and/or comply with applicable legal
            requirements.
          </p>
        </div>

        <p>
          If you have questions or comments about your privacy rights, you may
          email us at{" "}
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
