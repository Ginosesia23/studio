"use client";

import React from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

export function TrustedCompanies() {
  const famioLogo = PlaceHolderImages.find((img) => img.id === "logo-famio");
  const seajourneyLogo = PlaceHolderImages.find((img) => img.id === "logo-seajourney");
  const courseiqLogo = PlaceHolderImages.find((img) => img.id === "logo-courseiq");
  const sudoku26Logo = PlaceHolderImages.find((img) => img.id === "logo-sudoku26");

  return (
    <section className="py-14 bg-white border-y border-border/60">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground/70 mb-8">
          Trusted by modern teams across the globe
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-16 lg:gap-x-24 gap-y-8">
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
          {courseiqLogo && (
            <div className="relative w-40 h-12">
              <Image
                src={courseiqLogo.imageUrl}
                alt={courseiqLogo.description}
                fill
                className="object-contain"
                data-ai-hint="logo education"
              />
            </div>
          )}
          {sudoku26Logo && (
            <div className="relative w-40 h-12">
              <Image
                src={sudoku26Logo.imageUrl}
                alt={sudoku26Logo.description}
                fill
                className="object-contain"
                data-ai-hint="logo game"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
