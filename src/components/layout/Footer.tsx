"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Twitter, Linkedin, Github, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-32 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center shadow-xl shadow-accent/20">
                <ShieldCheck className="text-primary w-8 h-8" />
              </div>
              <span className="font-headline text-3xl font-black tracking-tighter uppercase">
                APEX<span className="text-accent">SYSTEMS</span>
              </span>
            </Link>
            <p className="text-xl text-blue-100/60 leading-relaxed max-w-md font-medium">
              We engineer stable infrastructure and provide reliable technical support to anchor your entire business ecosystem.
            </p>
            <div className="flex gap-5">
              {[Twitter, Linkedin, Github].map((Icon, idx) => (
                <a key={idx} href="#" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 hover:-translate-y-1 group">
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-headline font-bold text-xl mb-8 tracking-tight">Solutions</h4>
            <ul className="space-y-5 text-lg font-medium text-blue-100/40">
              <li><Link href="#services" className="hover:text-accent transition-colors flex items-center gap-2">Cloud Hosting <ExternalLink size={14} /></Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors flex items-center gap-2">Infrastructure <ExternalLink size={14} /></Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors flex items-center gap-2">Custom Dev <ExternalLink size={14} /></Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors flex items-center gap-2">Security <ExternalLink size={14} /></Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-headline font-bold text-xl mb-8 tracking-tight">Support</h4>
            <ul className="space-y-5 text-lg font-medium text-blue-100/40">
              <li><Link href="#contact" className="hover:text-accent transition-colors">Client Portal</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">Knowledge Base</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">Direct Helpdesk</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">Service Status</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="font-headline font-bold text-xl mb-8 tracking-tight">Company</h4>
            <ul className="space-y-5 text-lg font-medium text-blue-100/40">
              <li><Link href="#about" className="hover:text-accent transition-colors">Our Mission</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Global Network</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-10">
          <p className="text-base font-bold text-blue-100/20 uppercase tracking-widest">
            © {new Date().getFullYear()} Apex Systems Group.
          </p>
          <div className="flex gap-10 items-center">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-bold text-blue-100/40 uppercase tracking-tighter">System Status: Optimal</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
