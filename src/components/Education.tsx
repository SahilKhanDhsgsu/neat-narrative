
import React from 'react';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';
import EditableText from './EditableText';
import { PortfolioData } from '../types/portfolio';

interface EducationProps {
  education: PortfolioData['education'];
  isEditMode: boolean;
  onUpdate: (education: PortfolioData['education']) => void;
}

const Education: React.FC<EducationProps> = ({
  education,
  isEditMode,
  onUpdate
}) => {
  const handleEducationUpdate = (index: number, field: keyof PortfolioData['education'][0], value: string) => {
    const updated = [...education];
    updated[index] = { ...updated[index], [field]: value };
    onUpdate(updated);
  };

  const addEducation = () => {
    const newEducation = {
      institution: "Institution Name",
      degree: "Degree Name",
      startDate: "Aug 2024",
      endDate: "May 2026"
    };
    onUpdate([...education, newEducation]);
  };

  const removeEducation = (index: number) => {
    const updated = education.filter((_, i) => i !== index);
    onUpdate(updated);
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and the foundations of my expertise
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-600 to-blue-600 hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {isEditMode && (
                  <button
                    onClick={() => removeEducation(index)}
                    className="absolute top-4 right-4 w-6 h-6 bg-red-500 text-white rounded-full text-xs hover:bg-red-600 transition-colors duration-200 z-10"
                  >
                    ×
                  </button>
                )}

                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 hidden md:block"></div>

                <div className="ml-0 md:ml-20 bg-gray-50 rounded-xl p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <EditableText
                        value={edu.degree}
                        onChange={(value) => handleEducationUpdate(index, 'degree', value)}
                        isEditing={isEditMode}
                        className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300"
                        placeholder="Degree Name"
                        as="h3"
                      />

                      <div className="flex items-center space-x-2 text-lg text-gray-700 mb-2">
                        <GraduationCap size={18} />
                        <EditableText
                          value={edu.institution}
                          onChange={(value) => handleEducationUpdate(index, 'institution', value)}
                          isEditing={isEditMode}
                          className="font-semibold"
                          placeholder="Institution Name"
                          as="span"
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-500 bg-green-50 px-4 py-2 rounded-lg mt-4 md:mt-0">
                      <Calendar size={16} />
                      <EditableText
                        value={edu.startDate}
                        onChange={(value) => handleEducationUpdate(index, 'startDate', value)}
                        isEditing={isEditMode}
                        className="text-sm"
                        placeholder="Start Date"
                        as="span"
                      />
                      <span>-</span>
                      <EditableText
                        value={edu.endDate}
                        onChange={(value) => handleEducationUpdate(index, 'endDate', value)}
                        isEditing={isEditMode}
                        className="text-sm"
                        placeholder="End Date"
                        as="span"
                      />
                    </div>
                  </div>

                  {/* Additional info could go here */}
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-sm">Academic Excellence</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm">Relevant Coursework</span>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-200 transition-all duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}

            {isEditMode && (
              <div
                onClick={addEducation}
                className="group bg-gray-50 bg-opacity-50 rounded-xl p-8 border-2 border-dashed border-gray-300 hover:border-green-400 transition-all duration-300 cursor-pointer flex items-center justify-center min-h-[200px] ml-0 md:ml-20"
              >
                <div className="text-center text-gray-500 group-hover:text-green-600 transition-colors duration-300">
                  <GraduationCap size={32} className="mx-auto mb-2" />
                  <span>Add Education</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
