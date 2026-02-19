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
      icon: <Wrench className="w-6 h-6 text-accent" />,
      title: "Ongoing System Updates",
      description: "We handle all software and system updates to ensure your platform stays current and compatible."
    },
    {
      icon: <LifeBuoy className="w-6 h-6 text-accent" />,
      title: "Managed Infrastructure",
      description: "From cloud deployments to database scaling, we manage the technical complexity for you."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-accent" />,
      title: "Custom Feature Requests",
      description: "Need a new feature next week? Our team is ready to engineer custom solutions on demand."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      title: "Proactive Security",
      description: "Regular security audits and automated patches to protect your company and customer data."
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
                  alt={supportImg?.description || "Apex Systems Maintenance Team"}
                  fill
                  className="object-cover"
                  data-ai-hint={supportImg?.imageHint}
                />
              </div>
            </div>
          </div>

          <div className="flex-1 order-1 lg:order-2 space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-bold mb-6">
                <ShieldCheck size={16} />
                <span className="uppercase tracking-widest">Worry-Free Maintenance</span>
              </div>
              <h2 className="font-headline text-4xl lg:text-6xl font-black leading-tight mb-6 text-white">
                Focus on Business, <br /><span className="text-accent">We Handle</span> the Tech.
              </h2>
              <p className="text-xl text-blue-100/70 leading-relaxed">
                We aren't just a development shop; we are your full-cycle technology partner. 
                Whether we're launching your first platform or engineering a custom integration 
                six months later, we ensure everything is perfectly maintained.
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
                  Start Your Tech Partnership <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
