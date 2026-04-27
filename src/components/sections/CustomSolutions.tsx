"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code2, Cpu, Smartphone, Blocks, CheckCircle2, Server, Database, Layers, ArrowUpRight } from "lucide-react";

export function CustomSolutions() {
  const solutions = [
    {
      icon: <Code2 className="w-5 h-5 text-accent" />,
      title: "Bespoke Portals",
      description: "Custom internal tools built for your specific operational scale."
    },
    {
      icon: <Cpu className="w-5 h-5 text-accent" />,
      title: "Feature Extensions",
      description: "Seamlessly integrate new functionality into your existing platforms."
    },
    {
      icon: <Smartphone className="w-5 h-5 text-accent" />,
      title: "Mobile Ready",
      description: "Ensuring your digital assets perform flawlessly on every screen."
    },
    {
      icon: <Layers className="w-5 h-5 text-accent" />,
      title: "API Integrations",
      description: "Connect your platform with the wider digital ecosystem via robust APIs."
    },
    {
      icon: <Database className="w-5 h-5 text-accent" />,
      title: "Data Engineering",
      description: "Scalable data structures designed for integrity and high performance."
    },
    {
      icon: <Server className="w-5 h-5 text-accent" />,
      title: "Cloud Management",
      description: "Optimized server configurations for maximum speed and security."
    }
  ];

  return (
    <section id="custom-apps" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-[0.05] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-4">
            <Blocks size={12} />
            <span>Engineering Tier 1</span>
          </div>
          <h2 className="font-headline text-3xl lg:text-5xl font-bold text-primary mb-6 tracking-tight">
            Built for Your <span className="text-accent italic">Unique Vision.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
            Generic software has limits. We build custom-engineered functionality 
            that evolves with your business requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, idx) => (
            <div 
              key={idx} 
              className="p-10 bg-white border border-border/50 rounded-3xl flex flex-col hover:border-accent/30 transition-all group relative shadow-sm hover:shadow-md"
            >
              <div className="absolute top-6 right-6 text-border/40 group-hover:text-accent/40 transition-colors">
                <ArrowUpRight size={20} />
              </div>
              <div className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-accent/10 transition-colors">
                {item.icon}
              </div>
              <h4 className="font-bold text-lg text-primary mb-3 tracking-tight">{item.title}</h4>
              <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-primary text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
          <div className="relative z-10 flex items-center gap-5">
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center border border-accent/20">
              <CheckCircle2 className="text-accent w-6 h-6" />
            </div>
            <div>
              <p className="text-lg font-bold">Managed Optimization Included</p>
              <p className="text-blue-100/50 text-xs font-medium uppercase tracking-widest">Reliability Guaranteed</p>
            </div>
          </div>
          <div className="relative z-10">
            <Button asChild variant="secondary" className="font-bold rounded-full">
              <Link href="#contact">Contact an Engineer</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
