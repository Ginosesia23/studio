"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Database, Github, Layout, ShieldCheck, Rocket } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import Link from "next/link";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-startup") || PlaceHolderImages[0];

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold mb-8">
              <Rocket size={16} className="fill-current" />
              <span className="uppercase tracking-widest">Build • Maintain • Evolve</span>
            </div>
            
            <h1 className="font-headline text-5xl lg:text-7xl font-black leading-tight text-primary mb-8">
              We Build Your <br />
              <span className="text-accent">Platform.</span> <br />
              We Manage the Rest.
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Helping small companies create high-performance websites and platforms. We handle the <strong>maintenance, updates, and custom features</strong> so you can focus on your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Button size="lg" asChild className="bg-primary text-white hover:bg-primary/90 font-bold h-16 px-10 text-lg rounded-2xl">
                <Link href="#contact">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-2 border-primary text-primary h-16 px-10 text-lg font-bold rounded-2xl">
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={heroImg?.imageUrl || ""}
                alt={heroImg?.description || "Apex Systems Development"}
                width={800}
                height={600}
                className="object-cover w-full aspect-video"
                data-ai-hint={heroImg?.imageHint}
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-2xl shadow-xl z-20">
              <p className="text-primary font-black text-2xl">Full Maintenance</p>
              <p className="text-primary/70 text-xs font-bold uppercase tracking-tighter">Included with every platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
