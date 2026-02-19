"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Twitter, Linkedin, Github, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-lg shadow-accent/10">
                <ShieldCheck className="text-primary w-6 h-6" />
              </div>
              <span className="font-headline text-2xl font-black tracking-tighter uppercase">
                APEX<span className="text-accent">SYSTEMS</span>
              </span>
            </Link>
            <p className="text-base text-blue-100/60 leading-relaxed max-w-sm font-medium">
              We engineer stable infrastructure and provide reliable technical support to anchor your entire business ecosystem.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 hover:-translate-y-1 group">
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-headline font-bold text-lg mb-6 tracking-tight">Solutions</h4>
            <ul className="space-y-3 text-sm font-medium text-blue-100/40">
              <li><Link href="#services" className="hover:text-accent transition-colors flex items-center gap-1.5">Cloud Hosting <ExternalLink size={12} /></Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors flex items-center gap-1.5">Infrastructure <ExternalLink size={12} /></Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors flex items-center gap-1.5">Custom Dev <ExternalLink size={12} /></Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors flex items-center gap-1.5">Security <ExternalLink size={12} /></Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-headline font-bold text-lg mb-6 tracking-tight">Support</h4>
            <ul className="space-y-3 text-sm font-medium text-blue-100/40">
              <li><Link href="#contact" className="hover:text-accent transition-colors">Client Portal</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">Knowledge Base</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">Direct Helpdesk</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">Service Status</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="font-headline font-bold text-lg mb-6 tracking-tight">Company</h4>
            <ul className="space-y-3 text-sm font-medium text-blue-100/40">
              <li><Link href="#about" className="hover:text-accent transition-colors">Our Mission</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Global Network</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-blue-100/20 uppercase tracking-widest">
            © {new Date().getFullYear()} Apex Systems Group.
          </p>
          <div className="flex gap-6 items-center">
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] font-bold text-blue-100/40 uppercase tracking-tighter">System Status: Optimal</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
