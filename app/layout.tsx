import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeButton } from "@/components/theme-button";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catalyst | shadcn ui style",
  description: "Catalyst inspired design system style for shadcn ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
        >
          <div className="fixed right-2 top-2 z-[9999]">
            <ThemeButton />
          </div>
          <Toaster />
          {/* <TailwindIndicator /> */}
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}

function TailwindIndicator() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-1 right-1 z-50 flex h-6 w-6 items-center justify-center rounded bg-foreground p-3 font-mono text-xs font-semibold text-background print:hidden">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden">sm</div>
      <div className="hidden md:block lg:hidden">md</div>
      <div className="hidden lg:block xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
