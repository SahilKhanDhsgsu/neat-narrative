
import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and the experiences that have shaped my skills
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center group animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'} ml-16 md:ml-0`}>
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <Calendar size={16} />
                      <span>{exp.startDate} - {exp.endDate}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {exp.position}
                    </h3>
                    
                    <h4 className="text-lg font-semibold text-blue-600 mb-4">
                      {exp.company}
                    </h4>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button className="inline-flex items-center text-blue-600 hover:text-purple-600 transition-colors duration-300 font-medium">
                        <span>Learn More</span>
                        <ExternalLink size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
