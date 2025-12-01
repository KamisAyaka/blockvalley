import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Globe, Cpu, Users, Zap, Layers, 
  ArrowRight, Play, Mic, ChevronDown, 
  Linkedin, Twitter, Mail
} from 'lucide-react';

// --- 1. CUSTOM CURSOR COMPONENT (Instant, Crisp, Branded) ---
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      // Direct, instant movement using transform for performance (No Lag)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      // Check clickable elements for hover state
      const target = e.target;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('interactive-hover');
      
      setIsHovering(!!isInteractive);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          body { cursor: none; }
          a, button, [role="button"] { cursor: none; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>

      {/* Main Cursor Container - Follows Mouse Instantly */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center will-change-transform"
        style={{ transform: 'translate(-50%, -50%)' }} // Initial centering
      >
        {/* The Gradient Ring */}
        <div 
          className={`relative flex items-center justify-center rounded-full transition-all duration-200 ease-out
            ${isHovering ? 'w-16 h-16' : 'w-10 h-10'}
            ${isClicking ? 'scale-90' : 'scale-100'}
          `}
        >
          {/* Animated Gradient Border - Sharp, No Blur */}
          <div className="absolute inset-0 rounded-full p-[2px] animate-spin-slow" 
               style={{ 
                 background: 'conic-gradient(from 0deg, #EC4899, #3B82F6, #10B981, #EC4899)', 
                 mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                 maskComposite: 'exclude',
                 WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                 WebkitMaskComposite: 'xor',
                 borderRadius: '50%'
               }} 
          />
        </div>

        {/* The Center Dot - Stays sharp and centered */}
        <div 
          className={`absolute w-2 h-2 bg-pink-500 rounded-full transition-all duration-200 
            ${isHovering ? 'bg-blue-500 scale-125' : ''}
          `}
        />
      </div>
    </>
  );
};

// --- 2. PHYSICS ASSETS (Ball & Card) ---

