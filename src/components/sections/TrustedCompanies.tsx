
"use client";

import React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function TrustedCompanies() {
  const famioLogo = PlaceHolderImages.find((img) => img.id === "logo-famio");
  const seajourneyLogo = PlaceHolderImages.find((img) => img.id === "logo-seajourney");

  return (
    <section className="py-12 bg-white border-y border-border/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 mb-10">
          Empowering modern startups across the globe
        </p>
        <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-24 opacity-70 hover:opacity-100 transition-opacity duration-500">
          {seajourneyLogo && (
            <div className="relative w-40 h-16 group">
              <Image
                src={seajourneyLogo.imageUrl}
                alt={seajourneyLogo.description}
                fill
                className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                data-ai-hint={seajourneyLogo.imageHint}
              />
            </div>
          )}
          {famioLogo && (
            <div className="relative w-40 h-16 group">
              <Image
                src={famioLogo.imageUrl}
                alt={famioLogo.description}
                fill
                className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                data-ai-hint={famioLogo.imageHint}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
