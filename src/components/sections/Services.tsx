"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Github, Database, Layout, Zap } from "lucide-react";

export function Services() {
  const stacks = [
    {
      title: "Frontend Hosting",
      provider: "Vercel",
      description: "Fast, globally distributed web performance. We manage your Next.js deployments with zero-config and instant CI/CD.",
      icon: <Layout className="w-10 h-10 text-accent" />,
      features: ["Serverless Architecture", "Edge Performance", "Instant Previews", "Web Analytics"]
    },
    {
      title: "Backend & Storage",
      provider: "Supabase",
      description: "Robust database and authentication management. We handle your migrations, backups, and API layer.",
      icon: <Database className="w-10 h-10 text-accent" />,
      features: ["Postgres Management", "Secure Auth", "Real-time Sync", "Storage Buckets"]
    },
    {
      title: "Workflows & Pipelines",
      provider: "GitHub",
      description: "Reliable version control and automation. We architect your Actions and environment security properly.",
      icon: <Github className="w-10 h-10 text-accent" />,
      features: ["CI/CD Automation", "Security Audits", "Environment Config", "Safe Deployments"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Core Expertise</h2>
          <h3 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-6">The Reliable Startup Stack</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We specialize in the tools that power the web's most innovative companies. 
            Stable, scalable, and managed by experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stacks.map((stack, idx) => (
            <Card key={idx} className="border-none shadow-xl hover:shadow-2xl transition-all group bg-background/30 rounded-3xl overflow-hidden">
              <CardHeader className="p-8">
                <div className="mb-8 p-4 rounded-2xl bg-white shadow-sm w-fit group-hover:bg-accent/10 transition-colors">
                  {stack.icon}
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-black text-accent uppercase tracking-widest">{stack.provider}</p>
                  <CardTitle className="text-2xl font-bold text-primary">{stack.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground pt-4 leading-relaxed text-base">
                  {stack.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <ul className="space-y-4 mb-8">
                  {stack.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm font-semibold text-primary/70">
                      <Zap className="w-4 h-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
