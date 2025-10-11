import React, { useState } from 'react';
import { MessageCircle, CheckCircle, Cpu, BarChart, Zap, Globe, Network, Workflow, Brain, Users, Target, TrendingUp, Play, ArrowRight, CheckCircle2, Award, Settings, Clock, Rocket, GitBranch, Activity, Layers, Shield, Eye, Gauge, Lightbulb, Command, Mic, MessageSquare, Bot, Phone, Monitor } from 'lucide-react';

const AIChatbotDevelopment = () => {
  const [activeTab, setActiveTab] = useState('nlp-chatbots');

  const features = [
    'Natural Language Processing',
    'Multi-platform Integration',
    'Voice & Text Chatbots',
    'Machine Learning Training',
    'Sentiment Analysis',
    'Conversational AI'
  ];

  const industries = [
    'Customer Service & Support',
    'E-commerce & Retail',
    'Healthcare & Telemedicine',
    'Financial Services',
    'Education & Training',
    'Travel & Hospitality'
  ];

  const services = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Conversational AI Development',
      description: 'Build intelligent chatbots that understand context, learn from interactions, and provide human-like conversational experiences.',
      features: ['Intent recognition', 'Context awareness', 'Dialogue management', 'Response generation']
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP systems for understanding user queries, extracting entities, and generating contextually relevant responses.',
      features: ['Entity extraction', 'Sentiment analysis', 'Language understanding', 'Text classification']
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: 'Voice & Speech Integration',
      description: 'Multi-modal chatbots that handle both text and voice interactions with speech-to-text and text-to-speech capabilities.',
      features: ['Speech recognition', 'Voice synthesis', 'Audio processing', 'Multi-modal UI']
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'Multi-Platform Integration',
      description: 'Deploy chatbots across websites, mobile apps, messaging platforms, and voice assistants for unified experiences.',
      features: ['API integrations', 'Cross-platform deployment', 'Unified management', 'Channel optimization']
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Machine Learning & Training',
      description: 'Continuously improving chatbots through machine learning algorithms that learn from user interactions and feedback.',
      features: ['Model training', 'Performance optimization', 'A/B testing', 'Continuous learning']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security & Compliance',
      description: 'Secure chatbot implementations with data protection, privacy controls, and compliance with industry regulations.',
      features: ['Data encryption', 'Privacy controls', 'Compliance monitoring', 'Security protocols']
    }
  ];

  const capabilities = {
    'nlp-chatbots': {
      title: 'NLP-Powered Chatbots',
      description: 'Advanced natural language processing for intelligent conversational experiences',
      features: ['Intent classification', 'Named entity recognition', 'Context understanding', 'Multi-language support'],
      accuracy: '96.8%',
      responseTime: '<200ms'
    },
    'voice-assistants': {
      title: 'Voice Assistant Integration',
      description: 'Speech-enabled chatbots for hands-free interaction and accessibility',
      features: ['Speech-to-text conversion', 'Voice command processing', 'Audio response generation', 'Noise cancellation'],
      accuracy: '94.2%',
      responseTime: '<300ms'
    },
    'ai-training': {
      title: 'AI Model Training',
      description: 'Custom machine learning models trained on your specific domain and use cases',
      features: ['Domain-specific training', 'Transfer learning', 'Model fine-tuning', 'Performance optimization'],
      accuracy: '92.5%',
      responseTime: '<150ms'
    }
  };

  const stats = [
    { label: 'Response Accuracy', value: '96.8%', icon: <Target className="w-5 h-5" /> },
    { label: 'Response Time', value: '<200ms', icon: <Zap className="w-5 h-5" /> },
    { label: 'Platform Integration', value: '25+', icon: <Network className="w-5 h-5" /> },
    { label: 'User Satisfaction', value: '94%', icon: <TrendingUp className="w-5 h-5" /> }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Conversation Design & Analysis',
      description: 'Comprehensive analysis of user needs and design of intelligent conversational flows with natural dialogue patterns and context awareness.'
    },
    {
      step: '02', 
      title: 'NLP Model Development',
      description: 'Training advanced natural language processing models with domain-specific data for accurate intent recognition and response generation.'
    },
    {
      step: '03',
      title: 'Integration & Deployment',
      description: 'Seamless integration across multiple platforms and channels with comprehensive testing and gradual rollout strategies.'
    },
    {
      step: '04',
      title: 'Learning & Optimization',
      description: 'Continuous improvement through machine learning algorithms that adapt based on user interactions and performance metrics.'
    }
  ];

  const chatbotTypes = [
    { name: 'Rule-Based Chatbots', category: 'Traditional', icon: <Settings className="w-5 h-5" /> },
    { name: 'AI-Powered Chatbots', category: 'Intelligent', icon: <Brain className="w-5 h-5" /> },
    { name: 'Voice Assistants', category: 'Conversational', icon: <Mic className="w-5 h-5" /> },
    { name: 'Hybrid Chatbots', category: 'Advanced', icon: <Network className="w-5 h-5" /> },
    { name: 'Contextual Chatbots', category: 'Smart', icon: <Eye className="w-5 h-5" /> },
    { name: 'Multilingual Bots', category: 'Global', icon: <Globe className="w-5 h-5" /> },
    { name: 'Analytics Bots', category: 'Data-Driven', icon: <BarChart className="w-5 h-5" /> },
    { name: 'Integration Bots', category: 'Connected', icon: <Layers className="w-5 h-5" /> }
  ];

  const platforms = [
    'Web Chat Widgets',
    'WhatsApp Business API',
    'Facebook Messenger',
    'Slack Integration',
    'Microsoft Teams',
    'Telegram Bots',
    'Mobile App SDKs',
    'Voice Assistants (Alexa, Google)'
  ];

  const useCases = [
    {
      title: 'Customer Support Automation',
      description: 'Intelligent support chatbots with escalation management',
      impact: '75% query resolution'
    },
    {
      title: 'E-commerce Sales Assistant',
      description: 'Product recommendation and purchase assistance bots',
      impact: '45% conversion boost'
    },
    {
      title: 'Healthcare Virtual Assistant',
      description: 'Symptom checking and appointment scheduling systems',
      impact: '60% efficiency gain'
    },
    {
      title: 'Lead Generation & Qualification',
      description: 'Automated lead capture and customer qualification',
      impact: '80% lead qualification'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-r from-slate-100 to-blue-100">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <MessageCircle className="w-4 h-4" />
                Intelligent Conversational AI Solutions
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build Smart
                <span className="block bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  AI Chatbots
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Create intelligent conversational AI that understands, learns, and delivers exceptional customer experiences with advanced natural language processing and machine learning capabilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Play className="w-5 h-5" />
                  Try Live Demo
                </button>
                <button className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-200 border border-gray-200 hover:border-gray-300">
                  View Solutions
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
                      <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Chat</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Mic className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Voice</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Brain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">AI/ML</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Network className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Integration</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-200/60 to-transparent pointer-events-none rounded-2xl" />
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 bg-clip-text text-transparent flex items-center gap-2 mb-4">
                  <MessageCircle className="w-8 h-8 text-blue-400" /> AI Chatbot Development
                </h1>
                <p className="text-base text-slate-700 mb-6 text-center">
                  Create intelligent conversational AI that understands, learns, and provides exceptional customer experiences.
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
              Comprehensive Chatbot Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intelligent conversation design to advanced AI training, we deliver chatbot solutions that transform customer interactions and business operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-200">
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
              Chatbot Technology Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Explore our expertise across different chatbot technologies and implementations
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
                    <h4 className="font-semibold text-gray-900 mb-3">Core Capabilities</h4>
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
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-600">{capabilities[activeTab].accuracy}</div>
                      <div className="text-sm text-gray-600">Response Accuracy</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-green-600">{capabilities[activeTab].responseTime}</div>
                      <div className="text-sm text-gray-600">Response Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Types & Platforms */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Chatbot Types */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Chatbot Types We Build
                </h2>
                <p className="text-lg text-gray-600">
                  Specialized chatbots for different use cases and complexity levels
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {chatbotTypes.map((chatbot, index) => (
                  <div key={index} className="bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl text-blue-600 mb-4">
                      {chatbot.icon}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{chatbot.name}</div>
                    <div className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">{chatbot.category}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration Platforms */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Platform Integrations
                </h2>
                <p className="text-lg text-gray-600">
                  Deploy chatbots across all major platforms and communication channels
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {platforms.map((platform, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="font-semibold text-gray-900 text-center">{platform}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-600">
              Proven chatbot solutions delivering measurable business impact
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
                  <span>Conversational design and intelligent flow analysis for natural interactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>AI model training with domain-specific data and context understanding</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Multi-platform deployment with seamless integration capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Continuous learning and optimization based on user interactions</span>
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
                  <span>Expertise in NLP and machine learning with proven implementations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Human-like conversational experiences with emotional intelligence</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Comprehensive support from design through deployment and optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Focus on measurable business outcomes and customer satisfaction</span>
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
                  <span key={industry} className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-900 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                    {industry}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                We develop chatbots across diverse industries, creating intelligent conversational experiences tailored to specific business requirements.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              From concept to deployment, we ensure successful chatbot implementation
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Build Your AI Chatbot?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Transform your customer interactions with intelligent conversational AI that understands, learns, and delivers exceptional experiences. Let's create the perfect chatbot solution for your business.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Start Building
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center gap-2">
              View Demo Gallery
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIChatbotDevelopment;