"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const works = [
    {
        title: "When Smoke Clears",
        category: "Brand Campaign",
        image: "/images/when-smoke-clears.jpg",
        alt: "When Smoke Clears collection campaign, sourced from the brand's website",
        description: "Fashion, identity, and cultural expression. Explore the world of When Smoke Clears.",
        url: "https://whensmokeclears.com",
        action: "EXPLORE THE BRAND",
        credit: "Campaign image courtesy of When Smoke Clears.",
    },
    {
        title: "4WRD Skate",
        category: "Immersive Theater / Roller Skating",
        image: "/images/4wrd-skating.webp",
        alt: "Representative image of Black youth roller skating together at an urban neighborhood rink",
        description: "Movement brings us together. Roller-skating experiences that connect young people, celebrate community, and make room for joy.",
        url: "https://4wrdskate.com",
        action: "EXPLORE 4WRD SKATE",
        credit: "AI-created community skating illustration.",
    },
    {
        title: "Glazn",
        category: "Automated Content & Technology",
        image: "/images/content-automation.webp",
        alt: "Content production workstation with connected automation workflows and video editing screens",
        description: "Creative content meets intelligent systems. Explore technology and automation for the next generation of digital storytelling.",
        url: "https://paralopp.4playglobal.com",
        action: "EXPLORE THE PLATFORM",
        credit: "AI-created technology concept image.",
    },
];

export default function SelectedWorks() {
    const reduceMotion = useReducedMotion();
    return (
        <section id="works" className="py-24 bg-obsidian relative z-10 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <h2 className="text-xs font-sans tracking-[0.3em] uppercase text-bronze/80 mb-16 text-right">
                    Production & Selected Work
                </h2>

                <article className="mb-32 border-y border-bronze/25 py-12 md:py-20 grid md:grid-cols-2 gap-10 md:gap-20 items-center">
                    <figure>
                        <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
                            <Image
                                src="/images/essence-octavia-spencer-cover.jpg"
                                alt="ESSENCE digital cover featuring Octavia Spencer"
                                fill
                                sizes="(max-width: 767px) 100vw, 50vw"
                                className="object-cover"
                            />
                            <div className="absolute left-4 top-4 bg-black/75 px-3 py-2 text-[10px] tracking-[0.22em] uppercase text-bronze backdrop-blur-sm">
                                Featured Production
                            </div>
                        </div>
                        <figcaption className="mt-3 text-[10px] tracking-wide text-silver/50">
                            ESSENCE digital cover featuring Octavia Spencer. Image courtesy of ESSENCE.
                        </figcaption>
                    </figure>
                    <div>
                        <p className="text-xs tracking-widest uppercase text-bronze mb-4">Production Capabilities</p>
                        <h3 className="text-4xl md:text-6xl font-headline text-white leading-tight mb-6">Culture.<br />Captured with intention.</h3>
                        <p className="text-silver/75 leading-relaxed mb-6">Editorial covers, interviews, and branded storytelling. We bring creative vision and production partners together to create work that connects.</p>
                        <p className="text-silver/75 leading-relaxed mb-8">Featured work: an ESSENCE digital cover and short interview produced with our production partner Apt 5F, in collaboration with Amazon Prime.</p>
                        <ul className="space-y-3 text-sm text-silver/80 border-t border-white/10 pt-6 mb-8">
                            <li>Editorial & digital cover production</li>
                            <li>Short-form interviews & branded content</li>
                            <li>Creative collaboration & production partnerships</li>
                        </ul>
                        <a href="mailto:info@4playglobal.com?subject=Production%20inquiry" className="inline-block text-xs tracking-widest text-bronze border-b border-bronze/50 pb-2 hover:text-white">DISCUSS A PRODUCTION →</a>
                    </div>
                </article>

                <div className="space-y-24 md:space-y-32">
                    {works.map((work, index) => (
                        <motion.article
                            key={work.title}
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: reduceMotion ? 0 : 0.6 }}
                            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-20 items-center`}
                        >
                            <figure className="w-full md:w-1/2">
                                <a href={work.url} target="_blank" rel="noopener noreferrer" aria-label={work.action} className="block aspect-[4/5] relative overflow-hidden group">
                                    <Image src={work.image} alt={work.alt} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105" />
                                </a>
                                <figcaption className="text-[10px] text-silver/50 mt-3 tracking-wide">{work.credit}</figcaption>
                            </figure>
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <p className="text-xs tracking-widest text-bronze mb-4 uppercase">{work.category}</p>
                                <h3 className="text-4xl md:text-6xl font-headline font-bold mb-6 text-white leading-tight">{work.title}</h3>
                                <p className="text-silver/75 leading-relaxed max-w-xl mb-8">{work.description}</p>
                                <a href={work.url} target="_blank" rel="noopener noreferrer" className="inline-block text-xs tracking-widest border-b border-bronze/50 hover:text-bronze transition-colors pb-2">{work.action} →</a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
