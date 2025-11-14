"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function TableOfContents() {
  const tocItems = [
    { id: "infocollect", title: "WHAT INFORMATION DO WE COLLECT?" },
    { id: "infouse", title: "HOW DO WE PROCESS YOUR INFORMATION?" },
    {
      id: "legalbases",
      title:
        "WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?",
    },
    {
      id: "whoshare",
      title: "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
    },
    { id: "ai", title: "DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?" },
    { id: "sociallogins", title: "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" },
    { id: "inforetain", title: "HOW LONG DO WE KEEP YOUR INFORMATION?" },
    { id: "infosafe", title: "HOW DO WE KEEP YOUR INFORMATION SAFE?" },
    { id: "infominors", title: "DO WE COLLECT INFORMATION FROM MINORS?" },
    { id: "privacyrights", title: "WHAT ARE YOUR PRIVACY RIGHTS?" },
    { id: "DNT", title: "CONTROLS FOR DO-NOT-TRACK FEATURES" },
    {
      id: "uslaws",
      title: "DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?",
    },
    {
      id: "otherlaws",
      title: "DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?",
    },
    { id: "policyupdates", title: "DO WE MAKE UPDATES TO THIS NOTICE?" },
    { id: "contact", title: "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" },
    {
      id: "request",
      title:
        "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?",
    },
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
        <ol className="list-decimal list-inside space-y-2">
          {tocItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={`#${item.id}`}
                className="text-primary hover:underline"
              >
                {item.title}
              </Link>
            </motion.li>
          ))}
        </ol>
      </nav>
    </section>
  );
}
