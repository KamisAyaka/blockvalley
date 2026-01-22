import React, { useRef } from 'react';
import TennisBall from './TennisBall';
import { usePhysicsCard } from '@/hooks/usePhysicsCard';

// Interactive Card with "Racket Hit" Physics
const InteractiveCard = ({ item }) => {
    const cardRef = useRef(null);
    const ballRef = useRef(null);

    const { handleMouseEnter, handleMouseLeave, handleMouseMove } = usePhysicsCard(cardRef, ballRef);

    return (
        <div
            ref={cardRef}
            className={`${item.color} ${item.size} relative rounded-3xl p-8 text-white overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-h-[260px] flex flex-col justify-between interactive-hover`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-bl-full transform translate-x-10 -translate-y-10"></div>

            <div className="relative z-10 pointer-events-none">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                        {item.icon}
                    </div>

                    <div
                        ref={ballRef}
                        className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 will-change-transform pointer-events-auto"
                    >
                        <TennisBall
                            fillColor="#ffffff"
                            seamColor={item.accentColor}
                            size={70}
                        />
                    </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight drop-shadow-md">{item.title}</h3>
                <p className="text-white/95 font-medium text-lg leading-relaxed opacity-90 group-hover:opacity-100">
                    {item.desc}
                </p>
            </div>
        </div>
    );
};

export default InteractiveCard;
