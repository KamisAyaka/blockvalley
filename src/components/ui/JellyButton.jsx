
import { motion } from 'framer-motion';

const JellyButton = ({ children, className, onClick, icon: Icon }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={onClick}
            className={`relative overflow-hidden group ${className}`}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
                {Icon && <Icon className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
            </span>
            {/* Liquid background effect could be added here if needed, but for now we rely on CSS classes passed in */}
        </motion.button>
    );
};

export default JellyButton;
