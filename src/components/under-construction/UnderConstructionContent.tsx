"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatedBackground } from "./AnimatedBackground";
import { AnimatedTitle } from "./AnimatedTitle";
import { InstagramLink } from "./InstagramLink";

export function UnderConstructionContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion || !subtitleRef.current) return;

      const tl = gsap.timeline();
      tl.to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      );
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
    >
      <AnimatedBackground />

      <main className="relative z-10 flex flex-col items-center justify-center gap-6 px-8 text-center">
        <AnimatedTitle prefersReducedMotion={prefersReducedMotion} />
        <p
          ref={subtitleRef}
          className="text-lg text-muted-foreground sm:text-xl"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          Website Under Construction
        </p>
        <InstagramLink prefersReducedMotion={prefersReducedMotion} />
      </main>

      {/* Animated decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-2 w-2 rounded-full bg-primary/50"
              style={{
                animation: prefersReducedMotion
                  ? "none"
                  : `pulse 1.5s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
