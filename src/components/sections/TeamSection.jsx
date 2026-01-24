
import { motion } from 'framer-motion';
import { teamData } from '@/data';

const TeamSection = () => {
    return (
        <section id="team" className="py-32 bg-bv-background relative overflow-hidden">

            {/* Background Decor - Fluid Gradients */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bv-cta/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-display font-black mb-6 text-bv-primary tracking-tight"
                    >
                        THE ARCHITECTS
                    </motion.h2>
                    <p className="text-bv-secondary text-xl max-w-2xl mx-auto font-light">
                        A distributed network of explorers and operators.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamData.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-xl shadow-bv-primary/5 hover:shadow-2xl hover:bg-white/60 transition-all duration-300 group border border-white/50"
                        >
                            <div className={`h-2 w-full bg-gradient-to-r ${member.color} opacity-80`}></div>
                            <div className="p-8 flex flex-col items-center text-center">
                                <div className="mb-6 relative">
                                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} p-[2px] shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                                            <span className={`text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br ${member.color}`}>
                                                {member.name.charAt(0)}
                                            </span>
                                        </div>
                                    </div>
                                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 -z-10`}></div>
                                </div>

                                <h3 className="text-2xl font-display font-bold text-bv-primary mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-bv-cta group-hover:to-purple-500 transition-all duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-xs text-bv-secondary uppercase tracking-widest font-bold opacity-70">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
