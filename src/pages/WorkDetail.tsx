
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Clock, Users, Award, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const WorkDetail = () => {
  const { id } = useParams();
  const experience = portfolioData.experience[parseInt(id || '0')];

  if (!experience) {
    return <div>Experience not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/work" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Work Experience
            </Link>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                <Calendar size={16} />
                <span>{experience.startDate} - {experience.endDate}</span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {experience.position}
              </h1>

              <h2 className="text-2xl font-semibold text-blue-600 mb-6 flex items-center">
                <MapPin size={20} className="mr-2" />
                {experience.company}
              </h2>

              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {experience.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-blue-600" />
                      Key Achievements
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Improved application performance by 25%</li>
                      <li>• Collaborated with cross-functional teams</li>
                      <li>• Implemented pixel-perfect UI components</li>
                      <li>• Delivered projects on time and within budget</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-600" />
                      Team & Collaboration
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Worked with design team closely</li>
                      <li>• Participated in code reviews</li>
                      <li>• Mentored junior developers</li>
                      <li>• Contributed to team best practices</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'JavaScript', 'CSS3', 'HTML5', 'Git', 'Agile'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-blue-600" />
                Work Environment
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Work Type</h4>
                  <p className="text-gray-600">Full-time Internship</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Team Size</h4>
                  <p className="text-gray-600">5-10 Members</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Location</h4>
                  <p className="text-gray-600">San Francisco, CA</p>
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

export default WorkDetail;
