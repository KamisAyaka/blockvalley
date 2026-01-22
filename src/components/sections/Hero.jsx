import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
            {/* Background Ribbons */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,20 Q25,50 50,20 T100,50" fill="none" stroke="#3B82F6" strokeWidth="0.5" />
                    <path d="M0,40 Q25,10 50,40 T100,10" fill="none" stroke="#EC4899" strokeWidth="0.5" />
                    <path d="M0,60 Q25,90 50,60 T100,90" fill="none" stroke="#10B981" strokeWidth="0.5" />
                    <path d="M0,80 Q40,40 60,80 T100,30" fill="none" stroke="#EF4444" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gray-100 text-gray-800 font-semibold text-sm tracking-wide border border-gray-200">
                        GLOBAL VENTURE STUDIO
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 mb-6">
                        Bridging Worlds. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-green-500">
                            Building Futures.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                        We operate as a bridge between systems, cultures, and eras.
                        Combining <span className="font-semibold text-gray-800">Capital × Technology × Narrative × Humanity</span> to architect the next generation of digital economies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-transform transform hover:scale-105 flex items-center justify-center interactive-hover">
                            Our Vision <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 bg-white text-black border-2 border-black rounded-full font-bold hover:bg-gray-50 transition-transform transform hover:scale-105 interactive-hover">
                            Explore Services
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-700 bg-gray-100 relative">
                        {/* Hero: autoplaying video (muted, loop) with poster fallback */}
                        <video poster="/BlockValley_Logo_FullText.png" autoPlay muted loop playsInline className="w-full h-full object-cover relative z-10">
                            <source src="/IMG_4443.MP4" type="video/mp4" />
                            {/* Fallback image */}
                            <img src="/BlockValley_Logo_FullText.png" alt="Block Valley Banner" className="w-full h-full object-cover" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20"></div>
                    </div>

                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block animate-bounce-slow z-30">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                                <Globe size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-semibold">Hubs In</p>
                                <p className="text-sm font-bold">HK • SG • UAE • US</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
