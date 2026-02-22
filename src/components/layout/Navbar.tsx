
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ApexLogo } from "@/components/ui/apex-logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Solutions", href: "#services" },
    { name: "Custom Apps", href: "#custom-apps" },
    { name: "Support", href: "#support" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 lg:px-12",
        isScrolled ? "py-3 bg-white/95 backdrop-blur-md shadow-lg border-b" : "py-8 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <ApexLogo 
            className={cn(
              "w-9 h-9 transition-colors",
              isScrolled ? "text-primary" : "text-accent"
            )} 
          />
          <span className={cn(
            "font-headline text-xl font-black tracking-tighter uppercase transition-colors",
            isScrolled ? "text-primary" : "text-white"
          )}>
            APEX<span className="text-accent">SYSTEMS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[11px] font-black tracking-widest uppercase transition-colors",
                  isScrolled ? "text-primary/70 hover:text-accent" : "text-white/70 hover:text-accent"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Button 
            asChild 
            size="sm" 
            className={cn(
              "font-bold h-10 px-6 rounded-lg transition-all",
              isScrolled 
                ? "bg-primary text-white hover:bg-primary/90" 
                : "bg-accent text-primary hover:bg-accent/90"
            )}
          >
            <Link href="#contact">Consultation</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden p-1.5 transition-colors",
            isScrolled ? "text-primary" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border p-8 flex flex-col gap-4 lg:hidden shadow-xl animate-in fade-in slide-in-from-top-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xl font-headline font-black text-primary py-3 border-b border-border/50 hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full h-12 text-base font-bold bg-primary text-white rounded-xl mt-2">
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Get Started
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
