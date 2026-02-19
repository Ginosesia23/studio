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
      icon: <Code2 className="w-10 h-10 text-accent" />,
      features: ["Next.js & React Dev", "Mobile-First Design", "Secure Database Setup", "Scalable Architecture"]
    },
    {
      title: "Managed Maintenance",
      focus: "Update",
      description: "We take full responsibility for your systems, providing regular updates, security patches, and performance tuning.",
      icon: <Settings className="w-10 h-10 text-accent" />,
      features: ["24/7 Monitoring", "Security Patching", "Cloud Management", "Regular Backups"]
    },
    {
      title: "Custom Feature Dev",
      focus: "Evolve",
      description: "As your business grows, we engineer custom features and bespoke integrations to meet your changing requirements.",
      icon: <Puzzle className="w-10 h-10 text-accent" />,
      features: ["API Integrations", "Workflow Automation", "User Management", "Payment Gateways"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">What We Do</h2>
          <h3 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-6">Your Technical Support Partner</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From the first line of code to ongoing system updates, Apex Systems provides the expertise 
            small businesses need to succeed in a digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="border-none shadow-xl hover:shadow-2xl transition-all group bg-background/30 rounded-3xl overflow-hidden">
              <CardHeader className="p-8">
                <div className="mb-8 p-4 rounded-2xl bg-white shadow-sm w-fit group-hover:bg-accent/10 transition-colors">
                  {service.icon}
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-black text-accent uppercase tracking-widest">{service.focus}</p>
                  <CardTitle className="text-2xl font-bold text-primary">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground pt-4 leading-relaxed text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <ul className="space-y-4">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm font-semibold text-primary/70">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
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
