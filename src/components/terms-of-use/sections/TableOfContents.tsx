"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function TableOfContents() {
  const sections = [
    { id: "services", title: "OUR SERVICES" },
    { id: "ip", title: "INTELLECTUAL PROPERTY RIGHTS" },
    { id: "userreps", title: "USER REPRESENTATIONS" },
    { id: "userreg", title: "USER REGISTRATION" },
    { id: "purchases", title: "PURCHASES AND PAYMENT" },
    { id: "subscriptions", title: "SUBSCRIPTIONS" },
    { id: "software", title: "SOFTWARE" },
    { id: "prohibited", title: "PROHIBITED ACTIVITIES" },
    { id: "ugc", title: "USER GENERATED CONTRIBUTIONS" },
    { id: "license", title: "CONTRIBUTION LICENSE" },
    { id: "mobile", title: "MOBILE APPLICATION LICENSE" },
    { id: "socialmedia", title: "SOCIAL MEDIA" },
    { id: "sitemanage", title: "SERVICES MANAGEMENT" },
    { id: "ppyes", title: "PRIVACY POLICY" },
    {
      id: "dmca",
      title: "DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) NOTICE AND POLICY",
    },
    { id: "terms", title: "TERM AND TERMINATION" },
    { id: "modifications", title: "MODIFICATIONS AND INTERRUPTIONS" },
    { id: "law", title: "GOVERNING LAW" },
    { id: "disputes", title: "DISPUTE RESOLUTION" },
    { id: "corrections", title: "CORRECTIONS" },
    { id: "disclaimer", title: "DISCLAIMER" },
    { id: "liability", title: "LIMITATIONS OF LIABILITY" },
    { id: "indemnification", title: "INDEMNIFICATION" },
    { id: "userdata", title: "USER DATA" },
    {
      id: "electronic",
      title: "ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
    },
    { id: "california", title: "CALIFORNIA USERS AND RESIDENTS" },
    { id: "misc", title: "MISCELLANEOUS" },
    { id: "contact", title: "CONTACT US" },
  ];

  return (
    <section className="mb-12" id="toc">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        TABLE OF CONTENTS
      </motion.h2>
      <nav>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className="text-primary hover:underline"
              >
                {section.title}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}
