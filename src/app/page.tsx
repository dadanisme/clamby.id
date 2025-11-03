"use client";

import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <main className="flex flex-col items-center justify-center gap-6 px-8 text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          clamby.id
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl">
          Website Under Construction
        </p>
        <Link
          href="https://instagram.com/clamby.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <Instagram className="h-5 w-5" />
          <span className="text-sm sm:text-base">@clamby.app</span>
        </Link>
      </main>
    </div>
  );
}
