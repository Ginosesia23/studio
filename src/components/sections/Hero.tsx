"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-56 lg:pb-48 overflow-hidden bg-primary text-white">
      {/* Immersive Background */}
      <div className="absolute inset-0 bg-[#021123]" />
      <div className="absolute inset-0 opacity-20 technical-grid pointer-events-none" />
      
      {/* Cinematic Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none animate-pulse-cyan" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/40 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-12 animate-fade-up">
            <ShieldCheck className="w-3 h-3" />
            <span>Infrastructure • Support • Engineering</span>
          </div>
          
          <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-black leading-[1.05] mb-10 animate-fade-up animate-delay-100 tracking-tighter">
            Digital Foundations <br /><span className="text-accent italic">Engineered for Reliability.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-blue-100/60 mb-14 max-w-3xl mx-auto leading-relaxed animate-fade-up animate-delay-200 font-medium">
            We build robust platforms for startups and provide managed technical oversight to ensure your operations never miss a beat.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-up animate-delay-300">
            <Button size="lg" asChild className="bg-accent text-primary hover:bg-accent/90 font-bold h-14 px-10 rounded-xl shadow-2xl shadow-accent/20 border-none transition-all hover:scale-105 active:scale-95">
              <Link href="#contact" className="flex items-center gap-2">
                Start Building <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white/20 text-white hover:bg-white/10 h-14 px-10 font-bold rounded-xl backdrop-blur-md transition-all">
              <Link href="#services">Our Capabilities</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="container mx-auto px-6 mt-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/10 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-xl">
           {[
             { label: "Systems Managed", value: "24/7", desc: "Constant uptime monitoring." },
             { label: "Engineering Quality", value: "Tier 1", desc: "Enterprise-grade standards." },
             { label: "Technical Support", value: "Global", desc: "Reliable partner network." }
           ].map((stat, i) => (
             <div key={i} className="p-10 bg-primary/40 text-center md:text-left hover:bg-white/5 transition-colors">
               <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-3">{stat.label}</p>
               <h3 className="text-3xl font-black mb-2">{stat.value}</h3>
               <p className="text-sm text-blue-100/40 font-medium">{stat.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}