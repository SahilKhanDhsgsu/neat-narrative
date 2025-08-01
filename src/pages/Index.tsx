
import React from 'react';
import { Edit3, Save, RotateCcw } from 'lucide-react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Footer from '../components/Footer';
import { useEditMode } from '../hooks/useEditMode';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Index = () => {
  const { isEditMode, toggleEditMode, disableEditMode } = useEditMode();
  const { data, updateData, resetData, isSaving, lastSaved } = useLocalStorage();

  const handlePersonalInfoUpdate = (personalInfo: typeof data.personalInfo) => {
    updateData({ ...data, personalInfo });
  };

  const handleExperienceUpdate = (experience: typeof data.experience) => {
    updateData({ ...data, experience });
  };

  const handleEducationUpdate = (education: typeof data.education) => {
    updateData({ ...data, education });
  };

  const handleProjectsUpdate = (projects: typeof data.projects) => {
    updateData({ ...data, projects });
  };

  const handleSkillsUpdate = (skills: typeof data.skills) => {
    updateData({ ...data, skills });
  };

  const handleCertificationsUpdate = (certifications: typeof data.certifications) => {
    updateData({ ...data, certifications });
  };

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      {/* Edit Mode Controls */}
      <div className="fixed top-24 right-4 z-50 flex flex-col space-y-2">
        <button
          onClick={toggleEditMode}
          className={`group flex items-center space-x-2 px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 ${
            isEditMode 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          {isEditMode ? <Save size={18} /> : <Edit3 size={18} />}
          <span className="font-medium">
            {isEditMode ? 'Save' : 'Edit'}
          </span>
        </button>

        {isEditMode && (
          <button
            onClick={() => {
              resetData();
              disableEditMode();
            }}
            className="group flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:bg-red-700"
          >
            <RotateCcw size={18} />
            <span className="font-medium">Reset</span>
          </button>
        )}

        {/* Save Status Indicator */}
        {(isSaving || lastSaved) && (
          <div className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full shadow-lg">
            {isSaving ? 'Saving...' : `Saved ${lastSaved?.toLocaleTimeString()}`}
          </div>
        )}
      </div>

      {/* Edit Mode Indicator */}
      {isEditMode && (
        <div className="fixed top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 z-40">
          <div className="flex items-center justify-center space-x-2">
            <Edit3 size={16} />
            <span className="font-medium">Edit Mode Active - Click on any text to edit</span>
          </div>
        </div>
      )}

      <Hero 
        personalInfo={data.personalInfo}
        isEditMode={isEditMode}
        onUpdate={handlePersonalInfoUpdate}
      />
      
      <Experience 
        experience={data.experience}
        isEditMode={isEditMode}
        onUpdate={handleExperienceUpdate}
      />
      
      <Education 
        education={data.education}
        isEditMode={isEditMode}
        onUpdate={handleEducationUpdate}
      />
      
      <Projects 
        projects={data.projects}
        isEditMode={isEditMode}
        onUpdate={handleProjectsUpdate}
      />
      
      <Skills 
        skills={data.skills}
        isEditMode={isEditMode}
        onUpdate={handleSkillsUpdate}
      />
      
      <Certifications 
        certifications={data.certifications}
        isEditMode={isEditMode}
        onUpdate={handleCertificationsUpdate}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
