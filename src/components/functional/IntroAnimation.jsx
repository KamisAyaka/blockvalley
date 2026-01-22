import React, { useState, useEffect } from 'react';
// Note: phrases are now passed in or imported. Let's import them to be self-contained or pass as props.
// The original code defined phrases inside. For better reusability, I'll import them from data.
import { phrases } from '@/data';

const IntroAnimation = ({ onComplete }) => {
    const [textIndex, setTextIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Rotate text every 2.5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % phrases.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const handleClick = () => {
        setIsExiting(true);
        // Wait for animation (zoom effect) to finish before unmounting
        setTimeout(() => {
            onComplete();
        }, 1200);
    };

    return (
        <div
            className={`fixed inset-0 z-[10000] flex items-center justify-center bg-white cursor-pointer overflow-hidden transition-all duration-[1200ms] ease-[cubic-bezier(0.7,0,0.3,1)]
        ${isExiting ? 'opacity-0 scale-[5] pointer-events-none' : 'opacity-100 scale-100'}
      `}
            onClick={handleClick}
        >
            {/* Background Subtle Grid */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            <div className="relative w-full h-full flex items-center justify-center">

                {/* ROTATING LOGO STRUCTURE */}
                <div
                    className={`relative w-[60vmin] h-[60vmin] transition-all duration-700 ease-out ${isHovering ? 'scale-110' : 'scale-100'}`}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <div className={`absolute inset-0 w-full h-full animate-spin-slow ${isExiting ? 'animate-spin-fast' : ''}`}>

                        {/* Pink Lobe */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[60%] origin-bottom transition-all duration-500"
                            style={{ transform: `rotate(0deg) translateY(${isHovering ? '-10%' : '0'})` }}>
                            <div className="w-full h-full rounded-full bg-gradient-to-b from-pink-500 to-pink-300 mix-blend-multiply opacity-80 blur-xl"></div>
                        </div>

                        {/* Blue Lobe */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[60%] origin-bottom transition-all duration-500"
                            style={{ transform: `rotate(120deg) translateY(${isHovering ? '-10%' : '0'})` }}>
                            <div className="w-full h-full rounded-full bg-gradient-to-b from-blue-500 to-blue-300 mix-blend-multiply opacity-80 blur-xl"></div>
                        </div>

                        {/* Green Lobe */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[60%] origin-bottom transition-all duration-500"
                            style={{ transform: `rotate(240deg) translateY(${isHovering ? '-10%' : '0'})` }}>
                            <div className="w-full h-full rounded-full bg-gradient-to-b from-green-500 to-green-300 mix-blend-multiply opacity-80 blur-xl"></div>
                        </div>

                    </div>

                    {/* Inner White Core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-white rounded-full blur-xl"></div>
                </div>

                {/* DIGITAL TEXT OVERLAY */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none">
                    {phrases.map((phrase, idx) => (
                        <h2
                            key={idx}
                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl font-bold tracking-tighter uppercase transition-all duration-1000 transform whitespace-nowrap
                ${idx === textIndex ? 'opacity-20 blur-0 scale-100' : 'opacity-0 blur-md scale-90'}
              `}
                            style={{ color: '#111' }}
                        >
                            {phrase}
                        </h2>
                    ))}
                </div>

                {/* TRENDY INTERACTIVE BUTTON */}
                <div
                    className="absolute bottom-20 left-1/2 -translate-x-1/2 group"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <button className="relative px-8 py-3 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm text-gray-900 font-mono text-xs uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 group-hover:tracking-[0.3em] group-hover:border-transparent hover:shadow-xl">
                        <span className="relative z-10 group-hover:text-white transition-colors duration-500">Enter Valley</span>
                        {/* Hover Fill Effect */}
                        <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></div>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default IntroAnimation;
