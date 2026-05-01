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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border/60 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-[68px]">
        <Link href="/" className="flex items-center gap-2.5 group">
          <ApexLogo className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-105" />
          <span className="font-headline text-[20px] font-bold tracking-tight text-primary">
            Apex <span className="text-accent">Systems</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <Button
            asChild
            size="sm"
            className="font-semibold h-10 px-5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors shadow-sm"
          >
            <Link href="#contact">Sign In</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border p-6 flex flex-col gap-2 lg:hidden shadow-xl animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-semibold text-primary py-3 border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="text-base font-semibold text-primary py-3 border-b border-border/50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Button asChild className="w-full h-11 font-semibold bg-primary text-white rounded-lg mt-3">
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Sign In
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
