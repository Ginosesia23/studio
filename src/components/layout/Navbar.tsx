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
        isScrolled 
          ? "py-3 bg-primary/90 backdrop-blur-xl border-b border-white/10 shadow-2xl" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <ApexLogo 
            className="w-8 h-8 text-accent transition-transform duration-300 group-hover:scale-110" 
          />
          <span className="font-headline text-lg font-black tracking-tighter uppercase text-white">
            APEX<span className="text-accent">SYSTEMS</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold tracking-widest uppercase text-white/70 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Button 
            asChild 
            size="sm" 
            className="font-bold h-10 px-6 rounded-lg bg-accent text-primary hover:bg-accent/90 transition-all shadow-lg shadow-accent/20"
          >
            <Link href="#contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-1.5 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary border-b border-white/10 p-8 flex flex-col gap-4 lg:hidden shadow-2xl animate-in fade-in slide-in-from-top-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-headline font-black text-white py-4 border-b border-white/5 hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full h-14 text-base font-bold bg-accent text-primary rounded-xl mt-4">
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}