"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/images/hero-face.jpg"
                    alt="4Play Global Aesthetic"
                    fill
                    className="object-cover object-center opacity-80"
                    priority
                    sizes="100vw"
                />
                {/* Gradient Overlay for Fade Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-obsidian/10 to-obsidian z-10" />
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 text-center px-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-white tracking-widest uppercase mb-4 drop-shadow-2xl">
                    We Create <br />
                    <span className="text-transparent bg-clip-text bg-gold-sheen">What Lasts</span>.
                </h1>
                <div className="w-24 h-[1px] bg-bronze/50 mx-auto mt-8" />
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-bronze/50 to-transparent" />
            </motion.div>
        </div>
    );
}
