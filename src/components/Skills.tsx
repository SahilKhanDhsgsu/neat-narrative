
import React, { useState } from 'react';
import { Code, Palette, Database, Cloud, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = {
    'Frontend': ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'SASS'],
    'Backend': ['Node.js', 'Express.js', 'Python', 'GraphQL', 'REST APIs'],
    'Database': ['MongoDB', 'PostgreSQL', 'Redis'],
    'Design': ['Figma', 'Adobe XD'],
    'Tools & Cloud': ['Git', 'Docker', 'AWS', 'Firebase', 'Jest', 'Cypress']
  };

  const categoryIcons = {
    'Frontend': Code,
    'Backend': Database,
    'Database': Database,
    'Design': Palette,
    'Tools & Cloud': Cloud
  };

  const getRandomDelay = () => Math.random() * 500;
  const getRandomScale = () => 0.95 + Math.random() * 0.1;

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
            
            return (
              <div
                key={category}
                className="animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="flex items-center space-x-3 mb-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-4">
                  {categorySkills.filter(skill => skills.includes(skill)).map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="group relative animate-scale-in hover-scale"
                      style={{ 
                        animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                        transform: `scale(${getRandomScale()})`
                      }}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 group-hover:border-blue-300 cursor-default">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-800 font-medium">{skill}</span>
                          <Star 
                            size={16} 
                            className={`transition-all duration-300 ${
                              hoveredSkill === skill 
                                ? 'text-yellow-500 fill-current' 
                                : 'text-gray-300'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Hover tooltip */}
                      {hoveredSkill === skill && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                          {skill}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                        </div>
                      )}

                      {/* Floating particles effect */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300"></div>
                        <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-300" style={{ animationDelay: '200ms' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional skills not in categories */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Always learning and exploring new technologies</p>
          <div className="flex justify-center">
            <div className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="mr-2">🚀</span>
              Open to new challenges
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
