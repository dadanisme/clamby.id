"use client";

import { motion } from "motion/react";

export function DisputeResolutionSection() {
  return (
    <section className="mb-12" id="disputes">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        19. DISPUTE RESOLUTION
      </motion.h2>

      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Informal Negotiations
          </h3>
          <p>
            To expedite resolution and control the cost of any dispute,
            controversy, or claim related to these Legal Terms (each a{" "}
            <strong>&quot;Dispute&quot;</strong> and collectively, the{" "}
            <strong>&quot;Disputes&quot;</strong>) brought by either you or us
            (individually, a <strong>&quot;Party&quot;</strong> and
            collectively, the <strong>&quot;Parties&quot;</strong>), the Parties
            agree to first attempt to negotiate any Dispute (except those
            Disputes expressly provided below) informally for at least{" "}
            <strong>thirty (30)</strong> days before initiating arbitration.
            Such informal negotiations commence upon written notice from one
            Party to the other Party.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Binding Arbitration
          </h3>
          <p>
            Any dispute arising out of or in connection with these Legal Terms,
            including any question regarding its existence, validity, or
            termination, shall be referred to and finally resolved by the
            International Commercial Arbitration Court under the European
            Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146)
            according to the Rules of this ICAC, which, as a result of referring
            to it, is considered as the part of this clause. The number of
            arbitrators shall be <strong>three (3)</strong>. The seat, or legal
            place, or arbitration shall be <strong>Kabupaten Badung</strong>,{" "}
            <strong>Indonesia</strong>. The language of the proceedings shall be{" "}
            <strong>English</strong>. The governing law of these Legal Terms
            shall be substantive law of <strong>Indonesia</strong>.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Restrictions
          </h3>
          <p>
            The Parties agree that any arbitration shall be limited to the
            Dispute between the Parties individually. To the full extent
            permitted by law, (a) no arbitration shall be joined with any other
            proceeding; (b) there is no right or authority for any Dispute to be
            arbitrated on a class-action basis or to <strong>utilize</strong>{" "}
            class action procedures; and (c) there is no right or authority for
            any Dispute to be brought in a purported representative capacity on
            behalf of the general public or any other persons.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Exceptions to Informal Negotiations and Arbitration
          </h3>
          <p>
            The Parties agree that the following Disputes are not subject to the
            above provisions concerning informal negotiations binding
            arbitration: (a) any Disputes seeking to enforce or protect, or
            concerning the validity of, any of the intellectual property rights
            of a Party; (b) any Dispute related to, or arising from, allegations
            of theft, piracy, invasion of privacy, or{" "}
            <strong>unauthorized</strong> use; and (c) any claim for injunctive
            relief. If this provision is found to be illegal or unenforceable,
            then neither Party will elect to arbitrate any Dispute falling
            within that portion of this provision found to be illegal or
            unenforceable and such Dispute shall be decided by a court of
            competent jurisdiction within the courts listed for jurisdiction
            above, and the Parties agree to submit to the personal jurisdiction
            of that court.
          </p>
        </div>
      </div>
    </section>
  );
}
