import React, { useState } from 'react';
import { BookOpen, ExternalLink, Download, Filter, Star, TrendingUp, Award, Trophy } from 'lucide-react';

const Publications = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'research', name: 'Research Papers' },
    { id: 'projects', name: 'Projects' },
    { id: 'certifications', name: 'Certifications' }
  ];

  const publications = [
    {
      id: 1,
      title: "AI-Powered Shopping Automation: VISIONCART System",
      authors: "Muhammad Ahmed, IntelliCraft Studio Team",
      venue: "AI Innovation Summit",
      year: 2025,
      type: "research",
      citations: 0,
      pdfUrl: "#",
      abstract: "Revolutionary shopping automation system using computer vision and AI to enhance retail experiences.",
      tags: ["Computer Vision", "AI Automation", "Retail Technology"],
      featured: true
    },
    {
      id: 2,
      title: "Automated IELTS Assessment: A Multimodal AI-Powered Solution for Language Skill Evaluation",
      authors: "Muhammad Ahmed, et al.",
      venue: "AI Journal",
      year: 2024,
      type: "research",
      citations: 0,
      pdfUrl: "#",
      abstract: "This AI-powered tool offers accurate and personalized IELTS assessment for effortless self-preparation.",
      tags: ["NLP", "Transformers", "Machine Learning"],
      featured: true
    }
  ];

  const githubLink = "https://github.com/mahmedmajeedai?tab=repositories";

  const certifications = [
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera/Stanford",
      year: 2023,
      type: "certification",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/HPTNG539CR7Q"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera/Stanford",
      year: 2023,
      type: "certification",
      link: "https://www.coursera.org/account/accomplishments/specialization/HY4ZY996QAJC"
    },
    {
      title: "Deep Learning with PyTorch: Siamese Network",
      issuer: "Coursera",
      year: 2023,
      type: "certification",
      link: "https://www.coursera.org/account/accomplishments/verify/92UUESISH0MJ"
    },
    {
      title: "Gen AI Foundational Models for NLP & Language Understanding",
      issuer: "Coursera",
      year: 2023,
      type: "certification",
      link: "https://www.coursera.org/account/accomplishments/verify/9OR3SQB9QC0D"
    },
    {
      title: "Generative AI and LLMs: Architecture and Data Preparation",
      issuer: "Coursera",
      year: 2023,
      type: "certification",
      link: "https://www.coursera.org/account/accomplishments/verify/9WTY2N32LZKL"
    },
    {
      title: "OpenCV Bootcamp",
      issuer: "OpenCV",
      year: 2023,
      type: "certification",
      link: "https://courses.opencv.org/certificates/91df712bcb1349eda1c689901815cd1e"
    },
    {
      title: "Exploratory Data Analysis for Machine Learning",
      issuer: "Coursera/IBM",
      year: 2023,
      type: "certification",
      link: "https://www.coursera.org/account/accomplishments/verify/EDEJ2H8UROVX"
    },
    {
      title: "Product Management: Building AI-Powered Products",
      issuer: "Coursera",
      year: 2023,
      type: "certification",
      link: "https://www.coursera.org/account/accomplishments/verify/K7JHO0DEPBRY"
    },
    {
      title: "Version Control",
      issuer: "Coursera/Meta",
      year: 2023,
      type: "certification",
      link: "https://www.coursera.org/account/accomplishments/verify/LW6JHKSDWXEL"
    },
    {
      title: "Programming in Python",
      issuer: "Coursera/Meta",
      year: 2023,
      type: "certification",
      link: "https://www.coursera.org/account/accomplishments/verify/QMCPDACP2H82"
    }
  ];

  const projects = [
    {
      title: "AI-Powered Shopping Automation: VISIONCART System",
      description: "Revolutionary shopping automation using computer vision and AI to enhance retail experiences",
      tech: "Computer Vision, AI Automation, Retail Technology",
      type: "projects"
    },
    {
      title: "Automated IELTS Assessment Tool",
      description: "AI-powered IELTS evaluation using NLP and generative models for personalized language skill feedback",
      tech: "NLP, Transformers, Machine Learning",
      type: "projects"
    },
    {
      title: "StrokeVisage: Acute and Non-Acute Stroke Face Recognition",
      description: "Deep learning-based stroke detection system using CNNs for facial image classification with data augmentation and optimized evaluation",
      tech: "Computer Vision, Image Preprocessing, Deep Learning",
      type: "projects"
    },
    {
      title: "Voice Controlled Smart Home System",
      description: "IoT-based smart home automation using voice recognition and AI",
      tech: "AI, IoT, Voice Recognition",
      type: "projects"
    },
    {
      title: "Pakistan 2024 Election Prediction",
      description: "Machine learning model for political election outcome prediction",
      tech: "Machine Learning, Data Analysis",
      type: "projects"
    },
    {
      title: "AI Chatbot in Django Framework using Neo4j",
      description: "Intelligent chatbot system with graph database integration",
      tech: "Django, Neo4j, NLP",
      type: "projects"
    }
  ];

  const allItems = [
    ...publications.map(item => ({ ...item, externalUrl: githubLink })),
    ...certifications.map(cert => ({
      ...cert,
      id: `cert-${cert.title}`,
      abstract: `Professional certification in ${cert.title}`,
      tags: ['Certification'],
      externalUrl: cert.link
    })),
    ...projects.map(proj => ({
      ...proj,
      id: `proj-${proj.title}`,
      abstract: proj.description,
      tags: [proj.tech],
      externalUrl: githubLink
    }))
  ];

  const filteredItems = allItems.filter(item =>
    selectedCategory === 'all' || item.type === selectedCategory
  );

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Work & Achievements</h2>
          <p className="text-gray-600 mt-2">Research publications, projects, certifications, and achievements</p>
        </div>

        <div className="mb-6 text-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg"
          >
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        <div className="space-y-6">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-gray-50 p-6 rounded-xl shadow-md relative">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-blue-700">{item.title}</h3>
                  {item.authors && <p className="text-gray-700">{item.authors}</p>}
                  {item.issuer && <p className="text-gray-700">Issued by: {item.issuer}</p>}
                  {item.year && <p className="text-sm text-gray-500">{item.year}</p>}
                </div>
                <div className="ml-4">
                  <a href={item.externalUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{item.abstract}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags && item.tags.map((tag, index) => (
                  <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 text-xs rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
