import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = ['Identity', 'Philosophy', 'ValleyCast', 'Team', 'Contact'];

    const scrollTo = (id) => {
        setIsOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 pointer-events-none">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`pointer-events-auto transition-all duration-500 ease-out ${scrolled || isOpen ? 'w-[90%] md:w-[680px] bg-white/60 backdrop-blur-2xl border border-white/40 shadow-xl shadow-bv-primary/5' : 'w-full max-w-7xl bg-transparent'
                        } rounded-full px-2 py-2 flex items-center justify-between mx-auto md:px-3`}
                >
                    {/* Logo - Text or Icon */}
                    <div
                        className="pl-4 md:pl-6 cursor-pointer flex items-center gap-2 group"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <img src="/BlockValleyLogoCut.png" alt="Block Valley Logo" className="w-8 h-8 object-contain animate-spin-slow group-hover:scale-110 transition-transform duration-500" />
                        <span className={`font-display font-bold tracking-tight text-lg ml-2 overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out ${scrolled ? 'w-0 opacity-0' : 'w-auto opacity-100 text-bv-primary'}`}>
                            Block Valley
                        </span>
                    </div>

                    {/* Desktop Nav Pills */}
                    <div className="hidden md:flex items-center bg-bv-secondary/5 rounded-full p-1.5 gap-1 backdrop-blur-sm border border-white/20">
                        {menuItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                                className="px-5 py-2 rounded-full text-sm font-medium text-bv-secondary hover:text-bv-primary hover:bg-white/80 transition-all duration-300 relative group overflow-hidden"
                            >
                                <span className="relative z-10">{item}</span>
                                <span className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full shadow-sm"></span>
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg shadow-bv-primary/5 text-bv-primary border border-white/40"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </motion.button>
                </motion.nav>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-bv-primary/10 z-40 p-6 md:hidden border border-white/50"
                    >
                        <div className="flex flex-col space-y-2">
                            {menuItems.map((item, i) => (
                                <motion.button
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 + 0.1 }}
                                    onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                                    className="text-left py-4 px-4 text-xl font-display font-medium text-bv-secondary hover:text-bv-primary hover:bg-bv-secondary/5 rounded-xl transition-colors flex items-center justify-between group"
                                >
                                    {item}
                                    <span className="w-2 h-2 rounded-full bg-bv-cta opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
