import React, { useState } from 'react';
import { Sparkles, Brain, PenTool, MessageSquare, Code, Zap, Clock, Users, CheckCircle2, ArrowRight, Play, BarChart3, Settings, Cpu, Database, Award, TrendingUp, FileText, Video, Music, Target, CheckCircle, Lightbulb, Mic } from 'lucide-react';

const GenerativeAISolutions = () => {
 const [activeTab, setActiveTab] = useState('chatbots-ivr');

 const features = [
 'Advanced Chatbot Creation',
 'Intelligent IVR Development',
 'AWS Cloud Integration',
 'Real-time Deployment',
 'Scalable Architecture',
 'Enterprise-Grade Security'
 ];

 const industries = [
 'Telecommunications',
 'Customer Support',
 'Banking & Finance',
 'Healthcare',
 'E-commerce',
 'Insurance'
 ];

 const services = [
 {
 icon: <MessageSquare className="w-6 h-6" />,
 title: 'Intelligent Chatbot Creation',
 description: 'Create sophisticated chatbots with advanced NLP capabilities and seamless AWS cloud deployment.',
 features: ['Natural language understanding', 'Multi-channel deployment', 'AWS Lex integration', 'Real-time analytics']
 },
 {
 icon: <Mic className="w-6 h-6" />,
 title: 'Smart IVR Systems',
 description: 'Develop intelligent voice response systems with AWS Connect and advanced speech recognition.',
 features: ['Voice-to-text processing', 'Smart call routing', 'AWS Connect integration', 'Multi-language support']
 },
 {
 icon: <Database className="w-6 h-6" />,
 title: 'AWS Cloud Deployment',
 description: 'Deploy and scale your chatbot and IVR solutions using robust AWS cloud infrastructure.',
 features: ['Auto-scaling capabilities', 'High availability setup', 'Cost optimization', 'Global deployment']
 },
 {
 icon: <Brain className="w-6 h-6" />,
 title: 'AI Model Integration',
 description: 'Integrate cutting-edge AI models for enhanced conversation and voice recognition capabilities.',
 features: ['Machine learning models', 'Custom AI training', 'Performance optimization', 'Continuous learning']
 }
 ];

 const capabilities = {
 'chatbots-ivr': {
 title: 'Chatbot & IVR Creation',
 description: 'Create and deploy intelligent conversational agents and voice systems using AWS services.',
 features: ['Advanced conversation flows', 'Multi-platform integration', 'AWS Lex & Connect', 'Real-time processing'],
 accuracy: '97.2%',
 speed: '<120ms'
 },
 'aws-deployment': {
 title: 'AWS Cloud Architecture',
 description: 'Design and implement scalable cloud architectures for chatbot and IVR deployments.',
 features: ['Serverless architecture', 'Auto-scaling infrastructure', 'Security compliance', 'Cost optimization'],
 accuracy: '99.1%',
 speed: '<85ms'
 },
 'custom-training': {
 title: 'AI Model Development',
 description: 'Create and train custom AI models optimized for specific chatbot and IVR use cases.',
 features: ['Custom NLP models', 'Voice recognition training', 'Performance tuning', 'Continuous improvement'],
 accuracy: '96.8%',
 speed: '<150ms'
 }
 };

 const stats = [
 { label: 'Response Accuracy', value: '97.2%', icon: <Target className="w-5 h-5" /> },
 { label: 'Response Time', value: '<120ms', icon: <Zap className="w-5 h-5" /> },
 { label: 'AWS Services Used', value: '15+', icon: <Database className="w-5 h-5" /> },
 { label: 'Deployments', value: '500+', icon: <MessageSquare className="w-5 h-5" /> }
 ];

 const processSteps = [
 {
 step: '01',
 title: 'Requirements & Analysis',
 description: 'We analyze your business needs to design optimal chatbot and IVR solutions using AWS services.'
 },
 {
 step: '02', 
 title: 'Design & Development',
 description: 'Create intelligent chatbots and IVR systems with AWS Lex, Connect, and Lambda integration.'
 },
 {
 step: '03',
 title: 'AWS Cloud Deployment',
 description: 'Deploy solutions on AWS with auto-scaling, high availability, and security best practices.'
 },
 {
 step: '04',
 title: 'Monitoring & Optimization',
 description: 'Continuous monitoring, performance optimization, and enhancement using AWS CloudWatch and analytics.'
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
 AWS-Powered Conversational AI
 </div>
 
 <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
 Create & Deploy Smart
 <span className="block bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent">
 Chatbots & IVR
 </span>
 </h1>
 
 <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
 We specialize in creating and deploying intelligent chatbots and IVR systems using AWS cloud services. Build scalable, secure, and high-performance conversational solutions.
 </p>
 
 <div className="flex flex-col sm:flex-row gap-4">
 <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
 <Play className="w-5 h-5" />
 See Live Demo
 </button>
 <button className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-200 border border-gray-200 hover:border-gray-300">
 AWS Solutions
 <ArrowRight className="w-5 h-5" />
 </button>
 </div>
 </div>
 
 <div className="w-full flex-shrink-0">
 <div className="bg-white/90 rounded-3xl shadow-2xl border border-blue-100 overflow-hidden flex flex-col items-center p-8">
 <div className="w-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-slate-200 relative p-6 mb-6 rounded-2xl">
 <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
 <div className="bg-white/80 rounded-xl p-4 text-center">
 <Sparkles className="w-8 h-8 text-blue-600 mx-auto mb-2" />
 <p className="text-sm font-semibold text-gray-800">AWS Chatbots</p>
 </div>
 <div className="bg-white/80 rounded-xl p-4 text-center">
 <Mic className="w-8 h-8 text-blue-600 mx-auto mb-2" />
 <p className="text-sm font-semibold text-gray-800">Smart IVR</p>
 </div>
 <div className="bg-white/80 rounded-xl p-4 text-center">
 <Database className="w-8 h-8 text-blue-600 mx-auto mb-2" />
 <p className="text-sm font-semibold text-gray-800">Cloud Deploy</p>
 </div>
 <div className="bg-white/80 rounded-xl p-4 text-center">
 <Brain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
 <p className="text-sm font-semibold text-gray-800">AI Integration</p>
 </div>
 </div>
 <div className="absolute inset-0 bg-gradient-to-t from-blue-200/60 to-transparent pointer-events-none rounded-2xl" />
 </div>
 <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent flex items-center gap-2 mb-4">
 <Sparkles className="w-8 h-8 text-blue-400" /> AWS Conversational AI
 </h1>
 <p className="text-base text-slate-700 mb-6 text-center">
 Expert in creating and deploying intelligent chatbots and IVR systems using AWS cloud services for enterprise-grade solutions.
 </p>
 <div className="w-full">
 <h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2 mb-3">
 <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span> Core Capabilities
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
 Our AWS-Powered Services
 </h2>
 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
 We create and deploy intelligent chatbots and IVR systems using AWS cloud services, delivering scalable and secure conversational AI solutions.
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
 Technical Expertise
 </h2>
 <p className="text-xl text-gray-600">
 Deep expertise in AWS services for creating and deploying conversational AI solutions
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
 <div className="text-sm text-gray-600">Response Time</div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Enhanced Sections */}
 <section className="py-20">
 <div className="max-w-7xl mx-auto px-6">
 <div className="grid lg:grid-cols-3 gap-8">
 {/* How It Works Section */}
 <section className="bg-white/80 rounded-2xl shadow-lg border border-purple-100 px-8 py-8 hover:shadow-xl transition-shadow duration-300">
 <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
 <Settings className="w-6 h-6" />
 Our Process
 </h2>
 <ul className="space-y-3 text-slate-700">
 <li className="flex items-start gap-3">
 <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
 <span>Analyze requirements and design chatbot/IVR architecture using AWS services.</span>
 </li>
 <li className="flex items-start gap-3">
 <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
 <span>Develop intelligent systems with AWS Lex, Connect, and Lambda integration.</span>
 </li>
 <li className="flex items-start gap-3">
 <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
 <span>Deploy on AWS cloud with auto-scaling and high availability setup.</span>
 </li>
 <li className="flex items-start gap-3">
 <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
 <span>Monitor performance and optimize using AWS CloudWatch analytics.</span>
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
 <span>AWS certified experts specializing in conversational AI solutions.</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
 <span>Proven track record in creating scalable chatbot and IVR systems.</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
 <span>End-to-end deployment on AWS cloud infrastructure.</span>
 </li>
 <li className="flex items-start gap-3">
 <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
 <span>24/7 monitoring and continuous optimization services.</span>
 </li>
 </ul>
 </section>

 {/* Industries Served Section */}
 <section className="bg-white/80 rounded-2xl shadow-lg border border-purple-100 px-8 py-8 hover:shadow-xl transition-shadow duration-300">
 <h2 className="text-2xl font-bold text-purple-700 mb-4 flex items-center gap-2">
 <Users className="w-6 h-6" />
 Industries We Serve
 </h2>
 <div className="flex flex-wrap gap-2">
 {industries.map((industry) => (
 <span key={industry} className="bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-900 px-4 py-2 rounded-full text-sm font-medium border border-purple-200 shadow-sm hover:shadow-md transition-shadow duration-200">
 {industry}
 </span>
 ))}
 </div>
 <p className="mt-4 text-sm text-gray-600 leading-relaxed">
 We deploy intelligent chatbots and IVR systems across diverse industries using AWS cloud services for maximum scalability and performance.
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
 From concept to deployment, we ensure seamless creation and deployment of AI solutions on AWS
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
 Ready to Deploy Smart Solutions?
 </h2>
 <p className="text-xl text-purple-100 mb-8">
 Transform your customer interactions with our expertly crafted chatbots and IVR systems deployed on secure, scalable AWS cloud infrastructure.
 </p>
 </div>
 
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center gap-2">
 <Brain className="w-5 h-5" />
 Start Your Project
 </button>
 <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center gap-2">
 View AWS Solutions
 <ArrowRight className="w-5 h-5" />
 </button>
 </div>
 </div>
 </section>
 </div>
 );
};

export default GenerativeAISolutions;