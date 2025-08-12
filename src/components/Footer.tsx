import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-700 text-slate-100 rounded-t-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">SN FIFTEEN AI & ROBOTICS</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              Leading the future of warehouse automation with enterprise-grade AI and robotics solutions. 
              Enhance operational efficiency, reduce costs, and scale your logistics operations with our proven technology.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/demo" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Request Demo
                </Link>
              </li>
              <li>
                <Link 
                  to="/team" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link 
                  to="/case-studies" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a 
                  href="tel:+15551234567" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:info@snfifteen.com" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  info@snfifteen.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  bhavanipuram<br />
                  vijayawada, andhra pradesh, india
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2024 SnFifteen AI & Robotics. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/support" className="text-slate-400 hover:text-white transition-colors duration-200">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;