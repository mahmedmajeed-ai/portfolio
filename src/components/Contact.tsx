import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, Globe, Linkedin, Github, MessageCircle, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "mahmedmajeed.ai@gmail.com",
      link: "mailto:mahmedmajeed.ai@gmail.com",
      color: "blue"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Lahore, Pakistan",
      link: "#",
      color: "gray"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: "Availability",
      value: "Open for collaborations\n& consulting",
      link: "#",
      color: "blue"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/muhammad-ahmed-a3a1a1226/",
      color: "text-blue-700"
    },
    {
      name: "Email Me",
      icon: <ExternalLink className="w-5 h-5" />,
      url: "mailto:mahmedmajeed.ai@gmail.com",
      color: "text-gray-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Professional background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-100 to-gray-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg opacity-15 transform rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-gray-100 to-blue-100 rounded-full opacity-25 animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Professional network connection lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-5" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#374151" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <path d="M100,400 Q400,200 700,400 T1100,300" stroke="url(#contactGradient)" strokeWidth="2" fill="none" />
          <path d="M200,600 Q500,400 800,600 T1200,500" stroke="url(#contactGradient)" strokeWidth="1.5" fill="none" opacity="0.7" />
          <circle cx="400" cy="250" r="4" fill="url(#contactGradient)" opacity="0.6" />
          <circle cx="700" cy="420" r="3" fill="url(#contactGradient)" opacity="0.5" />
          <circle cx="900" cy="320" r="5" fill="url(#contactGradient)" opacity="0.7" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="absolute -top-2 -right-2 text-blue-400 animate-pulse">
              <MessageCircle size={20} />
            </div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-600 via-gray-700 to-green-600 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I welcome opportunities for collaboration, AI consulting, and discussions about innovative projects in Computer Vision and Machine Learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 relative">
              Contact Information
              <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-blue-600 to-gray-700 rounded-full"></div>
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className={`flex-shrink-0 w-12 h-12 bg-${info.color}-100 rounded-lg flex items-center justify-center text-${info.color}-600 group-hover:scale-110 transition-transform duration-200 relative`}>
                    {info.icon}
                    <div className={`absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg`}></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{info.label}</h4>
                    <p className="text-gray-600 whitespace-pre-line">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-4 relative">
                Connect with me
                <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-gray-700 rounded-full"></div>
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${link.color} hover:opacity-80 transition-all duration-200 transform hover:scale-110 relative group`}
                    title={link.name}
                  >
                    {link.icon}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-300 rounded-full opacity-0 group-hover:opacity-60 animate-ping"></div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h4 className="font-semibold text-gray-900 mb-2">AI Collaboration</h4>
                <p className="text-gray-600 text-sm">
                  I'm always interested in discussing AI projects, research collaborations, and innovative applications 
                  in Computer Vision and Machine Learning. Let's build the future of AI together!
                </p>
              </div>
            </div>
          </div>

          {/* Professional Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 relative">
              Send a Message
              <div className="absolute -bottom-1 left-0 w-16 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full"></div>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              {/* Professional background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl opacity-30 transform rotate-1"></div>
              
              <div className="relative z-10 grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 group-hover:shadow-md"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 group-hover:shadow-md"
                  />
                </div>
              </div>
              
              <div className="relative z-10 group">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 group-hover:shadow-md"
                >
                  <option value="">Select a subject</option>
                  <option value="collaboration">AI Collaboration</option>
                  <option value="consulting">Consulting Inquiry</option>
                  <option value="project">Project Discussion</option>
                  <option value="mentorship">Mentorship</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="relative z-10 group">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 group-hover:shadow-md"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>
              
              <button
                type="submit"
                className="relative z-10 w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center transform hover:scale-105 hover:shadow-lg group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-gray-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Send className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;