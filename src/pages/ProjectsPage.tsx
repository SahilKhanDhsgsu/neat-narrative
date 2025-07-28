
import React from 'react';
import { Calendar, ExternalLink, Github, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  const { projects } = portfolioData;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Projects
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A showcase of my work and the technologies I love to use
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-purple-600 to-pink-600"></div>

              <div className="space-y-16">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-start md:items-center group animate-fade-in`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>

                    {/* Content */}
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'} ml-20 md:ml-0`}>
                      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                        {/* Project Image Placeholder */}
                        <div className="h-32 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-lg mb-6 relative overflow-hidden">
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                          <div className="absolute top-2 right-2">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center w-8 h-8 bg-white/90 rounded-full shadow-md hover:bg-white transition-all duration-300 hover:scale-110"
                            >
                              <ExternalLink size={14} className="text-gray-700" />
                            </a>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                          {project.description}
                        </p>
                        
                        {/* Tech Stack Preview */}
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.split(', ').slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.techStack.split(', ').length > 3 && (
                              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                                +{project.techStack.split(', ').length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center text-gray-500 text-sm">
                            <Code size={16} className="mr-2" />
                            <span>Personal Project</span>
                          </div>
                          <Link
                            to={`/projects/${index}`}
                            className="inline-flex items-center text-purple-600 hover:text-pink-600 transition-colors duration-300 font-medium"
                          >
                            <span>Learn More</span>
                            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
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

export default ProjectsPage;
