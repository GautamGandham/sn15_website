import React, { useState } from 'react';
import { Globe, CheckCircle, Cpu, BarChart, Zap, Globe2, Code, Database, Smartphone, Shield, Palette, Settings, Users, Award, Target, Clock, TrendingUp, Play, ArrowRight, CheckCircle2, Monitor, Server, ShoppingCart, Layers, Rocket, Search } from 'lucide-react';

const CustomWebDevelopment = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const features = [
    'Responsive Web Design',
    'Full-Stack Development',
    'E-commerce Solutions',
    'Progressive Web Apps',
    'API Development',
    'Performance Optimization'
  ];

  const industries = [
    'Retail & E-commerce',
    'Healthcare & Medical',
    'Financial Services',
    'Education & E-Learning',
    'Real Estate & Property',
    'Technology & SaaS'
  ];

  const services = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: 'Frontend Development',
      description: 'Create stunning, responsive user interfaces with modern frameworks and cutting-edge design principles.',
      features: ['React/Vue/Angular apps', 'Responsive design', 'Interactive animations', 'Cross-browser compatibility']
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Backend Development',
      description: 'Build robust server-side applications with scalable architecture and secure data management.',
      features: ['RESTful APIs', 'Database design', 'Cloud integration', 'Security implementation']
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'E-commerce Solutions',
      description: 'Develop powerful online stores with seamless shopping experiences and payment processing.',
      features: ['Shopping cart systems', 'Payment gateways', 'Inventory management', 'Order tracking']
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Progressive Web Apps',
      description: 'Create app-like experiences that work seamlessly across all devices and platforms.',
      features: ['Offline functionality', 'Push notifications', 'App-like interface', 'Fast loading times']
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'API Development & Integration',
      description: 'Design and implement robust APIs for seamless data exchange and third-party integrations.',
      features: ['RESTful services', 'GraphQL APIs', 'Third-party integrations', 'Documentation']
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance Optimization',
      description: 'Enhance website speed, SEO rankings, and user experience through advanced optimization techniques.',
      features: ['Speed optimization', 'SEO implementation', 'Code splitting', 'Image optimization']
    }
  ];

  const capabilities = {
    'frontend': {
      title: 'Frontend Development',
      description: 'Modern user interface development with cutting-edge technologies',
      features: ['React/Vue/Angular frameworks', 'Responsive design systems', 'CSS-in-JS solutions', 'Progressive enhancement'],
      performance: '99.9%',
      speed: '<100ms'
    },
    'backend': {
      title: 'Backend Development',
      description: 'Scalable server-side architecture and robust API development',
      features: ['Node.js/Python/PHP', 'Microservices architecture', 'Database optimization', 'Cloud deployment'],
      performance: '99.8%',
      speed: '<200ms'
    },
    'fullstack': {
      title: 'Full-Stack Solutions',
      description: 'End-to-end web application development and deployment',
      features: ['Complete CRUD operations', 'Authentication systems', 'Real-time features', 'DevOps integration'],
      performance: '99.7%',
      speed: '<300ms'
    }
  };

  const stats = [
    { label: 'Uptime Guarantee', value: '99.9%', icon: <Target className="w-5 h-5" /> },
    { label: 'Load Time', value: '<2s', icon: <Zap className="w-5 h-5" /> },
    { label: 'Projects Delivered', value: '500+', icon: <Globe className="w-5 h-5" /> },
    { label: 'Client Satisfaction', value: '98%', icon: <Award className="w-5 h-5" /> }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business goals, target audience, and technical requirements to create a comprehensive development strategy.'
    },
    {
      step: '02', 
      title: 'Design & Prototyping',
      description: 'Create user-centered designs with interactive prototypes, ensuring optimal user experience and modern aesthetics.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build robust applications using best practices, with comprehensive testing and quality assurance throughout.'
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description: 'Deploy with performance optimization, ongoing monitoring, and continuous improvements based on analytics.'
    }
  ];

  const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'Angular', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'AWS', category: 'Cloud' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-r from-slate-100 to-blue-100">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Globe className="w-4 h-4" />
                Professional Web Development Services
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build Your
                <span className="block bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Transform your business with custom web applications that deliver exceptional user experiences, drive engagement, and accelerate growth across all digital platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Play className="w-5 h-5" />
                  View Portfolio
                </button>
                <button className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-200 border border-gray-200 hover:border-gray-300">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Enhanced Card Design */}
            <div className="w-full flex-shrink-0">
              <div className="bg-white/90 rounded-3xl shadow-2xl border border-blue-100 overflow-hidden flex flex-col items-center p-8">
                <div className="w-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-slate-200 relative p-6 mb-6 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Monitor className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Frontend</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Server className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Backend</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Smartphone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Mobile</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Database className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Database</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-200/60 to-transparent pointer-events-none rounded-2xl" />
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent flex items-center gap-2 mb-4">
                  <Globe className="w-8 h-8 text-blue-400" /> Custom Web Development
                </h1>
                <p className="text-base text-slate-700 mb-6 text-center">
                  Build powerful, scalable web applications that drive business growth and deliver exceptional digital experiences.
                </p>
                <div className="w-full">
                  <h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2 mb-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span> Key Features
                  </h2>
                  <ul className="list-none space-y-2 pl-0">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl text-blue-600 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Provide Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Web Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we deliver end-to-end web solutions that drive business growth and user engagement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Explore our web development expertise across different technologies
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="space-y-2">
                {Object.entries(capabilities).map(([key, capability]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-200 ${
                      activeTab === key
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white/80 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="font-semibold">{capability.title}</div>
                    <div className={`text-sm ${activeTab === key ? 'text-blue-100' : 'text-gray-500'}`}>
                      {capability.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {capabilities[activeTab].title}
                  </h3>
                  <p className="text-gray-600">
                    {capabilities[activeTab].description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Technologies</h4>
                    <ul className="space-y-2">
                      {capabilities[activeTab].features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-600">{capabilities[activeTab].performance}</div>
                      <div className="text-sm text-gray-600">Performance Score</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-green-600">{capabilities[activeTab].speed}</div>
                      <div className="text-sm text-gray-600">Response Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technology Stack We Master
            </h2>
            <p className="text-xl text-gray-600">
              We use cutting-edge technologies to build robust, scalable web solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center">
                <div className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</div>
                <div className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* How It Works Section */}
            <section className="bg-white/80 rounded-2xl shadow-lg border border-blue-100 px-8 py-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                <Settings className="w-6 h-6" />
                Development Process
              </h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Discovery & planning phase to understand your requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>UI/UX design and interactive prototyping</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Agile development with regular progress updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Comprehensive testing and quality assurance</span>
                </li>
              </ul>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-white/80 rounded-2xl shadow-lg border border-blue-100 px-8 py-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Why Choose Us
              </h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Expert team with 10+ years of web development experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Modern tech stack and industry best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Agile methodology with transparent communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>24/7 support and maintenance services</span>
                </li>
              </ul>
            </section>

            {/* Industries Served Section */}
            <section className="bg-white/80 rounded-2xl shadow-lg border border-blue-100 px-8 py-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Industries Served
              </h2>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <span key={industry} className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-900 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                    {industry}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                We deliver tailored web solutions across various industries, understanding unique challenges and requirements.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              From concept to launch, we follow a proven methodology to deliver exceptional web solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{process.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Rocket className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Build Your Web Presence?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Transform your digital vision into reality with our expert web development services. Let's create something amazing together.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center gap-2">
              View Portfolio
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomWebDevelopment;