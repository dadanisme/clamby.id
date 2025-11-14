"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function AISection() {
  return (
    <section className="mb-12" id="ai">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?
      </motion.h2>

      <div className="space-y-6 text-muted-foreground">
        <p>
          <em>
            <strong>In Short:</strong> We offer products, features, or tools
            powered by artificial intelligence, machine learning, or similar
            technologies.
          </em>
        </p>

        <p>
          As part of our Services, we offer products, features, or tools powered
          by artificial intelligence, machine learning, or similar technologies
          (collectively, &quot;AI Products&quot;). These tools are designed to
          enhance your experience and provide you with innovative solutions. The
          terms in this Privacy Notice govern your use of the AI Products within
          our Services.
        </p>

        <div>
          <strong className="text-foreground">Use of AI Technologies</strong>
          <p className="mt-2">
            We provide the AI Products through third-party service providers
            (&quot;AI Service Providers&quot;), including Google Cloud AI. As
            outlined in this Privacy Notice, your input, output, and personal
            information will be shared with and processed by these AI Service
            Providers to enable your use of our AI Products for purposes
            outlined in{" "}
            <Link href="#legalbases" className="text-primary hover:underline">
              WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
              INFORMATION?
            </Link>{" "}
            You must not use the AI Products in any way that violates the terms
            or policies of any AI Service Provider.
          </p>
        </div>

        <div>
          <strong className="text-foreground">Our AI Products</strong>
          <p className="mt-2">
            Our AI Products are designed for the following functions:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
            <li>Image generation</li>
            <li>AI insights</li>
          </ul>
        </div>

        <div>
          <strong className="text-foreground">
            How We Process Your Data Using AI
          </strong>
          <p className="mt-2">
            All personal information processed using our AI Products is handled
            in line with our Privacy Notice and our agreement with third
            parties. This ensures high security and safeguards your personal
            information throughout the process, giving you peace of mind about
            your data&apos;s safety.
          </p>
        </div>
      </div>
    </section>
  );
}
