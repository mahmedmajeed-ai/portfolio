import React from 'react';
import { Download, MapPin, Building, User, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden">
      {/* Professional background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0ibTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEG0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      {/* Professional geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gray-300 rounded-lg opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-green-200 rounded-full opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-40 w-8 h-8 bg-blue-300 rounded-full opacity-40 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-gray-400 rotate-45 opacity-30 animate-spin" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-10 h-10 bg-blue-200 rounded-lg opacity-25 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Professional network lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-10" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#374151" />
            </linearGradient>
          </defs>
          <path d="M100,200 Q300,100 500,200 T900,150" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
          <path d="M200,400 Q400,300 600,400 T1000,350" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
          <path d="M50,600 Q250,500 450,600 T850,550" stroke="url(#lineGradient)" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDelay: '2s'}} />
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left relative">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              <span className="block relative">
                Muhammad
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-gray-700 rounded-full transform scale-x-0 animate-pulse" style={{animation: 'scaleX 2s ease-in-out infinite'}}></div>
              </span>
              <span className="block text-blue-600 relative">
                Ahmed
                <div className="absolute -top-2 -right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-gray-600 rounded-full opacity-20 animate-ping"></div>
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-4 leading-relaxed">
              Artificial Intelligence Engineer
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start text-gray-700 group">
                <Building size={20} className="mr-2 group-hover:text-blue-600 transition-colors" />
                <a href="https://www.linkedin.com/company/107946684/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  IntelliCraft Studio
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-gray-700 group">
                <MapPin size={20} className="mr-2 group-hover:text-blue-600 transition-colors" />
                <span>Pakistan</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`${import.meta.env.BASE_URL}data/m_ahmed_cv.pdf`}
                download
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center transform hover:scale-105 hover:shadow-lg"
              >
                <Download size={20} className="mr-2" />
                Download CV
              </a>
            </div>
          </div>
          
          <div className="relative">
            {/* Professional orbital rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 border border-blue-200 rounded-full opacity-30 animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute w-80 h-80 border border-gray-300 rounded-full opacity-20 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
              <div className="absolute w-64 h-64 border border-green-200 rounded-full opacity-25 animate-spin" style={{animationDuration: '25s'}}></div>
            </div>
            
            {/* Professional Picture Placeholder */}
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden border-4 border-white">
              {/* Professional overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-gray-600/10 rounded-full"></div>
              
              {/* Picture placeholder */}
              <div className="w-72 h-72 rounded-full overflow-hidden border-2 border-gray-300 relative z-10">
                <img
                  src={`${import.meta.env.BASE_URL}data/my-picture.jpeg`}
                  // alt="Muhammad Ahmed"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
              </div>

            </div>
            
            {/* Professional floating particles */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-300 rounded-full opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-green-300 rounded-full opacity-25 animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-1/4 -left-4 w-12 h-12 bg-blue-400 rounded-full opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes scaleX {
          0%, 100% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;