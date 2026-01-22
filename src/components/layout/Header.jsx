import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        setIsOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo Area */}
                <div className="flex items-center space-x-2 cursor-pointer interactive-hover" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img
                        src="/BlockValley_Logo_Dark.png"
                        alt="Block Valley"
                        className="h-10 md:h-12 object-contain"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    <span className="hidden text-2xl font-bold tracking-tighter" style={{ display: 'none' }}>BLOCK VALLEY</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8">
                    {['Identity', 'Philosophy', 'ValleyCast', 'Team', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                            className="text-gray-800 font-medium hover:text-pink-600 transition-colors relative group interactive-hover"
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-800 interactive-hover" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 px-6 flex flex-col space-y-4">
                    {['Identity', 'Philosophy', 'ValleyCast', 'Team', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                            className="text-left text-lg font-medium text-gray-800 py-2 border-b border-gray-100"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Header;
