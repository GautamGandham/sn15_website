import React, { useState } from 'react';
import { Sparkles, Brain, PenTool, MessageSquare, Code, Zap, Clock, Users, CheckCircle2, ArrowRight, Play, BarChart3, Settings, Cpu, Database, Award, TrendingUp, FileText, Video, Music, Target, CheckCircle, Lightbulb, Mic } from 'lucide-react';

const GenerativeAISolutions = () => {
  const [activeTab, setActiveTab] = useState('text-generation');

  const features = [
    'Large Language Models (LLMs)',
    'Content generation automation',
    'Custom GPT implementations',
    'Natural language processing',
    'Multi-modal AI capabilities',
    'Real-time content creation'
  ];

  const industries = [
    'Media & Entertainment',
    'Marketing & Advertising',
    'Education & E-Learning',
    'Publishing & Journalism',
    'Software Development',
    'Customer Support'
  ];

  const services = [
    {
      icon: <PenTool className="w-6 h-6" />,
      title: 'Content Creation & Copywriting',
      description: 'Generate high-quality articles, blogs, marketing copy, and creative content tailored to your brand voice and style.',
      features: ['Blog post generation', 'Marketing copy creation', 'Social media content', 'Email campaigns']
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Conversational AI & Chatbots',
      description: 'Build intelligent chatbots and virtual assistants with natural conversation capabilities and personality.',
      features: ['Customer service bots', 'Virtual assistants', 'Interactive FAQ systems', 'Voice-enabled interfaces']
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Code Generation & Documentation',
      description: 'Automated code generation, debugging assistance, and comprehensive technical documentation creation.',
      features: ['Code completion', 'Bug detection & fixes', 'API documentation', 'Code commenting']
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Multi-Modal Content Generation',
      description: 'Create diverse content types including text, images, audio, and video with unified AI models.',
      features: ['Image generation', 'Video script writing', 'Audio transcription', 'Visual content creation']
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Custom LLM Training & Fine-tuning',
      description: 'Develop specialized language models trained on your domain-specific data and requirements.',
      features: ['Domain-specific training', 'Model optimization', 'Performance tuning', 'Custom embeddings']
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Creative & Strategic Content',
      description: 'Generate innovative ideas, strategic content plans, and creative solutions for complex challenges.',
      features: ['Idea generation', 'Content strategy', 'Creative brainstorming', 'Trend analysis']
    }
  ];

  const capabilities = {
    'text-generation': {
      title: 'Text Generation & Language Models',
      description: 'Advanced natural language generation with contextual understanding',
      features: ['Multi-language support', 'Style customization', 'Domain adaptation', 'Fact-checking integration'],
      accuracy: '95.8%',
      speed: '<200ms'
    },
    'conversational-ai': {
      title: 'Conversational AI & Chatbots',
      description: 'Intelligent dialogue systems with personality and context awareness',
      features: ['Multi-turn conversations', 'Emotion recognition', 'Intent classification', 'Memory retention'],
      accuracy: '94.2%',
      speed: '<150ms'
    },
    'code-generation': {
      title: 'Code Generation & Programming',
      description: 'Automated code generation and programming assistance',
      features: ['Multiple languages', 'Code completion', 'Bug detection', 'Documentation'],
      accuracy: '92.5%',
      speed: '<300ms'
    }
  };

  const stats = [
    { label: 'Content Accuracy', value: '95.8%', icon: <Target className="w-5 h-5" /> },
    { label: 'Generation Speed', value: '<200ms', icon: <Zap className="w-5 h-5" /> },
    { label: 'Languages Supported', value: '40+', icon: <MessageSquare className="w-5 h-5" /> },
    { label: 'Models Deployed', value: '300+', icon: <Database className="w-5 h-5" /> }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Content Analysis & Strategy',
      description: 'We analyze your content needs, target audience, and business goals to create a comprehensive AI strategy.'
    },
    {
      step: '02', 
      title: 'Custom Model Development',
      description: 'Design and train custom generative AI models tailored to your specific use cases and industry requirements.'
    },
    {
      step: '03',
      title: 'Seamless Integration',
      description: 'Integrate AI solutions seamlessly into your existing content workflows with comprehensive testing and quality assurance.'
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Continuous improvement, performance monitoring, and ongoing support to ensure optimal results and evolving needs.'
    }
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
                <Sparkles className="w-4 h-4" />
                Next-Generation AI Content Solutions
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your
                <span className="block bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent">
                  Creative Intelligence
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Unlock the power of Generative AI with our cutting-edge solutions. From intelligent content creation to automated workflows, we help businesses innovate and scale creatively.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Play className="w-5 h-5" />
                  Try Live Demo
                </button>
                <button className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-200 border border-gray-200 hover:border-gray-300">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Original Card Design Enhanced */}
            <div className="w-full flex-shrink-0">
              <div className="bg-white/90 rounded-3xl shadow-2xl border border-blue-100 overflow-hidden flex flex-col items-center p-8">
                <div className="w-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-slate-200 relative p-6 mb-6 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Sparkles className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">AI Content</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Brain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Smart Models</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <MessageSquare className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Chatbots</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Code className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Code Gen</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-200/60 to-transparent pointer-events-none rounded-2xl" />
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent flex items-center gap-2 mb-4">
                  <Sparkles className="w-8 h-8 text-blue-400" /> Generative AI Solutions
                </h1>
                <p className="text-base text-slate-700 mb-6 text-center">
                  AI models that generate human-like content, enabling your business to unlock creativity and efficiency at scale.
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
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl text-purple-600 mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-200">
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
              Comprehensive Generative AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge AI solutions deliver exceptional creativity and efficiency across diverse content generation needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Explore our advanced generative AI technologies in detail
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
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-white/80 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="font-semibold">{capability.title}</div>
                    <div className={`text-sm ${activeTab === key ? 'text-purple-100' : 'text-gray-500'}`}>
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
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
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
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-purple-600">{capabilities[activeTab].accuracy}</div>
                      <div className="text-sm text-gray-600">Accuracy Rate</div>
                    </div>
                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-pink-600">{capabilities[activeTab].speed}</div>
                      <div className="text-sm text-gray-600">Processing Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Sections from Original */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* How It Works Section */}
            <section className="bg-white/80 rounded-2xl shadow-lg border border-purple-100 px-8 py-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                <Settings className="w-6 h-6" />
                How It Works
              </h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>We analyze your content needs, target audience, and business goals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Design and train custom generative AI models for your specific use case.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Integrate AI seamlessly into your existing content workflows.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Continuous improvement and support for your evolving needs.</span>
                </li>
              </ul>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-white/80 rounded-2xl shadow-lg border border-purple-100 px-8 py-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Why Choose Us
              </h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Expertise in state-of-the-art generative AI and large language models.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Proven results in content automation and significant creativity enhancement.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>End-to-end support from initial ideation through deployment and optimization.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>24/7 technical support and continuous model improvement services.</span>
                </li>
              </ul>
            </section>

            {/* Industries Served Section */}
            <section className="bg-white/80 rounded-2xl shadow-lg border border-purple-100 px-8 py-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Industries Served
              </h2>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <span key={industry} className="bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-900 px-4 py-2 rounded-full text-sm font-medium border border-purple-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                    {industry}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                We serve diverse industries with customized AI solutions tailored to specific sector requirements and compliance standards.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              From consultation to deployment, we ensure seamless integration of generative AI solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-purple-600 text-white rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0">
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join innovative companies already leveraging our generative AI technology to revolutionize their creative workflows and boost productivity.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Start Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center gap-2">
              View Success Stories
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenerativeAISolutions;