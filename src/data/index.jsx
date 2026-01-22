import {
    Zap, Cpu, Users, Globe, Layers, Play
} from 'lucide-react';

export const phrases = [
    "Web3 Accelerator",
    "Real World Assets",
    "Cryptocurrency",
    "DeFi Architecture",
    "Global Influence",
    "Future Economies",
    "Cognition Network"
];

export const philosophyBlocks = [
    {
        title: "Self-Heating Individuals",
        icon: <Zap className="w-8 h-8 text-white" />,
        desc: "We generate momentum internally—curiosity, execution energy, and insight—without external forcing.",
        color: "bg-gradient-to-br from-pink-500 to-rose-600",
        accentColor: "#db2777", // Darker pink for seams
        size: "col-span-1 md:col-span-2"
    },
    {
        title: "Cognition Network",
        icon: <Cpu className="w-8 h-8 text-white" />,
        desc: "Collective intelligence formed when experts, operators, creators, and AI agents collaborate.",
        color: "bg-gradient-to-br from-blue-500 to-indigo-600",
        accentColor: "#2563eb", // Blue for seams
        size: "col-span-1"
    },
    {
        title: "Tech x Humanity",
        icon: <Users className="w-8 h-8 text-white" />,
        desc: "Technology accelerates, not replaces, human spirit, meaning, creativity, and connection.",
        color: "bg-gradient-to-br from-green-500 to-emerald-600",
        accentColor: "#059669", // Green for seams
        size: "col-span-1"
    },
    {
        title: "Bridge Identity",
        icon: <Globe className="w-8 h-8 text-white" />,
        desc: "Connecting East & West, Traditional & Emerging, Capital & Tech, Business & Culture.",
        color: "bg-gradient-to-br from-purple-500 to-violet-600",
        accentColor: "#7c3aed", // Purple for seams
        size: "col-span-1 md:col-span-2"
    },
    {
        title: "Network, Not Stack",
        icon: <Layers className="w-8 h-8 text-white" />,
        desc: "Instead of silos, we operate as a distributed network with multiple intelligence nodes.",
        color: "bg-gradient-to-br from-orange-400 to-red-500",
        accentColor: "#ea580c", // Orange for seams
        size: "col-span-1"
    },
    {
        title: "Infinite Patience",
        icon: <Play className="w-8 h-8 text-white" />,
        desc: "AI agents create an environment where knowledge, iteration, and support are always available.",
        color: "bg-gradient-to-br from-cyan-500 to-blue-500",
        accentColor: "#0891b2", // Cyan for seams
        size: "col-span-1 md:col-span-2"
    }
];

export const teamData = [
    { name: "Ms. Valley (Zoe)", role: "Founder & Vision CEO", color: "from-pink-500 to-purple-500" },
    { name: "Aaron", role: "Co-Founder & Architect", color: "from-blue-500 to-cyan-500" },
    { name: "Kenji", role: "COO & North America Lead", color: "from-green-500 to-emerald-500" },
    { name: "Pete", role: "CGO & Europe Lead", color: "from-orange-500 to-red-500" },
    { name: "Donald", role: "CTO / DeFi Architect", color: "from-indigo-500 to-blue-600" },
    { name: "Lu Di", role: "Chief Legal Officer", color: "from-gray-600 to-gray-800" },
    { name: "Van", role: "Chief Art Officer", color: "from-pink-400 to-rose-400" },
    { name: "Patrick", role: "Product Ops", color: "from-teal-400 to-teal-600" },
];
