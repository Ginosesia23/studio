"use client";

import React from "react";
import { Code2, Cpu, Smartphone, Blocks, CheckCircle2, Server, Database, Layers } from "lucide-react";

export function CustomSolutions() {
  const solutions = [
    {
      icon: <Code2 className="w-8 h-8 text-accent" />,
      title: "Bespoke Portals",
      description: "Custom dashboards and internal tools built specifically for your business logic."
    },
    {
      icon: <Cpu className="w-8 h-8 text-accent" />,
      title: "Feature Extensions",
      description: "Need a new workflow? We engineer and integrate custom features into your existing platform."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-accent" />,
      title: "Mobile Optimization",
      description: "Ensuring your custom features and platforms work perfectly on every screen size."
    },
    {
      icon: <Blocks className="w-8 h-8 text-accent" />,
      title: "Full-Stack Maintenance",
      description: "We don't just build and leave; we keep your custom code updated and secure."
    },
    {
      icon: <Server className="w-8 h-8 text-accent" />,
      title: "API Integrations",
      description: "Seamlessly connect your platform to third-party services and data providers."
    },
    {
      icon: <Database className="w-8 h-8 text-accent" />,
      title: "Database Engineering",
      description: "Robust data structures designed for performance and integrity."
    }
  ];

  return (
    <section id="custom-apps" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Custom Feature Development</h2>
          <h3 className="font-headline text-4xl lg:text-6xl font-bold text-primary mb-6">
            Solutions Built for Your <span className="text-accent">Unique</span> Vision.
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Off-the-shelf software often misses the mark. We specialize in creating custom 
            functionality that bridges the gap between your requirements and reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <div key={idx} className="p-10 rounded-[2.5rem] bg-background border border-border hover:border-accent/50 transition-all group">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent/10 transition-colors">
                {item.icon}
              </div>
              <h4 className="font-bold text-2xl text-primary mb-4">{item.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-accent/5 border border-accent/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent rounded-xl shadow-lg shadow-accent/20">
              <Layers className="text-primary w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-primary text-lg">Continuous Evolution</p>
              <p className="text-muted-foreground">Every custom feature comes with managed maintenance.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-green-500 w-6 h-6" />
            <span className="font-bold text-primary">Reliable long-term support.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
