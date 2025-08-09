import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { skills } from '../data/mock';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: skills.programming,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Data Analysis & Visualization",
      icon: "📊",
      skills: skills.dataAnalysis,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Machine Learning & AI",
      icon: "🤖",
      skills: skills.machineLearning,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Tools & Frameworks",
      icon: "🛠️",
      skills: skills.tools,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience in 
            data science, analytics, and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-xl font-bold text-gray-900">
                    {category.title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm font-semibold text-gray-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-gray-200"
                      />
                      <div 
                        className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Additional Competencies</h3>
                <p className="text-gray-300">
                  Complementary skills that enhance my data science capabilities
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="text-3xl">🎯</div>
                  <h4 className="font-semibold">Problem Solving</h4>
                  <p className="text-sm text-gray-300">
                    Analytical thinking and systematic approach to complex challenges
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="text-3xl">📈</div>
                  <h4 className="font-semibold">Business Intelligence</h4>
                  <p className="text-sm text-gray-300">
                    Translating data insights into actionable business strategies
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="text-3xl">🤝</div>
                  <h4 className="font-semibold">Communication</h4>
                  <p className="text-sm text-gray-300">
                    Presenting complex findings to both technical and non-technical audiences
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;