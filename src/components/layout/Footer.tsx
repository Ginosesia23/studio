"use client";

import React from "react";
import Link from "next/link";
import { Twitter, Linkedin, Github, ShieldCheck } from "lucide-react";
import { ApexLogo } from "@/components/ui/apex-logo";

export function Footer() {
  return (
    <footer className="bg-white text-foreground pt-20 pb-10 border-t border-border/60">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-14">
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <ApexLogo className="text-primary w-8 h-8" />
              <span className="font-headline text-xl font-bold tracking-tight text-primary">
                Apex <span className="text-accent">Systems</span>
              </span>
            </Link>
            <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
              Engineering stable digital infrastructure to anchor your business ecosystem
              for the long term.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-secondary border border-border/60 flex items-center justify-center text-foreground/60 hover:text-accent hover:border-accent/40 transition-all"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-primary">
                Solutions
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#services" className="hover:text-accent transition-colors">
                    Platform Creation
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-accent transition-colors">
                    Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-accent transition-colors">
                    API Integration
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-accent transition-colors">
                    Cybersecurity
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-primary">
                Technical
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#support" className="hover:text-accent transition-colors">
                    Managed Support
                  </Link>
                </li>
                <li>
                  <Link href="#support" className="hover:text-accent transition-colors">
                    Uptime Monitoring
                  </Link>
                </li>
                <li>
                  <Link href="#support" className="hover:text-accent transition-colors">
                    Backup Protocols
                  </Link>
                </li>
                <li>
                  <Link href="#support" className="hover:text-accent transition-colors">
                    Incident Response
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-primary">
                Apex Group
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#about" className="hover:text-accent transition-colors">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-accent transition-colors">
                    Network Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-accent transition-colors">
                    Legal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-accent transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/60 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Apex Systems Group. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-widest">
                Global Status: Active
              </span>
            </div>
            <ShieldCheck className="text-muted-foreground/40 w-6 h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
