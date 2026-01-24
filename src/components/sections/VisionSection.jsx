
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import JellyButton from '@/components/ui/JellyButton';

const VisionSection = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Ribbons - Refined for Liquid Glass feel */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,20 Q25,50 50,20 T100,50" fill="none" stroke="#3B82F6" strokeWidth="0.5" className="animate-float" />
                    <path d="M0,40 Q25,10 50,40 T100,10" fill="none" stroke="#0369A1" strokeWidth="0.5" className="animate-float" style={{ animationDelay: '1s' }} />
                    <path d="M0,60 Q25,90 50,60 T100,90" fill="none" stroke="#334155" strokeWidth="0.5" className="animate-float" style={{ animationDelay: '2s' }} />
                    <path d="M0,80 Q40,40 60,80 T100,30" fill="none" stroke="#0F172A" strokeWidth="0.5" className="animate-float" style={{ animationDelay: '3s' }} />
                </svg>
            </div>

            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">

                {/* Left Content */}
                <div className="lg:w-1/2 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-bv-secondary/5 text-xs font-bold tracking-widest uppercase text-bv-secondary mb-8 border border-bv-secondary/10"
                    >
                        Global Venture Studio
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-7xl font-display font-bold text-bv-primary leading-[0.95] mb-8 tracking-tight"
                    >
                        <span className="whitespace-nowrap">Bridging Worlds.</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-bv-cta via-blue-400 to-purple-500 animate-gradient-x whitespace-nowrap">
                            Building Futures.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-bv-secondary leading-relaxed mb-10 max-w-lg font-light"
                    >
                        We operate as a bridge between systems, cultures, and eras. Combining <strong className="text-bv-primary font-medium">Capital × Technology × Narrative × Humanity</strong> to architect the next generation of digital economies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <JellyButton className="px-8 py-4 bg-bv-primary text-white rounded-full font-bold hover:bg-bv-secondary shadow-lg shadow-bv-primary/20" icon={ArrowRight}>
                            Our Vision
                        </JellyButton>
                        <JellyButton className="px-8 py-4 bg-white/50 text-bv-primary border border-bv-secondary/20 rounded-full font-bold hover:bg-white transition-all backdrop-blur-sm">
                            Explore Services
                        </JellyButton>
                    </motion.div>
                </div>

                {/* Right Content - Abstract Card Graphic */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="lg:w-1/2 relative w-full"
                >
                    <div className="relative aspect-[4/3] bg-white/40 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-bv-primary/5 border border-white/60 backdrop-blur-3xl">
                        {/* Video Background */}
                        <video
                            poster="/BlockValley_Logo_FullText.png"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover opacity-90 mix-blend-multiply"
                        >
                            <source src="/IMG_4443.MP4" type="video/mp4" />
                            {/* Fallback image */}
                            <img src="/BlockValley_Logo_FullText.png" alt="Block Valley Banner" className="w-full h-full object-cover" />
                        </video>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-bv-primary/10 to-transparent pointer-events-none"></div>

                        {/* Floating Hubs Pill */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md shadow-lg shadow-bv-primary/5 rounded-2xl p-4 flex items-center gap-4 border border-white/50 max-w-xs z-20"
                        >
                            <div className="w-10 h-10 rounded-full bg-bv-cta/10 text-bv-cta flex items-center justify-center">
                                <Globe size={20} />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-bv-secondary/80 uppercase tracking-wider">Hubs In</div>
                                <div className="text-sm font-bold text-bv-primary">HK • SG • UAE • US</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Background Decor Layer behind the card */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-bv-cta/20 to-purple-500/20 rounded-[3rem] blur-3xl -z-10 opacity-60 animate-pulse-slow"></div>
                </motion.div>

            </div>
        </section>
    );
};

export default VisionSection;
