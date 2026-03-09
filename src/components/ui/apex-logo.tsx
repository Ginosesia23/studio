import React from "react";

export function ApexLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M12 3L2 21H7L12 11L17 21H22L12 3Z" 
        fill="currentColor"
      />
    </svg>
  );
}
