import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What People Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Testimonials from colleagues, supervisors, and collaborators who have 
            experienced my work and dedication firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="relative hover:shadow-xl transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 bg-blue-600 rounded-full p-3 shadow-lg">
                <Quote className="h-6 w-6 text-white" />
              </div>

              <CardContent className="pt-12 pb-6 px-6">
                <div className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.position}
                        </p>
                        <p className="text-xs text-gray-500">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gray-50 border-none max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Ready to Work Together?
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  I'm passionate about collaborating on data-driven projects that make a 
                  real impact. Whether you need data analysis, machine learning solutions, 
                  or business intelligence insights, I'd love to discuss how we can work together.
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center pt-4">
                  <button
                    onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    Start a Conversation
                  </button>
                  <button
                    onClick={() => window.open('https://www.linkedin.com/in/abdulzuhail/', '_blank')}
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
                  >
                    Connect on LinkedIn
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;