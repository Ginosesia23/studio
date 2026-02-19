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
      title: "Bespoke Frontends",
      description: "High-performance React and Next.js applications tailored to your specific user workflows."
    },
    {
      icon: <Cpu className="w-6 h-6 text-accent" />,
      title: "Robust Backends",
      description: "Reliable API development and database architecture using Supabase for maximum uptime."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-accent" />,
      title: "Mobile Optimization",
      description: "Responsive designs that ensure your custom features work perfectly on any device."
    },
    {
      icon: <Blocks className="w-6 h-6 text-accent" />,
      title: "Tool Integrations",
      description: "Connecting your custom app with third-party tools like Stripe or Twilio effortlessly."
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
                Features Built for Your <span className="text-accent">Specific</span> Challenges.
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Generic features often leave gaps in your business logic. We specialize in building custom 
                functionality that integrates seamlessly into your existing stack.
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
                <span className="font-bold text-primary">Scalable code, architected for the long term.</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src={customImg?.imageUrl || ""}
                alt={customImg?.description || "SteadyNode Custom Development"}
                width={800}
                height={600}
                className="object-cover w-full h-full"
                data-ai-hint={customImg?.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            
            <Card className="absolute -bottom-8 -left-8 max-w-[240px] shadow-2xl border-none glass-effect p-1 rounded-2xl hidden md:block">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                  <span className="text-xs font-black uppercase tracking-tighter text-primary">Active Dev</span>
                </div>
                <p className="text-sm font-bold text-primary">
                  We bridge the gap between "standard" and "exactly what you need".
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
