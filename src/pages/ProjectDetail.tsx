
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Code, Calendar, Users, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = portfolioData.projects[parseInt(id || '0')];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/projects" 
              className="inline-flex items-center text-purple-600 hover:text-purple-800 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>

            {/* Project Header */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="h-64 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 rounded-xl mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4 space-x-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white/90 rounded-lg shadow-md hover:bg-white transition-all duration-300"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-purple-600" />
                    Key Features
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Real-time data visualization</li>
                    <li>• Responsive design for all devices</li>
                    <li>• Advanced analytics dashboard</li>
                    <li>• User-friendly interface</li>
                    <li>• Secure authentication system</li>
                    <li>• API integration capabilities</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-purple-600" />
                    Development Process
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Agile development methodology</li>
                    <li>• Test-driven development</li>
                    <li>• Code review and quality assurance</li>
                    <li>• Continuous integration/deployment</li>
                    <li>• Performance optimization</li>
                    <li>• User experience testing</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.split(', ').map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Stats */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Code className="w-6 h-6 mr-2 text-purple-600" />
                Project Statistics
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Lines of Code</h4>
                  <p className="text-gray-600">5,000+</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Development Time</h4>
                  <p className="text-gray-600">3 Months</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Team Size</h4>
                  <p className="text-gray-600">Solo Project</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-orange-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Status</h4>
                  <p className="text-gray-600">Completed</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
