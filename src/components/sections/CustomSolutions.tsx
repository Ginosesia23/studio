"use client";

import React from "react";
import {
  Code2,
  Cpu,
  Smartphone,
  Layers,
  Database,
  Server,
  CheckCircle2,
  X,
  Blocks,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function CustomSolutions() {
  const problems = [
    "Off-the-shelf platforms that don't fit your workflow",
    "Manual data entry and brittle spreadsheet glue",
    "No visibility into uptime, errors, or performance",
    "Disconnected tools across teams and vendors",
    "Generic features you outgrow within 6 months",
  ];

  const solutions = [
    "Bespoke platforms engineered around your operations",
    "Automated pipelines that replace manual processes",
    "Live monitoring with proactive incident response",
    "One integrated system, end-to-end ownership",
    "Features that evolve as your business scales",
  ];

  const solutionsCards = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Bespoke Portals",
      description: "Custom internal tools built for your specific operational scale.",
      tags: ["Auth", "Roles", "Audit log"],
      tone: "blue",
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Feature Extensions",
      description: "Seamlessly integrate new functionality into your existing platforms.",
      tags: ["API-first", "Modular", "Versioned"],
      tone: "violet",
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Mobile Ready",
      description: "Ensuring your digital assets perform flawlessly on every screen.",
      tags: ["Responsive", "PWA", "Offline"],
      tone: "mint",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "API Integrations",
      description: "Connect your platform with the wider digital ecosystem via robust APIs.",
      tags: ["REST", "Webhooks", "OAuth"],
      tone: "peach",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Data Engineering",
      description: "Scalable data structures designed for integrity and high performance.",
      tags: ["Schemas", "Migrations", "Backups"],
      tone: "rose",
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "Cloud Management",
      description: "Optimized server configurations for maximum speed and security.",
      tags: ["Autoscale", "CDN", "TLS"],
      tone: "blue",
    },
  ] as const;

  const toneStyles: Record<
    string,
    { panel: string; iconBg: string; iconColor: string; chip: string; badge: string }
  > = {
    blue: {
      panel: "pastel-blue",
      iconBg: "bg-white",
      iconColor: "text-[hsl(var(--pastel-blue-ink))]",
      chip: "bg-white/70 text-[hsl(var(--pastel-blue-ink))]",
      badge: "bg-white/80 text-[hsl(var(--pastel-blue-ink))]",
    },
    violet: {
      panel: "pastel-violet",
      iconBg: "bg-white",
      iconColor: "text-[hsl(var(--pastel-violet-ink))]",
      chip: "bg-white/70 text-[hsl(var(--pastel-violet-ink))]",
      badge: "bg-white/80 text-[hsl(var(--pastel-violet-ink))]",
    },
    mint: {
      panel: "pastel-mint",
      iconBg: "bg-white",
      iconColor: "text-[hsl(var(--pastel-mint-ink))]",
      chip: "bg-white/70 text-[hsl(var(--pastel-mint-ink))]",
      badge: "bg-white/80 text-[hsl(var(--pastel-mint-ink))]",
    },
    peach: {
      panel: "pastel-peach",
      iconBg: "bg-white",
      iconColor: "text-[hsl(var(--pastel-peach-ink))]",
      chip: "bg-white/70 text-[hsl(var(--pastel-peach-ink))]",
      badge: "bg-white/80 text-[hsl(var(--pastel-peach-ink))]",
    },
    rose: {
      panel: "pastel-rose",
      iconBg: "bg-white",
      iconColor: "text-[hsl(var(--pastel-rose-ink))]",
      chip: "bg-white/70 text-[hsl(var(--pastel-rose-ink))]",
      badge: "bg-white/80 text-[hsl(var(--pastel-rose-ink))]",
    },
  };

  return (
    <section id="custom-apps" className="py-24 bg-white border-t border-border/60">
      <div className="container mx-auto px-6">
        {/* Problem / Solution two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 max-w-6xl mx-auto mb-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-500 mb-3">
              The Problem
            </p>
            <h3 className="font-headline text-2xl lg:text-3xl font-bold text-primary mb-6 tracking-tight">
              Generic software has limits — and your team feels them daily.
            </h3>
            <ul className="space-y-3">
              {problems.map((problem) => (
                <li key={problem} className="flex items-start gap-3 text-foreground/80">
                  <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-base leading-relaxed">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 mb-3">
              The Solution
            </p>
            <h3 className="font-headline text-2xl lg:text-3xl font-bold text-primary mb-6 tracking-tight">
              One engineering partner. Everything connected.
            </h3>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution} className="flex items-start gap-3 text-foreground/80">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-base leading-relaxed">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border/60 text-foreground/70 text-xs font-semibold mb-6">
            <Blocks size={14} className="text-accent" />
            <span>Custom Apps &middot; Tier 1 Engineering</span>
          </div>
          <h2 className="font-headline text-3xl lg:text-5xl font-bold text-primary mb-5 tracking-tight">
            Built for Your <span className="text-accent">Unique Vision.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Generic software has limits. We build custom-engineered functionality that evolves
            with your business requirements.
          </p>
        </div>

        {/* Pastel feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionsCards.map((item) => {
            const t = toneStyles[item.tone];
            return (
              <div
                key={item.title}
                className={cn(
                  "relative rounded-3xl border border-border/60 p-8 transition-all hover:shadow-md overflow-hidden",
                  t.panel
                )}
              >
                <div
                  className={cn(
                    "w-11 h-11 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-white/80",
                    t.iconBg,
                    t.iconColor
                  )}
                >
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg text-primary mb-2 tracking-tight">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed text-sm mb-5">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        "inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border border-white/80",
                        t.chip
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
