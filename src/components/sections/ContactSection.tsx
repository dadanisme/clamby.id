"use client";

import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ASSETS, EXTERNAL_LINKS } from "@/lib/constants";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatusMessage({ type: null, text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Success
      setStatusMessage({
        type: "success",
        text: "Thank you! Your message has been sent successfully.",
      });
      setFormData({
        name: "",
        institution: "",
        email: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatusMessage({ type: null, text: "" });
      }, 5000);
    } catch (error) {
      setStatusMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact-us"
      ref={ref}
      className="relative w-full py-10 sm:py-16 scroll-mt-16 bg-linear-to-b from-secondary to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-card shadow-2xl border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 p-4 lg:p-8">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full h-full min-h-[500px] lg:min-h-[600px]"
            >
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src={ASSETS.HERO_IMAGE}
                  alt="Contact Clamby"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col h-full p-4 lg:p-8 lg:pl-0"
            >
              <div className=" flex flex-col flex-1">
                {/* Header */}
                <div className="space-y-2 mb-8">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-3xl sm:text-4xl font-bold text-foreground"
                  >
                    Contact Us
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-base text-muted-foreground"
                  >
                    Contact us if you have any queries
                  </motion.p>
                </div>

                {/* Contact Form */}
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onSubmit={handleSubmit}
                  className="space-y-6 flex-1 flex flex-col"
                >
                  {/* Status Message */}
                  {statusMessage.type && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-lg border ${
                        statusMessage.type === "success"
                          ? "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200"
                          : "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200"
                      }`}
                    >
                      <p className="text-sm font-medium">
                        {statusMessage.text}
                      </p>
                    </motion.div>
                  )}

                  {/* Name and Institution */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="text"
                        name="institution"
                        placeholder="Institution"
                        value={formData.institution}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="h-11"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="h-11"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Textarea
                      name="message"
                      placeholder="Enter Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  {/* Send Message Button */}
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto h-11"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.form>

                {/* Embedded Map */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mt-8 rounded-lg overflow-hidden border border-border"
                >
                  <iframe
                    src={EXTERNAL_LINKS.MAP}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                    title="Clamby Location"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
