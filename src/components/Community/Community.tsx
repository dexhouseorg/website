import React from 'react';
import { motion } from 'framer-motion';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Join a Global Community of Experts</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Live Feeds Placeholder */}
          <motion.div
            className="w-full md:w-1/2 bg-gray-700 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Live Discussions</h3>
            {/* Embed Twitter Feed or Discord Widget */}
            <div className="h-64 bg-gray-600 flex items-center justify-center">
              <p className="text-gray-400">[Live Feed Placeholder]</p>
            </div>
          </motion.div>
          {/* Interactive Map Placeholder */}
          <motion.div
            className="w-full md:w-1/2 bg-gray-700 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Global Presence</h3>
            {/* Embed Interactive Map */}
            <div className="h-64 bg-gray-600 flex items-center justify-center">
              <p className="text-gray-400">[Interactive Map Placeholder]</p>
            </div>
          </motion.div>
        </div>
        <div className="mt-12 text-center">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full">
            Connect with Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;
