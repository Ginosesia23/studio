
"use client";

import React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

export function AboutUs() {
  const aboutImg = PlaceHolderImages.find(img => img.id === "about-mission");
  
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <Image
                src={aboutImg?.imageUrl || ""}
                alt={aboutImg?.description || "About Elevate Tech"}
                width={600}
                height={600}
                className="rounded-2xl shadow-xl relative z-10"
                data-ai-hint={aboutImg?.imageHint}
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                <p className="text-5xl font-headline font-bold text-accent">10+</p>
                <p className="text-sm font-bold text-primary uppercase tracking-wider">Years of Excellence</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Our Story</h2>
            <h3 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-6">Born to Support Growth</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Elevate Tech was founded with a singular mission: to provide world-class infrastructure 
              and technical support for modern business ecosystems. We understand that in today's digital 
              landscape, stability is the foundation of innovation.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We started as an internal support team for a group of high-growth companies. Today, 
              we bring that same dedication and insider expertise to help all our clients thrive 
              with zero-compromise hosting solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Client-First Mindset",
                "Cutting-Edge Technology",
                "Integrity & Transparency",
                "Reliable 24/7 Service"
              ].map((value, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle className="text-accent w-4 h-4" />
                  </div>
                  <span className="font-semibold text-primary">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
