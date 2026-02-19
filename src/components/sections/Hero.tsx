"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Code2, Settings, Puzzle, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-primary text-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-accent/10 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-accent/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/20 text-accent text-sm font-bold mb-10 animate-fade-up border border-accent/20">
            <span className="uppercase tracking-[0.25em]">Build • Maintain • Evolve</span>
          </div>
          
          <h1 className="font-headline text-6xl lg:text-8xl font-black leading-[1.05] mb-10 animate-fade-up animate-delay-100 tracking-tighter">
            Platform Creation & <br /><span className="text-accent">Managed Maintenance.</span>
          </h1>
          
          <p className="text-2xl lg:text-3xl text-blue-100/70 mb-14 max-w-3xl mx-auto leading-relaxed animate-fade-up animate-delay-200 font-medium">
            We engineer high-performance systems for small companies and handle the heavy lifting of updates and custom feature development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up animate-delay-300">
            <Button size="lg" asChild className="bg-accent text-primary hover:bg-accent/90 font-black h-16 px-12 rounded-xl shadow-2xl shadow-accent/20 group border-none text-xl transition-all">
              <Link href="#contact" className="flex items-center gap-2.5">
                Start Your Project <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 border-white text-white hover:bg-white hover:text-primary h-16 px-12 font-black rounded-xl text-xl backdrop-blur-md transition-all">
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>

          <div className="mt-28 grid grid-cols-1 sm:grid-cols-3 gap-10 text-left animate-fade-up animate-delay-300">
            {[
              { 
                icon: <Code2 className="w-12 h-12 text-accent" />, 
                title: "Custom Dev", 
                desc: "Bespoke features built specifically for your business logic." 
              },
              { 
                icon: <Settings className="w-12 h-12 text-accent" />, 
                title: "Full Maintenance", 
                desc: "We manage every update, patch, and security requirement." 
              },
              { 
                icon: <Puzzle className="w-12 h-12 text-accent" />, 
                title: "Scalable Apps", 
                desc: "Architectures designed to grow seamlessly with your users." 
              }
            ].map((feature, i) => (
              <div key={i} className="p-12 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all group shadow-2xl">
                <div className="mb-8 transform group-hover:scale-110 transition-transform origin-left">{feature.icon}</div>
                <h3 className="font-bold text-white text-2xl mb-4">{feature.title}</h3>
                <p className="text-lg text-blue-100/50 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
