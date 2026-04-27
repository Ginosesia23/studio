"use client";

import React from "react";
import { CheckCircle, Shield, Target, Zap } from "lucide-react";

export function AboutUs() {
  const values = [
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      title: "Built to Last",
      desc: "We prioritize stability and long-term security in every line of code."
    },
    {
      icon: <Target className="w-6 h-6 text-accent" />,
      title: "Growth Oriented",
      desc: "Our platforms are engineered to evolve with your business scale."
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      title: "Direct Support",
      desc: "Instant access to senior engineers for maintenance and updates."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-4">Our Commitment</h2>
            <h3 className="font-headline text-3xl lg:text-5xl font-bold text-primary mb-6 tracking-tight">Your Long-Term Tech Partner</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
              Apex Systems provides the enterprise-level technical expertise small businesses 
              need to thrive in a digital-first economy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {values.map((v, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-background border border-border/50 text-center space-y-4 hover:border-accent/30 transition-colors">
                <div className="mx-auto w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-border/50 shadow-sm">
                  {v.icon}
                </div>
                <h4 className="font-bold text-lg text-primary tracking-tight">{v.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-10 lg:p-12 rounded-[2.5rem] bg-primary text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full" />
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-8">What defines an Apex Partnership:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12">
                {[
                  "Full Platform Ownership",
                  "Proactive System Maintenance",
                  "Bespoke Feature Engineering",
                  "Priority Incident Response",
                  "Security-First Architecture",
                  "Direct Access to Engineering"
                ].map((value, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-accent w-4 h-4 shrink-0" />
                    <span className="font-bold text-sm text-blue-50">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
