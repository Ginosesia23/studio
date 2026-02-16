"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, Shield, Zap, CheckCircle2 } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import Link from "next/link";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-tech");

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold mb-8 animate-fade-up">
              <Zap size={16} className="fill-current" />
              <span className="uppercase tracking-widest">Next-Gen Digital Backbone</span>
            </div>
            
            <h1 className="font-headline text-5xl lg:text-8xl font-black leading-[0.95] text-primary mb-8 animate-fade-up animate-delay-100">
              The Engine <br />
              <span className="text-accent">Behind</span> Your <br />
              Success.
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up animate-delay-200">
              Providing enterprise-grade hosting and deep technical support 
              tailored for the modern business ecosystem. Secure, scalable, and relentlessly reliable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-fade-up animate-delay-300">
              <Button size="lg" asChild className="bg-primary text-white hover:bg-primary/90 font-bold h-16 px-10 text-lg group rounded-2xl shadow-xl shadow-primary/20">
                <Link href="#services">
                  Our Solutions
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-primary text-primary hover:bg-primary hover:text-white h-16 px-10 text-lg font-bold rounded-2xl">
                <Link href="#ai-recommender">
                  AI Advisor
                </Link>
              </Button>
            </div>
            
            <div className="mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-10 opacity-70 animate-fade-up animate-delay-300">
              <div className="flex items-center gap-3">
                <Cloud size={24} className="text-accent" />
                <span className="text-base font-bold text-primary">Cloud Infrastructure</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield size={24} className="text-accent" />
                <span className="text-base font-bold text-primary">Global Security</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={24} className="text-accent" />
                <span className="text-base font-bold text-primary">24/7 Expert Support</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative animate-in fade-in zoom-in duration-1000">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] border-[12px] border-white">
              <Image
                src={heroImg?.imageUrl || ""}
                alt={heroImg?.description || "High-tech server environment"}
                width={800}
                height={900}
                className="object-cover w-full aspect-[4/5]"
                data-ai-hint={heroImg?.imageHint}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10 p-8 glass-effect rounded-3xl animate-bounce-slow">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                    <Zap className="text-primary w-8 h-8 fill-current" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-accent uppercase tracking-widest">Uptime Metric</p>
                    <p className="text-3xl font-headline font-black text-primary">99.999%</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative background shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
