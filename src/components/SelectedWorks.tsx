"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const works = [
    {
        id: 1,
        title: "The Alchemist's Veil",
        category: "Immersive Theatre",
        image: "/images/hero-face.jpg", // Reusing for demo
        url: null,
    },
    {
        id: 2,
        title: "Chromatica Essence",
        category: "Brand Campaign",
        image: "/images/abstract-gold.png",
        url: null,
    },
    {
        id: 3,
        title: "Obsidian Echo",
        category: "Film Production",
        image: "/images/texture-black.jpg",
        url: null,
    },
    {
        id: 4,
        title: "Barpan",
        category: "Wellness & Lifestyle",
        image: "/images/barpan-cover.jpg",
        url: "https://barpan.4playglobal.com",
    },
    {
        id: 5,
        title: "Glazn",
        category: "Creator Platform",
        image: "/images/glazn-cover.jpg",
        url: "https://glazn.com",
    },
];

export default function SelectedWorks() {
    return (
        <section id="works" className="py-24 bg-obsidian relative z-10">
            <div className="mx-auto px-6 md:px-12">
                <h2 className="text-xs font-sans tracking-[0.3em] uppercase text-bronze/80 mb-16 text-right">
                    Selected Exhibitions
                </h2>

                <div className="space-y-32">
                    {works.map((work, index) => (
                        <motion.div
                            key={work.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-24 items-center`}
                        >
                            <div className="w-full md:w-1/2 aspect-[4/5] relative overflow-hidden group">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-bronze/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                            </div>

                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <p className="text-xs font-sans tracking-widest text-bronze mb-4 uppercase">
                                    {work.category}
                                </p>
                                <h3 className="text-4xl md:text-6xl font-headline font-bold mb-6 text-white leading-none">
                                    {work.title}
                                </h3>
                                {work.url ? (
                                    <a
                                        href={work.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-sm font-sans tracking-widest border-b border-transparent hover:border-bronze transition-colors pb-1 cursor-pointer"
                                    >
                                        VISIT
                                    </a>
                                ) : (
                                    <button className="text-sm font-sans tracking-widest border-b border-transparent hover:border-bronze transition-colors pb-1">
                                        VIEW EXHIBITION
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
