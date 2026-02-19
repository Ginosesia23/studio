"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Code2, Settings, Puzzle, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-28 overflow-hidden bg-background">
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-accent/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold mb-6 animate-fade-up">
            <Rocket size={14} className="fill-current" />
            <span className="uppercase tracking-widest">Build • Maintain • Evolve</span>
          </div>
          
          <h1 className="font-headline text-4xl lg:text-6xl font-black leading-tight text-primary mb-6 animate-fade-up animate-delay-100">
            Platform Creation & <span className="text-accent">Managed Maintenance.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up animate-delay-200">
            We help small companies build high-performance systems and handle the <strong>heavy lifting</strong> of maintenance and custom feature engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animate-delay-300">
            <Button size="lg" asChild className="bg-primary text-white hover:bg-primary/90 font-bold h-12 px-8 rounded-xl shadow-lg shadow-primary/10 group">
              <Link href="#contact" className="flex items-center gap-2">
                Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 border-primary text-primary hover:bg-primary/5 h-12 px-8 font-bold rounded-xl">
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left animate-fade-up animate-delay-300">
            {[
              { icon: <Code2 className="w-8 h-8 text-accent" />, title: "Custom Dev", desc: "Bespoke features built for your logic." },
              { icon: <Settings className="w-8 h-8 text-accent" />, title: "Full Maintenance", desc: "We manage every update and patch." },
              { icon: <Puzzle className="w-8 h-8 text-accent" />, title: "Scalable Apps", desc: "Built to grow with your user base." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/50 border border-white/20 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
                <div className="mb-5">{feature.icon}</div>
                <h3 className="font-bold text-primary text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
