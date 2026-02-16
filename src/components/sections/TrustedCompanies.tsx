
"use client";

import React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function TrustedCompanies() {
  const logos = [
    PlaceHolderImages.find((img) => img.id === "logo-1"),
    PlaceHolderImages.find((img) => img.id === "logo-2"),
    PlaceHolderImages.find((img) => img.id === "logo-3"),
    PlaceHolderImages.find((img) => img.id === "logo-4"),
    PlaceHolderImages.find((img) => img.id === "logo-5"),
  ].filter(Boolean);

  return (
    <section className="py-16 bg-white border-y border-border/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-muted-foreground mb-12">
          Empowering modern startups across the globe
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, idx) => (
            <div key={idx} className="relative w-32 h-12">
              <Image
                src={logo?.imageUrl || ""}
                alt={logo?.description || "Partner logo"}
                fill
                className="object-contain"
                data-ai-hint={logo?.imageHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
