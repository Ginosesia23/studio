"use client";

import React from "react";
import { Code2, Settings, Puzzle, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export function Services() {
  const services = [
    {
      step: "Step 1",
      eyebrow: "Build",
      title: "Platform Creation",
      description:
        "Custom high-performance websites and complex digital platforms engineered for performance.",
      features: ["Next.js Architecture", "Scalable Databases", "Cloud Infrastructure"],
      icon: <Code2 className="w-6 h-6" />,
      tone: "blue",
    },
    {
      step: "Step 2",
      eyebrow: "Maintain",
      title: "Managed Maintenance",
      description:
        "Full-cycle technical oversight, security updates, and performance tuning for your systems.",
      features: ["Security Patching", "Uptime Monitoring", "Performance Audits"],
      icon: <Settings className="w-6 h-6" />,
      tone: "violet",
    },
    {
      step: "Step 3",
      eyebrow: "Evolve",
      title: "Custom Feature Dev",
      description:
        "Bespoke engineering for new workflows and integrations as your business logic expands.",
      features: ["API Engineering", "Process Automation", "Third-party Sync"],
      icon: <Puzzle className="w-6 h-6" />,
      tone: "mint",
    },
  ] as const;

  const toneStyles: Record<
    string,
    { panel: string; iconBg: string; iconColor: string; eyebrow: string; chip: string }
  > = {
    blue: {
      panel: "pastel-blue",
      iconBg: "bg-white",
      iconColor: "text-[hsl(var(--pastel-blue-ink))]",
      eyebrow: "text-[hsl(var(--pastel-blue-ink))]",
      chip: "bg-white/70 text-[hsl(var(--pastel-blue-ink))]",
    },
    violet: {
      panel: "pastel-violet",
      iconBg: "bg-white",
      iconColor: "text-[hsl(var(--pastel-violet-ink))]",
      eyebrow: "text-[hsl(var(--pastel-violet-ink))]",
      chip: "bg-white/70 text-[hsl(var(--pastel-violet-ink))]",
    },
    mint: {
      panel: "pastel-mint",
      iconBg: "bg-white",
      iconColor: "text-[hsl(var(--pastel-mint-ink))]",
      eyebrow: "text-[hsl(var(--pastel-mint-ink))]",
      chip: "bg-white/70 text-[hsl(var(--pastel-mint-ink))]",
    },
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border/60 text-foreground/70 text-xs font-semibold mb-6">
            <Rocket size={14} className="text-accent" />
            <span>Core Capabilities &middot; End-to-End Engineering</span>
          </div>
          <h2 className="font-headline text-3xl lg:text-5xl font-bold text-primary mb-5 tracking-tight">
            Engineering Excellence. <span className="text-accent">No Compromises.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From initial architecture to continuous optimization, we provide the technical
            foundation your business needs to grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const t = toneStyles[service.tone];
            return (
              <div
                key={idx}
                className={cn(
                  "relative rounded-3xl border border-border/60 p-8 overflow-hidden transition-all hover:shadow-md",
                  t.panel
                )}
              >
                {/* STEP pill */}
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 border border-white/80 text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
                    {service.step}
                  </span>
                </div>

                <div className="pt-12">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-white/80",
                      t.iconBg,
                      t.iconColor
                    )}
                  >
                    {service.icon}
                  </div>

                  <p
                    className={cn(
                      "text-[10px] font-bold uppercase tracking-[0.2em] mb-2",
                      t.eyebrow
                    )}
                  >
                    {service.eyebrow}
                  </p>
                  <h3 className="text-2xl font-bold text-primary tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className={cn(
                          "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border border-white/80",
                          t.chip
                        )}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
