"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-primary text-white">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(36,197,219,0.15),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold mb-8 animate-fade-up border border-accent/20">
            <span className="uppercase tracking-[0.3em]">Build • Maintain • Evolve</span>
          </div>
          
          <h1 className="font-headline text-4xl lg:text-7xl font-black leading-tight mb-8 animate-fade-up animate-delay-100 tracking-tighter">
            Platform Creation & <br /><span className="text-accent">Managed Maintenance.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-blue-100/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-up animate-delay-200 font-medium">
            We engineer high-performance systems for startups and handle the heavy lifting of updates, security, and custom feature development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animate-delay-300 mb-20">
            <Button size="lg" asChild className="bg-accent text-primary hover:bg-accent/90 font-bold h-14 px-8 rounded-xl shadow-2xl shadow-accent/20 group border-none text-base transition-all">
              <Link href="#contact" className="flex items-center gap-2">
                Start Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white/40 text-white hover:bg-white/10 h-14 px-8 font-bold rounded-xl text-base transition-all bg-transparent backdrop-blur-sm">
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left animate-fade-up animate-delay-300 max-w-3xl mx-auto">
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
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group backdrop-blur-sm">
                <h3 className="font-bold text-white text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-blue-100/50 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}