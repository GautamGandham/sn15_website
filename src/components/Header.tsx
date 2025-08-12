import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp, Brain, Code, Smartphone, Cloud, Bot, Eye, Sparkles, Settings, Zap, Globe } from 'lucide-react';
import sn15Logo from '../assets/sn15-logo.png';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [showFloatingLogo, setShowFloatingLogo] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  
  // Categorized service dropdown structure
  const serviceCategories = [
    {
      title: 'AI/ML Solutions',
      icon: <Brain className="w-5 h-5" />,
      services: [
        { 
          name: 'Computer Vision', 
          path: '/services/computer-vision', 
          icon: <Eye className="w-4 h-4" />,
          description: 'Advanced image & video analysis solutions'
        },
        { 
          name: 'Generative AI Solutions', 
          path: '/services/generative-ai', 
          icon: <Sparkles className="w-4 h-4" />,
          description: 'Content creation & AI automation'
        },
        { 
          name: 'Model Training & Optimization', 
          path: '/services/model-training', 
          icon: <Settings className="w-4 h-4" />,
          description: 'Custom AI model development'
        },
        { 
          name: 'Agentic AI Systems', 
          path: '/services/agentic-ai', 
          icon: <Zap className="w-4 h-4" />,
          description: 'Autonomous AI agent solutions'
        },
        { 
          name: 'AI & ML Chatbot Development', 
          path: '/services/ai-chatbot-development', 
          icon: <Bot className="w-4 h-4" />,
          description: 'Intelligent conversational interfaces'
        }
      ]
    },
    {
      title: 'Software Development',
      icon: <Code className="w-5 h-5" />,
      services: [
        { 
          name: 'Mobile App Development', 
          path: '/services/mobile-app-development', 
          icon: <Smartphone className="w-4 h-4" />,
          description: 'Native & cross-platform mobile apps'
        },
        { 
          name: 'Custom Web Development', 
          path: '/services/custom-web-development', 
          icon: <Globe className="w-4 h-4" />,
          description: 'Modern web applications & platforms'
        },
        { 
          name: 'Custom Enterprise Software', 
          path: '/services/enterprise-software', 
          icon: <Settings className="w-4 h-4" />,
          description: 'Scalable enterprise solutions'
        },
        { 
          name: 'Cloud Computing & DevOps', 
          path: '/services/cloud-devops', 
          icon: <Cloud className="w-4 h-4" />,
          description: 'Infrastructure & deployment solutions'
        }
      ]
    }
  ];

  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      // Show floating logo when scrolled down
      if (currentScrollY > 200) {
        setShowFloatingLogo(true);
      } else {
        setShowFloatingLogo(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Demo', href: '/demo' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 py-2 ${
          isScrolled 
            ? 'bg-slate-700/95 backdrop-blur-md shadow-lg border-b border-slate-600' 
            : 'bg-slate-700/90 backdrop-blur-sm shadow-md'
        } ${isHidden ? '-translate-y-full pointer-events-none' : 'translate-y-0 pointer-events-auto'} transform`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <img 
                  src={sn15Logo} 
                  alt="SN15 AI & Robotics Logo" 
                  className="h-16 w-16 object-contain" 
                />
                <span className="text-lg font-semibold text-white leading-tight">
                  SN Fifteen AI &<br />Robotics
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) =>
                item.name === 'Services' ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => {
                      if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
                      setServicesOpen(true);
                    }}
                    onMouseLeave={() => {
                      servicesTimeout.current = setTimeout(() => setServicesOpen(false), 150);
                    }}
                  >
                    <span
                      className={`text-sm font-medium transition-all duration-200 hover:text-blue-300 relative ${
                        location.pathname.startsWith('/services')
                          ? 'text-blue-300 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-300'
                          : 'text-slate-200 hover:text-white'
                      } flex items-center cursor-pointer`}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                    </span>
                    
                    {/* Enhanced Dropdown */}
                    <div
                      className={`absolute left-0 mt-3 w-[600px] z-50 transition-all duration-300 ${
                        servicesOpen 
                          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
                          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                      } origin-top`}
                      onMouseEnter={() => {
                        if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
                        setServicesOpen(true);
                      }}
                      onMouseLeave={() => {
                        servicesTimeout.current = setTimeout(() => setServicesOpen(false), 150);
                      }}
                    >
                      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 ring-1 ring-blue-100/40 overflow-hidden">
                        <div className="grid grid-cols-2 gap-0">
                          {serviceCategories.map((category, categoryIndex) => (
                            <div 
                              key={category.title} 
                              className={`p-6 ${categoryIndex === 0 ? 'border-r border-slate-200' : ''}`}
                            >
                              {/* Category Header */}
                              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                  {category.icon}
                                </div>
                                <h3 className="font-bold text-lg text-slate-800">{category.title}</h3>
                              </div>
                              
                              {/* Category Services */}
                              <div className="space-y-1">
                                {category.services.map((service) => (
                                  <Link
                                    key={service.path}
                                    to={service.path}
                                    className="block px-3 py-3 rounded-xl hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 group"
                                    onClick={() => setServicesOpen(false)}
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className="text-slate-400 group-hover:text-blue-500 transition-colors duration-200 mt-1">
                                        {service.icon}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="font-semibold text-slate-700 group-hover:text-blue-700 text-sm leading-tight mb-1">
                                          {service.name}
                                        </div>
                                        <div className="text-xs text-slate-500 group-hover:text-blue-600 leading-relaxed">
                                          {service.description}
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Footer CTA */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-t border-slate-100">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-slate-700">Need a custom solution?</p>
                              <p className="text-xs text-slate-500">Let's discuss your specific requirements</p>
                            </div>
                            <Link
                              to="/contact"
                              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                              onClick={() => setServicesOpen(false)}
                            >
                              Get in Touch
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-all duration-200 hover:text-blue-300 relative ${
                      location.pathname === item.href
                        ? 'text-blue-300 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-blue-300'
                        : 'text-slate-200 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>

            <div className="hidden md:flex items-center space-x-3">
              <Link
                to="/book-demo"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Book Demo
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-200 hover:text-white transition-colors duration-200 p-1"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-3 pt-3 border-t border-slate-600">
              <nav className="flex flex-col space-y-3">
                {navigation.map((item) => 
                  item.name === 'Services' ? (
                    <div key={item.name}>
                      <span className="text-sm font-medium text-slate-200 py-1 block">Services</span>
                      <div className="ml-4 mt-2 space-y-2">
                        {serviceCategories.map((category) => (
                          <div key={category.title} className="space-y-1">
                            <div className="text-xs font-medium text-blue-300 uppercase tracking-wide py-1">
                              {category.title}
                            </div>
                            {category.services.map((service) => (
                              <Link
                                key={service.path}
                                to={service.path}
                                className="block text-sm text-slate-300 hover:text-white py-1 pl-2"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-sm font-medium transition-colors duration-200 py-1 ${
                        location.pathname === item.href
                          ? 'text-blue-300'
                          : 'text-slate-200 hover:text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                )}
                <Link
                  to="/book-demo"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200 text-center mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Demo
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
      
      {/* Floating Circular Logo */}
      <motion.div
        className="fixed top-8 left-8 z-40"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ 
          opacity: showFloatingLogo ? 1 : 0,
          scale: showFloatingLogo ? 1 : 0.8,
          y: showFloatingLogo ? 0 : 20
        }}
        transition={{ 
          duration: 0.6,
          ease: "easeOut"
        }}
        style={{ pointerEvents: showFloatingLogo ? 'auto' : 'none' }}
      >
        <Link to="/" className="block">
          <div className="bg-white rounded-full shadow-2xl border-2 border-blue-200 p-4 hover:shadow-3xl hover:scale-105 transition-all duration-300">
            <img 
              src={sn15Logo} 
              alt="SN15 AI & Robotics Logo" 
              className="h-20 w-20 object-contain rounded-full" 
            />
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default Header;