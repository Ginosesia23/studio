"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Github, ExternalLink, ShieldCheck } from "lucide-react";
import { ApexLogo } from "@/components/ui/apex-logo";

export function Footer() {
  return (
    <footer className="bg-[#021123] text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5">
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <ApexLogo className="text-accent w-10 h-10" />
              <span className="font-headline text-2xl font-black tracking-tighter uppercase">
                APEX<span className="text-accent">SYSTEMS</span>
              </span>
            </Link>
            <p className="text-lg text-blue-100/40 leading-relaxed max-w-sm font-medium">
              Engineering stable digital infrastructure to anchor your business ecosystem for the long term.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 group">
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div className="space-y-6">
              <h4 className="font-headline font-black text-sm uppercase tracking-widest text-accent">Solutions</h4>
              <ul className="space-y-4 text-sm font-bold text-blue-100/40">
                <li><Link href="#services" className="hover:text-accent transition-colors flex items-center gap-2">Platform Creation</Link></li>
                <li><Link href="#services" className="hover:text-accent transition-colors flex items-center gap-2">Infrastructure</Link></li>
                <li><Link href="#services" className="hover:text-accent transition-colors flex items-center gap-2">API Integration</Link></li>
                <li><Link href="#services" className="hover:text-accent transition-colors flex items-center gap-2">Cybersecurity</Link></li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-headline font-black text-sm uppercase tracking-widest text-accent">Technical</h4>
              <ul className="space-y-4 text-sm font-bold text-blue-100/40">
                <li><Link href="#support" className="hover:text-accent transition-colors">Managed Support</Link></li>
                <li><Link href="#support" className="hover:text-accent transition-colors">Uptime Monitoring</Link></li>
                <li><Link href="#support" className="hover:text-accent transition-colors">Backup Protocols</Link></li>
                <li><Link href="#support" className="hover:text-accent transition-colors">Incident Response</Link></li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-headline font-black text-sm uppercase tracking-widest text-accent">Apex Group</h4>
              <ul className="space-y-4 text-sm font-bold text-blue-100/40">
                <li><Link href="#about" className="hover:text-accent transition-colors">Our Mission</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">Network Status</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">Legal</Link></li>
                <li><Link href="#" className="hover:text-accent transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black text-blue-100/20 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Apex Systems Group. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black text-blue-100/50 uppercase tracking-widest">Global Status: Active</span>
             </div>
             <ShieldCheck className="text-accent/20 w-8 h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
}