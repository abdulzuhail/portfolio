import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';
import { blogPosts } from '../data/mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);

    try {
      const response = await axios.post(`${API}/newsletter/subscribe`, { email });
      
      if (response.data.success) {
        toast({
          title: response.data.already_subscribed ? "Already subscribed!" : "Successfully subscribed!",
          description: response.data.message,
        });
        
        if (!response.data.already_subscribed) {
          setEmail('');
        }
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      
      let errorMessage = "Sorry, there was an error subscribing. Please try again.";
      if (error.response?.data?.detail) {
        errorMessage = error.response.data.detail;
      }
      
      toast({
        title: "Subscription failed",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubscribing(false);
    }
  };
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sharing knowledge, insights, and perspectives on data science, 
            machine learning, and the latest trends in analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className={`group hover:shadow-xl transition-all duration-300 cursor-pointer ${
                index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <CardHeader className="p-0">
                <div className={`relative overflow-hidden rounded-t-lg ${
                  index === 0 ? 'h-64' : 'h-48'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">📖</div>
                      <h3 className="text-lg font-semibold">{post.category}</h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                      <Tag className="h-3 w-3 mr-1" />
                      {post.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Meta Information */}
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 ${
                    index === 0 ? 'text-2xl' : 'text-xl'
                  }`}>
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More Button */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <Button
                      variant="ghost"
                      className="group/btn text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Blog CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Don't miss out on the latest insights, tutorials, and industry trends. 
                    Subscribe to my newsletter for regular updates on data science and analytics.
                  </p>
                </div>

                {/* Newsletter Signup */}
                <div className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    No spam, unsubscribe at any time.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-6 pt-6 border-t border-gray-700">
                  <a
                    href="https://github.com/abdulzuhail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="sr-only">GitHub</span>
                    <div className="text-sm font-medium">GitHub Articles</div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abdulzuhail/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <div className="text-sm font-medium">LinkedIn Posts</div>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;