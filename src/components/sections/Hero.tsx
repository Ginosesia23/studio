"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const trustBadges = [
    "ISO 27001",
    "GDPR Ready",
    "SOC 2 Aligned",
    "WCAG 2.1 AA",
    "99.99% Uptime",
  ];

  return (
    <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 hero-wash pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border/60 text-foreground/70 text-xs font-semibold mb-8 animate-fade-up">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>End-to-End Engineering &middot; Build, Maintain, Evolve</span>
          </div>

          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 animate-fade-up animate-delay-100 text-primary tracking-tight">
            Robust Platforms.
            <br />
            <span className="text-accent">Quietly Maintained.</span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up animate-delay-200">
            The platform partner that builds, maintains, and evolves your digital systems —
            <span className="text-foreground font-semibold"> robust web platforms, managed infrastructure, and bespoke features</span>, all under one roof.
          </p>

          {/* Compliance / trust badges row */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10 animate-fade-up animate-delay-200">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" strokeWidth={2.5} />
                <span>{badge}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-up animate-delay-300">
            <Button
              size="lg"
              asChild
              className="bg-primary text-white hover:bg-primary/90 font-semibold h-12 px-7 rounded-xl shadow-md transition-all"
            >
              <Link href="#contact" className="flex items-center gap-2">
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white border-border text-primary hover:bg-secondary h-12 px-7 font-semibold rounded-xl transition-all"
            >
              <Link href="#services">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
