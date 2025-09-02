import React, { useState } from 'react';
import { Smartphone, CheckCircle, Cpu, BarChart, Zap, Globe, Network, Workflow, Brain, Users, Target, TrendingUp, Play, ArrowRight, CheckCircle2, Award, Settings, Clock, Rocket, GitBranch, Activity, Layers, MessageSquare, Shield, Eye, Gauge, Lightbulb, Command, Monitor, Tablet, Watch, Code } from 'lucide-react';

const MobileAppDevelopment = () => {
  const [activeTab, setActiveTab] = useState('native-development');

  const features = [
    'Native iOS & Android Development',
    'Cross-platform React Native',
    'UI/UX Design & Prototyping',
    'App Store Optimization',
    'Performance Optimization',
    'Security & Testing'
  ];

  const industries = [
    'Healthcare & Telemedicine',
    'E-commerce & Retail',
    'Finance & Banking',
    'Education & E-learning',
    'Entertainment & Media',
    'Real Estate & Property'
  ];

  const services = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Native App Development',
      description: 'Build high-performance native applications for iOS and Android using platform-specific technologies and best practices.',
      features: ['Swift & Kotlin development', 'Platform optimization', 'Native UI components', 'Hardware integration']
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'Cross-Platform Solutions',
      description: 'Develop efficient apps that run seamlessly across multiple platforms using React Native, Flutter, and other frameworks.',
      features: ['Code reusability', 'Faster deployment', 'Unified codebase', 'Cross-platform testing']
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'UI/UX Design & Prototyping',
      description: 'Create intuitive, visually stunning mobile interfaces with user-centered design principles and comprehensive prototyping.',
      features: ['User research', 'Wireframing', 'Interactive prototypes', 'Design systems']
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'App Store Optimization',
      description: 'Maximize app visibility and downloads with strategic app store optimization and marketing techniques.',
      features: ['ASO strategy', 'Keyword optimization', 'App store listings', 'Performance tracking']
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: 'Performance Optimization',
      description: 'Ensure fast, responsive apps with advanced performance tuning, memory management, and optimization techniques.',
      features: ['Speed optimization', 'Memory management', 'Battery efficiency', 'Network optimization']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Quality Assurance',
      description: 'Comprehensive testing and security implementation to ensure reliable, secure mobile applications.',
      features: ['Security auditing', 'Automated testing', 'Quality assurance', 'Compliance verification']
    }
  ];

  const capabilities = {
    'native-development': {
      title: 'Native App Development',
      description: 'Platform-specific development for optimal performance and user experience',
      features: ['Swift & Objective-C for iOS', 'Kotlin & Java for Android', 'Platform-specific APIs', 'Hardware optimization'],
      performance: '99.2%',
      platforms: 'iOS & Android'
    },
    'cross-platform': {
      title: 'Cross-Platform Development',
      description: 'Unified development approach for multiple platforms with shared codebase',
      features: ['React Native expertise', 'Flutter development', 'Xamarin solutions', 'Progressive Web Apps'],
      performance: '95.8%',
      platforms: 'iOS, Android, Web'
    },
    'hybrid-solutions': {
      title: 'Hybrid Solutions',
      description: 'Best-of-both-worlds approach combining native and web technologies',
      features: ['Cordova/PhoneGap', 'Ionic framework', 'Web view optimization', 'Plugin development'],
      performance: '92.4%',
      platforms: 'Multi-platform'
    }
  };

  const stats = [
    { label: 'App Performance', value: '99.2%', icon: <Target className="w-5 h-5" /> },
    { label: 'Load Time', value: '<2s', icon: <Zap className="w-5 h-5" /> },
    { label: 'Platform Support', value: '10+', icon: <Network className="w-5 h-5" /> },
    { label: 'User Retention', value: '89%', icon: <TrendingUp className="w-5 h-5" /> }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy Planning',
      description: 'Comprehensive analysis of business requirements, target audience research, and strategic planning for optimal mobile app architecture.'
    },
    {
      step: '02', 
      title: 'Design & Prototyping',
      description: 'User-centered design approach with wireframing, interactive prototyping, and usability testing to ensure exceptional user experiences.'
    },
    {
      step: '03',
      title: 'Development & Integration',
      description: 'Agile development process with continuous integration, thorough testing, and seamless third-party service integrations.'
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description: 'Strategic app store deployment, performance monitoring, and continuous optimization based on user feedback and analytics.'
    }
  ];

  const appTypes = [
    { name: 'Native iOS Apps', category: 'Platform-Specific', icon: <Smartphone className="w-5 h-5" /> },
    { name: 'Native Android Apps', category: 'Platform-Specific', icon: <Monitor className="w-5 h-5" /> },
    { name: 'React Native Apps', category: 'Cross-Platform', icon: <Code className="w-5 h-5" /> },
    { name: 'Flutter Apps', category: 'Cross-Platform', icon: <Layers className="w-5 h-5" /> },
    { name: 'Progressive Web Apps', category: 'Web-Based', icon: <Globe className="w-5 h-5" /> },
    { name: 'Hybrid Apps', category: 'Multi-Platform', icon: <Network className="w-5 h-5" /> },
    { name: 'Wearable Apps', category: 'IoT & Devices', icon: <Watch className="w-5 h-5" /> },
    { name: 'Tablet Apps', category: 'Large Screen', icon: <Tablet className="w-5 h-5" /> }
  ];

  const technologies = [
    'React Native & Expo',
    'Flutter & Dart',
    'Swift & SwiftUI',
    'Kotlin & Jetpack Compose',
    'Xamarin & .NET',
    'Ionic & Capacitor',
    'Progressive Web Apps',
    'Unity for Gaming'
  ];

  const useCases = [
    {
      title: 'E-commerce Mobile Apps',
      description: 'Feature-rich shopping apps with payment integration',
      impact: '65% mobile conversion'
    },
    {
      title: 'Healthcare Patient Apps',
      description: 'Telemedicine and patient management solutions',
      impact: '80% patient engagement'
    },
    {
      title: 'Financial Services Apps',
      description: 'Secure banking and investment management platforms',
      impact: '45% user adoption'
    },
    {
      title: 'Educational Learning Apps',
      description: 'Interactive learning platforms and course management',
      impact: '70% completion rates'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-r from-slate-100 to-blue-100">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Smartphone className="w-4 h-4" />
                Professional Mobile App Development
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build Powerful
                <span className="block bg-gradient-to-r from-blue-700 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                  Mobile Apps
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Transform your business with cutting-edge mobile applications that deliver exceptional user experiences, seamless performance, and powerful functionality across iOS and Android platforms.
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
                <div className="w-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 relative p-6 mb-6 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Smartphone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Native</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Network className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Cross-Platform</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Eye className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">UI/UX</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Rocket className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Deployment</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-200/60 to-transparent pointer-events-none rounded-2xl" />
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-purple-400 bg-clip-text text-transparent flex items-center gap-2 mb-4">
                  <Smartphone className="w-8 h-8 text-blue-400" /> Mobile App Development
                </h1>
                <p className="text-base text-slate-700 mb-6 text-center">
                  Transform your business with cutting-edge mobile applications that deliver exceptional user experiences.
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
              Comprehensive Mobile Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From native iOS and Android development to cross-platform solutions, we deliver mobile applications that drive business growth and user engagement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-200">
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
              Development Technology Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Explore our expertise across different mobile development approaches
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
                    <h4 className="font-semibold text-gray-900 mb-3">Core Technologies</h4>
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
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-600">{capabilities[activeTab].performance}</div>
                      <div className="text-sm text-gray-600">Performance Score</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4">
                      <div className="text-lg font-bold text-green-600">{capabilities[activeTab].platforms}</div>
                      <div className="text-sm text-gray-600">Platform Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Types & Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* App Types */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  App Types We Develop
                </h2>
                <p className="text-lg text-gray-600">
                  Specialized mobile applications for different platforms and use cases
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {appTypes.map((app, index) => (
                  <div key={index} className="bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl text-blue-600 mb-4">
                      {app.icon}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{app.name}</div>
                    <div className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">{app.category}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies & Frameworks */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Technologies & Frameworks
                </h2>
                <p className="text-lg text-gray-600">
                  Cutting-edge development tools and frameworks for modern mobile apps
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {technologies.map((technology, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="font-semibold text-gray-900 text-center">{technology}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-600">
              Successful mobile app deployments delivering measurable business results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  {useCase.impact}
                </div>
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
                <Cpu className="w-6 h-6" />
                How It Works
              </h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Requirements analysis and strategic planning for optimal mobile architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>User-centered design with wireframing and interactive prototyping</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Agile development with continuous integration and testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>App store deployment and continuous optimization</span>
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
                  <span>Expert mobile developers with years of iOS and Android experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Proven track record with high user satisfaction and app store success</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>End-to-end support from concept through deployment and maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Focus on performance, security, and exceptional user experiences</span>
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
                  <span key={industry} className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-900 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                    {industry}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                We develop mobile applications across diverse industries, creating tailored solutions that meet specific business and user requirements.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              From discovery to deployment, we ensure successful mobile app development
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Smartphone className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Transform your business with powerful mobile applications that engage users, drive growth, and deliver exceptional experiences across all devices. Let's build your next mobile success story.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center gap-2">
              View App Portfolio
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppDevelopment;