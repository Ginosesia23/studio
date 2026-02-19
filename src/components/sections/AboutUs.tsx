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
                alt={aboutImg?.description || "About Apex Systems"}
                width={600}
                height={600}
                className="rounded-2xl shadow-xl relative z-10"
                data-ai-hint={aboutImg?.imageHint}
              />
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Our Mission</h2>
            <h3 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-6">Your Long-Term Tech Partner</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Apex Systems was founded to empower small companies with enterprise-level technical expertise. 
              We believe that small businesses deserve a partner who not only builds their platform but 
              stands by it through every update and required change.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We serve as an "anchor team" for founders, providing a reliable foundation where 
              maintenance and custom evolution are standard, not an afterthought.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Platform Development",
                "Full-System Maintenance",
                "Bespoke Feature Dev",
                "Dedicated Tech Support"
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
