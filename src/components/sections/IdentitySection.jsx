import React from 'react';
import { Layers, Mic } from 'lucide-react';

const IdentitySection = () => {
    return (
        <section id="identity" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">The Block Valley Identity</h2>
                    <p className="text-xl text-gray-600">
                        A Global Venture Studio focused on building, scaling, and institutionalizing the next generation of digital economies.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-blue-500 hover:-translate-y-2 transition-transform duration-300 interactive-hover">
                        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                            <Layers className="text-blue-600 w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Venture Studio</h3>
                        <p className="text-gray-600">Architecting new financial and technological systems from the ground up.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-pink-500 hover:-translate-y-2 transition-transform duration-300 interactive-hover">
                        <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                            <Mic className="text-pink-600 w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Influence Engine</h3>
                        <p className="text-gray-600">Enabling global influence through media, community, and powerful narrative construction.</p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-green-500 hover:-translate-y-2 transition-transform duration-300 interactive-hover">
                        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <Layers className="text-green-600 w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Legal-First Web3</h3>
                        <p className="text-gray-600">Regulatory intelligence meets DeFi architecture. Building compliant, lasting systems.</p>
                    </div>
                </div>

                <div className="mt-20 bg-black text-white rounded-3xl p-10 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>

                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="flex-1">
                            <h3 className="text-3xl font-bold mb-4">Explorers & Operators</h3>
                            <p className="text-gray-300 text-lg">
                                We need both. <span className="text-white font-bold">Explorers</span> open new frontiers with curiosity and insight.
                                <span className="text-white font-bold"> Operators</span> build lasting systems with precision and risk control.
                            </p>
                        </div>
                        <div className="flex items-center space-x-4 text-2xl font-bold opacity-80">
                            <span>Dreamers</span>
                            <span className="text-pink-500">×</span>
                            <span>Builders</span>
                            <span className="text-blue-500">×</span>
                            <span>Executors</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IdentitySection;
