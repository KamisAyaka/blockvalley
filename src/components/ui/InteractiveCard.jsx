import { useRef } from 'react';
import TennisBall from './TennisBall';
import { usePhysicsCard } from '@/hooks/usePhysicsCard';

const InteractiveCard = ({ item }) => {
    const cardRef = useRef(null);
    const ballRef = useRef(null); // Create ref for the ball

    // Pass both refs to the hook. Hook handles the animation via direct DOM manipulation.
    const { handleMouseMove, handleMouseEnter, handleMouseLeave } = usePhysicsCard(cardRef, ballRef);

    return (
        <div
            ref={cardRef}
            className="relative w-full h-80 bg-white/5 backdrop-blur-lg rounded-[2.5rem] border border-white/10 overflow-hidden group hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 select-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Hover Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-bv-green/10 via-bv-blue/10 to-bv-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

            {/* Physics Ball - Now a Glowing Orb */}
            <div
                ref={ballRef}
                className="absolute w-32 h-32 pointer-events-none z-10 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                {/* Custom styling via TennisBall props to look like an Energy Orb */}
                <TennisBall
                    fillColor="#3B82F6"
                    seamColor="transparent"
                    size={120}
                    className="blur-xl" // Extreme blur for orb effect
                />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-10 flex flex-col justify-between z-20 pointer-events-none">

                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white border border-white/5 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                    <div className="group-hover:text-bv-green transition-colors duration-300">
                        {item.icon}
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300 tracking-tight">{item.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {item.desc}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InteractiveCard;
