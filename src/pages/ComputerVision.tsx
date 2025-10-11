import React, { useState } from 'react';
import { Eye, Brain, Camera, Target, Shield, Zap, Clock, Users, CheckCircle2, ArrowRight, Play, BarChart3, Settings, Cpu, Database, Award, TrendingUp } from 'lucide-react';

const ComputerVision = () => {
  const [activeTab, setActiveTab] = useState('face-detection');

  const features = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Object Detection & Recognition',
      description: 'Advanced algorithms to identify and classify objects in images and video streams with 99.5% accuracy.'
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Real-time Video Analytics',
      description: 'Process live video feeds for instant insights, monitoring, and automated decision making.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Facial Recognition & Biometrics',
      description: 'Secure identity verification and access control with state-of-the-art facial recognition technology.'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Intelligent Scene Analysis',
      description: 'Understand complex visual scenes with contextual awareness and behavioral pattern recognition.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Visual Quality Inspection',
      description: 'Automated defect detection and quality assurance for manufacturing and production lines.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Edge AI Processing',
      description: 'Deploy AI models directly on edge devices for low-latency, privacy-focused solutions.'
    }
  ];

  const industries = [
    {
      name: 'Healthcare & Medical Imaging',
      icon: <Shield className="w-5 h-5" />,
      applications: ['Medical image analysis', 'Diagnostic assistance', 'Patient monitoring']
    },
    {
      name: 'Manufacturing & Quality Control',
      icon: <Settings className="w-5 h-5" />,
      applications: ['Defect detection', 'Assembly verification', 'Predictive maintenance']
    },
    {
      name: 'Security & Surveillance',
      icon: <Eye className="w-5 h-5" />,
      applications: ['Threat detection', 'Access control', 'Behavioral analysis']
    },
    {
      name: 'Retail & E-commerce',
      icon: <Users className="w-5 h-5" />,
      applications: ['Customer analytics', 'Inventory management', 'Virtual try-on']
    },
    {
      name: 'Automotive & Transportation',
      icon: <Target className="w-5 h-5" />,
      applications: ['Autonomous driving', 'Traffic monitoring', 'Safety systems']
    },
    {
      name: 'Agriculture & Food Safety',
      icon: <TrendingUp className="w-5 h-5" />,
      applications: ['Crop monitoring', 'Pest detection', 'Quality grading']
    }
  ];

  const capabilities = {
    'face-detection': {
      title: 'Face Detection & Recognition',
      description: 'Advanced facial recognition technology with anti-spoofing capabilities',
      features: ['Multi-face detection', 'Emotion recognition', 'Age & gender estimation', 'Liveness detection'],
      accuracy: '99.7%',
      speed: '<100ms'
    },
    'object-tracking': {
      title: 'Object Tracking & Classification',
      description: 'Real-time object detection and tracking across multiple categories',
      features: ['Multi-object tracking', '80+ object classes', 'Trajectory analysis', 'Behavior prediction'],
      accuracy: '95.8%',
      speed: '<50ms'
    },
    'scene-analysis': {
      title: 'Scene Understanding',
      description: 'Comprehensive scene analysis with contextual intelligence',
      features: ['Activity recognition', 'Anomaly detection', 'Crowd analysis', 'Environment mapping'],
      accuracy: '94.2%',
      speed: '<200ms'
    }
  };

  const stats = [
    { label: 'Accuracy Rate', value: '99.5%', icon: <Target className="w-5 h-5" /> },
    { label: 'Processing Speed', value: '<50ms', icon: <Zap className="w-5 h-5" /> },
    { label: 'Industries Served', value: '15+', icon: <Users className="w-5 h-5" /> },
    { label: 'Models Deployed', value: '500+', icon: <Database className="w-5 h-5" /> }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Eye className="w-4 h-4" />
                Advanced AI Vision Technology
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform your
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Visual Intelligence
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Unlock the power of Computer Vision with our cutting-edge AI solutions. From real-time analytics to intelligent automation, we help businesses see beyond the obvious.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Play className="w-5 h-5" />
                  Watch Demo
                </button>
                <button className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-200 border border-gray-200 hover:border-gray-300">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Eye className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">Object Detection</h3>
                    <p className="text-sm text-gray-600">Real-time identification</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Camera className="w-8 h-8 text-purple-600 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">Face Recognition</h3>
                    <p className="text-sm text-gray-600">99.7% accuracy rate</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Target className="w-8 h-8 text-indigo-600 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">Scene Analysis</h3>
                    <p className="text-sm text-gray-600">Contextual understanding</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Zap className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-1">Edge Processing</h3>
                    <p className="text-sm text-gray-600">Low latency solutions</p>
                  </div>
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

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Computer Vision Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered vision solutions deliver unmatched accuracy and performance across diverse applications and industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Deep Dive */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Explore our advanced computer vision technologies in detail
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
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-600">{capabilities[activeTab].accuracy}</div>
                      <div className="text-sm text-gray-600">Accuracy Rate</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-green-600">{capabilities[activeTab].speed}</div>
                      <div className="text-sm text-gray-600">Processing Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our computer vision solutions are transforming businesses across multiple sectors with tailored AI implementations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{industry.name}</h3>
                </div>
                <ul className="space-y-2">
                  {industry.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              From consultation to deployment, we ensure seamless integration of computer vision solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { step: '01', title: 'Consultation & Analysis', description: 'Understanding your specific requirements and use cases' },
              { step: '02', title: 'Custom Model Development', description: 'Building and training AI models tailored to your data' },
              { step: '03', title: 'Integration & Testing', description: 'Seamless deployment with comprehensive testing protocols' },
              { step: '04', title: 'Monitoring & Optimization', description: 'Continuous performance monitoring and model improvements' }
            ].map((process, index) => (
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
            <Award className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Visual Intelligence?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of companies already leveraging our computer vision technology to drive innovation and growth.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center gap-2">
              <Cpu className="w-5 h-5" />
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center gap-2">
              View Case Studies
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComputerVision;