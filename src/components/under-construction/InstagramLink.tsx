"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Instagram } from "lucide-react";
import Link from "next/link";

interface InstagramLinkProps {
  prefersReducedMotion: boolean;
}

export function InstagramLink({ prefersReducedMotion }: InstagramLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion || !linkRef.current) return;

      gsap.to(linkRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      });
    },
    { dependencies: [prefersReducedMotion] }
  );

  return (
    <Link
      ref={linkRef}
      href="https://instagram.com/clamby.app"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-muted-foreground transition-all duration-200 hover:text-foreground hover:scale-105"
      style={{ opacity: 0, transform: "scale(0.8)" }}
    >
      <Instagram className="h-5 w-5" />
      <span className="text-sm sm:text-base">@clamby.app</span>
    </Link>
  );
}
