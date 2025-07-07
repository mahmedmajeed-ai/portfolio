import React from 'react';
import { Brain, Network, Shield, Zap, ExternalLink, Github, Atom, Eye, Cpu } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: "Computer Vision",
      description: "Developing advanced computer vision systems for object detection, image recognition, and visual automation.",
      projects: 4,
      color: "blue"
    },
    {
      icon: <Brain className="w-8 h-8 text-green-600" />,
      title: "Machine Learning",
      description: "Creating intelligent systems using supervised and unsupervised learning algorithms for various applications.",
      projects: 6,
      color: "green"
    },
    {
      icon: <Network className="w-8 h-8 text-gray-600" />,
      title: "Deep Learning",
      description: "Implementing neural network architectures for complex pattern recognition and predictive modeling.",
      projects: 5,
      color: "gray"
    },
    {
      icon: <Cpu className="w-8 h-8 text-blue-700" />,
      title: "AI Automation",
      description: "Building automated systems that leverage AI to streamline processes and enhance user experiences.",
      projects: 3,
      color: "blue"
    }
  ];

  const recentProjects = [
    {
      title: "VISIONCART: Revolutionizing Shopping with AI Automation",
      description: "An AI-powered shopping automation system that uses computer vision to enhance the retail experience.",
      status: "Completed",
      tech: "Computer Vision, AI",
      link: "#"
    },
    {
      title: "STROKEVISAGE: Acute and Non-Acute Stroke Face Recognition",
      description: "Medical AI system for early stroke detection using facial recognition and machine learning algorithms.",
      status: "Published",
      tech: "Deep Learning, Medical AI",
      link: "#"
    },
    {
      title: "IELTS Band Assessment Tool",
      description: "Automated assessment system for IELTS band prediction using natural language processing and ML.",
      status: "Completed",
      tech: "NLP, Machine Learning",
      link: "#"
    }
  ];

  return (
    <section id="research" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Professional background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-100 to-gray-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg opacity-15 transform rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-gradient-to-br from-gray-100 to-blue-100 rounded-full opacity-25 animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Professional network visualization */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-5" viewBox="0 0 1200 800">
          <defs>
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#374151" />
            </radialGradient>
          </defs>
          {/* Network nodes */}
          <circle cx="200" cy="150" r="8" fill="url(#nodeGradient)" opacity="0.6" />
          <circle cx="400" cy="100" r="6" fill="url(#nodeGradient)" opacity="0.5" />
          <circle cx="600" cy="180" r="7" fill="url(#nodeGradient)" opacity="0.7" />
          <circle cx="800" cy="120" r="5" fill="url(#nodeGradient)" opacity="0.4" />
          <circle cx="1000" cy="160" r="9" fill="url(#nodeGradient)" opacity="0.8" />
          
          {/* Connections */}
          <path d="M200,150 L400,100 L600,180 L800,120 L1000,160" stroke="url(#nodeGradient)" strokeWidth="2" fill="none" opacity="0.3" />
          <path d="M200,150 Q500,50 800,120" stroke="url(#nodeGradient)" strokeWidth="1.5" fill="none" opacity="0.2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & Expertise</h2>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 via-gray-700 to-green-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Focused on developing innovative AI solutions in Computer Vision and Machine Learning with practical applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              {/* Professional background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${area.color}-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
                  {area.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{area.projects} projects</span>
                  <span className={`text-xs px-2 py-1 rounded-full bg-${area.color}-100 text-${area.color}-600 relative`}>
                    Active
                    <div className={`absolute -top-1 -right-1 w-2 h-2 bg-${area.color}-400 rounded-full animate-ping`}></div>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center relative">
            Featured Projects
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-600 to-gray-700 rounded-full"></div>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                {/* Professional animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Status indicator */}
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 rounded-full ${
                    project.status === 'Published' ? 'bg-green-400 animate-pulse' : 
                    project.status === 'Completed' ? 'bg-blue-400 animate-pulse' : 'bg-gray-400 animate-pulse'
                  }`}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 flex-1 group-hover:text-blue-600 transition-colors duration-200">{project.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ml-2 ${
                      project.status === 'Published' ? 'bg-green-100 text-green-600' : 
                      project.status === 'Completed' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{project.tech}</span>
                    <div className="flex space-x-2">
                      <a href={project.link} className="text-blue-600 hover:text-blue-800 transform hover:scale-110 transition-all duration-200">
                        <ExternalLink size={16} />
                      </a>
                      <a href="#" className="text-gray-600 hover:text-gray-800 transform hover:scale-110 transition-all duration-200">
                        <Github size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-gray-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">View All Projects</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Research;