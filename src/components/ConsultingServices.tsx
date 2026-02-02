"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const consultingServices = [
    {
        category: "Digital Ecosystems",
        items: [
            "E-Commerce Architectures",
            "Web Application Development",
            "High-Fidelity User Experiences",
            "Conversion Rate Optimization (CRO)"
        ]
    },
    {
        category: "Artificial Intelligence",
        items: [
            "LLM Integration & Custom Bots",
            "Workflow Automation",
            "Generative Art & Design",
            "Predictive Analytics"
        ]
    },
    {
        category: "Brand & Identity",
        items: [
            "Strategic Positioning",
            "Visual Identity Systems",
            "Tone of Voice & Narrative",
            "Market differentiation"
        ]
    },
    {
        category: "Growth Strategy",
        items: [
            "Go-to-Market Execution",
            "Content Scaling Systems",
            "Retention Mechanisms",
            "Data-Driven Iteration"
        ]
    }
];

export default function ConsultingServices() {
    return (
        <section id="consulting" className="py-24 md:py-32 px-6 md:px-12 bg-obsidian relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-xs font-sans tracking-[0.3em] uppercase text-bronze mb-4">
                        Consulting & Strategy
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-headline text-silver max-w-3xl leading-tight">
                        Build Bold. Think Different. <br />
                        <span className="text-transparent bg-clip-text bg-gold-sheen">Scale Beautiful.</span>
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-24">
                    {consultingServices.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="group"
                        >
                            <h4 className="text-xl md:text-2xl font-headline text-chromatic-grey-light mb-8 group-hover:text-bronze transition-colors duration-300">
                                {service.category}
                            </h4>

                            <ul className="space-y-4">
                                {service.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 group/item">
                                        <span className="mt-1 text-bronze/50 group-hover/item:text-bronze transition-colors">
                                            <ArrowRight size={14} />
                                        </span>
                                        <span className="text-sm md:text-base font-sans text-silver/60 group-hover/item:text-silver/90 transition-colors">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="w-full h-[1px] bg-gradient-to-r from-bronze/20 to-transparent mt-8 group-hover:from-bronze/50 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
