"use client";

import { motion } from "motion/react";

export function IndemnificationSection() {
  return (
    <section className="mb-12" id="indemnification">
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        23. INDEMNIFICATION
      </motion.h2>

      <div className="space-y-4 text-muted-foreground">
        <p>
          You agree to defend, indemnify, and hold us harmless, including our
          subsidiaries, affiliates, and all of our respective officers, agents,
          partners, and employees, from and against any loss, damage, liability,
          claim, or demand, including reasonable attorneys&apos; fees and
          expenses, made by any third party due to or arising out of: (1) your
          Contributions; (2) use of the Services; (3) breach of these Legal
          Terms; (4) any breach of your representations and warranties set forth
          in these Legal Terms; (5) your violation of the rights of a third
          party, including but not limited to intellectual property rights; or
          (6) any overt harmful act toward any other user of the Services with
          whom you connected via the Services. Notwithstanding the foregoing, we
          reserve the right, at your expense, to assume the exclusive{" "}
          <strong>defense</strong> and control of any matter for which you are
          required to indemnify us, and you agree to cooperate, at your expense,
          with our <strong>defense</strong> of such claims. We will use
          reasonable efforts to notify you of any such claim, action, or
          proceeding which is subject to this indemnification upon becoming
          aware of it.
        </p>
      </div>
    </section>
  );
}
