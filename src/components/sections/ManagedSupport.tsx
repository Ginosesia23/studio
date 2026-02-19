"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Wrench, LifeBuoy, ShieldCheck, ArrowRight, MessageSquare, Activity, Lock } from "lucide-react";
import Link from "next/link";

export function ManagedSupport() {
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
      description: "Need a new feature? Our team is ready to engineer custom solutions on demand as your business grows."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      title: "Proactive Security",
      description: "Regular security audits and automated patches to protect your company and customer data."
    },
    {
      icon: <Activity className="w-6 h-6 text-accent" />,
      title: "Performance Monitoring",
      description: "Real-time monitoring to ensure your systems are always running at peak efficiency."
    },
    {
      icon: <Lock className="w-6 h-6 text-accent" />,
      title: "Data Integrity",
      description: "Automated backups and rigorous testing to ensure your data is always safe and recoverable."
    }
  ];

  return (
    <section id="support" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold mb-4">
            <ShieldCheck size={14} />
            <span className="uppercase tracking-widest text-[10px]">Worry-Free Maintenance</span>
          </div>
          <h2 className="font-headline text-3xl lg:text-5xl font-black leading-tight mb-6 text-white">
            Focus on Business. <br /><span className="text-accent">We Handle</span> the Tech.
          </h2>
          <p className="text-base text-blue-100/70 leading-relaxed max-w-xl">
            We aren't just a development shop; we are your full-cycle technology partner. 
            From launching your first platform to engineering custom integrations later, 
            we ensure everything is perfectly maintained.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {supportFeatures.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-[1.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
              <div className="mb-4 transform group-hover:scale-110 transition-transform origin-left">
                {feature.icon}
              </div>
              <h4 className="font-bold text-lg mb-2 text-white">{feature.title}</h4>
              <p className="text-sm text-blue-100/50 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 p-8 rounded-[2rem] bg-accent text-primary">
          <div className="space-y-1">
            <h4 className="text-2xl font-black">Ready for a Technical Partner?</h4>
            <p className="font-bold text-sm opacity-80">Stop worrying about bugs and start focusing on growth.</p>
          </div>
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold h-12 px-8 rounded-xl text-base shadow-lg shadow-primary/20">
            <Link href="#contact" className="flex items-center gap-2">
              Get Started Now <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
