
import React from 'react';
import { Calendar, ExternalLink, MapPin, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const EducationPage = () => {
  const { education } = portfolioData;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Education
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                My academic journey and the foundation of my knowledge
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-green-600 to-teal-600"></div>

              <div className="space-y-16">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-start md:items-center group animate-fade-in`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-600 to-teal-600 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>

                    {/* Content */}
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'} ml-20 md:ml-0`}>
                      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                          <Calendar size={16} />
                          <span>{edu.startDate} - {edu.endDate}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {edu.degree}
                        </h3>
                        
                        <h4 className="text-lg font-semibold text-green-600 mb-4 flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {edu.institution}
                        </h4>
                        
                        <div className="space-y-2 mb-6">
                          <div className="flex items-center space-x-2">
                            <GraduationCap size={16} className="text-gray-500" />
                            <span className="text-gray-600 text-sm">Computer Science Focus</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <span className="text-gray-600 text-sm">Dean's List Recognition</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center text-gray-500 text-sm">
                            <GraduationCap size={16} className="mr-2" />
                            <span>Academic Program</span>
                          </div>
                          <Link
                            to={`/education/${index}`}
                            className="inline-flex items-center text-green-600 hover:text-teal-600 transition-colors duration-300 font-medium"
                          >
                            <span>Learn More</span>
                            <ExternalLink size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EducationPage;
