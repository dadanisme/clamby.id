"use client";

import { motion } from "motion/react";

export function LimitationsLiabilitySection() {
  return (
    <section className="mb-12" id="liability">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        22. LIMITATIONS OF LIABILITY
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE
          TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
          EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
          PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR
          USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY
          OF SUCH DAMAGES.
        </p>
        <p>
          NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
          LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM
          OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF
          ANY, BY YOU TO US{" "}
          <strong>
            DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING
          </strong>
          .
        </p>
        <p>
          CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS
          ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN
          DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE
          DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE
          ADDITIONAL RIGHTS.
        </p>
      </div>
    </section>
  );
}
