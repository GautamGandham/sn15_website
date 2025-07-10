import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-saddlebrown-300 text-saddlebrown-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold">Sn15 AI & Robotics</span>
            </div>
            <p className="text-primary-200 mb-6 max-w-md">
              Revolutionizing warehouse operations with cutting-edge AI and robotics solutions. 
              Transform your logistics with intelligent automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-300 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" className="text-primary-300 hover:text-white transition-colors duration-200">Services</Link></li>
              <li><Link to="/demo" className="text-primary-300 hover:text-white transition-colors duration-200">Product Demo</Link></li>
              <li><Link to="/team" className="text-primary-300 hover:text-white transition-colors duration-200">Our Team</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-primary-200">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-primary-200">info@snfifteen.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-400" />
                <span className="text-primary-200">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <p className="text-primary-300">
            © 2024 SnFifteen AI & Robotics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;