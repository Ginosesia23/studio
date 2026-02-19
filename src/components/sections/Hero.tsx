"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Code2, Settings, Puzzle, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary text-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-accent/10 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-accent/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-bold mb-8 animate-fade-up border border-accent/20">
            <span className="uppercase tracking-[0.2em]">Build • Maintain • Evolve</span>
          </div>
          
          <h1 className="font-headline text-5xl lg:text-7xl font-black leading-[1.1] mb-8 animate-fade-up animate-delay-100 tracking-tight">
            Platform Creation & <br /><span className="text-accent">Managed Maintenance.</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-100/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-up animate-delay-200 font-medium">
            We engineer high-performance systems for small companies and handle the heavy lifting of updates and custom feature development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-up animate-delay-300">
            <Button size="lg" asChild className="bg-accent text-primary hover:bg-accent/90 font-bold h-14 px-10 rounded-xl shadow-xl shadow-accent/10 group border-none text-lg">
              <Link href="#contact" className="flex items-center gap-2">
                Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 border-white/20 text-white hover:bg-white/5 hover:text-white h-14 px-10 font-bold rounded-xl text-lg backdrop-blur-sm">
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>

          <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left animate-fade-up animate-delay-300">
            {[
              { 
                icon: <Code2 className="w-10 h-10 text-accent" />, 
                title: "Custom Dev", 
                desc: "Bespoke features built specifically for your business logic." 
              },
              { 
                icon: <Settings className="w-10 h-10 text-accent" />, 
                title: "Full Maintenance", 
                desc: "We manage every update, patch, and security requirement." 
              },
              { 
                icon: <Puzzle className="w-10 h-10 text-accent" />, 
                title: "Scalable Apps", 
                desc: "Architectures designed to grow seamlessly with your users." 
              }
            ].map((feature, i) => (
              <div key={i} className="p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform origin-left">{feature.icon}</div>
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
