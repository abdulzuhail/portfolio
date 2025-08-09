import React from 'react';
import { Award, Users, Coffee, Code, GraduationCap, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { personalInfo, education, languages } from '../data/mock';

const About = () => {
  const stats = [
    {
      icon: <Code className="h-8 w-8" />,
      number: "10+",
      label: "Projects Completed",
      color: "text-blue-600"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "3",
      label: "Internships",
      color: "text-green-600"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      number: "7+",
      label: "Certifications",
      color: "text-purple-600"
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      number: "500+",
      label: "Hours of Analysis",
      color: "text-orange-600"
    }
  ];

  const highlights = [
    "🎓 MCA Student at Madurai Kamaraj University (80%)",
    "📊 Hands-on experience in real-time data analysis and visualization",
    "🔧 Skilled in Python, SQL, Power BI, Tableau, and Excel",
    "💡 Experience in building dashboards and delivering business insights",
    "🚀 Proven track record in automated workflows and data pipelines",
    "📈 30% improvement in processing efficiency through automation"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Motivated Data Analyst with hands-on internship experience in transforming 
            raw data into actionable business insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Turning Data into Business Value
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-gray-700 leading-relaxed">
                Adept at working with structured and unstructured data, creating data pipelines, 
                and generating actionable recommendations that drive decision-making. My experience 
                spans from data engineering to visualization, with a focus on delivering measurable 
                business impact.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-gray-900">Key Highlights</h4>
              <div className="space-y-2">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">{personalInfo.location}</span>
            </div>
          </div>

          {/* Stats and Additional Info */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="space-y-3">
                    <div className={`flex justify-center ${stat.color}`}>
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Education Summary */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-none">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  <GraduationCap className="h-5 w-5 inline mr-2" />
                  Education
                </h4>
                <div className="space-y-3">
                  {education.map((edu, index) => (
                    <div key={index} className="text-sm">
                      <div className="font-semibold text-gray-900">{edu.degree}</div>
                      <div className="text-gray-600">{edu.institution} - {edu.percentage}</div>
                      <div className="text-gray-500">{edu.period}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-none">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Languages
                </h4>
                <div className="space-y-2">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{lang.name}</span>
                      <span className="text-sm font-medium text-gray-600">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;