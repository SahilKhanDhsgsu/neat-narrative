
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, Database, Cloud, Star, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { portfolioData } from '../data/portfolioData';

const SkillsPage = () => {
  const { skills } = portfolioData;
  
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(skillCategories).map(([category, categorySkills], index) => {
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
              const filteredSkills = categorySkills.filter(skill => skills.includes(skill));
              
              if (filteredSkills.length === 0) return null;
              
              return (
                <div
                  key={category}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                          <IconComponent size={28} className="text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-3xl font-bold text-gray-900">{category}</CardTitle>
                          <CardDescription className="text-lg text-gray-600 mt-1">
                            {filteredSkills.length} skills
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredSkills.map((skill, skillIndex) => (
                          <Link
                            key={skill}
                            to={`/skills/${encodeURIComponent(skill)}`}
                            className="group block"
                          >
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-md border border-gray-200 hover:border-blue-300">
                              <div className="flex items-center space-x-3">
                                <Star 
                                  size={20} 
                                  className="text-yellow-500 fill-current"
                                />
                                <span className="text-gray-800 font-medium">{skill}</span>
                              </div>
                              <ChevronRight 
                                size={20} 
                                className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300"
                              />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-8">Always learning and exploring new technologies</p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="mr-2">🚀</span>
              Open to new challenges
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SkillsPage;
