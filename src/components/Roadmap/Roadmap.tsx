import React from 'react';
import { motion } from 'framer-motion';

interface Milestone {
    phase: string;
    title: string;
    description: string;
    date: string;
}

const milestones: Milestone[] = [
    {
        phase: 'Phase 1: Launch',
        title: 'Initial Deployment',
        description: 'Deployment of Dex House platform integrating Uniswap V3 & PancakeSwap V3. User onboarding and feedback collection.',
        date: 'Q1 2024',
    },
    {
        phase: 'Phase 2: Enhancement',
        title: 'Design & Optimization',
        description: 'Introduction of an updated, user-friendly design. Optimization of swap functionalities for enhanced performance.',
        date: 'Q2 2024',
    },
    {
        phase: 'Phase 3: Expansion',
        title: 'DEX Integration',
        description: 'Integration of additional DEX smart contracts. Development of advanced trading features tailored for experts.',
        date: 'Q3 2024',
    },
    {
        phase: 'Phase 4: Advanced Features',
        title: 'Multiple Swaps',
        description: 'Implementation of multiple swap capabilities. Continuous platform improvements based on user feedback and market trends.',
        date: 'Q4 2024',
    },
];

const Roadmap: React.FC = () => {
    return (
        <section id="roadmap" className="py-20 bg-gray-700">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Journey Ahead</h2>
                <div className="relative wrap overflow-hidden p-4 sm:p-10">
                    {/* Vertical line - hidden on mobile */}
                    <div className="hidden md:block border-2-2 absolute border-opacity-20 border-gray-400 h-full border left-1/2 transform -translate-x-1/2"></div>

                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            className={`mb-8 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                } items-center w-full`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            {/* Empty div for spacing on desktop */}
                            <div className="hidden md:block md:w-5/12"></div>

                            {/* Circle indicator */}
                            {/* <div className="mx-auto md:mx-0 z-20 flex items-center order-1 bg-green-600 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto text-white font-semibold text-lg">{index + 1}</h1>
                            </div> */}

                            {/* Content */}
                            <motion.div
                                className="order-1 bg-gray-800 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 mt-4 md:mt-0"
                                whileHover={{ scale: 1.02 }}
                            >
                                <h3 className="mb-1 text-xl font-bold">{milestone.phase}</h3>
                                <h4 className="mb-2 text-lg font-semibold">{milestone.title}</h4>
                                <p className="text-gray-300 text-sm sm:text-base">{milestone.description}</p>
                                <span className="text-sm text-gray-400 mt-2 block">{milestone.date}</span>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
