"use client";

import { motion } from "motion/react";

export function UserGeneratedContributionsSection() {
  return (
    <section className="mb-12" id="ugc">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        9. USER GENERATED CONTRIBUTIONS
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          The Services may invite you to chat, contribute to, or participate in
          blogs, message boards, online forums, and other functionality, and may
          provide you with the opportunity to create, submit, post, display,
          transmit, perform, publish, distribute, or broadcast content and
          materials to us or on the Services, including but not limited to text,
          writings, video, audio, photographs, graphics, comments, suggestions,
          or personal information or other material (collectively,{" "}
          <strong>&quot;Contributions&quot;</strong>). Contributions may be
          viewable by other users of the Services and through third-party
          websites. As such, any Contributions you transmit may be treated as
          non-confidential and non-proprietary. When you create or make
          available any Contributions, you thereby represent and warrant that:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>
            The creation, distribution, transmission, public display, or
            performance, and the accessing, downloading, or copying of your
            Contributions do not and will not infringe the proprietary rights,
            including but not limited to the copyright, patent, trademark, trade
            secret, or moral rights of any third party.
          </li>
          <li>
            You are the creator and owner of or have the necessary{" "}
            <strong>licenses</strong>, rights, consents, releases, and
            permissions to use and to <strong>authorize</strong> us, the
            Services, and other users of the Services to use your Contributions
            in any manner contemplated by the Services and these Legal Terms.
          </li>
          <li>
            You have the written consent, release, and/or permission of each and
            every identifiable individual person in your Contributions to use
            the name or likeness of each and every such identifiable individual
            person to enable inclusion and use of your Contributions in any
            manner contemplated by the Services and these Legal Terms.
          </li>
          <li>Your Contributions are not false, inaccurate, or misleading.</li>
          <li>
            Your Contributions are not unsolicited or{" "}
            <strong>unauthorized</strong> advertising, promotional materials,
            pyramid schemes, chain letters, spam, mass mailings, or other forms
            of solicitation.
          </li>
          <li>
            Your Contributions are not obscene, lewd, lascivious, filthy,
            violent, harassing, <strong>libelous</strong>, slanderous, or
            otherwise objectionable (as determined by us).
          </li>
          <li>
            Your Contributions do not ridicule, mock, disparage, intimidate, or
            abuse anyone.
          </li>
          <li>
            Your Contributions are not used to harass or threaten (in the legal
            sense of those terms) any other person and to promote violence
            against a specific person or class of people.
          </li>
          <li>
            Your Contributions do not violate any applicable law, regulation, or
            rule.
          </li>
          <li>
            Your Contributions do not violate the privacy or publicity rights of
            any third party.
          </li>
          <li>
            Your Contributions do not violate any applicable law concerning
            child pornography, or otherwise intended to protect the health or
            well-being of minors.
          </li>
          <li>
            Your Contributions do not include any offensive comments that are
            connected to race, national origin, gender, sexual preference, or
            physical handicap.
          </li>
          <li>
            Your Contributions do not otherwise violate, or link to material
            that violates, any provision of these Legal Terms, or any applicable
            law or regulation.
          </li>
        </ul>
        <p>
          Any use of the Services in violation of the foregoing violates these
          Legal Terms and may result in, among other things, termination or
          suspension of your rights to use the Services.
        </p>
      </div>
    </section>
  );
}
