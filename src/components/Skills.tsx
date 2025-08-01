
import React from 'react';
import { Code, Database, Palette, Settings } from 'lucide-react';
import EditableText from './EditableText';
import { PortfolioData } from '../types/portfolio';

interface SkillsProps {
  skills: PortfolioData['skills'];
  isEditMode: boolean;
  onUpdate: (skills: PortfolioData['skills']) => void;
}

const Skills: React.FC<SkillsProps> = ({
  skills,
  isEditMode,
  onUpdate
}) => {
  const handleSkillsUpdate = (newSkillsText: string) => {
    const skillsArray = newSkillsText.split(',').map(skill => skill.trim()).filter(skill => skill.length > 0);
    onUpdate(skillsArray);
  };

  const addSkill = (skillName: string) => {
    if (!skills.includes(skillName)) {
      onUpdate([...skills, skillName]);
    }
  };

  const removeSkill = (index: number) => {
    const updated = skills.filter((_, i) => i !== index);
    onUpdate(updated);
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6" />,
      skills: skills.filter(skill => 
        ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'SASS'].includes(skill)
      )
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      skills: skills.filter(skill => 
        ['Node.js', 'Express.js', 'Python', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs'].includes(skill)
      )
    },
    {
      title: "Design",
      icon: <Palette className="w-6 h-6" />,
      skills: skills.filter(skill => 
        ['Figma', 'Adobe XD'].includes(skill)
      )
    },
    {
      title: "Tools & DevOps",
      icon: <Settings className="w-6 h-6" />,
      skills: skills.filter(skill => 
        ['Git', 'Docker', 'AWS', 'Firebase', 'Jest', 'Cypress'].includes(skill)
      )
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build amazing products
          </p>
        </div>

        {isEditMode ? (
          <div className="mb-12">
            <EditableText
              value={skills.join(', ')}
              onChange={handleSkillsUpdate}
              isEditing={isEditMode}
              className="text-lg text-gray-700 p-4 border rounded-lg bg-white"
              placeholder="Enter skills separated by commas..."
              multiline
              as="textarea"
            />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group hover:scale-105"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300 text-blue-600">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="relative group/skill"
                    >
                      {isEditMode && (
                        <button
                          onClick={() => removeSkill(skills.indexOf(skill))}
                          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-xs hover:bg-red-600 transition-colors duration-200"
                        >
                          ×
                        </button>
                      )}
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group-hover/skill:bg-blue-50 transition-colors duration-300">
                        <span className="font-medium text-gray-700 group-hover/skill:text-blue-700 transition-colors duration-300">
                          {skill}
                        </span>
                        <div className="w-2 h-2 bg-green-500 rounded-full group-hover/skill:bg-blue-500 transition-colors duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {isEditMode && (
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {['React', 'Vue.js', 'Angular', 'Svelte', 'Python', 'Java', 'C++'].map((skill) => (
              <button
                key={skill}
                onClick={() => addSkill(skill)}
                className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
                  skills.includes(skill)
                    ? 'bg-blue-100 text-blue-700 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                }`}
                disabled={skills.includes(skill)}
              >
                {skills.includes(skill) ? '✓ ' : '+ '}
                {skill}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
