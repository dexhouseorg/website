import React from 'react';
import { motion } from 'framer-motion';
import { CubeTransparentIcon } from '@heroicons/react/24/outline';

interface LogoProps {
    animated?: boolean;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ animated = false, className = '', size = 'md' }) => {
    const sizeClasses = {
        sm: 'h-8',
        md: 'h-12',
        lg: 'h-16'
    };

    const logoContent = (
        <div className={`flex items-center gap-2 ${className}`}>
            {/* Icon Part */}
            <div className="relative">
                {/* Background hexagon */}
                <svg 
                    className={`${sizeClasses[size]} aspect-square text-green-500`} 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                >
                    <path d="M12 2L2 7.5L2 16.5L12 22L22 16.5L22 7.5L12 2Z" />
                </svg>
                
                {/* Cube icon overlay */}
                <CubeTransparentIcon 
                    className={`absolute inset-0 ${sizeClasses[size]} p-1 text-white`} 
                />
            </div>

            {/* Text Part */}
            <div className="flex flex-col items-start">
                <span className={`font-bold ${
                    size === 'sm' ? 'text-xl' : 
                    size === 'md' ? 'text-2xl' : 
                    'text-3xl'
                } bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent`}>
                    DEX HOUSE
                </span>
                <span className={`text-gray-400 ${
                    size === 'sm' ? 'text-xs' : 
                    size === 'md' ? 'text-sm' : 
                    'text-base'
                }`}>
                    for Trader
                </span>
            </div>
        </div>
    );

    if (animated) {
        return (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                {logoContent}
            </motion.div>
        );
    }

    return logoContent;
};

export default Logo; 