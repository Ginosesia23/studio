"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight, Activity, Lock, Gauge } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ManagedSupport() {
  const supportFeatures = [
    {
      icon: <Activity className="w-5 h-5 text-accent" />,
      title: "Real-time Monitoring",
      description: "24/7 surveillance of system health and performance."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-accent" />,
      title: "Security Shield",
      description: "Proactive patches and automated threat detection."
    },
    {
      icon: <Lock className="w-5 h-5 text-accent" />,
      title: "Encrypted Backups",
      description: "Redundant protection with fail-safe recovery protocols."
    }
  ];

  return (
    <section id="support" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-6">
              <Gauge size={14} className="animate-pulse" />
              <span>Vigilant Oversight</span>
            </div>
            <h2 className="font-headline text-3xl lg:text-5xl font-bold mb-6 tracking-tight">
              Managed Technical <br />
              <span className="text-accent italic">Vigilance.</span>
            </h2>
            <p className="text-lg text-blue-100/60 leading-relaxed mb-10 font-medium max-w-xl">
              Focus on business growth while our engineers monitor, maintain, 
              and secure your digital assets around the clock.
            </p>
            
            <div className="space-y-4">
              {supportFeatures.map((feature, idx) => (
                <div key={idx} className="flex gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="shrink-0 w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1">{feature.title}</h4>
                    <p className="text-xs text-blue-100/40 leading-relaxed font-medium">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-10">
            <div className="bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-xl p-10 relative overflow-hidden shadow-2xl">
               <div className="flex items-center justify-between mb-10">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Activity className="text-green-400 w-5 h-5" />
                    System Status
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-widest border border-green-500/20">
                    Optimal
                  </span>
               </div>
               
               <div className="space-y-6">
                 {[
                   { label: "Network Uptime", val: "99.99%", progress: 99 },
                   { label: "Security Integrity", val: "Grade A+", progress: 95 },
                   { label: "System Response", val: "< 10ms", progress: 90 }
                 ].map((metric, i) => (
                   <div key={i} className="space-y-2">
                     <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-blue-100/40">
                       <span>{metric.label}</span>
                       <span className="text-accent">{metric.val}</span>
                     </div>
                     <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-accent rounded-full transition-all duration-1000" style={{ width: `${metric.progress}%` }} />
                     </div>
                   </div>
                 ))}
               </div>

               <Button asChild size="lg" className="mt-10 w-full bg-accent text-primary hover:bg-accent/90 font-bold h-12 rounded-xl">
                 <Link href="#contact" className="flex items-center justify-center gap-2">
                   Upgrade Your Support <ArrowRight className="w-4 h-4" />
                 </Link>
               </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
