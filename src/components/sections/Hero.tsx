"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-40" />
      
      {/* Dynamic Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border text-primary text-[10px] font-bold uppercase tracking-widest mb-10 animate-fade-up shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            <span>Scaleable Infrastructure & Managed Support</span>
          </div>
          
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-8 animate-fade-up animate-delay-100 text-primary tracking-tight">
            Digital Engineering <br />
            <span className="text-accent italic">Built for the Future.</span>
          </h1>
          
          <p className="text-base lg:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-up animate-delay-200 font-medium">
            Helping startups and established businesses build robust web platforms and maintain 
            high-availability systems with enterprise-grade precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animate-delay-300">
            <Button size="lg" asChild className="bg-primary text-white hover:bg-primary/90 font-bold h-12 px-8 rounded-full shadow-lg transition-all hover:-translate-y-0.5">
              <Link href="#contact" className="flex items-center gap-2">
                Start Building <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-border bg-white text-primary hover:bg-accent/5 h-12 px-8 font-bold rounded-full transition-all">
              <Link href="#services">Our Capabilities</Link>
            </Button>
          </div>
        </div>

        {/* Hero Feature Icons */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-up animate-delay-300">
          {[
            { label: "Systems Monitoring", value: "24/7 Support", desc: "Constant uptime vigilance." },
            { label: "Reliable Stacks", value: "Modern Tech", desc: "Next.js, Cloud-native, AI ready." },
            { label: "Bespoke Dev", value: "Tier 1 Quality", desc: "Code that scales with vision." }
          ].map((stat, i) => (
            <div key={i} className="p-8 bg-white border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">{stat.label}</p>
              <h3 className="text-xl font-bold text-primary mb-1">{stat.value}</h3>
              <p className="text-xs text-muted-foreground font-medium">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
