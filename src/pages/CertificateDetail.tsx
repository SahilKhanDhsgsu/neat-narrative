
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Award, Calendar, Building, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { portfolioData } from '../data/portfolioData';

const CertificateDetail = () => {
  const { id } = useParams<{ id: string }>();
  const certificateIndex = parseInt(id || '0');
  const certificate = portfolioData.certifications[certificateIndex];

  if (!certificate) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Certificate Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">The certificate you're looking for doesn't exist.</p>
            <Link to="/certificates">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <ArrowLeft size={20} className="mr-2" />
                Back to Certificates
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getSkillsFromCertificate = (name: string) => {
    const skillMap: { [key: string]: string[] } = {
      'AWS Certified Cloud Practitioner': ['AWS', 'Cloud Computing', 'DevOps'],
      'React Developer Certification': ['React', 'JavaScript', 'Frontend Development'],
      'Google UX Design Certificate': ['Figma', 'Adobe XD', 'User Experience'],
      'MongoDB Developer Path': ['MongoDB', 'Database Design', 'NoSQL'],
    };
    
    return skillMap[name] || [];
  };

  const skills = getSkillsFromCertificate(certificate.name);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/certificates">
              <Button variant="outline" className="mb-6 hover:bg-blue-50 hover:border-blue-300">
                <ArrowLeft size={20} className="mr-2" />
                Back to Certificates
              </Button>
            </Link>
          </div>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm mb-8">
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                    <Award size={36} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-4xl font-bold text-gray-900 mb-2">
                      {certificate.name}
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600 flex items-center space-x-2">
                      <Building size={20} />
                      <span>{certificate.issuer}</span>
                    </CardDescription>
                  </div>
                </div>
                <div className="px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 bg-green-100 text-green-800">
                  <CheckCircle size={16} />
                  <span>Valid</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar size={20} className="text-blue-600" />
                      <span className="font-medium text-gray-900">Issue Date</span>
                    </div>
                    <p className="text-gray-700">{formatDate(certificate.date)}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Award size={20} className="text-green-600" />
                      <span className="font-medium text-gray-900">Credential ID</span>
                    </div>
                    <p className="text-gray-700 font-mono text-sm">CERT-{certificateIndex + 1}-2024</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Building size={20} className="text-gray-600" />
                      <span className="font-medium text-gray-900">Issuing Organization</span>
                    </div>
                    <p className="text-gray-700">{certificate.issuer}</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">About This Certificate</h3>
                <p className="text-gray-700 leading-relaxed">
                  This certificate validates professional competency and expertise in the specified domain. 
                  It represents completion of rigorous training and assessment requirements set by {certificate.issuer}.
                </p>
              </div>

              {skills.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills Validated</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  <ExternalLink size={20} className="mr-2" />
                  Verify Certificate
                </Button>
                <Button variant="outline" className="hover:bg-gray-50">
                  Download Certificate
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CertificateDetail;
