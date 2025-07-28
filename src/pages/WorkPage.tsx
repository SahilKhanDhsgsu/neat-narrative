
import React from 'react';
import { Calendar, ExternalLink, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const WorkPage = () => {
  const { experience } = portfolioData;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Work Experience
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                My professional journey and the experiences that have shaped my career
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

              <div className="space-y-16">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-start md:items-center group animate-fade-in`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>

                    {/* Content */}
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'} ml-20 md:ml-0`}>
                      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                          <Calendar size={16} />
                          <span>{exp.startDate} - {exp.endDate}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {exp.position}
                        </h3>
                        
                        <h4 className="text-lg font-semibold text-blue-600 mb-4 flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {exp.company}
                        </h4>
                        
                        <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">
                          {exp.description}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center text-gray-500 text-sm">
                            <Clock size={16} className="mr-2" />
                            <span>Full-time</span>
                          </div>
                          <Link
                            to={`/work/${index}`}
                            className="inline-flex items-center text-blue-600 hover:text-purple-600 transition-colors duration-300 font-medium"
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

export default WorkPage;
