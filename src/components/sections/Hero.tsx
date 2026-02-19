"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Code2, Settings, Puzzle, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-primary text-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-accent/5 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/4" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-[9px] font-bold mb-6 animate-fade-up border border-accent/20">
            <span className="uppercase tracking-[0.2em]">Build • Maintain • Evolve</span>
          </div>
          
          <h1 className="font-headline text-3xl lg:text-5xl font-black leading-[1.1] mb-6 animate-fade-up animate-delay-100 tracking-tighter">
            Platform Creation & <br /><span className="text-accent">Managed Maintenance.</span>
          </h1>
          
          <p className="text-base lg:text-lg text-blue-100/70 mb-8 max-w-xl mx-auto leading-relaxed animate-fade-up animate-delay-200 font-medium">
            We engineer high-performance systems for small companies and handle the heavy lifting of updates and custom feature development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-up animate-delay-300">
            <Button size="sm" asChild className="bg-accent text-primary hover:bg-accent/90 font-bold h-10 px-6 rounded-lg shadow-xl shadow-accent/10 group border-none text-sm transition-all">
              <Link href="#contact" className="flex items-center gap-2">
                Start Project <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="sm" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary h-10 px-6 font-bold rounded-lg text-sm backdrop-blur-md transition-all">
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left animate-fade-up animate-delay-300">
            {[
              { 
                icon: <Code2 className="w-6 h-6 text-accent" />, 
                title: "Custom Dev", 
                desc: "Bespoke features built for your logic." 
              },
              { 
                icon: <Settings className="w-6 h-6 text-accent" />, 
                title: "Maintenance", 
                desc: "Every update and patch managed." 
              },
              { 
                icon: <Puzzle className="w-6 h-6 text-accent" />, 
                title: "Scalable Apps", 
                desc: "Architectures designed to grow." 
              }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-[1.25rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all group shadow-xl">
                <div className="mb-4 transform group-hover:scale-110 transition-transform origin-left">{feature.icon}</div>
                <h3 className="font-bold text-white text-lg mb-2">{feature.title}</h3>
                <p className="text-xs text-blue-100/50 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
