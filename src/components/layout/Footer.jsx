import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-white pt-24 pb-12 border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <img src="/BlockValley_Logo_Dark.png" alt="Logo" className="h-12 w-auto mb-6" />
                        <p className="text-xl text-gray-800 font-bold mb-6 max-w-md">
                            Combining capital, technology, narrative, and humanity to build the frontier.
                        </p>
                        <div className="flex space-x-4">
                            <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors interactive-hover">
                                <Twitter size={18} />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors interactive-hover">
                                <Linkedin size={18} />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600 transition-colors interactive-hover">
                                <Mail size={18} />
                            </button>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Global Hubs</h4>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-start">
                                <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full mr-3"></span>
                                <span>North America <br /><span className="text-sm text-gray-400">Led by Kenji</span></span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 mt-2 bg-pink-500 rounded-full mr-3"></span>
                                <span>Asia & Middle East <br /><span className="text-sm text-gray-400">Led by Zoe</span></span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></span>
                                <span>Europe <br /><span className="text-sm text-gray-400">Led by Pete</span></span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-gray-600">
                            <li><a href="#" className="hover:text-pink-600 transition-colors interactive-hover">Work With Us</a></li>
                            <li><a href="#" className="hover:text-pink-600 transition-colors interactive-hover">ValleyCast Episodes</a></li>
                            <li><a href="#" className="hover:text-pink-600 transition-colors interactive-hover">RWA Research</a></li>
                            <li><a href="#" className="hover:text-pink-600 transition-colors interactive-hover">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
                    <p className="text-gray-400 text-sm">© 2025 Block Valley Labs. All rights reserved.</p>
                    <p className="text-gray-400 text-sm mt-2 md:mt-0">Designed for the Future.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
