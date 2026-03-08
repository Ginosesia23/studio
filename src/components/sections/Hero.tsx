"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-primary text-white">
      {/* Solid Deep Navy Background */}
      <div className="absolute inset-0 bg-[#021123]" />
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(36,197,219,0.15),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold mb-10 animate-fade-up border border-accent/20">
            <span className="uppercase tracking-[0.3em] text-[10px] sm:text-xs">Build • Maintain • Evolve</span>
          </div>
          
          <h1 className="font-headline text-5xl lg:text-8xl font-black leading-[1.1] mb-10 animate-fade-up animate-delay-100 tracking-tighter">
            Platform Creation & <br /><span className="text-accent">Managed Maintenance.</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-100/70 mb-14 max-w-3xl mx-auto leading-relaxed animate-fade-up animate-delay-200 font-medium">
            We engineer high-performance systems for startups and handle the heavy lifting of updates, security, and custom feature development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-up animate-delay-300 mb-24">
            <Button size="lg" asChild className="bg-accent text-primary hover:bg-accent/90 font-bold h-16 px-10 rounded-xl shadow-2xl shadow-accent/20 group border-none text-lg transition-all">
              <Link href="#contact" className="flex items-center gap-2">
                Start Project <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white/40 text-white hover:bg-white/10 h-16 px-10 font-bold rounded-xl text-lg transition-all bg-transparent backdrop-blur-sm">
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left animate-fade-up animate-delay-300 max-w-4xl mx-auto">
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
              <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group backdrop-blur-sm">
                <h3 className="font-bold text-white text-xl mb-3">{feature.title}</h3>
                <p className="text-base text-blue-100/50 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
