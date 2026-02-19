"use client";

import React from "react";
import { Code2, Cpu, Smartphone, Blocks, CheckCircle2, Server, Database, Layers } from "lucide-react";

export function CustomSolutions() {
  const solutions = [
    {
      icon: <Code2 className="w-6 h-6 text-accent" />,
      title: "Bespoke Portals",
      description: "Custom dashboards and internal tools built specifically for your business logic."
    },
    {
      icon: <Cpu className="w-6 h-6 text-accent" />,
      title: "Feature Extensions",
      description: "Need a new workflow? We engineer and integrate custom features into your existing platform."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-accent" />,
      title: "Mobile Optimization",
      description: "Ensuring your custom features and platforms work perfectly on every screen size."
    },
    {
      icon: <Blocks className="w-6 h-6 text-accent" />,
      title: "Full-Stack Maintenance",
      description: "We don't just build and leave; we keep your custom code updated and secure."
    },
    {
      icon: <Server className="w-6 h-6 text-accent" />,
      title: "API Integrations",
      description: "Seamlessly connect your platform to third-party services and data providers."
    },
    {
      icon: <Database className="w-6 h-6 text-accent" />,
      title: "Database Engineering",
      description: "Robust data structures designed for performance and integrity."
    }
  ];

  return (
    <section id="custom-apps" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Custom Feature Development</h2>
          <h3 className="font-headline text-3xl lg:text-5xl font-bold text-primary mb-5">
            Solutions Built for Your <span className="text-accent">Unique</span> Vision.
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            Off-the-shelf software often misses the mark. We specialize in creating custom 
            functionality that bridges the gap between your requirements and reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, idx) => (
            <div key={idx} className="p-8 rounded-[1.5rem] bg-background border border-border hover:border-accent/30 transition-all group">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                {item.icon}
              </div>
              <h4 className="font-bold text-lg text-primary mb-3">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 rounded-2xl bg-accent/5 border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent rounded-lg shadow-md shadow-accent/10">
              <Layers className="text-primary w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-primary text-base">Continuous Evolution</p>
              <p className="text-xs text-muted-foreground">Every custom feature comes with managed maintenance.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-green-500 w-5 h-5" />
            <span className="font-bold text-primary text-sm">Reliable long-term support.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
