
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import JellyButton from '@/components/ui/JellyButton';

const ValleyCastSection = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section id="valleycast" className="py-32 bg-bv-primary text-white relative overflow-hidden">

            {/* Dynamic Background Text Texture - Reduced opacity for subtle effect */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
                <motion.div style={{ x }} className="whitespace-nowrap text-[20vw] font-display font-black leading-none text-white uppercase">
                    ValleyCast ValleyCast ValleyCast ValleyCast
                </motion.div>
                <motion.div style={{ x: useTransform(scrollYProgress, [0, 1], [-200, 0]) }} className="whitespace-nowrap text-[20vw] font-display font-black leading-none text-white uppercase mt-10">
                    Listen Now Listen Now Listen Now
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Content */}
                    <div className="lg:w-1/2">
                        <div className="flex items-center space-x-3 mb-8">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bv-cta opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-bv-cta"></span>
                            </span>
                            <span className="text-bv-cta font-mono text-sm tracking-widest uppercase">Live on Air</span>
                        </div>

                        <h2 className="text-6xl md:text-8xl font-display font-black mb-8 leading-none tracking-tighter">
                            VALLEY
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bv-cta to-purple-500 block">CAST.</span>
                        </h2>

                        <p className="text-2xl text-gray-300 mb-10 leading-relaxed font-light">
                            Not just a podcast. <strong className="text-white font-medium">BV&apos;s global influence engine.</strong> <br />
                            Decoding AI, Web3, and the bridges between East & West.
                        </p>

                        <div className="space-y-4 mb-12">
                            {['AI x Web3 Narratives', 'RWA Deep Dives', 'Founder Mental Models'].map((tag, i) => (
                                <div key={i} className="flex items-center space-x-4 group cursor-default">
                                    <ArrowRight className="text-bv-cta w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                    <span className="text-xl font-medium text-gray-200 group-hover:text-white transition-colors">{tag}</span>
                                </div>
                            ))}
                        </div>

                        <JellyButton className="px-8 py-4 bg-white text-bv-primary rounded-full font-bold text-lg hover:bg-white/90 shadow-lg shadow-white/10" icon={Play}>
                            Listen Now
                        </JellyButton>
                    </div>

                    {/* Player Visual - Deep Glassmorphism */}
                    <div className="lg:w-1/2 relative w-full">
                        <motion.div
                            whileHover={{ scale: 1.02, rotate: -1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative z-10 bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-3 border border-white/10 shadow-2xl shadow-black/50"
                        >
                            <div className="bg-black/50 rounded-[2rem] overflow-hidden aspect-video relative group cursor-pointer">
                                <img src="/VALLEYCAST8AM2.png" alt="ValleyCast" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                                <div className="absolute inset-0 bg-gradient-to-t from-bv-primary/80 to-transparent"></div>

                                {/* Play Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-display font-bold text-white mb-2">The Cognition Network</h3>
                                        <p className="text-gray-400 font-sans">Ep. 42 • Featuring Zoe & Aaron</p>
                                    </div>
                                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-300">42:15</span>
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full h-1 bg-white/10 rounded-full mt-4 overflow-hidden">
                                    <div className="w-1/3 h-full bg-gradient-to-r from-bv-cta to-purple-500"></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Background Glows */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-r from-bv-cta/30 to-purple-600/30 blur-[100px] opacity-40 -z-10 rounded-full animate-pulse-slow"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ValleyCastSection;
