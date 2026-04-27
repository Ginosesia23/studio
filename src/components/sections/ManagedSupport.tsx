"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Wrench, LifeBuoy, ShieldCheck, ArrowRight, MessageSquare, Activity, Lock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ManagedSupport() {
  const supportFeatures = [
    {
      icon: <Activity className="w-6 h-6 text-accent" />,
      title: "Real-time Monitoring",
      description: "Constant surveillance of your system health and traffic patterns."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      title: "Security Shield",
      description: "Automated patches and proactive threat detection."
    },
    {
      icon: <Lock className="w-6 h-6 text-accent" />,
      title: "Encrypted Backups",
      description: "Redundant data protection with zero-fail recovery protocols."
    }
  ];

  return (
    <section id="support" className="py-32 bg-primary text-white overflow-hidden relative">
      {/* Background elements for technical feel */}
      <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8">
              <Activity size={14} className="animate-pulse" />
              <span>System Watchkeeping</span>
            </div>
            <h2 className="font-headline text-4xl lg:text-6xl font-black leading-[1.1] mb-8 tracking-tighter">
              Managed Technical <br /><span className="text-accent">Vigilance.</span>
            </h2>
            <p className="text-xl text-blue-100/60 leading-relaxed mb-12 font-medium">
              We monitor, maintain, and secure your digital assets 24/7. Focus on your growth while we engineer your reliability.
            </p>
            
            <div className="space-y-6">
              {supportFeatures.map((feature, idx) => (
                <div key={idx} className="flex gap-6 p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                  <div className="shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                    <p className="text-sm text-blue-100/40 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-3xl p-10 flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8">
                  <Activity className="text-accent w-12 h-12 opacity-50" />
               </div>
               <h3 className="text-2xl font-black mb-6 tracking-tight">System Status: <span className="text-green-400">Optimal</span></h3>
               <div className="space-y-8">
                 {[
                   { label: "Uptime", val: "99.99%", color: "bg-accent" },
                   { label: "Security Score", val: "A+", color: "bg-accent" },
                   { label: "Latency", val: "12ms", color: "bg-accent" }
                 ].map((metric, i) => (
                   <div key={i} className="space-y-3">
                     <div className="flex justify-between text-xs font-black uppercase tracking-widest text-blue-100/40">
                       <span>{metric.label}</span>
                       <span>{metric.val}</span>
                     </div>
                     <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                       <div className={cn("h-full rounded-full", metric.color)} style={{ width: '95%' }} />
                     </div>
                   </div>
                 ))}
               </div>
               <Button asChild size="lg" className="mt-12 bg-accent text-primary hover:bg-accent/90 font-bold h-14 rounded-xl shadow-2xl shadow-accent/20">
                 <Link href="#contact" className="flex items-center gap-2">
                   Get Managed Support <ArrowRight className="w-5 h-5" />
                 </Link>
               </Button>
            </div>
            {/* Decorative orbit */}
            <div className="absolute -inset-10 border border-white/5 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
