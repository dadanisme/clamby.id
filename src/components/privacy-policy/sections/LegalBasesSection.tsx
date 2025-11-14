"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function LegalBasesSection() {
  return (
    <section className="mb-12" id="legalbases">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
      </motion.h2>

      <div className="space-y-6 text-muted-foreground">
        <p>
          <em>
            <strong>In Short:</strong> We only process your personal information
            when we believe it is necessary and we have a valid legal reason
            (i.e., legal basis) to do so under applicable law, like with your
            consent, to comply with laws, to provide you with services to enter
            into or fulfill our contractual obligations, to protect your rights,
            or to fulfill our legitimate business interests.
          </em>
        </p>

        <div>
          <em>
            <strong>
              <u>
                If you are located in the EU or UK, this section applies to you.
              </u>
            </strong>
          </em>
        </div>

        <p>
          The General Data Protection Regulation (GDPR) and UK GDPR require us
          to explain the valid legal bases we rely on in order to process your
          personal information. As such, we may rely on the following legal
          bases to process your personal information:
        </p>

        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>
            <strong>Consent.</strong> We may process your information if you
            have given us permission (i.e., consent) to use your personal
            information for a specific purpose. You can withdraw your consent at
            any time. Learn more about{" "}
            <Link
              href="#withdrawconsent"
              className="text-primary hover:underline"
            >
              withdrawing your consent
            </Link>
            .
          </li>
          <li>
            <strong>Legal Obligations.</strong> We may process your information
            where we believe it is necessary for compliance with our legal
            obligations, such as to cooperate with a law enforcement body or
            regulatory agency, exercise or defend our legal rights, or disclose
            your information as evidence in litigation in which we are involved.
          </li>
          <li>
            <strong>Vital Interests.</strong> We may process your information
            where we believe it is necessary to protect your vital interests or
            the vital interests of a third party, such as situations involving
            potential threats to the safety of any person.
          </li>
        </ul>

        <div>
          <strong>
            <u>
              <em>
                If you are located in Canada, this section applies to you.
              </em>
            </u>
          </strong>
        </div>

        <p>
          We may process your information if you have given us specific
          permission (i.e., express consent) to use your personal information
          for a specific purpose, or in situations where your permission can be
          inferred (i.e., implied consent). You can{" "}
          <Link
            href="#withdrawconsent"
            className="text-primary hover:underline"
          >
            withdraw your consent
          </Link>{" "}
          at any time.
        </p>

        <p>
          In some exceptional cases, we may be legally permitted under
          applicable law to process your information without your consent,
          including, for example:
        </p>

        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>
            If collection is clearly in the interests of an individual and
            consent cannot be obtained in a timely way
          </li>
          <li>For investigations and fraud detection and prevention</li>
          <li>For business transactions provided certain conditions are met</li>
          <li>
            If it is contained in a witness statement and the collection is
            necessary to assess, process, or settle an insurance claim
          </li>
          <li>
            For identifying injured, ill, or deceased persons and communicating
            with next of kin
          </li>
          <li>
            If we have reasonable grounds to believe an individual has been, is,
            or may be victim of financial abuse
          </li>
          <li>
            If it is reasonable to expect collection and use with consent would
            compromise the availability or the accuracy of the information and
            the collection is reasonable for purposes related to investigating a
            breach of an agreement or a contravention of the laws of Canada or a
            province
          </li>
          <li>
            If disclosure is required to comply with a subpoena, warrant, court
            order, or rules of the court relating to the production of records
          </li>
          <li>
            If it was produced by an individual in the course of their
            employment, business, or profession and the collection is consistent
            with the purposes for which the information was produced
          </li>
          <li>
            If the collection is solely for journalistic, artistic, or literary
            purposes
          </li>
          <li>
            If the information is publicly available and is specified by the
            regulations
          </li>
          <li>
            We may disclose de-identified information for approved research or
            statistics projects, subject to ethics oversight and confidentiality
            commitments
          </li>
        </ul>
      </div>
    </section>
  );
}
