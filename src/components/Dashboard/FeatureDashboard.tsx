import React from 'react';
import { motion } from 'framer-motion';
import { 
    ChartBarIcon, 
    CubeTransparentIcon, 
    ArrowPathIcon,
    PaintBrushIcon,
    WrenchScrewdriverIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Unified DEX Integration',
    description: 'Access Uniswap V3, PancakeSwap V3, and more from one platform.',
    icon: CubeTransparentIcon,
  },
  {
    title: 'Optimized for Trading Experts',
    description: 'Advanced tools and analytics tailored for experienced traders.',
    icon: ChartBarIcon,
  },
  {
    title: 'Seamless Swap Functionality',
    description: 'Effortless token swaps with minimal slippage.',
    icon: ArrowPathIcon,
  },
  {
    title: 'Modern & Intuitive Design',
    description: 'A sleek, updated user interface for enhanced navigation.',
    icon: PaintBrushIcon,
  },
  {
    title: 'Future-Proof Architecture',
    description: 'Modular platform ready to integrate additional DEXes.',
    icon: WrenchScrewdriverIcon,
  },
];

const FeatureDashboard: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-700">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Dex House for Trader?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <feature.icon className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureDashboard;
