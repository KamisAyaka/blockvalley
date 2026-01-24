
import { motion } from 'framer-motion';
import { philosophyBlocks } from '@/data';

const PhilosophySection = () => {
    return (
        <section id="philosophy" className="py-32 bg-bv-primary relative overflow-hidden min-h-screen flex flex-col justify-center">

            {/* Background: Subtle Grid Texture - Reduced opacity for cleaner look */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-bv-primary via-transparent to-bv-primary z-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-20">

                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-bv-cta via-blue-400 to-purple-500 animate-gradient-x">Core Philosophy</span>
                    </motion.h2>
                </div>

                {/* Desktop: Horizontal Accordion | Mobile: Vertical Stack */}
                <div className="flex flex-col md:flex-row h-auto md:h-[500px] gap-4">
                    {philosophyBlocks.map((item, index) => (
                        <AccordionBlock key={index} item={item} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

const AccordionBlock = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex-1 hover:flex-[3] transition-[flex] duration-500 ease-out flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 backdrop-blur-md"
        >
            {/* Hover Gradient Background (reveals on hover - full block color) */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${item.color} mix-blend-overlay`}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-60"></div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col p-8 z-10">

                {/* Vertical Text (Visible when collapsed on Desktop) */}
                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <span className="whitespace-nowrap -rotate-90 text-white/50 font-bold tracking-widest uppercase text-lg">{item.title}</span>
                </div>

                {/* Title & Description (Reveals) - Now at Top */}
                <div className="opacity-100 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-0 md:-translate-y-4 md:group-hover:translate-y-0">
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-[0.9] w-full tracking-tighter">{item.title}</h3>
                    <p className="text-gray-100 text-xl leading-relaxed font-medium">
                        {item.desc}
                    </p>
                </div>
            </div>

            {/* Selection Line */}
            <div className={`absolute bottom-0 left-0 h-1 w-full ${item.color} opacity-50 group-hover:opacity-100 transition-opacity`}></div>

        </motion.div>
    );
};

export default PhilosophySection;
