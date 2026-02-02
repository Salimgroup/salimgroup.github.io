"use client";

import { motion } from "framer-motion";

const services = [
    {
        title: "Cultural Incubation",
        description: "Nurturing the underground into the iconic.",
    },
    {
        title: "Production",
        description: "Cinematic, high-fidelity visual storytelling.",
    },
    {
        title: "Experiential Spaces",
        description: "Environments that demand presence and awe.",
    },
    {
        title: "Strategic Partnerships",
        description: "Aligning legacy with vision.",
    },
];

export default function Services() {
    return (
        <section className="py-24 px-6 md:px-12 bg-obsidian border-t border-white/5 relative z-10">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-xs font-sans tracking-[0.3em] uppercase text-bronze/80 mb-16">
                    What We Create
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <h3 className="text-xl md:text-2xl font-headline text-silver group-hover:text-bronze transition-colors duration-300 mb-4">
                                {service.title}
                            </h3>
                            <div className="w-8 h-[1px] bg-white/20 mb-4 group-hover:w-full group-hover:bg-bronze/50 transition-all duration-500" />
                            <p className="text-sm font-sans text-gray-500 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
