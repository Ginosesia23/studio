import React from "react";

export function ApexLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M200 20L20 380H110L200 180L290 380H380L200 20Z"
        fill="currentColor"
      />
      <path
        d="M130 380L200 220L240 310H170L130 380Z"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  );
}
