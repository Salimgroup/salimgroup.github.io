"use client";

export default function Contact() {
    return (
        <footer id="contact" className="py-24 px-6 md:px-12 bg-black text-center relative z-10 z-index-50">
            <div className="max-w-xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-headline mb-12 text-white">
                    Initiate.
                </h2>

                <div className="flex flex-col gap-6 mb-16">
                    <a href="mailto:info@4play.global" className="text-lg font-sans tracking-widest text-silver hover:text-bronze transition-colors duration-300">
                        INFO@4PLAY.GLOBAL
                    </a>
                    <div className="flex justify-center gap-8 mt-4">
                        {/* Social placeholders */}
                        {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                            <a key={social} href="#" className="text-xs font-sans tracking-[0.2em] uppercase text-gray-500 hover:text-bronze transition-colors">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>

                <p className="text-[10px] font-sans tracking-widest text-gray-700 uppercase">
                    © {new Date().getFullYear()} 4PLAY Global. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
