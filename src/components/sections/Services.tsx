"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Code2, Settings, Puzzle, CheckCircle2 } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Platform Creation",
      focus: "Build",
      description: "We help small companies design and launch professional websites and complex digital platforms from scratch.",
      icon: <Code2 className="w-8 h-8 text-accent" />,
      features: ["Next.js & React Dev", "Mobile-First Design", "Secure Database Setup", "Scalable Architecture"]
    },
    {
      title: "Managed Maintenance",
      focus: "Update",
      description: "We take full responsibility for your systems, providing regular updates, security patches, and performance tuning.",
      icon: <Settings className="w-8 h-8 text-accent" />,
      features: ["24/7 Monitoring", "Security Patching", "Cloud Management", "Regular Backups"]
    },
    {
      title: "Custom Feature Dev",
      focus: "Evolve",
      description: "As your business grows, we engineer custom features and bespoke integrations to meet your changing requirements.",
      icon: <Puzzle className="w-8 h-8 text-accent" />,
      features: ["API Integrations", "Workflow Automation", "User Management", "Payment Gateways"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">What We Do</h2>
          <h3 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-5">Your Technical Support Partner</h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            From the first line of code to ongoing system updates, Apex Systems provides the expertise 
            small businesses need to succeed in a digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-all group bg-background/30 rounded-2xl overflow-hidden">
              <CardHeader className="p-6">
                <div className="mb-6 p-3 rounded-xl bg-white shadow-sm w-fit group-hover:bg-accent/10 transition-colors">
                  {service.icon}
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-black text-accent uppercase tracking-widest">{service.focus}</p>
                  <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground pt-3 leading-relaxed text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-3">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-xs font-semibold text-primary/70">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
