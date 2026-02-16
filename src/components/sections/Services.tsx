"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Server, Headphones, Shield, Cpu, Globe, Zap, CheckCircle2 } from "lucide-react";

export function Services() {
  const hostingServices = [
    {
      title: "Enterprise Cloud Hosting",
      description: "Auto-scaling infrastructure designed for high-availability corporate ecosystems.",
      icon: <Globe className="w-8 h-8 text-accent" />,
      features: ["Multi-region deployment", "DDoS mitigation", "CDN integration", "99.99% SLA"]
    },
    {
      title: "Managed VPS Solutions",
      description: "Isolated environments with dedicated resources and proactive monitoring.",
      icon: <Cpu className="w-8 h-8 text-accent" />,
      features: ["Full root access", "NVMe SSD storage", "Daily backups", "Snapshots enabled"]
    },
    {
      title: "Dedicated Hardware",
      description: "Bare-metal performance for resource-intensive workloads and compliance.",
      icon: <Server className="w-8 h-8 text-accent" />,
      features: ["Custom configurations", "Unmetered bandwidth", "Hardware RAID", "Remote console"]
    }
  ];

  const supportServices = [
    {
      title: "24/7 Technical Support",
      description: "Round-the-clock expert assistance for critical infrastructure and application issues.",
      icon: <Headphones className="w-8 h-8 text-accent" />,
      features: ["Sub-15m response time", "Phone & chat access", "Escalation paths", "Global coverage"]
    },
    {
      title: "Managed Security",
      description: "Comprehensive security management, threat detection, and compliance auditing.",
      icon: <Shield className="w-8 h-8 text-accent" />,
      features: ["Intrusion detection", "Vulnerability scanning", "WAF management", "Log analysis"]
    },
    {
      title: "Performance Optimization",
      description: "Strategic analysis and tuning to ensure your digital assets run at peak efficiency.",
      icon: <Zap className="w-8 h-8 text-accent" />,
      features: ["Database tuning", "Caching strategies", "Load balancing", "Cost optimization"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Our Expertise</h2>
          <h3 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-6">World-Class Digital Infrastructure</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Elevate Tech provides the backbone for modern business growth. We specialize in robust hosting 
            environments and dedicated support teams that function as an extension of your company.
          </p>
        </div>

        <Tabs defaultValue="hosting" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-background/50 p-1 rounded-xl h-14 border">
              <TabsTrigger value="hosting" className="px-8 text-lg font-bold rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white transition-all">
                Hosting Solutions
              </TabsTrigger>
              <TabsTrigger value="support" className="px-8 text-lg font-bold rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white transition-all">
                Technical Support
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="hosting" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hostingServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="support" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, icon, features }: any) {
  return (
    <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group bg-background/50">
      <CardHeader className="pb-4">
        <div className="mb-6 p-4 rounded-2xl bg-white shadow-sm w-fit group-hover:bg-accent/10 transition-colors">
          {icon}
        </div>
        <CardTitle className="text-2xl font-bold text-primary">{title}</CardTitle>
        <CardDescription className="text-muted-foreground pt-3 leading-relaxed text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-px bg-border mb-6" />
        <ul className="space-y-3">
          {features.map((feature: string, fIndex: number) => (
            <li key={fIndex} className="flex items-center gap-3 text-sm font-semibold text-primary/80">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
