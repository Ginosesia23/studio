
"use client";

import React from "react";
import { Code2, Cpu, Smartphone, Blocks, CheckCircle2, Server, Database, Layers, ArrowUpRight } from "lucide-react";

export function CustomSolutions() {
  const solutions = [
    {
      icon: <Code2 className="w-6 h-6 text-accent" />,
      title: "Bespoke Portals",
      description: "Custom dashboards and internal tools built specifically for your business logic and operational scale."
    },
    {
      icon: <Cpu className="w-6 h-6 text-accent" />,
      title: "Feature Extensions",
      description: "Need a new workflow? We engineer and integrate custom features into your existing platform seamlessly."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-accent" />,
      title: "Mobile Optimization",
      description: "Ensuring your custom features and platforms work perfectly on every screen size and mobile device."
    },
    {
      icon: <Blocks className="w-6 h-6 text-accent" />,
      title: "Full-Stack Maintenance",
      description: "We don't just build and leave; we keep your custom code updated, secure, and performant."
    },
    {
      icon: <Server className="w-6 h-6 text-accent" />,
      title: "API Integrations",
      description: "Seamlessly connect your platform to third-party services, data providers, and legacy systems."
    },
    {
      icon: <Database className="w-6 h-6 text-accent" />,
      title: "Database Engineering",
      description: "Robust data structures designed for extreme performance, integrity, and future-proof scaling."
    }
  ];

  return (
    <section id="custom-apps" className="py-32 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 technical-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <Layers size={12} />
            <span>Engineering Tier 1</span>
          </div>
          <h2 className="font-headline text-3xl lg:text-5xl font-black text-primary mb-8 tracking-tighter">
            Solutions Built for Your <br /><span className="text-accent italic">Unique Vision.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
            Generic software often hits a ceiling. We build custom-engineered functionality that scales with your specific business requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-border/20 border border-border/50 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/5">
          {solutions.map((item, idx) => (
            <div 
              key={idx} 
              className="p-12 bg-white flex flex-col hover:bg-accent/[0.02] transition-colors group relative"
            >
              <div className="absolute top-8 right-8 text-border/20 group-hover:text-accent/20 transition-colors">
                <ArrowUpRight size={24} />
              </div>
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-300">
                {item.icon}
              </div>
              <h4 className="font-headline font-bold text-xl text-primary mb-4 tracking-tight">{item.title}</h4>
              <p className="text-muted-foreground leading-relaxed text-sm font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col lg:flex-row items-center justify-between gap-10 p-10 lg:p-12 rounded-[2rem] bg-[#021123] text-white relative overflow-hidden">
          <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="p-4 bg-accent/20 rounded-2xl border border-accent/20">
              <ActivityIcon className="text-accent w-8 h-8" />
            </div>
            <div className="text-center md:text-left">
              <p className="text-xl font-headline font-bold text-white mb-2">Technical Evolution & Oversight</p>
              <p className="text-blue-100/40 text-sm font-medium">Every custom feature includes managed optimization and security maintenance.</p>
            </div>
          </div>
          <div className="relative z-10 flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
            <CheckCircle2 className="text-accent w-5 h-5" />
            <span className="text-xs font-black uppercase tracking-widest text-accent">Reliability Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActivityIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}
