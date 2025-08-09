import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { education, certifications } from '../data/mock';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strong academic foundation complemented by industry-recognized certifications 
            from leading technology companies.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={edu.id} className={`relative flex items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-600 rounded-full transform -translate-x-1.5 md:translate-x-0 z-10 shadow-lg">
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-25"></div>
                </div>

                {/* Content */}
                <div className={`w-full ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8 md:w-1/2' : 'md:pl-8 md:w-1/2'
                }`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                        <CardTitle className="text-xl font-bold text-gray-900 flex items-start">
                          <GraduationCap className="h-6 w-6 mr-2 mt-1 text-blue-600" />
                          <div>
                            {edu.degree}
                            {edu.status === "Pursuing" && (
                              <Badge className="ml-2 bg-green-100 text-green-800">
                                {edu.status}
                              </Badge>
                            )}
                          </div>
                        </CardTitle>
                        <Badge className="bg-blue-100 text-blue-800 w-fit">
                          {edu.percentage}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Award className="h-4 w-4" />
                          <span className="font-semibold">{edu.institution}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Professional Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 leading-relaxed">
                        {cert}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Summary */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-blue-100 mb-6">
                Committed to staying current with the latest trends in data analytics and technology. 
                My educational journey continues with hands-on projects and industry certifications 
                that directly apply to real-world data challenges.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
                <button
                  onClick={() => window.open('https://customer-assets.emergentagent.com/job_3e8a5e6d-1846-4de4-9b85-0acdcb12ceeb/artifacts/p42jhbdy_AbdulZuhailM_Resume.pdf', '_blank')}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  View Full Resume
                </button>
                <button
                  onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
                >
                  Let's Connect
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;