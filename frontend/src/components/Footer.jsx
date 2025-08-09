import React from 'react';
import { Github, Linkedin, Instagram, ExternalLink, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo, socialLinks } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" }
      ]
    },
    {
      title: "More",
      links: [
        { name: "Testimonials", href: "#testimonials" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" },
        { name: "Resume", href: personalInfo.resumeUrl, external: true }
      ]
    }
  ];

  const socialMedia = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: socialLinks.github
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: socialLinks.linkedin
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      url: socialLinks.instagram
    },
    {
      name: "Portfolio",
      icon: <ExternalLink className="h-5 w-5" />,
      url: socialLinks.portfolio
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-2xl font-bold">
                {personalInfo.name}
              </h3>
              <p className="text-gray-300 max-w-md leading-relaxed">
                {personalInfo.title} passionate about transforming data into actionable insights. 
                Let's connect and explore how data can drive your next breakthrough.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4 pt-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-lg font-semibold">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center space-x-2"
                        >
                          <span>{link.name}</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-2">Stay Connected</h4>
              <p className="text-gray-300 text-sm">
                Get the latest insights on data science, analytics, and tech trends.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-gray-400 text-sm">
                Built with React & FastAPI
              </div>
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-gray-800 p-2"
                title="Back to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;