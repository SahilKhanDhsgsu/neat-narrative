
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import EditableText from './EditableText';
import PhotoUpload from './PhotoUpload';
import { PortfolioData } from '../types/portfolio';

interface HeroProps {
  personalInfo: PortfolioData['personalInfo'];
  isEditMode: boolean;
  onUpdate: (personalInfo: PortfolioData['personalInfo']) => void;
}

const Hero: React.FC<HeroProps> = ({ personalInfo, isEditMode, onUpdate }) => {
  const handleFieldUpdate = (field: keyof PortfolioData['personalInfo'], value: string) => {
    onUpdate({ ...personalInfo, [field]: value });
  };

  const socialLinks = [
    { icon: Github, url: personalInfo.github, label: 'GitHub', field: 'github' as const },
    { icon: Linkedin, url: personalInfo.linkedin, label: 'LinkedIn', field: 'linkedin' as const },
    { icon: Twitter, url: personalInfo.twitter, label: 'Twitter', field: 'twitter' as const },
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
                  <EditableText
                    value={personalInfo.name.split(' ')[0]}
                    onChange={(value) => {
                      const lastName = personalInfo.name.split(' ').slice(1).join(' ');
                      handleFieldUpdate('name', `${value} ${lastName}`);
                    }}
                    isEditing={isEditMode}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    placeholder="First Name"
                    as="span"
                  />
                </span>
              </h1>
              
              <EditableText
                value={personalInfo.title}
                onChange={(value) => handleFieldUpdate('title', value)}
                isEditing={isEditMode}
                className="text-2xl lg:text-3xl text-gray-600 font-light"
                placeholder="Your professional title"
                as="h2"
              />
              
              <EditableText
                value={personalInfo.summary}
                onChange={(value) => handleFieldUpdate('summary', value)}
                isEditing={isEditMode}
                className="text-lg text-gray-700 leading-relaxed max-w-2xl"
                placeholder="Brief summary about yourself"
                multiline
                as="p"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                <Mail size={20} />
                {isEditMode ? (
                  <EditableText
                    value={personalInfo.email}
                    onChange={(value) => handleFieldUpdate('email', value)}
                    isEditing={isEditMode}
                    className="hover:underline"
                    placeholder="email@example.com"
                    as="span"
                  />
                ) : (
                  <a href={`mailto:${personalInfo.email}`} className="hover:underline">
                    {personalInfo.email}
                  </a>
                )}
              </div>
              
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone size={20} />
                <EditableText
                  value={personalInfo.phone}
                  onChange={(value) => handleFieldUpdate('phone', value)}
                  isEditing={isEditMode}
                  placeholder="+1 (555) 123-4567"
                  as="span"
                />
              </div>
              
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin size={20} />
                <EditableText
                  value={personalInfo.location}
                  onChange={(value) => handleFieldUpdate('location', value)}
                  isEditing={isEditMode}
                  placeholder="City, State"
                  as="span"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, url, label, field }) => (
                <div key={label} className="relative group">
                  {isEditMode ? (
                    <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                      <Icon size={20} className="text-gray-600" />
                    </div>
                  ) : (
                    url && (
                      <a
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
                  )}
                  {isEditMode && (
                    <div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <EditableText
                        value={url || ''}
                        onChange={(value) => handleFieldUpdate(field, value)}
                        isEditing={isEditMode}
                        className="text-xs w-32"
                        placeholder={`${label} URL`}
                        as="span"
                      />
                    </div>
                  )}
                </div>
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
            <PhotoUpload
              photo={personalInfo.photo}
              name={personalInfo.name}
              isEditing={isEditMode}
              onPhotoChange={(photoUrl) => handleFieldUpdate('photo', photoUrl)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
