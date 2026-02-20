"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-primary text-white">
      {/* Subtle Background Grain/Gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(36,197,219,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-[9px] font-bold mb-6 animate-fade-up border border-accent/20">
            <span className="uppercase tracking-[0.2em]">Build • Maintain • Evolve</span>
          </div>
          
          <h1 className="font-headline text-3xl lg:text-4xl font-black leading-tight mb-6 animate-fade-up animate-delay-100 tracking-tighter">
            Platform Creation & <br /><span className="text-accent">Managed Maintenance.</span>
          </h1>
          
          <p className="text-xs lg:text-sm text-blue-100/60 mb-8 max-w-lg mx-auto leading-relaxed animate-fade-up animate-delay-200 font-medium">
            We engineer high-performance systems for startups and handle the heavy lifting of updates and custom feature development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-up animate-delay-300 mb-12">
            <Button size="sm" asChild className="bg-accent text-primary hover:bg-accent/90 font-bold h-9 px-6 rounded-lg shadow-xl shadow-accent/10 group border-none text-xs transition-all">
              <Link href="#contact" className="flex items-center gap-2">
                Start Project <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="sm" variant="outline" asChild className="border-white/20 text-white hover:bg-white/5 h-9 px-6 font-bold rounded-lg text-xs transition-all bg-transparent backdrop-blur-sm">
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left animate-fade-up animate-delay-300 max-w-xl mx-auto">
            {[
              { 
                title: "Custom Dev", 
                desc: "Bespoke features built for your logic." 
              },
              { 
                title: "Maintenance", 
                desc: "Every update and patch managed." 
              },
              { 
                title: "Scalable Apps", 
                desc: "Architectures designed to grow." 
              }
            ].map((feature, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <h3 className="font-bold text-white text-xs mb-1">{feature.title}</h3>
                <p className="text-[10px] text-blue-100/40 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
