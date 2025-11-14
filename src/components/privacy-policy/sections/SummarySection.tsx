"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function SummarySection() {
  return (
    <section className="mb-12">
      <motion.h2
        className="text-2xl font-bold mb-6"
        id="summary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        SUMMARY OF KEY POINTS
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          <em>
            This summary provides key points from our Privacy Notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our{" "}
            <Link href="#toc" className="text-primary hover:underline">
              table of contents
            </Link>{" "}
            below to find the section you are looking for.
          </em>
        </p>

        <div>
          <strong>What personal information do we process?</strong> When you
          visit, use, or navigate our Services, we may process personal
          information depending on how you interact with us and the Services,
          the choices you make, and the products and features you use. Learn
          more about{" "}
          <Link href="#personalinfo" className="text-primary hover:underline">
            personal information you disclose to us
          </Link>
          .
        </div>

        <div>
          <strong>Do we process any sensitive personal information?</strong>{" "}
          Some of the information may be considered &quot;special&quot; or
          &quot;sensitive&quot; in certain jurisdictions, for example your
          racial or ethnic origins, sexual orientation, and religious beliefs.
          We do not process sensitive personal information.
        </div>

        <div>
          <strong>Do we collect any information from third parties?</strong> We
          do not collect any information from third parties.
        </div>

        <div>
          <strong>How do we process your information?</strong> We process your
          information to provide, improve, and administer our Services,
          communicate with you, for security and fraud prevention, and to comply
          with law. We may also process your information for other purposes with
          your consent. We process your information only when we have a valid
          legal reason to do so. Learn more about{" "}
          <Link href="#infouse" className="text-primary hover:underline">
            how we process your information
          </Link>
          .
        </div>

        <div>
          <strong>
            In what situations and with which types of parties do we share
            personal information?
          </strong>{" "}
          We may share information in specific situations and with specific
          categories of third parties. Learn more about{" "}
          <Link href="#whoshare" className="text-primary hover:underline">
            when and with whom we share your personal information
          </Link>
          .
        </div>

        <div>
          <strong>How do we keep your information safe?</strong> We have
          adequate organizational and technical processes and procedures in
          place to protect your personal information. However, no electronic
          transmission over the internet or information storage technology can
          be guaranteed to be 100% secure, so we cannot promise or guarantee
          that hackers, cybercriminals, or other unauthorized third parties will
          not be able to defeat our security and improperly collect, access,
          steal, or modify your information. Learn more about{" "}
          <Link href="#infosafe" className="text-primary hover:underline">
            how we keep your information safe
          </Link>
          .
        </div>

        <div>
          <strong>What are your rights?</strong> Depending on where you are
          located geographically, the applicable privacy law may mean you have
          certain rights regarding your personal information. Learn more about{" "}
          <Link href="#privacyrights" className="text-primary hover:underline">
            your privacy rights
          </Link>
          .
        </div>

        <div>
          <strong>How do you exercise your rights?</strong> The easiest way to
          exercise your rights is by submitting a{" "}
          <Link
            href="https://app.termly.io/dsar/88b1a9ed-cd18-4b1c-ad6c-615e467afd55"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            data subject access request
          </Link>
          , or by contacting us. We will consider and act upon any request in
          accordance with applicable data protection laws.
        </div>

        <div>
          Want to learn more about what we do with any information we collect?{" "}
          <Link href="#toc" className="text-primary hover:underline">
            Review the Privacy Notice in full
          </Link>
          .
        </div>
      </div>
    </section>
  );
}
