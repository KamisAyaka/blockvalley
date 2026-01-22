import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const ValleyCastSection = () => {
    return (
        <section id="valleycast" className="py-24 bg-black text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-red-500 font-mono text-sm tracking-widest uppercase">Live on Air</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-none tracking-tight">
                            Valley<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Cast</span>
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Not just a podcast. BV's global influence engine. We decode AI, Web3, Global Macro shifts, and the bridges between East & West.
                        </p>

                        <div className="space-y-4 mb-10">
                            {['AI x Web3 Narratives', 'RWA Deep Dives', 'Founder Mental Models'].map((tag, i) => (
                                <div key={i} className="flex items-center space-x-4">
                                    <ArrowRight className="text-pink-500 w-5 h-5" />
                                    <span className="text-lg font-medium">{tag}</span>
                                </div>
                            ))}
                        </div>

                        <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center interactive-hover">
                            <Play className="w-5 h-5 mr-3 fill-current" /> Listen Now
                        </button>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-1 border border-gray-700 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 interactive-hover">
                            {/* Replace the dynamic sound-wave placeholder with the VALLEYCAST image from media/public */}
                            <div className="bg-black rounded-2xl overflow-hidden aspect-video relative flex items-center justify-center group">
                                {/* ValleyCast: static poster/image (no play overlay) */}
                                <img src="/VALLEYCAST8AM2.png" alt="ValleyCast Latest Episode" className="w-full h-full object-cover object-right" />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-xl font-bold">Latest Episode: The Cognition Network</h3>
                                    <span className="text-gray-400 text-sm">42:15</span>
                                </div>
                                <p className="text-gray-400 text-sm">Exploring how AI agents and human operators merge to form new intelligence nodes.</p>
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gray-800 rounded-full -z-0"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-gray-900 rounded-full -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValleyCastSection;
