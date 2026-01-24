
import { motion } from 'framer-motion';
import { Layers, Mic, ShieldCheck } from 'lucide-react';

const IdentitySection = () => {
    return (
        <section id="identity" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header - Asymmetric */}
                <div className="mb-24 flex flex-col items-start w-full md:w-2/3">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-bv-cta font-bold tracking-widest uppercase mb-4"
                    >
                        Who We Are
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-display font-bold text-bv-primary leading-[0.9] tracking-tighter"
                    >
                        THE IDENTITY <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-bv-cta to-purple-500 opacity-80">MATRIX.</span>
                    </motion.h2>
                </div>

                {/* Organic Layout - Grid-based for safety but offsets for style */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-y-0 w-full">

                    {/* Card 1: Venture Studio - Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-5 md:col-start-1 bg-white/60 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl shadow-bv-primary/5 hover:bg-white transition-colors border border-white/40 group z-20"
                    >
                        <div className="w-16 h-16 bg-bv-cta/10 rounded-full flex items-center justify-center mb-6 text-bv-cta group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                            <Layers size={32} />
                        </div>
                        <h3 className="text-3xl font-display font-bold mb-4 text-bv-primary">Venture Studio</h3>
                        <p className="text-bv-secondary leading-relaxed text-lg">Architecting new financial and technological systems from the ground up. We don&apos;t just invest; we build the infrastructure.</p>
                    </motion.div>

                    {/* Card 2: Influence Engine - Right & Lower */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-6 md:col-start-7 md:mt-32 bg-bv-cta p-12 rounded-[3rem] shadow-2xl z-10 text-white transform md:rotate-2 hover:rotate-0 transition-transform duration-500 relative"
                    >
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 text-white">
                            <Mic size={32} />
                        </div>
                        <h3 className="text-4xl font-display font-bold mb-4">Influence Engine</h3>
                        <p className="text-white/90 leading-relaxed text-xl font-medium">Enabling global influence through media, community, and powerful narrative construction. We amplify the signal in the noise.</p>

                        {/* Decorative Blur behind Pink Card */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-bv-cta/30 rounded-full blur-[60px] -z-10"></div>
                    </motion.div>

                    {/* Card 3: Legal-First - Center/Left & Even Lower to tuck */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="md:col-span-5 md:col-start-3 md:-mt-12 bg-white/60 backdrop-blur-xl p-10 rounded-[3rem] shadow-xl hover:bg-white transition-colors border-l-8 border-emerald-500 border-t border-r border-b border-t-white/40 border-r-white/40 border-b-white/40 z-30 relative"
                    >
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-2xl font-display font-bold mb-4 text-bv-primary">Legal-First Web3</h3>
                        <p className="text-bv-secondary leading-relaxed">Regulatory intelligence meets DeFi architecture. Building compliant, lasting systems.</p>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default IdentitySection;
