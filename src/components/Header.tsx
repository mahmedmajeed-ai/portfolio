import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail, Github, Linkedin, ExternalLink, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Work', href: '#publications' },
    { name: 'Teaching', href: '#teaching' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Professional top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-gray-700 to-green-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 relative group">
            <h1 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
              Muhammad Ahmed
            </h1>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-gray-700 group-hover:w-full transition-all duration-300"></div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium relative group"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </nav>

          {/* Professional Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/muhammad-ahmed-a3a1a1226/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-110 relative group"
            >
              <Linkedin size={20} />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-60 animate-ping"></div>
            </a>
            <a href="mailto:mahmedmajeed.ai@gmail.com" className="text-gray-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-110 relative group">
              <Mail size={20} />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-60 animate-ping"></div>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform scale-150"></div>
            <div className="relative z-10">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 opacity-50"></div>
            
            <div className="px-2 pt-2 pb-3 space-y-1 relative z-10">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 transform hover:translate-x-1"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;