
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
        <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-24">
          {seajourneyLogo && (
            <div className="relative w-40 h-12">
              <Image
                src={seajourneyLogo.imageUrl}
                alt={seajourneyLogo.description}
                fill
                className="object-contain"
                data-ai-hint="logo corporate"
              />
            </div>
          )}
          {famioLogo && (
            <div className="relative w-40 h-12">
              <Image
                src={famioLogo.imageUrl}
                alt={famioLogo.description}
                fill
                className="object-contain"
                data-ai-hint="logo tech"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