// Custom "Digital" Tennis Ball SVG
const TennisBall = ({ 
  fillColor = "#ffffff", 
  seamColor = "#000000", 
  size = 60, 
  className = "", 
  style = {} 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    className={`drop-shadow-2xl ${className}`} 
    style={style}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="ballShine" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.9"/>
        <stop offset="1" stopColor="white" stopOpacity="0.1"/>
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill={fillColor} />
    <circle cx="50" cy="50" r="48" fill="url(#ballShine)" opacity="0.3" />
    <path d="M2,50 C20,50 35,35 35,2" stroke={seamColor} strokeWidth="6" strokeLinecap="round" />
    <path d="M65,2 C65,35 80,50 98,50" stroke={seamColor} strokeWidth="6" strokeLinecap="round" />
    <path d="M98,50 C80,50 65,65 65,98" stroke={seamColor} strokeWidth="6" strokeLinecap="round" />
    <path d="M35,98 C35,65 20,50 2,50" stroke={seamColor} strokeWidth="6" strokeLinecap="round" />
  </svg>
);

// Interactive Card with "Racket Hit" Physics
const InteractiveCard = ({ item }) => {
  const cardRef = useRef(null);
  const ballRef = useRef(null);
  const requestRef = useRef(null);
  const isHovered = useRef(false);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const prevMousePos = useRef({ x: -1000, y: -1000 });
  
  // Physics State
  const physics = useRef({
    pos: { x: 0, y: 0 },
    vel: { x: 0, y: 0 },
    angle: 0,          
    radius: 35,        // Half of 70px ball size
    friction: 0.99,    // Light friction for fluid drift
    restitution: 0.9   // Bounciness
  });

  const handleMouseEnter = () => {
    isHovered.current = true;
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      physics.current.pos = { x: rect.width / 2, y: rect.height / 2 };
      
      // Spawn Logic: Slow Float
      const speed = 1.5;
      const angle = Math.random() * Math.PI * 2;
      physics.current.vel = { 
        x: Math.cos(angle) * speed, 
        y: Math.sin(angle) * speed 
      };
    }
    if (!requestRef.current) {
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    mousePos.current = { x: -1000, y: -1000 };
  };

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      prevMousePos.current = { ...mousePos.current };
      mousePos.current = { 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      };
    }
  };

  const animate = () => {
    if (!cardRef.current || !ballRef.current) return;
    
    if (!isHovered.current) {
        requestRef.current = null;
        return; 
    }

    const rect = cardRef.current.getBoundingClientRect();
    const p = physics.current;

    // 1. Update Position
    p.pos.x += p.vel.x;
    p.pos.y += p.vel.y;

    // 2. Rotation (based on speed)
    const speed = Math.sqrt(p.vel.x * p.vel.x + p.vel.y * p.vel.y);
    p.angle += speed * 1.5; 

    // 3. Wall Collision
    if (p.pos.x - p.radius < 0) {
      p.pos.x = p.radius;
      p.vel.x *= -1 * p.restitution;
    } else if (p.pos.x + p.radius > rect.width) {
      p.pos.x = rect.width - p.radius;
      p.vel.x *= -1 * p.restitution;
    }

    if (p.pos.y - p.radius < 0) {
      p.pos.y = p.radius;
      p.vel.y *= -1 * p.restitution;
    } else if (p.pos.y + p.radius > rect.height) {
      p.pos.y = rect.height - p.radius;
      p.vel.y *= -1 * p.restitution;
    }

    // 4. "RACKET HIT" COLLISION logic
    const dx = p.pos.x - mousePos.current.x;
    const dy = p.pos.y - mousePos.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    // Hit radius = ball radius + buffer
    const hitRadius = p.radius + 15; 

    if (dist < hitRadius) {
      let nx = dx / dist;
      let ny = dy / dist;
      if (dist === 0) { nx = 1; ny = 0; }

      // Strong Impulse Force
      const hitStrength = 18; 
      
      p.vel.x += nx * hitStrength;
      p.vel.y += ny * hitStrength;
      
      // Prevent sticking
      p.pos.x += nx * 2;
      p.pos.y += ny * 2;
    }

    // 5. Friction & Speed Cap
    p.vel.x *= p.friction;
    p.vel.y *= p.friction;
    
    // Maintain Minimum Drift (Never fully stop)
    const minSpeed = 1.0;
    const currentSpeed = Math.sqrt(p.vel.x * p.vel.x + p.vel.y * p.vel.y);
    if (currentSpeed < minSpeed && currentSpeed > 0.01) {
       const scale = minSpeed / currentSpeed;
       p.vel.x *= scale;
       p.vel.y *= scale;
    }
    
    const maxSpeed = 25;
    if (currentSpeed > maxSpeed) {
       const scale = maxSpeed / currentSpeed;
       p.vel.x *= scale;
       p.vel.y *= scale;
    }

    // 6. Render
    const renderX = p.pos.x - p.radius;
    const renderY = p.pos.y - p.radius;
    ballRef.current.style.transform = `translate3d(${renderX}px, ${renderY}px, 0) rotate(${p.angle}deg)`;

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

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

// --- 3. DATA & CONTENT ---

const philosophyBlocks = [
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

const teamData = [
  { name: "Ms. Valley (Zoe)", role: "Founder & Vision CEO", color: "from-pink-500 to-purple-500" },
  { name: "Aaron", role: "Co-Founder & Architect", color: "from-blue-500 to-cyan-500" },
  { name: "Kenji", role: "COO & North America Lead", color: "from-green-500 to-emerald-500" },
  { name: "Pete", role: "CGO & Europe Lead", color: "from-orange-500 to-red-500" },
  { name: "Donald", role: "CTO / DeFi Architect", color: "from-indigo-500 to-blue-600" },
  { name: "Lu Di", role: "Chief Legal Officer", color: "from-gray-600 to-gray-800" },
  { name: "Van", role: "Chief Art Officer", color: "from-pink-400 to-rose-400" },
  { name: "Patrick", role: "Product Ops", color: "from-teal-400 to-teal-600" },
];

// --- 4. SITE SECTIONS ---

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

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Ribbons */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,20 Q25,50 50,20 T100,50" fill="none" stroke="#3B82F6" strokeWidth="0.5" />
          <path d="M0,40 Q25,10 50,40 T100,10" fill="none" stroke="#EC4899" strokeWidth="0.5" />
          <path d="M0,60 Q25,90 50,60 T100,90" fill="none" stroke="#10B981" strokeWidth="0.5" />
          <path d="M0,80 Q40,40 60,80 T100,30" fill="none" stroke="#EF4444" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gray-100 text-gray-800 font-semibold text-sm tracking-wide border border-gray-200">
            GLOBAL VENTURE STUDIO
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900 mb-6">
            Bridging Worlds. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-green-500">
              Building Futures.
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
            We operate as a bridge between systems, cultures, and eras. 
            Combining <span className="font-semibold text-gray-800">Capital × Technology × Narrative × Humanity</span> to architect the next generation of digital economies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-transform transform hover:scale-105 flex items-center justify-center interactive-hover">
              Our Vision <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white text-black border-2 border-black rounded-full font-bold hover:bg-gray-50 transition-transform transform hover:scale-105 interactive-hover">
              Explore Services
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-700 bg-gray-100 relative">
            {/* Hero: autoplaying video (muted, loop) with poster fallback */}
            <video poster="/BlockValley_Logo_FullText.png" autoPlay muted loop playsInline className="w-full h-full object-cover relative z-10">
              <source src="/BlockValleyVideo.mp4" type="video/mp4" />
              {/* Fallback image */}
              <img src="/BlockValley_Logo_FullText.png" alt="Block Valley Banner" className="w-full h-full object-cover" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20"></div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden md:block animate-bounce-slow z-30">
             <div className="flex items-center space-x-3">
               <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                 <Globe size={20} />
               </div>
               <div>
                 <p className="text-xs text-gray-500 uppercase font-semibold">Hubs In</p>
                 <p className="text-sm font-bold">HK • SG • UAE • US</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IdentitySection = () => {
  return (
    <section id="identity" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Block Valley Identity</h2>
          <p className="text-xl text-gray-600">
            A Global Venture Studio focused on building, scaling, and institutionalizing the next generation of digital economies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-blue-500 hover:-translate-y-2 transition-transform duration-300 interactive-hover">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Layers className="text-blue-600 w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Venture Studio</h3>
            <p className="text-gray-600">Architecting new financial and technological systems from the ground up.</p>
          </div>

           <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-pink-500 hover:-translate-y-2 transition-transform duration-300 interactive-hover">
            <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-6">
              <Mic className="text-pink-600 w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Influence Engine</h3>
            <p className="text-gray-600">Enabling global influence through media, community, and powerful narrative construction.</p>
          </div>

           <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-green-500 hover:-translate-y-2 transition-transform duration-300 interactive-hover">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <Layers className="text-green-600 w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Legal-First Web3</h3>
            <p className="text-gray-600">Regulatory intelligence meets DeFi architecture. Building compliant, lasting systems.</p>
          </div>
        </div>

        <div className="mt-20 bg-black text-white rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4">Explorers & Operators</h3>
              <p className="text-gray-300 text-lg">
                We need both. <span className="text-white font-bold">Explorers</span> open new frontiers with curiosity and insight. 
                <span className="text-white font-bold"> Operators</span> build lasting systems with precision and risk control.
              </p>
            </div>
            <div className="flex items-center space-x-4 text-2xl font-bold opacity-80">
              <span>Dreamers</span>
              <span className="text-pink-500">×</span>
              <span>Builders</span>
              <span className="text-blue-500">×</span>
              <span>Executors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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

const ValleyCastSection = () => {
  return (
    <section id="valleycast" className="py-24 bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-500 font-mono text-sm tracking-widest uppercase">Live on Air</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-none tracking-tight">
              Valley<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Cast</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Not just a podcast. BV's global influence engine. We decode AI, Web3, Global Macro shifts, and the bridges between East & West.
            </p>
            
            <div className="space-y-4 mb-10">
              {['AI x Web3 Narratives', 'RWA Deep Dives', 'Founder Mental Models'].map((tag, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <ArrowRight className="text-pink-500 w-5 h-5" />
                  <span className="text-lg font-medium">{tag}</span>
                </div>
              ))}
            </div>

            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center interactive-hover">
              <Play className="w-5 h-5 mr-3 fill-current" /> Listen Now
            </button>
          </div>

          <div className="lg:w-1/2 relative">
        <div className="relative z-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-1 border border-gray-700 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 interactive-hover">
          {/* Replace the dynamic sound-wave placeholder with the VALLEYCAST image from media/public */}
        <div className="bg-black rounded-2xl overflow-hidden aspect-video relative flex items-center justify-center group">
            {/* ValleyCast: static poster/image (no play overlay) */}
            <img src="/VALLEYCAST8AM2.png" alt="ValleyCast Latest Episode" className="w-full h-full object-cover object-right" />
          </div>
               <div className="p-6">
                 <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">Latest Episode: The Cognition Network</h3>
                    <span className="text-gray-400 text-sm">42:15</span>
                 </div>
                 <p className="text-gray-400 text-sm">Exploring how AI agents and human operators merge to form new intelligence nodes.</p>
               </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gray-800 rounded-full -z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-gray-900 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
                <span>North America <br/><span className="text-sm text-gray-400">Led by Kenji</span></span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 bg-pink-500 rounded-full mr-3"></span>
                <span>Asia & Middle East <br/><span className="text-sm text-gray-400">Led by Zoe</span></span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 bg-green-500 rounded-full mr-3"></span>
                <span>Europe <br/><span className="text-sm text-gray-400">Led by Pete</span></span>
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

const App = () => {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-pink-100 selection:text-pink-900">
      <CustomCursor />
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(5%); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
        @keyframes sound-wave {
          0%, 100% { height: 10%; }
          50% { height: 100%; }
        }
        .animate-sound-wave {
          animation: sound-wave 1s infinite ease-in-out;
        }
      `}</style>
      <Header />
      <main>
        <Hero />
        <IdentitySection />
        <PhilosophySection />
        <ValleyCastSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;

