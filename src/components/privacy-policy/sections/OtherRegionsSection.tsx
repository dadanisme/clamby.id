"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function OtherRegionsSection() {
  return (
    <section className="mb-12" id="otherlaws">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        13. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?
      </motion.h2>

      <div className="space-y-6 text-muted-foreground">
        <p>
          <em>
            <strong>In Short:</strong> You may have additional rights based on
            the country you reside in.
          </em>
        </p>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Australia and New Zealand
          </h3>
          <p className="mb-4">
            We collect and process your personal information under the
            obligations and conditions set by Australia&apos;s Privacy Act 1988
            and New Zealand&apos;s Privacy Act 2020 (Privacy Act).
          </p>
          <p className="mb-4">
            This Privacy Notice satisfies the notice requirements defined in
            both Privacy Acts, in particular: what personal information we
            collect from you, from which sources, for which purposes, and other
            recipients of your personal information.
          </p>
          <p className="mb-4">
            If you do not wish to provide the personal information necessary to
            fulfill their applicable purpose, it may affect our ability to
            provide our services, in particular:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>offer you the products or services that you want</li>
            <li>respond to or help with your requests</li>
            <li>manage your account with us</li>
            <li>confirm your identity and protect your account</li>
          </ul>
          <p className="mt-4">
            At any time, you have the right to request access to or correction
            of your personal information. You can make such a request by
            contacting us by using the contact details provided in the section{" "}
            <Link href="#request" className="text-primary hover:underline">
              HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </Link>
            .
          </p>
          <p className="mt-4">
            If you believe we are unlawfully processing your personal
            information, you have the right to submit a complaint about a breach
            of the Australian Privacy Principles to the{" "}
            <Link
              href="https://www.oaic.gov.au/privacy/privacy-complaints/lodge-a-privacy-complaint-with-us"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Office of the Australian Information Commissioner
            </Link>{" "}
            and a breach of New Zealand&apos;s Privacy Principles to the{" "}
            <Link
              href="https://www.privacy.org.nz/your-rights/making-a-complaint/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Office of New Zealand Privacy Commissioner
            </Link>
            .
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Republic of South Africa
          </h3>
          <p className="mb-4">
            At any time, you have the right to request access to or correction
            of your personal information. You can make such a request by
            contacting us by using the contact details provided in the section{" "}
            <Link href="#request" className="text-primary hover:underline">
              HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </Link>
            .
          </p>
          <p className="mb-4">
            If you are unsatisfied with the manner in which we address any
            complaint with regard to our processing of personal information, you
            can contact the office of the regulator, the details of which are:
          </p>
          <div className="ml-4 space-y-2">
            <p>
              <Link
                href="https://inforegulator.org.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                The Information Regulator (South Africa)
              </Link>
            </p>
            <p>
              General enquiries:{" "}
              <Link
                href="mailto:enquiries@inforegulator.org.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                enquiries@inforegulator.org.za
              </Link>
            </p>
            <p>
              Complaints (complete POPIA/PAIA form 5):{" "}
              <Link
                href="mailto:PAIAComplaints@inforegulator.org.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                PAIAComplaints@inforegulator.org.za
              </Link>{" "}
              &{" "}
              <Link
                href="mailto:POPIAComplaints@inforegulator.org.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                POPIAComplaints@inforegulator.org.za
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
