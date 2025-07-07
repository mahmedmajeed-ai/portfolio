import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, BookOpen, GraduationCap, Mail, ChevronUp } from 'lucide-react';

const Taskbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: 'hero', name: 'Home', icon: <Home size={20} />, href: '#' },
    { id: 'about', name: 'About', icon: <User size={20} />, href: '#about' },
    { id: 'research', name: 'Research', icon: <Briefcase size={20} />, href: '#research' },
    { id: 'publications', name: 'Work', icon: <BookOpen size={20} />, href: '#publications' },
    { id: 'teaching', name: 'Teaching', icon: <GraduationCap size={20} />, href: '#teaching' },
    { id: 'contact', name: 'Contact', icon: <Mail size={20} />, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = section === 'hero' ? document.body : document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string, id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl border border-gray-200/50 px-6 py-3">
        <div className="flex items-center space-x-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.href, item.id)}
              className={`relative group flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-blue-600 text-white shadow-lg scale-110'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
              }`}
              title={item.name}
            >
              {item.icon}
              
              {/* Active indicator */}
              {activeSection === item.id && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                  <ChevronUp size={12} className="text-blue-600" />
                </div>
              )}
              
              {/* Hover tooltip */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {item.name}
              </div>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-xl bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
            </button>
          ))}
        </div>
        
        {/* Taskbar indicator */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-blue-600 rounded-full opacity-50"></div>
      </div>
    </div>
  );
};

export default Taskbar;