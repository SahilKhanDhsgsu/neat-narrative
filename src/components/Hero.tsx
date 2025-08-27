
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { personalInfo } = portfolioData;

  const socialLinks = [
    { icon: Github, url: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, url: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Twitter, url: personalInfo.twitter, label: 'Twitter' },
  ];

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {personalInfo.name.split(' ')[0]}
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 font-light">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                {personalInfo.summary}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <Mail size={20} />
                <a href={`mailto:${personalInfo.email}`} className="hover:underline">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone size={20} />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin size={20} />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                url && (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <Icon 
                      size={20} 
                      className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300" 
                    />
                  </a>
                )
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => window.open(`mailto:${personalInfo.email}`)}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-medium transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-md"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
