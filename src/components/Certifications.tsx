
import React from 'react';
import { Award, Calendar, Building } from 'lucide-react';
import EditableText from './EditableText';
import { PortfolioData } from '../types/portfolio';

interface CertificationsProps {
  certifications: PortfolioData['certifications'];
  isEditMode: boolean;
  onUpdate: (certifications: PortfolioData['certifications']) => void;
}

const Certifications: React.FC<CertificationsProps> = ({
  certifications,
  isEditMode,
  onUpdate
}) => {
  const handleCertificationUpdate = (index: number, field: keyof PortfolioData['certifications'][0], value: string) => {
    const updated = [...certifications];
    updated[index] = { ...updated[index], [field]: value };
    onUpdate(updated);
  };

  const addCertification = () => {
    const newCert = {
      name: "New Certification",
      issuer: "Issuer Name",
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
    };
    onUpdate([...certifications, newCert]);
  };

  const removeCertification = (index: number) => {
    const updated = certifications.filter((_, i) => i !== index);
    onUpdate(updated);
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in border border-gray-100 hover:scale-105 relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {isEditMode && (
                <button
                  onClick={() => removeCertification(index)}
                  className="absolute top-4 right-4 w-6 h-6 bg-red-500 text-white rounded-full text-xs hover:bg-red-600 transition-colors duration-200"
                >
                  ×
                </button>
              )}

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award size={28} className="text-white" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <Calendar size={16} />
                    <EditableText
                      value={cert.date}
                      onChange={(value) => handleCertificationUpdate(index, 'date', value)}
                      isEditing={isEditMode}
                      className="text-sm text-gray-500"
                      placeholder="Date"
                      as="span"
                    />
                  </div>

                  <EditableText
                    value={cert.name}
                    onChange={(value) => handleCertificationUpdate(index, 'name', value)}
                    isEditing={isEditMode}
                    className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300"
                    placeholder="Certification Name"
                    as="h3"
                  />

                  <div className="flex items-center space-x-2 text-lg text-gray-700 mb-4">
                    <Building size={16} />
                    <EditableText
                      value={cert.issuer}
                      onChange={(value) => handleCertificationUpdate(index, 'issuer', value)}
                      isEditing={isEditMode}
                      className="text-lg font-semibold text-gray-700"
                      placeholder="Issuer"
                      as="span"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-600 text-sm">Verified Credential</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-600 text-sm">Professional Level</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300"></div>
            </div>
          ))}

          {isEditMode && (
            <div
              onClick={addCertification}
              className="group bg-white bg-opacity-50 rounded-xl p-8 border-2 border-dashed border-gray-300 hover:border-blue-400 transition-all duration-300 cursor-pointer flex items-center justify-center min-h-[200px]"
            >
              <div className="text-center text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
                <Award size={32} className="mx-auto mb-2" />
                <span>Add Certification</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
