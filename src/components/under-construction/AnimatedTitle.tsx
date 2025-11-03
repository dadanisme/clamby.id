"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface AnimatedTitleProps {
  prefersReducedMotion: boolean;
}

export function AnimatedTitle({ prefersReducedMotion }: AnimatedTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion || !titleRef.current) return;

      const tl = gsap.timeline();
      const titleText = titleRef.current.textContent || "";
      titleRef.current.textContent = "";
      titleRef.current.style.opacity = "1";

      const letters = titleText.split("");
      letters.forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter === " " ? "\u00A0" : letter;
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(50px) rotateX(90deg)";
        titleRef.current?.appendChild(span);

        tl.to(
          span,
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          index * 0.05
        );
      });
    },
    { dependencies: [prefersReducedMotion] }
  );

  return (
    <h1
      ref={titleRef}
      className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl"
      style={{ opacity: 0 }}
    >
      clamby.id
    </h1>
  );
}

