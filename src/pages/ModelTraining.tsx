import React, { useState } from 'react';
import { Settings, CheckCircle, Cpu, BarChart, Zap, Globe, Brain, Database, Target, TrendingUp, Code, Layers, Play, ArrowRight, CheckCircle2, Award, Users, Clock, Rocket, Activity, GitBranch, Gauge, Workflow, Bot, Network, Sparkles, LineChart } from 'lucide-react';

const ModelTrainingOptimization = () => {
  const [activeTab, setActiveTab] = useState('llm-training');

  const features = [
    'Custom Model Architecture',
    'Performance Optimization', 
    'Transfer Learning',
    'Model Fine-tuning',
    'LLM Customization',
    'Hyperparameter Tuning'
  ];

  const industries = [
    'Financial Services',
    'Healthcare & Life Sciences', 
    'Technology & SaaS',
    'Research & Academia',
    'Retail & E-commerce',
    'Manufacturing & IoT'
  ];

  const services = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Custom Model Architecture Design',
      description: 'Design and develop bespoke neural network architectures optimized for your specific use cases and performance requirements.',
      features: ['Neural architecture search', 'Domain-specific designs', 'Scalable architectures', 'Performance optimization']
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Large Language Model Training',
      description: 'Train and fine-tune state-of-the-art language models including GPT, BERT, and T5 for your specific domain and applications.',
      features: ['Pre-trained model adaptation', 'Domain-specific fine-tuning', 'Efficient training techniques', 'Multi-task learning']
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Performance Optimization',
      description: 'Optimize model performance through advanced techniques including pruning, quantization, and knowledge distillation.',
      features: ['Model compression', 'Inference optimization', 'Memory efficiency', 'Speed optimization']
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Transfer Learning & Fine-tuning',
      description: 'Leverage pre-trained models and adapt them to your specific tasks with efficient transfer learning methodologies.',
      features: ['Pre-trained model selection', 'Layer freezing strategies', 'Learning rate scheduling', 'Adaptation techniques']
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: 'Hyperparameter Optimization',
      description: 'Systematic optimization of model hyperparameters using advanced techniques like Bayesian optimization and grid search.',
      features: ['Automated tuning', 'Bayesian optimization', 'Multi-objective optimization', 'Validation strategies']
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Model Monitoring & MLOps',
      description: 'Implement comprehensive model monitoring, versioning, and deployment pipelines for production environments.',
      features: ['Performance monitoring', 'Model versioning', 'Automated retraining', 'Deployment pipelines']
    }
  ];

  const capabilities = {
    'llm-training': {
      title: 'Large Language Model Training',
      description: 'Advanced training and fine-tuning of transformer-based language models',
      features: ['GPT/BERT/T5 fine-tuning', 'Domain adaptation', 'Multi-modal training', 'Efficient attention mechanisms'],
      accuracy: '96.8%',
      speed: '50ms/token'
    },
    'computer-vision': {
      title: 'Computer Vision Models',
      description: 'Custom vision models for image classification, detection, and segmentation',
      features: ['CNN architectures', 'Object detection', 'Image segmentation', 'Real-time inference'],
      accuracy: '94.5%',
      speed: '<100ms'
    },
    'time-series': {
      title: 'Time Series & Forecasting',
      description: 'Specialized models for temporal data analysis and prediction',
      features: ['LSTM/GRU networks', 'Transformer forecasting', 'Multi-variate analysis', 'Anomaly detection'],
      accuracy: '92.3%',
      speed: '<50ms'
    }
  };

  const stats = [
    { label: 'Model Accuracy', value: '96.8%', icon: <Target className="w-5 h-5" /> },
    { label: 'Training Speed', value: '10x Faster', icon: <Zap className="w-5 h-5" /> },
    { label: 'Models Deployed', value: '200+', icon: <Database className="w-5 h-5" /> },
    { label: 'Performance Gain', value: '85%', icon: <TrendingUp className="w-5 h-5" /> }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Data Assessment & Architecture Design',
      description: 'Comprehensive analysis of your data, objectives, and requirements to design optimal model architectures and training strategies.'
    },
    {
      step: '02', 
      title: 'Training & Fine-tuning',
      description: 'Advanced model training using state-of-the-art techniques, hyperparameter optimization, and domain-specific fine-tuning approaches.'
    },
    {
      step: '03',
      title: 'Optimization & Validation',
      description: 'Model compression, performance optimization, and rigorous validation using comprehensive testing methodologies and benchmarks.'
    },
    {
      step: '04',
      title: 'Deployment & Monitoring',
      description: 'Production deployment with continuous monitoring, automated retraining pipelines, and performance tracking systems.'
    }
  ];

  const modelTypes = [
    { name: 'Large Language Models', category: 'NLP', icon: <Bot className="w-5 h-5" /> },
    { name: 'Computer Vision', category: 'CV', icon: <Activity className="w-5 h-5" /> },
    { name: 'Time Series Forecasting', category: 'TS', icon: <LineChart className="w-5 h-5" /> },
    { name: 'Reinforcement Learning', category: 'RL', icon: <Network className="w-5 h-5" /> },
    { name: 'Transformer Models', category: 'NLP', icon: <Brain className="w-5 h-5" /> },
    { name: 'Generative Models', category: 'GEN', icon: <Sparkles className="w-5 h-5" /> },
    { name: 'Graph Neural Networks', category: 'GNN', icon: <Workflow className="w-5 h-5" /> },
    { name: 'Multimodal Models', category: 'MM', icon: <Layers className="w-5 h-5" /> }
  ];

  const techniques = [
    'Transfer Learning',
    'Few-Shot Learning', 
    'Meta-Learning',
    'Federated Learning',
    'Active Learning',
    'Continual Learning',
    'Self-Supervised Learning',
    'Multi-Task Learning'
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-r from-slate-100 to-blue-100">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                <Brain className="w-4 h-4" />
                Advanced AI Model Training Solutions
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Train & Optimize
                <span className="block bg-gradient-to-r from-purple-700 via-blue-500 to-sky-400 bg-clip-text text-transparent">
                  AI Models
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Unlock the full potential of AI with expertly designed, trained, and optimized machine learning models, including advanced LLMs, tailored to your unique business challenges and objectives.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Play className="w-5 h-5" />
                  Start Training
                </button>
                <button className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-200 border border-gray-200 hover:border-gray-300">
                  Model Showcase
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Enhanced Card Design */}
            <div className="w-full flex-shrink-0">
              <div className="bg-white/90 rounded-3xl shadow-2xl border border-purple-100 overflow-hidden flex flex-col items-center p-8">
                <div className="w-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-200 relative p-6 mb-6 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Brain className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">LLM Training</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Optimization</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Activity className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Monitoring</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Fine-tuning</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-200/60 to-transparent pointer-events-none rounded-2xl" />
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-700 via-blue-500 to-sky-400 bg-clip-text text-transparent flex items-center gap-2 mb-4">
                  <Settings className="w-8 h-8 text-purple-400" /> Model Training & Optimization
                </h1>
                <p className="text-base text-slate-700 mb-6 text-center">
                  Transform your AI capabilities with custom-trained models that deliver exceptional performance and accuracy.
                </p>
                <div className="w-full">
                  <h2 className="text-lg font-semibold text-purple-700 flex items-center gap-2 mb-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-400"></span> Key Features
                  </h2>
                  <ul className="list-none space-y-2 pl-0">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle className="w-4 h-4 text-purple-500" />
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
              Comprehensive Model Training Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From custom architectures to production deployment, we deliver end-to-end AI model solutions that drive innovation and performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-200">
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
              Model Training Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Explore our expertise across different types of AI model training and optimization
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
                    <h4 className="font-semibold text-gray-900 mb-3">Key Techniques</h4>
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
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-purple-600">{capabilities[activeTab].accuracy}</div>
                      <div className="text-sm text-gray-600">Accuracy Rate</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-purple-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-green-600">{capabilities[activeTab].speed}</div>
                      <div className="text-sm text-gray-600">Inference Speed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Types & Techniques */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Model Types */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Model Types We Train
                </h2>
                <p className="text-lg text-gray-600">
                  Specialized in various AI model architectures and domains
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {modelTypes.map((model, index) => (
                  <div key={index} className="bg-white/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl text-purple-600 mb-4">
                      {model.icon}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{model.name}</div>
                    <div className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-block">{model.category}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Training Techniques */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Advanced Training Techniques
                </h2>
                <p className="text-lg text-gray-600">
                  Cutting-edge methodologies for optimal model performance
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {techniques.map((technique, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-4 border border-purple-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="font-semibold text-gray-900 text-center">{technique}</div>
                  </div>
                ))}
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
                <Cpu className="w-6 h-6" />
                Training Process
              </h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Data assessment and architecture design for optimal model structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Advanced training with hyperparameter optimization techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Transfer learning and domain-specific fine-tuning approaches</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Continuous optimization and performance monitoring</span>
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
                  <span>PhD-level expertise in machine learning and deep learning research</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>State-of-the-art training infrastructure and optimization techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>End-to-end MLOps pipeline from training to production deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Focus on ethical AI with bias mitigation and transparency</span>
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
                  <span key={industry} className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-900 px-4 py-2 rounded-full text-sm font-medium border border-purple-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                    {industry}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                We deliver specialized AI model training solutions across diverse industries with domain-specific expertise and compliance requirements.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Training Methodology
            </h2>
            <p className="text-xl text-gray-600">
              From data analysis to deployment, we follow a proven process to deliver high-performance AI models
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Rocket className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Train Your AI Models?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Transform your data into intelligent solutions with our expert model training and optimization services. Let's build the future of AI together.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Start Model Training
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-flex items-center gap-2">
              View Case Studies
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModelTrainingOptimization;