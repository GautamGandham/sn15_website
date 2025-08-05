import React, { useState, useEffect, useRef } from 'react';
import { Brain, Eye, Settings, Bot, Calculator, DollarSign, Clock, TrendingUp } from 'lucide-react';

const Services: React.FC = () => {
  const [roiInputs, setRoiInputs] = useState({
    currentProjects: 50,
    currentCost: 25000,
    teamSize: 10,
  });

  const [roiResults, setRoiResults] = useState({
    savings: 0,
    efficiency: 0,
    payback: 0,
  });

  // Refs for scroll animations
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const roiRef = useRef<HTMLElement>(null);
  const integrationRef = useRef<HTMLElement>(null);

  // Intersection Observer hook
  const useScrollAnimation = (ref: React.RefObject<HTMLElement>) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref]);

    return isVisible;
  };

  const heroVisible = useScrollAnimation(heroRef);
  const servicesVisible = useScrollAnimation(servicesRef);
  const roiVisible = useScrollAnimation(roiRef);
  const integrationVisible = useScrollAnimation(integrationRef);

  const services = [
    {
      icon: Brain,
      title: 'Generative AI Solutions',
      description: 'AI models that generate human-like content, enabling your business to unlock creativity and efficiency.',
      features: ['Large Language Models (LLMs)', 'Content generation automation', 'Custom GPT implementations', 'Natural language processing'],
      industries: ['Media & Entertainment', 'Marketing', 'Education', 'Publishing']
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'AI systems that see, understand, and react to the world around them, from face detection to object tracking.',
      features: ['Face detection & recognition', 'Object tracking & classification', 'Image analysis & processing', 'Real-time video analytics'],
      industries: ['Security', 'Healthcare', 'Retail', 'Manufacturing']
    },
    {
      icon: Settings,
      title: 'Model Training & Optimization',
      description: 'Expert design, training, and optimization of machine learning models to improve accuracy and performance.',
      features: ['Custom model architecture', 'Performance optimization', 'Transfer learning', 'Model fine-tuning'],
      industries: ['Finance', 'Healthcare', 'Technology', 'Research']
    },
    {
      icon: Bot,
      title: 'Agentic AI Systems',
      description: 'AI that not only assists but makes autonomous decisions, transforming your business into a highly efficient operation.',
      features: ['Autonomous decision making', 'Multi-agent coordination', 'Workflow automation', 'Intelligent task delegation'],
      industries: ['Enterprise', 'Logistics', 'Customer Service', 'Operations']
    },
  ];

  const calculateROI = () => {
    const { currentProjects, currentCost, teamSize } = roiInputs;
    
    // Simplified ROI calculation for AI services
    const efficiencyGain = Math.min(400, Math.floor(teamSize * 15) + Math.floor(currentProjects / 10) * 20);
    const costReduction = currentCost * 0.35; // 35% cost reduction through automation
    const annualSavings = costReduction * 12;
    const implementationCost = teamSize * 8000 + currentProjects * 500; // Implementation cost estimate
    const paybackMonths = Math.ceil(implementationCost / (annualSavings / 12));

    setRoiResults({
      savings: Math.floor(annualSavings),
      efficiency: efficiencyGain,
      payback: paybackMonths,
    });
  };

  React.useEffect(() => {
    calculateROI();
  }, [roiInputs]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 relative overflow-hidden">
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-saddlebrown-100/70 pointer-events-none z-0" />
        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 transition-all duration-1000 transform ${
          heroVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-20 opacity-0'
        }`}>
          <div className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg transition-all duration-1200 delay-300 transform ${
              heroVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-10 opacity-0 scale-95'
            }`}>
              Powerful AI Solutions
              <span className={`text-primary-300 transition-all duration-1400 delay-600 transform inline-block ${
                heroVisible 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-10 opacity-0'
              }`}> Tailored to Your Needs</span>
            </h1>
            <p className={`text-xl text-white max-w-3xl mx-auto drop-shadow transition-all duration-1000 delay-900 transform ${
              heroVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-15 opacity-0'
            }`}>
              At SNFifteen, we don't just build products—we provide innovative AI solutions in 
              Generative AI, Computer Vision, Model Training, and Agentic AI development.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20 bg-saddlebrown-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            servicesVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-metallic-600">
              Comprehensive artificial intelligence solutions for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-metallic-50 rounded-xl p-8 hover:shadow-lg transition-all duration-500 transform ${
                  servicesVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-20 opacity-0 scale-95'
                } hover:scale-105 hover:-translate-y-2`}
                style={{
                  transitionDelay: servicesVisible ? `${index * 200}ms` : '0ms'
                }}
              >
                <service.icon className={`h-12 w-12 text-primary-600 mb-6 transition-all duration-700 transform ${
                  servicesVisible 
                    ? 'rotate-0 scale-100' 
                    : 'rotate-12 scale-75'
                }`} 
                style={{
                  transitionDelay: servicesVisible ? `${index * 200 + 300}ms` : '0ms'
                }}
                />
                <h3 className="text-2xl font-bold text-primary-900 mb-4">{service.title}</h3>
                <p className="text-metallic-700 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-primary-900 mb-3">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-center text-metallic-600 transition-all duration-300 transform ${
                        servicesVisible 
                          ? 'translate-x-0 opacity-100' 
                          : 'translate-x-10 opacity-0'
                      }`}
                      style={{
                        transitionDelay: servicesVisible ? `${index * 200 + idx * 100 + 500}ms` : '0ms'
                      }}
                      >
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 animate-pulse"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary-900 mb-3">Target Industries:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.industries.map((industry, idx) => (
                      <span 
                        key={idx} 
                        className={`bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm transition-all duration-400 transform hover:scale-110 ${
                          servicesVisible 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-5 opacity-0'
                        }`}
                        style={{
                          transitionDelay: servicesVisible ? `${index * 200 + idx * 150 + 700}ms` : '0ms'
                        }}
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section ref={roiRef} className="py-20 bg-saddlebrown-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            roiVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              AI Investment Calculator
            </h2>
            <p className="text-xl text-metallic-600">
              Calculate your potential return on investment with our AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-800 transform ${
              roiVisible 
                ? 'translate-x-0 opacity-100 scale-100' 
                : '-translate-x-20 opacity-0 scale-95'
            }`}>
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Your Current Operations</h3>
              
              <div className="space-y-6">
                <div className={`group transition-all duration-500 transform ${
                  roiVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`} style={{ transitionDelay: roiVisible ? '300ms' : '0ms' }}>
                  <label className="block text-sm font-medium text-metallic-700 mb-2 transition-colors duration-200 group-focus-within:text-primary-600">
                    Monthly Projects/Tasks
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={roiInputs.currentProjects}
                      onChange={(e) => setRoiInputs({...roiInputs, currentProjects: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-3 border border-metallic-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:border-primary-400 hover:shadow-md focus:shadow-lg transform hover:scale-[1.02] focus:scale-[1.02] bg-gradient-to-r from-white to-metallic-50"
                      placeholder="Enter number of projects"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500/10 to-primary-600/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                
                <div className={`group transition-all duration-500 transform ${
                  roiVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`} style={{ transitionDelay: roiVisible ? '500ms' : '0ms' }}>
                  <label className="block text-sm font-medium text-metallic-700 mb-2 transition-colors duration-200 group-focus-within:text-primary-600">
                    Monthly Operational Costs ($)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DollarSign className="h-5 w-5 text-metallic-400 group-focus-within:text-primary-500 transition-colors duration-200" />
                    </div>
                    <input
                      type="number"
                      value={roiInputs.currentCost}
                      onChange={(e) => setRoiInputs({...roiInputs, currentCost: parseInt(e.target.value) || 0})}
                      className="w-full pl-10 pr-4 py-3 border border-metallic-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:border-primary-400 hover:shadow-md focus:shadow-lg transform hover:scale-[1.02] focus:scale-[1.02] bg-gradient-to-r from-white to-metallic-50"
                      placeholder="Enter operational costs"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500/10 to-primary-600/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
                
                <div className={`group transition-all duration-500 transform ${
                  roiVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`} style={{ transitionDelay: roiVisible ? '700ms' : '0ms' }}>
                  <label className="block text-sm font-medium text-metallic-700 mb-2 transition-colors duration-200 group-focus-within:text-primary-600">
                    Team Size
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={roiInputs.teamSize}
                      onChange={(e) => setRoiInputs({...roiInputs, teamSize: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-3 border border-metallic-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 hover:border-primary-400 hover:shadow-md focus:shadow-lg transform hover:scale-[1.02] focus:scale-[1.02] bg-gradient-to-r from-white to-metallic-50"
                      placeholder="Enter team size"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500/10 to-primary-600/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`bg-primary-900 text-white p-8 rounded-xl transition-all duration-800 transform ${
              roiVisible 
                ? 'translate-x-0 opacity-100 scale-100' 
                : 'translate-x-20 opacity-0 scale-95'
            }`}>
              <h3 className="text-2xl font-bold mb-6">Projected AI Benefits</h3>
              
              <div className="space-y-6">
                <div className={`flex items-center justify-between p-4 bg-primary-800/50 rounded-lg transition-all duration-600 transform hover:scale-105 hover:bg-primary-800/70 ${
                  roiVisible 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-10 opacity-0'
                }`} style={{ transitionDelay: roiVisible ? '300ms' : '0ms' }}>
                  <div className="flex items-center">
                    <DollarSign className={`h-6 w-6 text-primary-400 mr-3 transition-all duration-700 ${
                      roiVisible ? 'rotate-0 scale-100' : 'rotate-180 scale-75'
                    }`} style={{ transitionDelay: roiVisible ? '600ms' : '0ms' }} />
                    <span>Annual Savings</span>
                  </div>
                  <span className={`text-2xl font-bold text-primary-400 transition-all duration-800 ${
                    roiVisible ? 'scale-100' : 'scale-75'
                  }`} style={{ transitionDelay: roiVisible ? '900ms' : '0ms' }}>
                    ${roiResults.savings.toLocaleString()}
                  </span>
                </div>
                
                <div className={`flex items-center justify-between p-4 bg-primary-800/50 rounded-lg transition-all duration-600 transform hover:scale-105 hover:bg-primary-800/70 ${
                  roiVisible 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-10 opacity-0'
                }`} style={{ transitionDelay: roiVisible ? '500ms' : '0ms' }}>
                  <div className="flex items-center">
                    <TrendingUp className={`h-6 w-6 text-primary-400 mr-3 transition-all duration-700 ${
                      roiVisible ? 'rotate-0 scale-100' : 'rotate-180 scale-75'
                    }`} style={{ transitionDelay: roiVisible ? '800ms' : '0ms' }} />
                    <span>Productivity Increase</span>
                  </div>
                  <span className={`text-2xl font-bold text-primary-400 transition-all duration-800 ${
                    roiVisible ? 'scale-100' : 'scale-75'
                  }`} style={{ transitionDelay: roiVisible ? '1100ms' : '0ms' }}>
                    {roiResults.efficiency}%
                  </span>
                </div>
                
                <div className={`flex items-center justify-between p-4 bg-primary-800/50 rounded-lg transition-all duration-600 transform hover:scale-105 hover:bg-primary-800/70 ${
                  roiVisible 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-10 opacity-0'
                }`} style={{ transitionDelay: roiVisible ? '700ms' : '0ms' }}>
                  <div className="flex items-center">
                    <Clock className={`h-6 w-6 text-primary-400 mr-3 transition-all duration-700 ${
                      roiVisible ? 'rotate-0 scale-100' : 'rotate-180 scale-75'
                    }`} style={{ transitionDelay: roiVisible ? '1000ms' : '0ms' }} />
                    <span>Payback Period</span>
                  </div>
                  <span className={`text-2xl font-bold text-primary-400 transition-all duration-800 ${
                    roiVisible ? 'scale-100' : 'scale-75'
                  }`} style={{ transitionDelay: roiVisible ? '1300ms' : '0ms' }}>
                    {roiResults.payback} months
                  </span>
                </div>
              </div>
              
              <div className={`mt-8 p-4 bg-primary-800/30 rounded-lg transition-all duration-800 transform ${
                roiVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-5 opacity-0'
              }`} style={{ transitionDelay: roiVisible ? '1000ms' : '0ms' }}>
                <p className="text-primary-200 text-sm">
                  * Calculations are estimates based on industry averages and may vary based on specific AI implementation details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Expertise & Integration */}
      <section ref={integrationRef} className="py-20 bg-saddlebrown-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            integrationVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              AI Expertise & Integration
            </h2>
            <p className="text-xl text-metallic-600">
              Our AI solutions integrate seamlessly with your existing systems and workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'Advanced AI Models',
                description: 'State-of-the-art machine learning models including GPT, BERT, and custom neural networks'
              },
              {
                icon: Settings,
                title: 'Cloud Integration',
                description: 'Seamless deployment on AWS, Azure, Google Cloud, and on-premise infrastructure'
              },
              {
                icon: Bot,
                title: 'API-First Approach',
                description: 'RESTful APIs and SDKs for easy integration with your existing applications and systems'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`text-center p-6 transition-all duration-700 transform ${
                  integrationVisible 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-20 opacity-0 scale-95'
                } hover:scale-105`}
                style={{
                  transitionDelay: integrationVisible ? `${index * 200}ms` : '0ms'
                }}
              >
                <div className={`w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-800 transform ${
                  integrationVisible 
                    ? 'rotate-0 scale-100' 
                    : 'rotate-45 scale-75'
                }`} style={{
                  transitionDelay: integrationVisible ? `${index * 200 + 300}ms` : '0ms'
                }}>
                  <item.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className={`text-xl font-semibold text-primary-900 mb-2 transition-all duration-600 transform ${
                  integrationVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-5 opacity-0'
                }`} style={{
                  transitionDelay: integrationVisible ? `${index * 200 + 500}ms` : '0ms'
                }}>
                  {item.title}
                </h3>
                <p className={`text-metallic-600 transition-all duration-600 transform ${
                  integrationVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-5 opacity-0'
                }`} style={{
                  transitionDelay: integrationVisible ? `${index * 200 + 700}ms` : '0ms'
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;