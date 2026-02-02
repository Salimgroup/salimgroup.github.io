"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "start 0.2"],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

    return (
        <section id="philosophy" className="py-24 md:py-48 px-6 bg-obsidian relative z-10">
            <div ref={containerRef} className="max-w-4xl mx-auto">
                <motion.div
                    style={{ opacity }}
                    className="text-2xl md:text-4xl lg:text-5xl font-headline leading-tight text-center md:text-left"
                >
                    <p className="mb-12 text-silver/90">
                        Culture is not something you borrow. It is something you <span className="text-bronze italic">forge</span>.
                    </p>
                    <p className="mb-12 text-silver/80">
                        We are not an agency. We are a cultural production house built for the few who understand that true power lies in stillness, certainty, and the refusal to compromise.
                    </p>
                    <p className="text-silver/70">
                        We do not chase relevance. We author it.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
