import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google"; // Using accessible Google Fonts that match the vibe
import "./globals.css";
import clsx from "clsx";

// Elegant, editorial headline font
const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

// Clean, architectural body font
const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
});

export const metadata: Metadata = {
    title: "4Play Global | Cultural Production",
    description: "We create what lasts. High-fashion, cinematic, dark luxury cultural production.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={clsx(
                    playfair.variable,
                    manrope.variable,
                    "bg-obsidian text-silver min-h-screen relative overflow-x-hidden selection:bg-gold/30 selection:text-white"
                )}
            >
                <div className="grain-overlay" />
                <main className="relative z-10">
                    {children}
                </main>
            </body>
        </html>
    );
}
