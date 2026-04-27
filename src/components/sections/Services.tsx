"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code2, Settings, Puzzle, CheckCircle2, ChevronRight } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Platform Creation",
      focus: "01 / Build",
      description: "Custom high-performance websites and complex digital platforms engineered for scaling startups.",
      icon: <Code2 className="w-8 h-8 text-accent" />,
      features: ["Next.js Architecture", "Scalable Databases", "Cloud Native Setup"]
    },
    {
      title: "Managed Maintenance",
      focus: "02 / Maintain",
      description: "Full-cycle technical oversight, security updates, and performance tuning for your ecosystem.",
      icon: <Settings className="w-8 h-8 text-accent" />,
      features: ["Security Patching", "Cloud Management", "Proactive Audits"]
    },
    {
      title: "Custom Feature Dev",
      focus: "03 / Evolve",
      description: "Bespoke engineering for new workflows and integrations as your business logic grows.",
      icon: <Puzzle className="w-8 h-8 text-accent" />,
      features: ["API Engineering", "Process Automation", "Enterprise Integrations"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-4">Service Capabilities</h2>
            <h3 className="font-headline text-4xl lg:text-5xl font-black text-primary tracking-tighter leading-none">
              Technical Excellence. <br /><span className="text-accent">Zero Compromise.</span>
            </h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-md font-medium">
            From architecture design to continuous system optimization, we provide the technical foundation your company demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card key={idx} className="border border-border/50 shadow-none hover:border-accent/40 transition-all group bg-background/30 rounded-[2rem] overflow-hidden">
              <CardHeader className="p-10 pb-6">
                <div className="mb-10 w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-accent uppercase tracking-widest">{service.focus}</p>
                  <CardTitle className="text-2xl font-black text-primary tracking-tight pt-1">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground pt-6 leading-relaxed text-base font-medium">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-10 pt-0">
                <div className="pt-8 border-t border-border/50">
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-sm font-bold text-primary/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:text-accent transition-colors">
                    Explore Details <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}