
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, GraduationCap, BookOpen, Award, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const EducationDetail = () => {
  const { id } = useParams();
  const education = portfolioData.education[parseInt(id || '0')];

  if (!education) {
    return <div>Education not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/education" 
              className="inline-flex items-center text-green-600 hover:text-green-800 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Education
            </Link>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                <Calendar size={16} />
                <span>{education.startDate} - {education.endDate}</span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {education.degree}
              </h1>

              <h2 className="text-2xl font-semibold text-green-600 mb-6 flex items-center">
                <MapPin size={20} className="mr-2" />
                {education.institution}
              </h2>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  A comprehensive computer science program focusing on software development, algorithms, 
                  data structures, and modern web technologies. The curriculum emphasizes practical 
                  application of theoretical concepts through hands-on projects and collaborative learning.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-green-600" />
                      Core Subjects
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Data Structures and Algorithms</li>
                      <li>• Software Engineering Principles</li>
                      <li>• Database Management Systems</li>
                      <li>• Web Development Technologies</li>
                      <li>• Computer Networks</li>
                      <li>• Operating Systems</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-green-600" />
                      Achievements
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Dean's List Recognition</li>
                      <li>• Outstanding Academic Performance</li>
                      <li>• Computer Science Honor Society</li>
                      <li>• Leadership in Student Organizations</li>
                      <li>• Research Paper Publications</li>
                      <li>• Hackathon Winner</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Technical Skills Developed</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Java', 'JavaScript', 'React', 'Node.js', 'SQL', 'Git', 'Docker', 'AWS'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-green-600" />
                Academic Experience
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-2">GPA</h4>
                  <p className="text-gray-600">3.8/4.0</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Class Rank</h4>
                  <p className="text-gray-600">Top 10%</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Honors</h4>
                  <p className="text-gray-600">Magna Cum Laude</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EducationDetail;
