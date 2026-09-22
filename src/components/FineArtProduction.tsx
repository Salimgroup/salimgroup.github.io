"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const capabilities = [
    {
        number: "01",
        title: "Commissioned Portraiture",
        copy: "Hyperrealistic colored-pencil, oil, and acrylic works developed around presence, character, and personal legacy.",
    },
    {
        number: "02",
        title: "Murals & Public Walls",
        copy: "Site-specific, large-scale artwork that transforms architecture into a landmark and gives a community story visible scale.",
    },
    {
        number: "03",
        title: "Custom Art Environments",
        copy: "Original artwork for cultural campaigns, branded spaces, collector commissions, and custom surfaces including vehicle art.",
    },
];

const artworks = [
    {
        src: "/images/xerox-king-james.webp",
        alt: "King James, a colored-pencil portrait of LeBron James by Lowveens Xerox Jacques",
        title: "King James",
        detail: "Colored pencil · 2021",
        className: "col-span-2 md:col-span-1 md:row-span-2",
    },
    {
        src: "/images/xerox-forged-in-fire.webp",
        alt: "Forged in Fire, a blue-flame boxer mural by Lowveens Xerox Jacques",
        title: "Forged in Fire",
        detail: "Spray paint mural · 2022",
        className: "",
    },
    {
        src: "/images/xerox-notorious.webp",
        alt: "Notorious, a colored-pencil portrait by Lowveens Xerox Jacques",
        title: "NOTORIOUS",
        detail: "Colored pencil · 2019",
        className: "",
    },
];

export default function FineArtProduction() {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="fine-art"
            className="relative z-10 scroll-mt-24 overflow-hidden border-y border-white/5 bg-obsidian px-6 py-24 md:px-12 md:py-32"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_30%,rgba(74,128,255,0.10),transparent_32%),radial-gradient(circle_at_88%_72%,rgba(225,62,92,0.09),transparent_34%)]" />

            <div className="relative mx-auto max-w-7xl">
                <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: reduceMotion ? 0 : 0.7 }}
                    className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
                >
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-bronze">
                                Fine Art & Mural Production
                            </p>
                            <h2 className="max-w-xl font-headline text-5xl leading-[0.95] text-white md:text-7xl">
                                Memory.
                                <br />
                                <span className="italic text-silver/70">Made monumental.</span>
                            </h2>
                            <p className="mt-8 max-w-xl text-base leading-relaxed text-silver/75 md:text-lg">
                                4Play Global works with Brooklyn artist Lowveens “XEROX” Jacques to produce
                                hyperrealistic portraiture, large-scale murals, and art-led environments. From an
                                intimate original to a wall that transforms a neighborhood, every project begins
                                with the story the work must hold.
                            </p>
                            <p className="mt-5 max-w-xl text-sm leading-relaxed text-silver/55">
                                A Syracuse University Fine Arts and Illustration graduate, Xerox brings extraordinary
                                visual recall and exacting hand-rendered detail to work at any scale.
                            </p>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="https://xerox.4playglobal.com/#artwork-index"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-bronze bg-bronze px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-black transition-colors hover:bg-transparent hover:text-bronze"
                            >
                                Explore Xerox’s Work ↗
                            </a>
                            <a
                                href="mailto:info@4playglobal.com?subject=XEROX%20fine%20art%20or%20mural%20project"
                                className="border border-white/20 px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:border-bronze hover:text-bronze"
                            >
                                Commission a Project
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-5">
                        {artworks.map((artwork, index) => (
                            <motion.figure
                                key={artwork.title}
                                initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: reduceMotion ? 0 : index * 0.08, duration: reduceMotion ? 0 : 0.6 }}
                                className={artwork.className}
                            >
                                <a
                                    href="https://xerox.4playglobal.com/#artwork-index"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block h-full"
                                    aria-label={`View ${artwork.title} on the Xerox artwork site`}
                                >
                                    <div className="relative h-[260px] overflow-hidden border border-white/10 bg-black md:h-full md:min-h-[330px]">
                                        <Image
                                            src={artwork.src}
                                            alt={artwork.alt}
                                            fill
                                            sizes="(max-width: 767px) 50vw, 30vw"
                                            quality={78}
                                            className="object-cover transition duration-700 group-hover:scale-[1.025]"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/55 to-transparent p-4 pt-16 md:p-6 md:pt-20">
                                            <p className="font-headline text-xl text-white md:text-2xl">{artwork.title}</p>
                                            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-silver/65">
                                                {artwork.detail}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </motion.figure>
                        ))}
                    </div>
                </motion.div>

                <div className="relative mt-20 border-t border-white/10 pt-10">
                    <div className="grid gap-8 md:grid-cols-3 md:gap-0">
                        {capabilities.map((capability) => (
                            <div
                                key={capability.number}
                                className="group md:border-l md:border-white/10 md:px-8 first:md:border-l-0 first:md:pl-0 last:md:pr-0"
                            >
                                <span className="text-[10px] tracking-[0.2em] text-bronze/70">{capability.number}</span>
                                <h3 className="mt-4 font-headline text-2xl text-white transition-colors group-hover:text-bronze">
                                    {capability.title}
                                </h3>
                                <p className="mt-4 text-sm leading-relaxed text-silver/60">{capability.copy}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="relative mt-10 text-[10px] tracking-wide text-silver/40">
                    Artwork © Lowveens “XEROX” Jacques. Used with permission.
                </p>
            </div>
        </section>
    );
}
