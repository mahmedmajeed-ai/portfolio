import React from 'react';
import { BookOpen, Users, Award, Calendar, GraduationCap, Brain, Presentation, Code } from 'lucide-react';

const Teaching = () => {
  const teachingStats = [
    { label: "Lectures Delivered", value: "40+", icon: <Presentation className="w-6 h-6" />, color: "blue" },
    { label: "Students Mentored", value: "100+", icon: <Users className="w-6 h-6" />, color: "green" },
    { label: "Teaching Experience", value: "3+", icon: <Calendar className="w-6 h-6" />, color: "gray" },
    { label: "Technical Topics", value: "15+", icon: <Brain className="w-6 h-6" />, color: "blue" }
  ];

  const teachingTopics = [
    {
      title: "Deep Learning Architectures",
      description: "Comprehensive coverage of neural network architectures including CNNs, RNNs, and Transformers.",
      lectures: 12,
      level: "Advanced",
      topics: ["Neural Networks", "CNNs", "RNNs", "Transformers"]
    },
    {
      title: "Computer Vision Fundamentals",
      description: "Introduction to computer vision concepts, image processing, and object detection techniques.",
      lectures: 10,
      level: "Intermediate",
      topics: ["Image Processing", "Object Detection", "Feature Extraction", "OpenCV"]
    },
    {
      title: "Machine Learning Algorithms",
      description: "Core machine learning algorithms, supervised and unsupervised learning techniques.",
      lectures: 8,
      level: "Beginner",
      topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering"]
    },
    {
      title: "AI Project Development",
      description: "Hands-on approach to building AI projects from conception to deployment.",
      lectures: 10,
      level: "Advanced",
      topics: ["Project Planning", "Model Development", "Deployment", "MLOps"]
    }
  ];

  const memberships = [
    {
      organization: "UMT ACM Student Chapter",
      role: "Active Member",
      description: "Participating in technical workshops, coding competitions, and knowledge sharing sessions.",
      year: "2022-Present"
    },
    {
      organization: "IEEE",
      role: "Executive Member",
      description: "Contributing to technical committees and organizing educational events for students.",
      year: "2023-Present"
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "AI Hackathon Runner Up",
      organization: "National AI Competition",
      description: "Recognized for innovative AI solution in healthcare domain"
    },
    {
      year: "2023",
      title: "Python Coder Badge",
      organization: "Kaggle",
      description: "Achieved recognition for Python programming skills on Kaggle platform"
    },
    {
      year: "2023",
      title: "Dataset Creator",
      organization: "Kaggle",
      description: "Created and published valuable datasets for machine learning community"
    }
  ];

  return (
    <section id="teaching" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Professional background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-100 to-gray-100 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg opacity-20 transform rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-gradient-to-br from-gray-100 to-blue-100 rounded-full opacity-25 animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Professional academic network visualization */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-5" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="teachingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#374151" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <path d="M100,300 Q400,200 700,300 T1100,250" stroke="url(#teachingGradient)" strokeWidth="2" fill="none" />
          <path d="M150,500 Q450,400 750,500 T1150,450" stroke="url(#teachingGradient)" strokeWidth="1.5" fill="none" opacity="0.7" />
          <circle cx="300" cy="250" r="6" fill="url(#teachingGradient)" opacity="0.6" />
          <circle cx="600" cy="320" r="4" fill="url(#teachingGradient)" opacity="0.5" />
          <circle cx="900" cy="280" r="5" fill="url(#teachingGradient)" opacity="0.7" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Teaching & Mentorship</h2>
            <div className="absolute -top-3 -right-3 text-blue-400 animate-pulse">
              <GraduationCap size={24} />
            </div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-600 via-gray-700 to-green-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about sharing knowledge in AI and Machine Learning through lectures, mentorship, and community engagement.
          </p>
        </div>

        {/* Professional Teaching Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {teachingStats.map((stat, index) => (
            <div key={index} className="text-center group relative">
              <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative p-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${stat.color}-100 text-${stat.color}-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200 relative`}>
                  {stat.icon}
                  <div className={`absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full`}></div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Teaching Topics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center relative">
            Teaching Topics & Lectures
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 to-gray-700 rounded-full"></div>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {teachingTopics.map((topic, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Professional background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-green-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{topic.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <span>{topic.lectures} lectures</span>
                        <span>•</span>
                        <span>{topic.level}</span>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full relative ${
                      topic.level === 'Advanced' ? 'bg-red-100 text-red-600' : 
                      topic.level === 'Intermediate' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                    }`}>
                      {topic.level}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{topic.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {topic.topics.map((subtopic, topicIndex) => (
                      <span key={topicIndex} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-gray-200 transition-colors duration-200">
                        {subtopic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Memberships */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center relative">
            Professional Memberships
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full"></div>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {memberships.map((membership, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Professional background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-blue-600 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{membership.organization}</h4>
                  </div>
                  <div className="text-blue-600 font-medium mb-2">{membership.role}</div>
                  <div className="text-sm text-gray-500 mb-3">{membership.year}</div>
                  <p className="text-gray-600 text-sm">{membership.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Awards & Recognition */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center relative">
            Awards & Recognition
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 via-gray-700 to-green-600 rounded-full"></div>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Professional background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Award badge */}
                <div className="absolute top-4 right-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Award size={20} />
                </div>
                
                <div className="relative z-10">
                  <div className="text-2xl font-bold text-blue-600 mb-2 relative">
                    {achievement.year}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">{achievement.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">{achievement.organization}</p>
                  <p className="text-gray-500 text-sm">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teaching Philosophy */}
        <div className="mt-16 bg-blue-50 p-8 rounded-xl relative overflow-hidden">
          {/* Professional background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <defs>
                <pattern id="philosophyPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2" fill="#3B82F6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#philosophyPattern)" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Teaching Philosophy</h3>
            <p className="text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
              I believe in making complex AI concepts accessible through hands-on learning and practical applications. 
              My teaching approach combines theoretical foundations with real-world projects, ensuring students not only 
              understand the concepts but can also implement them effectively. Through my 40+ lectures on deep learning 
              architectures, I've focused on bridging the gap between academic knowledge and industry requirements, 
              preparing students for successful careers in AI and machine learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;