"use client";

import { motion } from "framer-motion";

export default function ImpactAbout() {
    return (
        <section id="impact" className="py-32 bg-charcoal/30 relative z-10">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-3xl md:text-5xl font-headline mb-12 leading-tight">
                        "We do not measure impact in clicks.<br />
                        We measure it in <span className="text-transparent bg-clip-text bg-gold-sheen">permanence</span>."
                    </h2>

                    <div className="w-16 h-[2px] bg-bronze mx-auto mb-12" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                        <div>
                            <h3 className="text-sm font-sans tracking-widest uppercase text-bronze mb-4">Legacy</h3>
                            <p className="text-silver/70 font-sans leading-relaxed">
                                4Play Global was founded on the principle that culture is the ultimate currency. In an era of ephemeral content, we build the monuments that remain when the feed refreshes.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm font-sans tracking-widest uppercase text-bronze mb-4">Leadership</h3>
                            <p className="text-silver/70 font-sans leading-relaxed">
                                Led by visionaries who walk between the boardroom and the underground, we bring an unmatched authenticity to every production.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
