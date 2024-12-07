import React from 'react';
import { motion } from 'framer-motion';
import { 
    ArrowTrendingUpIcon, 
    ChartBarIcon, 
    CubeTransparentIcon,
    SparklesIcon
} from '@heroicons/react/24/outline';

const IntroAnimation: React.FC = () => {
    return (
        <section id="intro" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-800 to-purple-900 relative overflow-hidden">
            {/* Circular Background Animation */}
            <motion.div
                className="absolute inset-0 opacity-20"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            >
                <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
                    <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="1" fill="none" />
                    <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="1" fill="none" />
                </svg>
            </motion.div>

            {/* Floating Icons Background */}
            <div className="absolute inset-0 opacity-10">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        initial={{ 
                            x: Math.random() * window.innerWidth, 
                            y: Math.random() * window.innerHeight 
                        }}
                        animate={{ 
                            x: Math.random() * window.innerWidth, 
                            y: Math.random() * window.innerHeight,
                            rotate: 360
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        {i % 3 === 0 && <ChartBarIcon className="w-16 h-16" />}
                        {i % 3 === 1 && <CubeTransparentIcon className="w-16 h-16" />}
                        {i % 3 === 2 && <ArrowTrendingUpIcon className="w-16 h-16" />}
                    </motion.div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <div className="flex items-center justify-center mb-6">
                        <SparklesIcon className="w-12 h-12 text-green-400 animate-pulse" />
                    </div>
                    <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 leading-[80px]">
                        Embark on a New Trading Journey
                    </h1>
                    <motion.p 
                        className="text-2xl mb-8 text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Unified. Efficient. Expert.
                    </motion.p>
                    
                    {/* CTA Buttons */}
                    <div className="flex gap-4 justify-center">
                        <motion.button 
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 shadow-lg hover:shadow-green-500/50"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowTrendingUpIcon className="w-5 h-5" />
                            Begin Trading
                        </motion.button>
                        
                        <motion.button 
                            className="border-2 border-white hover:border-green-500 text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ChartBarIcon className="w-5 h-5" />
                            Learn More
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Wave Effect */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
                    <path 
                        fill="#1F2937" 
                        fillOpacity="1" 
                        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default IntroAnimation;
