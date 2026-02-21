"use client";

export default function Contact() {
    return (
        <footer id="contact" className="py-24 px-6 md:px-12 bg-black text-center relative z-10 z-index-50">
            <div className="max-w-xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-headline mb-12 text-white">
                    Initiate.
                </h2>

                <div className="flex flex-col gap-6 mb-16">
                    <a href="mailto:info@4playglobal.com" className="text-lg font-sans tracking-widest text-silver hover:text-bronze transition-colors duration-300">
                        INFO@4PLAYGLOBAL.COM
                    </a>

                    <a
                        href="https://calendly.com/barque/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-sans tracking-[0.2em] text-bronze hover:text-white transition-colors duration-300 border border-bronze px-6 py-3 uppercase"
                    >
                        Book Consultation
                    </a>

                    <div className="flex justify-center gap-8 mt-4">
                        <a
                            href="https://www.instagram.com/4playglobal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-sans tracking-[0.2em] uppercase text-gray-500 hover:text-bronze transition-colors"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://www.linkedin.com/in/khalid-johnson-a743816/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-sans tracking-[0.2em] uppercase text-gray-500 hover:text-bronze transition-colors"
                        >
                            LinkedIn
                        </a>
                    </div>

                    <div className="flex justify-center gap-8 mt-6">
                        <a
                            href="/Paraloop_Terms_of_Service.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-sans tracking-[0.2em] uppercase text-gray-500 hover:text-bronze transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="/4PlayGlobal_Paraloop_Privacy_Policy.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-sans tracking-[0.2em] uppercase text-gray-500 hover:text-bronze transition-colors"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <p className="text-[10px] font-sans tracking-widest text-gray-700 uppercase">
                    © {new Date().getFullYear()} 4PLAY Global. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
