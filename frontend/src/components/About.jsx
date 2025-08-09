import React from 'react';
import { Award, Users, Coffee, Code } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { personalInfo } from '../data/mock';

const About = () => {
  const stats = [
    {
      icon: <Code className="h-8 w-8" />,
      number: "15+",
      label: "Projects Completed",
      color: "text-blue-600"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "2+",
      label: "Years Experience",
      color: "text-green-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "50+",
      label: "Satisfied Clients",
      color: "text-purple-600"
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      number: "1000+",
      label: "Cups of Coffee",
      color: "text-orange-600"
    }
  ];

  const highlights = [
    "🎓 Master of Computer Applications (MCA) Graduate",
    "📊 Specialized in Data Analytics and Machine Learning",
    "🔍 Expert in transforming complex data into actionable insights",
    "💡 Passionate about solving real-world problems with technology",
    "🚀 Experienced in building end-to-end analytical solutions",
    "🤝 Strong collaborator with cross-functional teams"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Driven by curiosity and powered by data, I transform complex information into 
            meaningful insights that drive business success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Turning Data into Strategic Advantages
              </h3>
              <p className="text-gray-700 leading-relaxed">
                As an MCA graduate with a passion for data science and analytics, I specialize 
                in extracting meaningful patterns from complex datasets. My journey in technology 
                has been driven by a constant desire to learn and apply cutting-edge techniques 
                to solve real-world challenges.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I believe that data is not just numbers and charts—it's stories waiting to be 
                told. Through my work with Python, SQL, Power BI, and machine learning frameworks, 
                I help organizations make informed decisions that drive growth and innovation.
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
          </div>

          {/* Stats */}
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

            {/* Personal Touch */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-none">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Beyond the Code
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  When I'm not analyzing datasets or building machine learning models, 
                  you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I believe 
                  in continuous learning and staying updated with the latest trends in 
                  data science and AI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;