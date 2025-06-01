import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-800 border-t border-dark-700 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <div className="text-white font-heading font-bold text-2xl flex items-center">
                <Zap size={28} className="text-primary-500 mr-2" />
                <span>Evoke<span className="text-primary-500">.</span></span>
              </div>
            </Link>
            <p className="text-dark-300 text-sm">
              Empowering small businesses through innovative digital solutions. Your tech partner for growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-dark-300 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-dark-300 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-dark-300 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-dark-300 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-xl mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-dark-300 hover:text-primary-500 transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-dark-300 hover:text-primary-500 transition-colors">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-dark-300 hover:text-primary-500 transition-colors">
                  Custom Web Applications
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-dark-300 hover:text-primary-500 transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-dark-300 hover:text-primary-500 transition-colors">
                  Content Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-dark-300 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-dark-300 hover:text-primary-500 transition-colors">
                  Pricing & Packages
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark-300 hover:text-primary-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-dark-300 hover:text-primary-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-dark-300 hover:text-primary-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-semibold text-xl mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="text-primary-500 mt-1 mr-3" />
                <span className="text-dark-300">info@evokeservices.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-primary-500 mt-1 mr-3" />
                <span className="text-dark-300">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-500 mt-1 mr-3" />
                <span className="text-dark-300">
                  Tech Hub, 123 Digital Avenue,<br />
                  Bengaluru, 560001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-400 text-sm">
            &copy; {new Date().getFullYear()} Evoke IT Services. All rights reserved.
          </p>
          <p className="text-dark-400 text-sm mt-4 md:mt-0">
            Designed & Developed with <span className="text-secondary-500">❤</span> for businesses
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;