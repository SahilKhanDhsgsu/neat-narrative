
import React from 'react';
import { Heart, Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, url: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, url: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Twitter, url: personalInfo.twitter, label: 'Twitter' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{personalInfo.name}</h3>
            <p className="text-gray-400 leading-relaxed">
              Passionate about creating beautiful, functional web experiences that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                url && (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                  >
                    <Icon 
                      size={18} 
                      className="text-gray-400 group-hover:text-white transition-colors duration-300" 
                    />
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {['Experience', 'Education', 'Projects', 'Skills'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-white transition-colors duration-300"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>by {personalInfo.name}</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-all duration-300 hover:scale-105"
            >
              <span className="text-gray-400 group-hover:text-white">Back to top</span>
              <ArrowUp 
                size={16} 
                className="text-gray-400 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" 
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
