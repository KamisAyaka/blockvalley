import React from 'react';
import { teamData } from '@/data';

const TeamSection = () => {
    return (
        <section id="team" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Leadership & Architects</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A distributed network of explorers and operators.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamData.map((member, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group interactive-hover">
                            <div className={`h-2 w-full bg-gradient-to-r ${member.color}`}></div>
                            <div className="p-6">
                                <div className="mb-4">
                                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-xl`}>
                                        {member.name.charAt(0)}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
