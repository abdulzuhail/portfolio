import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { skills, certifications } from '../data/mock';

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
      title: "Libraries & Frameworks",
      icon: "📚",
      skills: skills.libraries,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: skills.tools,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const coreCompetencies = [
    "Data Cleaning & Preprocessing",
    "Data Analysis & Interpretation",
    "Data Pipeline Development",
    "ETL & Data Warehousing (Star Schema)",
    "Dashboard Creation & Reporting",
    "Business Intelligence Solutions"
  ];

  const familiarWith = [
    "Agile Methodology",
    "Test Case Writing (Basics)",
    "SDLC/STLC (Basic Understanding)",
    "Cross-time-zone collaboration",
    "Hybrid/Remote work"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical skill set developed through hands-on internship experience 
            and real-world project implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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

        {/* Core Competencies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                <span className="text-2xl mr-3">🎯</span>
                Core Competencies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2">
                {coreCompetencies.map((competency, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{competency}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                <span className="text-2xl mr-3">🤝</span>
                Familiar With
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-2">
                {familiarWith.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
                <span className="text-3xl mr-3">🏆</span>
                Professional Certifications
              </h3>
              <p className="text-gray-300">
                Industry-recognized certifications from leading technology companies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="secondary" className="p-3 text-sm bg-gray-700 text-gray-100 hover:bg-gray-600">
                  {cert}
                </Badge>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-400 text-sm">
                Open to rotational shifts, hybrid/remote work, and cross-time-zone collaboration
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;