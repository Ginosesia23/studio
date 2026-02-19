"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Headphones, LifeBuoy, Wrench, ShieldCheck, ArrowRight, MessageSquare } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import Link from "next/link";

export function ManagedSupport() {
  const supportImg = PlaceHolderImages.find(img => img.id === "support-team");

  const supportFeatures = [
    {
      icon: <Headphones className="w-6 h-6 text-accent" />,
      title: "24/7 Expert Support",
      description: "Direct access to senior engineers who know your stack. No bots, no delays, just real help."
    },
    {
      icon: <LifeBuoy className="w-6 h-6 text-accent" />,
      title: "Managed Infrastructure",
      description: "We handle Vercel deployments, Supabase scaling, and GitHub secrets so you can focus on product."
    },
    {
      icon: <Wrench className="w-6 h-6 text-accent" />,
      title: "Continuous Maintenance",
      description: "Regular updates, security patching, and on-demand feature additions as your business grows."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      title: "Uptime & Reliability",
      description: "Proactive monitoring and automated health checks to ensure your business stays online."
    }
  ];

  return (
    <section id="support" className="py-32 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 order-2 lg:order-1">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-square">
                <Image
                  src={supportImg?.imageUrl || ""}
                  alt={supportImg?.description || "SteadyNode Support Team"}
                  fill
                  className="object-cover"
                  data-ai-hint={supportImg?.imageHint}
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-accent p-8 rounded-3xl shadow-2xl hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="text-primary font-black uppercase tracking-widest text-sm">Response Time</span>
                </div>
                <p className="text-primary text-4xl font-black">&lt; 15m</p>
                <p className="text-primary/60 text-xs font-bold">Average for priority partners</p>
              </div>
            </div>
          </div>

          <div className="flex-1 order-1 lg:order-2 space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-bold mb-6">
                <MessageSquare size={16} />
                <span className="uppercase tracking-widest">Your Technical Anchor</span>
              </div>
              <h2 className="font-headline text-4xl lg:text-6xl font-black leading-tight mb-6 text-white">
                Expertise <span className="text-accent">Exactly</span> When You Need It.
              </h2>
              <p className="text-xl text-blue-100/70 leading-relaxed">
                We aren't just a service provider; we are your extended technical team. 
                Whether it's managing your production environment or building new customer-facing 
                features, we provide the stability you need to move fast.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {supportFeatures.map((feature, idx) => (
                <div key={idx} className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="mb-2">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-lg">{feature.title}</h4>
                  <p className="text-sm text-blue-100/50 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90 font-bold h-16 px-10 rounded-2xl">
                <Link href="#contact">
                  Explore Support Plans <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
