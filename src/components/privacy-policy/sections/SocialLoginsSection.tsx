"use client";

import { motion } from "motion/react";

export function SocialLoginsSection() {
  return (
    <section className="mb-12" id="sociallogins">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          <em>
            <strong>In Short:</strong> If you choose to register or log in to
            our Services using a social media account, we may have access to
            certain information about you.
          </em>
        </p>

        <p>
          Our Services offer you the ability to register and log in using your
          third-party social media account details (like your Facebook or X
          logins). Where you choose to do this, we will receive certain profile
          information about you from your social media provider. The profile
          information we receive may vary depending on the social media provider
          concerned, but will often include your name, email address, friends
          list, and profile picture, as well as other information you choose to
          make public on such a social media platform.
        </p>

        <p>
          We will use the information we receive only for the purposes that are
          described in this Privacy Notice or that are otherwise made clear to
          you on the relevant Services. Please note that we do not control, and
          are not responsible for, other uses of your personal information by
          your third-party social media provider. We recommend that you review
          their privacy notice to understand how they collect, use, and share
          your personal information, and how you can set your privacy
          preferences on their sites and apps.
        </p>
      </div>
    </section>
  );
}
