
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, TrendingUp, Code, Database, Palette, Cloud } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { portfolioData } from '../data/portfolioData';

const SkillDetail = () => {
  const { skill } = useParams<{ skill: string }>();
  const decodedSkill = decodeURIComponent(skill || '');
  
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

  const getSkillCategory = (skillName: string) => {
    for (const [category, skills] of Object.entries(skillCategories)) {
      if (skills.includes(skillName)) {
        return category;
      }
    }
    return 'Other';
  };

  const getSkillDescription = (skillName: string) => {
    const descriptions: { [key: string]: string } = {
      'JavaScript': 'Modern JavaScript ES6+ development with advanced concepts including async/await, closures, and functional programming patterns.',
      'TypeScript': 'Strongly typed JavaScript development with advanced type definitions, interfaces, and generic programming.',
      'React': 'Component-based UI development with hooks, context API, and modern React patterns for building scalable applications.',
      'Next.js': 'Full-stack React framework with server-side rendering, API routes, and optimized performance features.',
      'Vue.js': 'Progressive JavaScript framework for building user interfaces with reactive data binding and component composition.',
      'Node.js': 'Server-side JavaScript runtime for building scalable network applications and REST APIs.',
      'Express.js': 'Minimal web framework for Node.js with middleware support and RESTful API development.',
      'Python': 'General-purpose programming language used for web development, data analysis, and automation scripts.',
      'MongoDB': 'NoSQL document database with flexible schema design and powerful querying capabilities.',
      'PostgreSQL': 'Advanced relational database system with complex queries, transactions, and data integrity.',
      'GraphQL': 'Query language for APIs with efficient data fetching and strongly typed schema definitions.',
      'REST APIs': 'Architectural style for designing networked applications with stateless communication protocols.',
      'HTML5': 'Modern markup language with semantic elements, accessibility features, and multimedia support.',
      'CSS3': 'Advanced styling with flexbox, grid, animations, and responsive design techniques.',
      'Tailwind CSS': 'Utility-first CSS framework for rapid UI development with consistent design systems.',
      'SASS': 'CSS preprocessor with variables, mixins, and nested rules for maintainable stylesheets.',
      'Figma': 'Collaborative design tool for creating user interfaces, prototypes, and design systems.',
      'Adobe XD': 'User experience design software for wireframing, prototyping, and design handoff.',
      'Git': 'Version control system for tracking changes and collaborating on code projects.',
      'Docker': 'Containerization platform for packaging applications and their dependencies.',
      'AWS': 'Cloud computing platform with services for hosting, storage, and application deployment.',
      'Firebase': 'Backend-as-a-Service platform with real-time database, authentication, and hosting.',
      'Jest': 'JavaScript testing framework with snapshot testing and mocking capabilities.',
      'Cypress': 'End-to-end testing framework for web applications with real browser testing.',
    };
    return descriptions[skillName] || 'Professional experience with this technology in various projects and applications.';
  };

  const getSkillLevel = (skillName: string) => {
    const levels: { [key: string]: number } = {
      'JavaScript': 95,
      'TypeScript': 90,
      'React': 95,
      'Next.js': 85,
      'Vue.js': 80,
      'Node.js': 88,
      'Express.js': 85,
      'Python': 82,
      'MongoDB': 90,
      'PostgreSQL': 85,
      'GraphQL': 80,
      'REST APIs': 92,
      'HTML5': 98,
      'CSS3': 95,
      'Tailwind CSS': 90,
      'SASS': 85,
      'Figma': 88,
      'Adobe XD': 80,
      'Git': 95,
      'Docker': 78,
      'AWS': 82,
      'Firebase': 85,
      'Jest': 80,
      'Cypress': 75,
    };
    return levels[skillName] || 70;
  };

  const category = getSkillCategory(decodedSkill);
  const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Star;
  const proficiencyLevel = getSkillLevel(decodedSkill);

  if (!portfolioData.skills.includes(decodedSkill)) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Skill Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">The skill you're looking for doesn't exist.</p>
            <Link to="/skills">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <ArrowLeft size={20} className="mr-2" />
                Back to Skills
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedSkills = skillCategories[category as keyof typeof skillCategories]
    ?.filter(s => s !== decodedSkill && portfolioData.skills.includes(s))
    .slice(0, 4) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/skills">
              <Button variant="outline" className="mb-6 hover:bg-blue-50 hover:border-blue-300">
                <ArrowLeft size={20} className="mr-2" />
                Back to Skills
              </Button>
            </Link>
          </div>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm mb-8">
            <CardHeader className="pb-6">
              <div className="flex items-center space-x-6">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                  <IconComponent size={36} className="text-white" />
                </div>
                <div>
                  <CardTitle className="text-4xl font-bold text-gray-900 mb-2">
                    {decodedSkill}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    {category} • Professional Level
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700">Proficiency Level</span>
                  <span className="text-sm font-medium text-gray-700">{proficiencyLevel}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${proficiencyLevel}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">About This Skill</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {getSkillDescription(decodedSkill)}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Experience Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                      <TrendingUp size={24} className="text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Professional Projects</p>
                        <p className="text-sm text-gray-600">Used in multiple client projects</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                      <Star size={24} className="text-green-600" />
                      <div>
                        <p className="font-medium text-gray-900">Best Practices</p>
                        <p className="text-sm text-gray-600">Following industry standards</p>
                      </div>
                    </div>
                  </div>
                </div>

                {relatedSkills.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Skills</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {relatedSkills.map((relatedSkill) => (
                        <Link
                          key={relatedSkill}
                          to={`/skills/${encodeURIComponent(relatedSkill)}`}
                          className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 text-center"
                        >
                          <span className="text-sm font-medium text-gray-700">{relatedSkill}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SkillDetail;
