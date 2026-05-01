"use client";

import React from "react";
import { CheckCircle2, Shield, Target, Zap, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export function AboutUs() {
  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Built to Last",
      desc: "We prioritize stability and long-term security in every line of code.",
      tone: "blue",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Growth Oriented",
      desc: "Our platforms are engineered to evolve with your business scale.",
      tone: "violet",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Direct Support",
      desc: "Instant access to senior engineers for maintenance and updates.",
      tone: "mint",
    },
  ] as const;

  const promises = [
    "Full Platform Ownership",
    "Proactive System Maintenance",
    "Bespoke Feature Engineering",
    "Priority Incident Response",
    "Security-First Architecture",
    "Direct Access to Engineering",
  ];

  const toneStyles: Record<string, { panel: string; iconColor: string }> = {
    blue: { panel: "pastel-blue", iconColor: "text-[hsl(var(--pastel-blue-ink))]" },
    violet: { panel: "pastel-violet", iconColor: "text-[hsl(var(--pastel-violet-ink))]" },
    mint: { panel: "pastel-mint", iconColor: "text-[hsl(var(--pastel-mint-ink))]" },
  };

  return (
    <section id="about" className="py-24 bg-white border-t border-border/60">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border/60 text-foreground/70 text-xs font-semibold mb-6">
            <Users size={14} className="text-accent" />
            <span>Our Commitment &middot; Built by Senior Engineers</span>
          </div>
          <h2 className="font-headline text-3xl lg:text-5xl font-bold text-primary mb-5 tracking-tight">
            Your Long-Term <span className="text-accent">Tech Partner.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Apex Systems provides the enterprise-level technical expertise small businesses
            need to thrive in a digital-first economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {values.map((v) => {
            const t = toneStyles[v.tone];
            return (
              <div
                key={v.title}
                className={cn(
                  "p-8 rounded-3xl border border-border/60 hover:shadow-md transition-all",
                  t.panel
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-white/80 shadow-sm mb-5",
                    t.iconColor
                  )}
                >
                  {v.icon}
                </div>
                <h4 className="font-bold text-lg text-primary tracking-tight mb-2">{v.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Promise card */}
        <div className="max-w-6xl mx-auto p-10 lg:p-12 rounded-[2rem] bg-secondary border border-border/60 relative overflow-hidden">
          <h4 className="text-xl lg:text-2xl font-bold text-primary mb-8 tracking-tight">
            What defines an Apex partnership:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
            {promises.map((value) => (
              <div key={value} className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-600 w-5 h-5 shrink-0" strokeWidth={2.5} />
                <span className="font-medium text-foreground/90">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
