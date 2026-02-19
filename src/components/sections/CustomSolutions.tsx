"use client";

import React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Code2, Cpu, Smartphone, Blocks, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function CustomSolutions() {
  const customImg = PlaceHolderImages.find(img => img.id === "custom-apps");

  const solutions = [
    {
      icon: <Code2 className="w-6 h-6 text-accent" />,
      title: "Bespoke Portals",
      description: "Custom dashboards and internal tools built specifically for your business logic."
    },
    {
      icon: <Cpu className="w-6 h-6 text-accent" />,
      title: "Feature Extensions",
      description: "Need a new workflow? We engineer and integrate custom features into your existing platform."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-accent" />,
      title: "Mobile Optimization",
      description: "Ensuring your custom features and platforms work perfectly on every screen size."
    },
    {
      icon: <Blocks className="w-6 h-6 text-accent" />,
      title: "Full-Stack Maintenance",
      description: "We don't just build and leave; we keep your custom code updated and secure."
    }
  ];

  return (
    <section id="custom-apps" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Custom Feature Development</h2>
              <h3 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-6">
                Solutions Built for Your <span className="text-accent">Unique</span> Business.
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Off-the-shelf software often misses the mark. We specialize in creating custom 
                functionality that bridges the gap between your vision and reality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {solutions.map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/5 rounded-lg border border-primary/10">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-primary">{item.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span className="font-bold text-primary">Reliable maintenance for every feature we build.</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src={customImg?.imageUrl || ""}
                alt={customImg?.description || "Apex Systems Development"}
                width={800}
                height={600}
                className="object-cover w-full h-full"
                data-ai-hint={customImg?.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
