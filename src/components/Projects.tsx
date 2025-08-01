
import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import EditableText from './EditableText';
import { PortfolioData } from '../types/portfolio';

interface ProjectsProps {
  projects: PortfolioData['projects'];
  isEditMode: boolean;
  onUpdate: (projects: PortfolioData['projects']) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, isEditMode, onUpdate }) => {
  const handleProjectUpdate = (index: number, field: keyof PortfolioData['projects'][0], value: string) => {
    const updated = [...projects];
    updated[index] = { ...updated[index], [field]: value };
    onUpdate(updated);
  };

  const addProject = () => {
    const newProject = {
      name: "New Project",
      description: "Project description",
      tech: "Technology stack",
      link: ""
    };
    onUpdate([...projects, newProject]);
  };

  const removeProject = (index: number) => {
    const updated = projects.filter((_, i) => i !== index);
    onUpdate(updated);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my best work and the technologies I love to use
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 animate-fade-in hover:scale-105 relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {isEditMode && (
                <button
                  onClick={() => removeProject(index)}
                  className="absolute top-4 right-4 w-6 h-6 bg-red-500 text-white rounded-full text-xs hover:bg-red-600 transition-colors duration-200 z-10"
                >
                  ×
                </button>
              )}

              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                {!isEditMode && project.link && (
                  <div className="absolute top-4 right-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-white/90 rounded-full shadow-md hover:bg-white transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink size={18} className="text-gray-700" />
                    </a>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <EditableText
                    value={project.name}
                    onChange={(value) => handleProjectUpdate(index, 'name', value)}
                    isEditing={isEditMode}
                    className="text-2xl font-bold text-white mb-2 group-hover:translate-y-1 transition-transform duration-300"
                    placeholder="Project Name"
                    as="h3"
                  />
                </div>
              </div>

              <div className="p-8">
                <EditableText
                  value={project.description}
                  onChange={(value) => handleProjectUpdate(index, 'description', value)}
                  isEditing={isEditMode}
                  className="text-gray-700 mb-6 leading-relaxed"
                  placeholder="Project description..."
                  multiline
                  as="p"
                />

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Tech Stack
                  </h4>
                  {isEditMode ? (
                    <EditableText
                      value={project.tech}
                      onChange={(value) => handleProjectUpdate(index, 'tech', value)}
                      isEditing={isEditMode}
                      className="text-blue-700"
                      placeholder="Technology stack (comma separated)"
                      as="span"
                    />
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {project.tech.split(', ').map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  {isEditMode ? (
                    <EditableText
                      value={project.link || ''}
                      onChange={(value) => handleProjectUpdate(index, 'link', value)}
                      isEditing={isEditMode}
                      className="text-blue-600"
                      placeholder="Project URL"
                      as="span"
                    />
                  ) : (
                    project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center justify-center flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                      >
                        <Github size={18} className="mr-2" />
                        <span>View Code</span>
                        <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                    )
                  )}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}

          {isEditMode && (
            <div
              onClick={addProject}
              className="group bg-white bg-opacity-50 rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-400 transition-all duration-300 cursor-pointer flex items-center justify-center min-h-[400px]"
            >
              <div className="text-center text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
                <Github size={32} className="mx-auto mb-2" />
                <span>Add Project</span>
              </div>
            </div>
          )}
        </div>

        {!isEditMode && (
          <div className="text-center mt-12">
            <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-medium transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:shadow-md flex items-center space-x-2 mx-auto">
              <span>View All Projects</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
