"use client";

import Navigation from "@/components/Navigation";
import ConsultingServices from "@/components/ConsultingServices";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ConsultingPage() {
    return (
        <div className="relative w-full bg-obsidian min-h-screen">
            <Navigation />
            
            {/* Hero Section for Consulting */}
            <section className="relative min-h-[60vh] flex items-center justify-center px-6 md:px-12 pt-24">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-xs font-sans tracking-[0.3em] uppercase text-bronze mb-6"
                    >
                        Strategic Consulting
                    </motion.p>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-headline text-silver leading-tight mb-8"
                    >
                        We Build What
                        <br />
                        <span className="text-transparent bg-clip-text bg-gold-sheen">Others Can&apos;t Copy.</span>
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-silver/60 max-w-2xl mx-auto leading-relaxed"
                    >
                        From digital ecosystems to brand identity, we partner with visionary businesses 
                        to create lasting competitive advantages.
                    </motion.p>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="py-20 px-6 md:px-12 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-12"
                    >
                        <div className="group">
                            <h3 className="text-2xl font-headline text-silver mb-4 group-hover:text-bronze transition-colors">
                                Local Expertise
                            </h3>
                            <p className="text-silver/60 leading-relaxed">
                                We understand the unique challenges and opportunities facing small businesses in your community. 
                                Our strategies are tailored to your market.
                            </p>
                        </div>
                        
                        <div className="group">
                            <h3 className="text-2xl font-headline text-silver mb-4 group-hover:text-bronze transition-colors">
                                Full-Stack Capability
                            </h3>
                            <p className="text-silver/60 leading-relaxed">
                                From AI automation to brand identity, we handle the entire digital transformation. 
                                No need to coordinate multiple vendors.
                            </p>
                        </div>
                        
                        <div className="group">
                            <h3 className="text-2xl font-headline text-silver mb-4 group-hover:text-bronze transition-colors">
                                Results-Driven
                            </h3>
                            <p className="text-silver/60 leading-relaxed">
                                We measure success in growth, not deliverables. 
                                Our partnerships are built on outcomes that matter to your bottom line.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <ConsultingServices />

            {/* CTA Section */}
            <section className="py-24 px-6 md:px-12 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-headline text-silver mb-8"
                    >
                        Ready to Transform Your Business?
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-silver/60 text-lg mb-12 max-w-2xl mx-auto"
                    >
                        Let&apos;s discuss how we can help you build something that lasts. 
                        Schedule a consultation to explore the possibilities.
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link 
                            href="mailto:info@4playglobal.com?subject=Consulting%20Inquiry"
                            className="inline-block px-8 py-4 bg-bronze text-obsidian font-sans font-medium tracking-widest uppercase text-sm hover:bg-bronze/90 transition-colors duration-300"
                        >
                            Start a Conversation
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Contact */}
            <Contact />
        </div>
    );
}
