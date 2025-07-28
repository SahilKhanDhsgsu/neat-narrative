
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { portfolioData } from '../data/portfolioData';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ContactPage = () => {
  const { personalInfo } = portfolioData;
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    inquiryType: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Contact Information
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                I welcome opportunities for collaboration, consultation, and academic discourse.
                Please feel free to reach out for any professional inquiries.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-sm text-gray-600 mb-1">{personalInfo.email}</p>
                  <p className="text-xs text-gray-500">Official university email</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <Phone className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-sm text-gray-600 mb-1">{personalInfo.phone}</p>
                  <p className="text-xs text-gray-500">+1-7000369501</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                    <MapPin className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Office Address</h3>
                  <p className="text-sm text-gray-600 mb-1">Department of Education</p>
                  <p className="text-xs text-gray-500">Dr. Harisingh Gour University, Sagar (M.P.) 470001</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <Clock className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                  <p className="text-sm text-gray-600 mb-1">Monday - Friday: 10:00 AM - 5:00 PM</p>
                  <p className="text-xs text-gray-500">Saturday: 10:00 AM - 2:00 PM</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form and Office Hours */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Send className="w-6 h-6 text-blue-600 mr-3" />
                      <h2 className="text-2xl font-bold text-gray-900">Send a Message</h2>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Please fill out this form for any professional inquiries. I aim to respond within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            placeholder="Your full name"
                            value={formData.fullName}
                            onChange={(e) => handleChange('fullName', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Inquiry Type
                        </label>
                        <Select value={formData.inquiryType} onValueChange={(value) => handleChange('inquiryType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="General Inquiry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="collaboration">Collaboration</SelectItem>
                            <SelectItem value="consultation">Consultation</SelectItem>
                            <SelectItem value="academic">Academic Discourse</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input
                          placeholder="Brief description of your inquiry"
                          value={formData.subject}
                          onChange={(e) => handleChange('subject', e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          placeholder="Please provide details about your inquiry..."
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Office Hours and Response Time */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Office Hours</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday</span>
                        <span className="text-gray-900">10:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday</span>
                        <span className="text-gray-900">10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sunday</span>
                        <span className="text-gray-900">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Response Time</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600">General inquiries: Within 24 hours</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600">Research collaborations: Within 48 hours</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600">Student inquiries: Within 24 hours</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600">Media requests: Within 2-3 business days</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
