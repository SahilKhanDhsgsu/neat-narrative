
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Calendar, Building, ExternalLink, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { portfolioData } from '../data/portfolioData';

const CertificatesPage = () => {
  const { certificates } = portfolioData;

  const isExpired = (expiryDate: string) => {
    return new Date(expiryDate) < new Date();
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Certificates & Achievements
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional certifications and achievements that validate my expertise
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

            <div className="space-y-8">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                  <Card className="ml-0 md:ml-20 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                            <Award size={28} className="text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                              {cert.title}
                            </CardTitle>
                            <CardDescription className="text-lg text-gray-600 mt-1 flex items-center space-x-2">
                              <Building size={16} />
                              <span>{cert.issuer}</span>
                            </CardDescription>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          isExpired(cert.expiryDate) 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {isExpired(cert.expiryDate) ? 'Expired' : 'Valid'}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="flex items-center space-x-6 text-gray-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>Issued: {formatDate(cert.issueDate)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>Expires: {formatDate(cert.expiryDate)}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {cert.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          ID: {cert.credentialId}
                        </span>
                        <Link to={`/certificates/${index}`}>
                          <Button 
                            variant="outline" 
                            className="group/btn hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                          >
                            View Details
                            <ChevronRight 
                              size={16} 
                              className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                            />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-8">Continuously pursuing professional development</p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Award className="mr-2" size={20} />
              View All Achievements
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CertificatesPage;
