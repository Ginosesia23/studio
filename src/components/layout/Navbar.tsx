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
      setIsScrolled(window.scrollY > 10);
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-md border-b border-border/50 shadow-sm" 
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <ApexLogo 
            className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-105" 
          />
          <span className="font-headline text-lg font-bold tracking-tighter uppercase text-primary">
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
                className="text-xs font-bold tracking-tight text-primary/70 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Button 
            asChild 
            size="sm" 
            className="font-bold h-10 px-6 rounded-full bg-primary text-white hover:bg-primary/90 transition-all shadow-md"
          >
            <Link href="#contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border p-8 flex flex-col gap-4 lg:hidden shadow-xl animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-primary py-3 border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full h-12 font-bold bg-primary text-white rounded-xl mt-4">
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
