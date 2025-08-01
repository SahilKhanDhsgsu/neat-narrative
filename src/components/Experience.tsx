
import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';
import EditableText from './EditableText';
import { PortfolioData } from '../types/portfolio';

interface ExperienceProps {
  experience: PortfolioData['experience'];
  isEditMode: boolean;
  onUpdate: (experience: PortfolioData['experience']) => void;
}

const Experience: React.FC<ExperienceProps> = ({
  experience,
  isEditMode,
  onUpdate
}) => {
  const handleExperienceUpdate = (index: number, field: keyof PortfolioData['experience'][0], value: string) => {
    const updated = [...experience];
    updated[index] = { ...updated[index], [field]: value };
    onUpdate(updated);
  };

  const addExperience = () => {
    const newExperience = {
      position: "New Position",
      company: "Company Name",
      startDate: "Jan 2024",
      endDate: "Present",
      description: "Job description and achievements..."
    };
    onUpdate([...experience, newExperience]);
  };

  const removeExperience = (index: number) => {
    const updated = experience.filter((_, i) => i !== index);
    onUpdate(updated);
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and the impact I've made along the way
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {isEditMode && (
                  <button
                    onClick={() => removeExperience(index)}
                    className="absolute top-4 right-4 w-6 h-6 bg-red-500 text-white rounded-full text-xs hover:bg-red-600 transition-colors duration-200 z-10"
                  >
                    ×
                  </button>
                )}

                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 hidden md:block"></div>

                <div className="ml-0 md:ml-20 bg-white rounded-xl p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <EditableText
                        value={exp.position}
                        onChange={(value) => handleExperienceUpdate(index, 'position', value)}
                        isEditing={isEditMode}
                        className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300"
                        placeholder="Job Position"
                        as="h3"
                      />

                      <div className="flex items-center space-x-2 text-lg text-gray-700 mb-2">
                        <Building size={18} />
                        <EditableText
                          value={exp.company}
                          onChange={(value) => handleExperienceUpdate(index, 'company', value)}
                          isEditing={isEditMode}
                          className="font-semibold"
                          placeholder="Company Name"
                          as="span"
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-500 bg-blue-50 px-4 py-2 rounded-lg mt-4 md:mt-0">
                      <Calendar size={16} />
                      <EditableText
                        value={exp.startDate}
                        onChange={(value) => handleExperienceUpdate(index, 'startDate', value)}
                        isEditing={isEditMode}
                        className="text-sm"
                        placeholder="Start Date"
                        as="span"
                      />
                      <span>-</span>
                      <EditableText
                        value={exp.endDate}
                        onChange={(value) => handleExperienceUpdate(index, 'endDate', value)}
                        isEditing={isEditMode}
                        className="text-sm"
                        placeholder="End Date"
                        as="span"
                      />
                    </div>
                  </div>

                  <EditableText
                    value={exp.description}
                    onChange={(value) => handleExperienceUpdate(index, 'description', value)}
                    isEditing={isEditMode}
                    className="text-gray-700 leading-relaxed"
                    placeholder="Job description and achievements..."
                    multiline
                    as="p"
                  />

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}

            {isEditMode && (
              <div
                onClick={addExperience}
                className="group bg-white bg-opacity-50 rounded-xl p-8 border-2 border-dashed border-gray-300 hover:border-blue-400 transition-all duration-300 cursor-pointer flex items-center justify-center min-h-[200px] ml-0 md:ml-20"
              >
                <div className="text-center text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
                  <Building size={32} className="mx-auto mb-2" />
                  <span>Add Experience</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
