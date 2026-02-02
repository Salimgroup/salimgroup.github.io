"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
// Removed incorrect import
// Wait, I haven't created lib/utils yet. I should verify if I need it or just inline clsx/tailwind-merge. 
// For now I'll inline to avoid dependency on an uncreated file, or create it quickly. 
// Actually, I'll inline for simplicity in this component or create a helper if reused.
// Let's create a definition for 'cn' here or just use clsx directly. I'll use clsx directly.
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navItems = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "Consulting", href: "#consulting" },
    { name: "Selected Works", href: "#works" },
    { name: "Impact", href: "#impact" },
    { name: "Contact", href: "#contact" },
];

export default function Navigation() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference text-white pointer-events-none"
        >
            {/* Pointer events auto on children to allow clicking but click-through on empty space */}
            <div className="pointer-events-auto">
                <Link href="/" className="text-xl font-headline font-bold tracking-widest uppercase hover:text-bronze transition-colors duration-500">
                    4Play Global
                </Link>
            </div>

            <div className="hidden md:flex items-center gap-8 pointer-events-auto">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="group relative text-xs font-sans font-medium tracking-[0.2em] uppercase text-white/80 transition-colors duration-300 hover:text-bronze"
                    >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-bronze transition-all duration-300 group-hover:w-full" />
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Toggle could go here, keeping it minimal for now */}
            <button className="md:hidden pointer-events-auto text-sm font-sans tracking-widest">
                MENU
            </button>
        </motion.nav>
    );
}
