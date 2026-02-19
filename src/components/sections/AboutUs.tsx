"use client";

import React from "react";
import { CheckCircle, Shield, Target, Zap } from "lucide-react";

export function AboutUs() {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Built to Last",
      desc: "We prioritize stability and security in every line of code."
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Growth Oriented",
      desc: "Our platforms are designed to evolve with your business requirements."
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Agile Support",
      desc: "Fast response times for maintenance and custom feature requests."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Our Mission</h2>
            <h3 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-6">Your Long-Term Tech Partner</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Apex Systems was founded to empower small companies with enterprise-level technical expertise. 
              We believe that small businesses deserve a partner who not only builds their platform but 
              stands by it through every update and required change.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {values.map((v, idx) => (
              <div key={idx} className="text-center space-y-3">
                <div className="mx-auto w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center border border-primary/10">
                  {v.icon}
                </div>
                <h4 className="font-bold text-lg text-primary">{v.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-8 lg:p-10 rounded-[1.5rem] bg-primary text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/20 blur-[60px] rounded-full" />
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-6">What defines our partnership:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Full Platform Ownership",
                  "Proactive System Maintenance",
                  "Bespoke Feature Engineering",
                  "Priority Technical Support",
                  "Security-First Architecture",
                  "Direct Access to Engineers"
                ].map((value, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <CheckCircle className="text-accent w-3 h-3" />
                    </div>
                    <span className="font-semibold text-sm text-blue-50">{value}</span>
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
