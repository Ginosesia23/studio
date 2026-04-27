"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code2, Settings, Puzzle, ChevronRight, Activity } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Platform Creation",
      focus: "Build",
      description: "Custom high-performance websites and complex digital platforms engineered for performance.",
      icon: <Code2 className="w-6 h-6 text-accent" />,
      features: ["Next.js Architecture", "Scalable Databases", "Cloud Infrastructure"]
    },
    {
      title: "Managed Maintenance",
      focus: "Maintain",
      description: "Full-cycle technical oversight, security updates, and performance tuning for your systems.",
      icon: <Settings className="w-6 h-6 text-accent" />,
      features: ["Security Patching", "Uptime Monitoring", "Performance Audits"]
    },
    {
      title: "Custom Feature Dev",
      focus: "Evolve",
      description: "Bespoke engineering for new workflows and integrations as your business logic expands.",
      icon: <Puzzle className="w-6 h-6 text-accent" />,
      features: ["API Engineering", "Process Automation", "Third-party Sync"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white border-y border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-4">
            <Activity size={12} />
            <span>Core Capabilities</span>
          </div>
          <h2 className="font-headline text-3xl lg:text-5xl font-bold text-primary mb-6 tracking-tight">
            Engineering Excellence. <br />No Compromises.
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            From initial architecture to continuous optimization, we provide the technical 
            foundation your business needs to grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="border border-border/60 shadow-none hover:shadow-xl hover:border-accent/40 transition-all rounded-3xl overflow-hidden bg-background/20 group">
              <CardHeader className="p-8 pb-4">
                <div className="mb-6 w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  {service.icon}
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest">{service.focus}</p>
                  <CardTitle className="text-2xl font-bold text-primary tracking-tight">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground pt-4 leading-relaxed font-medium">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-4">
                <div className="pt-6 border-t border-border/50">
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-sm font-bold text-primary/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors">
                    Learn More <ChevronRight className="w-4 h-4" />
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
