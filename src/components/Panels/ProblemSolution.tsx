import React from 'react';
import { motion } from 'framer-motion';
import { ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const ProblemSolution: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Problem Panel */}
                    <motion.div
                        className="md:w-1/2 p-6 bg-gray-700 rounded-xl"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <ExclamationTriangleIcon className="w-8 h-8 text-yellow-500" />
                            <h2 className="text-3xl font-bold">The Problem</h2>
                        </div>
                        <p className="text-lg text-gray-300">
                            Navigating multiple DEX platforms can be cumbersome and time-consuming for seasoned traders.
                        </p>
                    </motion.div>

                    {/* Solution Panel */}
                    <motion.div
                        className="md:w-1/2 p-6 bg-gray-700 rounded-xl"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircleIcon className="w-8 h-8 text-green-500" />
                            <h2 className="text-3xl font-bold">Our Solution</h2>
                        </div>
                        <p className="text-lg text-gray-300">
                            A modular DEX aggregator that seamlessly integrates top-tier protocols like Uniswap V3 and PancakeSwap V3 into a single, intuitive interface.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
