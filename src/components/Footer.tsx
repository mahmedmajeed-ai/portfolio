import React from 'react';
import { Heart, ArrowUp, Code, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Professional background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-16 h-16 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-12 h-12 bg-gray-500 rounded-lg opacity-15 transform rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-green-500 rounded-full opacity-20 animate-bounce" style={{animationDelay: '2s'}}></div>
        
        {/* Professional tech icons */}
        <div className="absolute top-20 right-1/3 text-blue-400 opacity-30 animate-pulse">
          <Code size={20} />
        </div>
      </div>

      {/* Professional network pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-5" viewBox="0 0 1200 400">
          <defs>
            <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#374151" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <path d="M0,200 Q300,100 600,200 T1200,150" stroke="url(#footerGradient)" strokeWidth="2" fill="none" />
          <path d="M0,300 Q400,200 800,300 T1200,250" stroke="url(#footerGradient)" strokeWidth="1.5" fill="none" opacity="0.7" />
          <circle cx="300" cy="150" r="3" fill="url(#footerGradient)" opacity="0.6" />
          <circle cx="600" cy="220" r="2" fill="url(#footerGradient)" opacity="0.5" />
          <circle cx="900" cy="170" r="4" fill="url(#footerGradient)" opacity="0.7" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2 relative">
            <h3 className="text-2xl font-bold mb-4 relative">
              Muhammad Ahmed
              <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-blue-400 to-gray-400 rounded-full"></div>
            </h3>
            <p className="text-gray-400 mb-4">
              Artificial Intelligence Engineer , specializing in designing and developing computer vision 
              and machine learning solutions.
            </p>
            <p className="text-gray-400">
              Passionate about developing innovative AI systems that solve real-world problems.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 right-0 w-2 h-2 bg-green-400 rounded-full opacity-50 animate-pulse"></div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">About</a></li>
              <li><a href="#research" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Research</a></li>
              <li><a href="#publications" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Work</a></li>
              <li><a href="#teaching" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Teaching</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Contact</a></li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 right-0 w-2 h-2 bg-gray-400 rounded-full opacity-50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="https://www.linkedin.com/in/muhammad-ahmed-a3a1a1226/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block flex items-center"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </li>
              
              <li><a href="www.google.scholar.com" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Google Scholar</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block">Kaggle Profile</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center relative">
          {/* Professional decorative line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          
          <div className="text-gray-400 text-sm">
            © 2025 Muhammad Ahmed. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-all duration-200 transform hover:scale-110 hover:shadow-lg relative group"
            >
              <ArrowUp className="w-4 h-4" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-gray-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;