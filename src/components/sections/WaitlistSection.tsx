"use client";

import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ASSETS } from "@/lib/constants";

export function WaitlistSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    // TODO: Implement actual waitlist submission logic
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <section
      id="waitlist"
      ref={ref}
      className="relative w-full py-10 sm:py-16 bg-background scroll-mt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-4xl mx-auto"
        >
          {/* Header Image - Diverse People */}
          <div className="relative w-full h-48 sm:h-64 overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src={ASSETS.WELCOME_IMAGE}
                alt="Waitlist people"
                fill
                className="object-cover object-[0%_18%]"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
              {/* Gradient overlay to blend with white background */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/20 to-background" />
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 lg:p-12 space-y-6 sm:space-y-8">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground"
            >
              Join Our Waitlist
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto"
            >
              Be among the first to experience Clamby. Get early access to our
              digital wardrobe assistant and exclusive updates on new features
              and releases.
            </motion.p>

            {/* Email Input and Button */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto"
            >
              <Input
                type="email"
                placeholder="name@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting || isSubmitted}
                className="h-10"
              />
              <Button
                variant="default"
                type="submit"
                size="lg"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  "Joining..."
                ) : isSubmitted ? (
                  "Joined! ✓"
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </motion.form>

            {/* Privacy Disclaimer */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto"
            >
              &ldquo;Your information will never be shared with third parties,
              and you can unsubscribe from our updates at any time.&rdquo;
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
