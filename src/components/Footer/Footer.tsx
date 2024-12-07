import React from 'react';
import { 
    EnvelopeIcon,
    ChatBubbleLeftRightIcon,
    DocumentTextIcon,
    MapIcon,
    PhoneIcon,
    GlobeAltIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <GlobeAltIcon className="w-5 h-5" />
              Dex House for Trader
            </h4>
            <ul>
              <li className="mb-2 flex items-center gap-2">
                <DocumentTextIcon className="w-4 h-4" />
                <a href="#about" className="hover:text-green-500">About Us</a>
              </li>
              <li className="mb-2 flex items-center gap-2">
                <MapIcon className="w-4 h-4" />
                <a href="#features" className="hover:text-green-500">Features</a>
              </li>
              <li className="mb-2 flex items-center gap-2">
                <DocumentTextIcon className="w-4 h-4" />
                <a href="#roadmap" className="hover:text-green-500">Roadmap</a>
              </li>
              <li className="mb-2 flex items-center gap-2">
                <DocumentTextIcon className="w-4 h-4" />
                <a href="#blog" className="hover:text-green-500">Blog</a>
              </li>
              <li className="mb-2 flex items-center gap-2">
                <PhoneIcon className="w-4 h-4" />
                <a href="#contact" className="hover:text-green-500">Contact</a>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com/DexHouseTrader" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                Twitter
              </a>
              <a href="https://discord.gg/DexHouseTrader" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                Discord
              </a>
              {/* Add more social links as needed */}
            </div>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <EnvelopeIcon className="w-5 h-5" />
              Newsletter
            </h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg bg-gray-700 text-white focus:outline-none"
              />
              <button type="submit" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-r-lg flex items-center gap-2">
                <EnvelopeIcon className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          © 2024 Dex House for Trader. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
