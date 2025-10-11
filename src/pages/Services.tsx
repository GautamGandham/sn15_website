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
      <section ref={heroRef} className="py-20 relative overflow-hidden bg-gradient-to-r from-slate-100 to-blue-100">
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-blue-100 pointer-events-none z-0" />
        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 transition-all duration-1000 transform ${
          heroVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-20 opacity-0'
        }`}>
          <div className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 text-slate-700 drop-shadow-lg transition-all duration-1200 delay-300 transform ${
              heroVisible 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-10 opacity-0 scale-95'
            }`}>
              Our Services
            </h1>
            <p className={`text-xl text-slate-700 max-w-3xl mx-auto drop-shadow transition-all duration-1000 delay-900 transform ${
              heroVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-15 opacity-0'
            }`}>
              Explore our specialized AI and automation services using the dropdown menu above.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;  