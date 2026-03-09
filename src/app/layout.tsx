
import type {Metadata} from 'next';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Apex Systems | Platform Creation & Managed Maintenance',
  description: 'Helping small businesses build robust websites, maintain digital systems, and engineer custom features for long-term growth.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 391 347%22 fill=%22%23021123%22><path d=%22M1922 3338 c-21 -36 -119 -210 -484 -863 -232 -413 -408 -729 -536 -955 -35 -63 -106 -189 -157 -280 -51 -91 -173 -309 -272 -485 -290 -517 -376 -675 -370 -681 3 -3 81 47 173 112 238 166 788 540 989 674 94 62 173 116 178 119 14 13 507 1094 507 1113 0 7 51 -84 113 -202 209 -396 211 -400 226 -394 30 11 561 315 566 325 7 10 -37 85 -398 694 -346 583 -509 855 -512 855 -2 0 -12 -15 -23 -32z%22/><path d=%22M2915 1573 c-16 -9 -138 -79 -270 -156 -132 -77 -276 -161 -320 -187 -343 -199 -873 -519 -1757 -1061 -76 -46 -138 -86 -138 -89 0 -3 129 -4 287 -2 l287 3 141 86 c235 145 1012 620 1157 709 75 45 148 90 161 99 28 18 24 22 102 -120 21 -38 47 -86 58 -105 11 -19 42 -75 70 -125 28 -49 83 -148 122 -220 40 -72 96 -174 126 -227 l54 -97 413 -3 c226 -2 412 -2 412 0 0 4 -392 690 -550 962 -75 129 -177 306 -226 393 -49 86 -91 157 -94 157 -3 -1 -18 -8 -35 -17z%22/></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <FirebaseClientProvider>
          {children}
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
