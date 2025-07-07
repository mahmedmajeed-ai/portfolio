import React from 'react';
import { Award, BookOpen, Users, TrendingUp, Target, GraduationCap, Building } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "AI Innovation",
      description: "Research Assistant at Maker Space Lab, focusing on computer vision and architectures."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      title: "Research Impact",
      description: "Published 2 research papers in Computer Vision and Machine Learning"
    },
    {
      icon: <Users className="w-8 h-8 text-gray-600" />,
      title: "Teaching Excellence",
      description: "Delivered 40+ lectures on deep learning and neural network architectures"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-700" />,
      title: "Technical Leadership",
      description: "Being a scrum master I lead AI projects and mentoring teams in implementations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Professional background graphics */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-gray-100 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg opacity-25 transform rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-br from-gray-100 to-blue-100 rounded-full opacity-20 animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Professional decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-5" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#374151" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <path d="M0,400 Q300,200 600,400 T1200,300" stroke="url(#aboutGradient)" strokeWidth="3" fill="none" />
          <path d="M0,500 Q400,300 800,500 T1200,400" stroke="url(#aboutGradient)" strokeWidth="2" fill="none" opacity="0.7" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full opacity-30 animate-ping"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-600 to-gray-700 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate AI Engineer and entrepreneur focused on developing innovative solutions in Computer Vision and Machine Learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As an AI Engineer, I specialize in developing cutting-edge solutions 
              in Computer Vision and Machine Learning. My passion lies in creating AI systems that solve real-world problems 
              and drive innovation across industries.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With a strong foundation in deep learning architectures and practical experience in AI automation, 
              I've successfully led multiple projects ranging from computer vision applications to intelligent chatbot systems. 
              My work focuses on making AI accessible and impactful.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Beyond development, I'm committed to knowledge sharing and have delivered over 40 lectures on deep learning, 
              helping others understand and implement advanced AI concepts.
            </p>
          </div>
          
          <div className="space-y-6 relative">
            {/* Professional background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl opacity-50 transform rotate-1"></div>
            
            <div className="bg-blue-50 p-6 rounded-xl relative transform hover:scale-105 transition-transform duration-200">
              <div className="absolute top-2 right-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="flex items-center mb-2">
                <Building className="w-5 h-5 text-blue-600 mr-2" />
                <h4 className="font-semibold text-gray-900">Current Position</h4>
              </div>
              <p className="text-gray-600">Applied AI researcher at maker space lab.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl relative transform hover:scale-105 transition-transform duration-200">
              <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="flex items-center mb-2">
                <Target className="w-5 h-5 text-green-600 mr-2" />
                <h4 className="font-semibold text-gray-900">Research Interests</h4>
              </div>
              <p className="text-gray-600">Computer Vision, Machine Learning, Deep Learning Architectures</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl relative transform hover:scale-105 transition-transform duration-200">
              <div className="absolute top-2 right-2 w-3 h-3 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="flex items-center mb-2">
                <GraduationCap className="w-5 h-5 text-gray-600 mr-2" />
                <h4 className="font-semibold text-gray-900">Education</h4>
              </div>
              <p className="text-gray-600">BS Artificial Intelligence</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group relative">
              {/* Professional background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-gray-100 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 transform scale-110"></div>
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200 relative">
                  {achievement.icon}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
                
                {/* Professional decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-200 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;