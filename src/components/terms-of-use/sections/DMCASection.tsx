"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function DMCASection() {
  return (
    <section className="mb-12" id="dmca">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        15. DIGITAL MILLENNIUM COPYRIGHT ACT (DMCA) NOTICE AND POLICY
      </motion.h2>

      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Notifications
          </h3>
          <p>
            We respect the intellectual property rights of others. If you
            believe that any material available on or through the Services
            infringes upon any copyright you own or control, please immediately
            notify our Designated Copyright Agent using the contact information
            provided below (a <strong>&quot;Notification&quot;</strong>). A copy
            of your Notification will be sent to the person who posted or stored
            the material addressed in the Notification. Please be advised that
            pursuant to federal law you may be held liable for damages if you
            make material misrepresentations in a Notification. Thus, if you are
            not sure that material located on or linked to by the Services
            infringes your copyright, you should consider first contacting an
            attorney.
          </p>
          <p>
            All Notifications should meet the requirements of DMCA 17 U.S.C. §
            512(c)(3) and include the following information: (1) A physical or
            electronic signature of a person <strong>authorized</strong> to act
            on behalf of the owner of an exclusive right that is allegedly
            infringed; (2) identification of the copyrighted work claimed to
            have been infringed, or, if multiple copyrighted works on the
            Services are covered by the Notification, a representative list of
            such works on the Services; (3) identification of the material that
            is claimed to be infringing or to be the subject of infringing
            activity and that is to be removed or access to which is to be
            disabled, and information reasonably sufficient to permit us to
            locate the material; (4) information reasonably sufficient to permit
            us to contact the complaining party, such as an address, telephone
            number, and, if available, an email address at which the complaining
            party may be contacted; (5) a statement that the complaining party
            has a good faith belief that use of the material in the manner
            complained of is not <strong>authorized</strong> by the copyright
            owner, its agent, or the law; and (6) a statement that the
            information in the notification is accurate, and under penalty of
            perjury, that the complaining party is <strong>authorized</strong>{" "}
            to act on behalf of the owner of an exclusive right that is
            allegedly infringed upon.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Counter Notification
          </h3>
          <p>
            If you believe your own copyrighted material has been removed from
            the Services as a result of a mistake or misidentification, you may
            submit a written counter notification to our Designated Copyright
            Agent using the contact information provided below (a{" "}
            <strong>&quot;Counter Notification&quot;</strong>). To be an
            effective Counter Notification under the DMCA, your Counter
            Notification must include substantially the following: (1)
            identification of the material that has been removed or disabled and
            the location at which the material appeared before it was removed or
            disabled; (2) a statement that you consent to the jurisdiction of
            the Federal District Court in which your address is located, or if
            your address is outside the United States, for any judicial district
            in which we are located; (3) a statement that you will accept
            service of process from the party that filed the Notification or the
            party&apos;s agent; (4) your name, address, and telephone number;
            (5) a statement under penalty of perjury that you have a good faith
            belief that the material in question was removed or disabled as a
            result of a mistake or misidentification of the material to be
            removed or disabled; and (6) your physical or electronic signature.
          </p>
          <p>
            If you send us a valid, written Counter Notification meeting the
            requirements described above, we will restore your removed or
            disabled material, unless we first receive notice from the party
            filing the Notification informing us that such party has filed a
            court action to restrain you from engaging in infringing activity
            related to the material in question. Please note that if you
            materially misrepresent that the disabled or removed content was
            removed by mistake or misidentification, you may be liable for
            damages, including costs and attorney&apos;s fees. Filing a false
            Counter Notification constitutes perjury.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Designated Copyright Agent
          </h3>
          <div className="ml-4 space-y-1">
            <p>
              <strong>Muhammad Ramdan</strong>
            </p>
            <p>Attn: Copyright Agent</p>
            <p>Jalan Raya Kediri, Kuta, Tuban</p>
            <p>Kabupaten Badung, Bali 80361</p>
            <p>Indonesia</p>
            <p>
              <Link
                href="mailto:support@clamby.id"
                className="text-primary hover:underline"
              >
                support@clamby.id
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
