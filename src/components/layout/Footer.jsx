
import { Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer id="contact" className="bg-white/80 backdrop-blur-lg pt-24 pb-12 border-t border-white/20 relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <img src="/BlockValley_Logo_Dark.png" alt="Logo" className="h-10 w-auto mb-8 opacity-90" />
                        <p className="text-xl text-bv-secondary font-medium mb-8 max-w-md leading-relaxed">
                            Combining capital, technology, narrative, and humanity to build the frontier.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { Icon: Twitter, bg: 'bg-black', hover: 'hover:bg-gray-800', href: 'https://x.com/TheBlockValley' },
                                { Icon: Mail, bg: 'bg-bv-cta', hover: 'hover:bg-bv-cta/90', href: 'mailto:hello@blockvalley.io' }
                            ].map(({ Icon, bg, hover, href }, i) => (
                                <motion.a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-12 h-12 rounded-2xl ${bg} text-white flex items-center justify-center ${hover} transition-colors shadow-lg shadow-gray-200 cursor-pointer`}
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-bv-primary mb-6 text-lg">Global Hubs</h4>
                        <ul className="space-y-6 text-bv-secondary">
                            <li className="flex items-start group">
                                <span className="w-2 h-2 mt-2 bg-bv-cta rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                                <div>
                                    <span className="font-medium block mb-1">North America</span>
                                    <span className="text-sm text-gray-400 font-normal">Led by Kenji</span>
                                </div>
                            </li>
                            <li className="flex items-start group">
                                <span className="w-2 h-2 mt-2 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                                <div>
                                    <span className="font-medium block mb-1">Asia & Middle East</span>
                                    <span className="text-sm text-gray-400 font-normal">Led by Zoe</span>
                                </div>
                            </li>
                            <li className="flex items-start group">
                                <span className="w-2 h-2 mt-2 bg-emerald-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                                <div>
                                    <span className="font-medium block mb-1">Europe</span>
                                    <span className="text-sm text-gray-400 font-normal">Led by Pete</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <div>
                            <h4 className="font-display font-bold text-bv-primary mb-6 text-lg">Quick Links</h4>
                            <ul className="space-y-4 text-bv-secondary font-medium">
                                {[
                                    { name: 'Work With Us', href: '#' },
                                    { name: 'ValleyCast Episodes', href: '#' },
                                    { name: 'RWA Research', href: 'https://mp.weixin.qq.com/s/1TFJitCvjV6i99JKm5kHwA' },
                                    { name: 'Privacy Policy', href: '#' }
                                ].map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} target={link.href.startsWith('http') ? "_blank" : "_self"} rel={link.href.startsWith('http') ? "noopener noreferrer" : ""} className="hover:text-bv-cta transition-colors flex items-center group">
                                            <span className="w-0 h-[1px] bg-bv-cta mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
                    <p className="text-gray-400 text-sm">© 2025 Block Valley Labs. All rights reserved.</p>
                    <p className="text-gray-400 text-sm mt-2 md:mt-0 font-mono tracking-wider opacity-60">DESIGNED FOR THE FUTURE</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
