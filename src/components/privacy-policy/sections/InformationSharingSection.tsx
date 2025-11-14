"use client";

import { motion } from "motion/react";

export function InformationSharingSection() {
  return (
    <section className="mb-12" id="whoshare">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          <em>
            <strong>In Short:</strong> We may share information in specific
            situations described in this section and/or with the following
            categories of third parties.
          </em>
        </p>

        <p>
          <strong className="text-foreground">
            Vendors, Consultants, and Other Third-Party Service Providers.
          </strong>{" "}
          We may share your data with third-party vendors, service providers,
          contractors, or agents (&quot;third parties&quot;) who perform
          services for us us or on our behalf and require access to such
          information to do that work. We have contracts in place with our third
          parties, which are designed to help safeguard your personal
          information. This means that they cannot do anything with your
          personal information unless we have instructed them to do it. They
          will also not share your personal information with any organization
          apart from us. They also commit to protect the data they hold on our
          behalf and to retain it for the period we instruct.
        </p>

        <p>
          The categories of third parties we may share personal information with
          are as follows:
        </p>

        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>AI Platforms</li>
        </ul>

        <p>
          We also may need to share your personal information in the following
          situations:
        </p>

        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>
            <strong>Business Transfers.</strong> We may share or transfer your
            information in connection with, or during negotiations of, any
            merger, sale of company assets, financing, or acquisition of all or
            a portion of our business to another company.
          </li>
        </ul>
      </div>
    </section>
  );
}
