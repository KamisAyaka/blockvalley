import React from 'react';
import InteractiveCard from '../ui/InteractiveCard';
import { philosophyBlocks } from '@/data';

const PhilosophySection = () => {
    return (
        <section id="philosophy" className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-pink-600 font-bold tracking-wider uppercase mb-2 block">Our DNA</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900">Core Philosophy</h2>
                    <p className="text-gray-500 text-lg mt-4">Hover to spawn the node. Strike it with your cursor.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {philosophyBlocks.map((item, index) => (
                        <InteractiveCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PhilosophySection;
