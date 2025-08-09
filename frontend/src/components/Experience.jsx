import React from 'react';
import { MapPin, Calendar, Award, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My journey in data science and analytics, building expertise through 
            hands-on experience and real-world applications.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={job.id} className={`relative flex items-start ${
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
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {job.title}
                        </CardTitle>
                        <Badge className="bg-blue-100 text-blue-800 w-fit">
                          {job.period}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Award className="h-4 w-4" />
                          <span className="font-semibold">{job.company}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        {job.description}
                      </p>

                      {/* Responsibilities */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                        <div className="space-y-2">
                          {job.achievements.map((achievement, idx) => (
                            <div key={idx} className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r-lg">
                              <p className="text-green-800 text-sm font-medium">
                                {achievement}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready for New Challenges</h3>
              <p className="text-blue-100 mb-6">
                I'm actively seeking opportunities to contribute to innovative data science 
                projects and help organizations unlock the power of their data.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
                <button
                  onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Get in Touch
                </button>
                <button
                  onClick={() => window.open('https://customer-assets.emergentagent.com/job_3e8a5e6d-1846-4de4-9b85-0acdcb12ceeb/artifacts/p42jhbdy_AbdulZuhailM_Resume.pdf', '_blank')}
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
                >
                  Download CV
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;