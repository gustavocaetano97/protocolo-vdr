import React, { useState } from 'react';
import { Menu, X, Crown } from 'lucide-react';
import { NAV_LINKS } from '@/constants/navigation';
import './Header.css';

/**
 * Header component with navigation and mobile menu
 * @returns {JSX.Element} Header component
 */
export const Header = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        {/* Logo and Navigation Container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-[#718ec2] hover:text-[#5a7ab3] transition-colors">
            <Crown size={32} className="text-[#718ec2]" />
            <span className="font-bold text-2xl">Protocolo VDR</span>
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-gray-300 hover:text-[#718ec2] transition-colors text-sm"
              >
                {link.text}
              </a>
            ))}
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105">
              Quero Começar Agora
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-gray-300 hover:text-[#718ec2] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105">
                Quero Começar Agora
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};