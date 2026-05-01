"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight, Activity, Lock, Gauge } from "lucide-react";
import Link from "next/link";

export function ManagedSupport() {
  const supportFeatures = [
    {
      icon: <Activity className="w-5 h-5" />,
      title: "Real-time Monitoring",
      description: "24/7 surveillance of system health and performance.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Security Shield",
      description: "Proactive patches and automated threat detection.",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Encrypted Backups",
      description: "Redundant protection with fail-safe recovery protocols.",
    },
  ];

  const metrics = [
    { label: "Network Uptime", val: "99.99%", progress: 99 },
    { label: "Security Integrity", val: "Grade A+", progress: 95 },
    { label: "System Response", val: "< 10ms", progress: 90 },
  ];

  return (
    <section id="support" className="py-24 bg-background border-t border-border/60">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border/60 text-foreground/70 text-xs font-semibold mb-6">
            <Gauge size={14} className="text-accent" />
            <span>Managed Support &middot; Vigilant Oversight</span>
          </div>
          <h2 className="font-headline text-3xl lg:text-5xl font-bold text-primary mb-5 tracking-tight">
            Set It and <span className="text-accent">Forget It.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Focus on business growth while our engineers monitor, maintain, and secure your
            digital assets around the clock.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left: feature list */}
          <div className="space-y-4">
            {supportFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-border/60 rounded-2xl flex gap-5 hover:shadow-md transition-shadow"
              >
                <div className="shrink-0 w-11 h-11 bg-secondary rounded-xl flex items-center justify-center text-accent border border-border/60">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold text-base text-primary mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: metrics card */}
          <div className="bg-white rounded-3xl border border-border/60 p-8 lg:p-10 shadow-sm flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <Activity className="text-emerald-500 w-5 h-5" />
                System Status
              </h3>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-widest border border-emerald-200">
                Optimal
              </span>
            </div>

            <div className="space-y-6 flex-1">
              {metrics.map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    <span>{metric.label}</span>
                    <span className="text-accent">{metric.val}</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-1000"
                      style={{ width: `${metric.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="mt-8 w-full bg-primary text-white hover:bg-primary/90 font-semibold h-12 rounded-xl"
            >
              <Link href="#contact" className="flex items-center justify-center gap-2">
                Upgrade Your Support <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
