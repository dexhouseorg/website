import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  // Toggle Navbar for Mobile
  const handleNav = () => {
    setNavOpen(!navOpen);
  };

  // Add shadow to navbar on scroll
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 80) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  // Close mobile menu on link click
  const closeMenu = () => {
    setNavOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        shadow ? 'shadow-lg bg-gray-900 bg-opacity-90' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <motion.img
              src="/assets/logo.png" // Replace with your logo path
              alt="Dex House for Trader"
              className="w-10 h-10 mr-2"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            />
            <span className="text-2xl font-bold text-white">DexHouse</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              activeClass="text-green-500"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="text-green-500"
              to="features"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              activeClass="text-green-500"
              to="roadmap"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300"
            >
              Roadmap
            </Link>
          </li>
          <li>
            <Link
              activeClass="text-green-500"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              activeClass="text-green-500"
              to="community"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300"
            >
              Community
            </Link>
          </li>
        </ul>

        {/* Connect Wallet Button */}
        <button className="hidden md:block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
          Launch App
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={handleNav} aria-label="Toggle Menu">
            {!navOpen ? (
              <Bars3Icon className="w-6 h-6 text-gray-300" />
            ) : (
              <XMarkIcon className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900 bg-opacity-95 text-gray-300"
        >
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li>
              <Link
                onClick={closeMenu}
                activeClass="text-green-500"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-white transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="text-green-500"
                to="features"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-white transition-colors duration-300"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="text-green-500"
                to="roadmap"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-white transition-colors duration-300"
              >
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="text-green-500"
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-white transition-colors duration-300"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="text-green-500"
                to="community"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-white transition-colors duration-300"
              >
                Community
              </Link>
            </li>
            {/* Connect Wallet Button */}
            <li>
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
                Connect Wallet
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
