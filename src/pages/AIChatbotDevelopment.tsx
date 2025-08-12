import React from 'react';
import { MessageCircle, CheckCircle, Cpu, BarChart, Zap, Globe } from 'lucide-react';

const features = [
  'Natural Language Processing',
  'Multi-platform Integration',
  'Voice & Text Chatbots',
  'Machine Learning Training',
  'Sentiment Analysis',
  'Conversational AI'
];

const industries = [
  'Customer Service',
  'E-commerce',
  'Healthcare',
  'Finance',
  'Education',
  'Travel'
];

const AIChatbotDevelopment: React.FC = () => (
  <div className="pt-24 min-h-screen bg-gradient-to-r from-slate-100 to-blue-100 flex items-center justify-center px-2">
    <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-start">
      {/* Left: Card */}
      <div className="w-full md:w-2/5 flex-shrink-0">
        <div className="bg-white/90 rounded-3xl shadow-2xl border border-blue-100 overflow-hidden flex flex-col items-center p-8">
          <div className="w-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-slate-200 relative p-4 mb-4 rounded-2xl">
            <div className="w-full max-w-xs h-56 rounded-2xl shadow-lg bg-gradient-to-br from-blue-200 to-pink-200 flex items-center justify-center">
              <MessageCircle className="w-24 h-24 text-blue-600" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-200/60 to-transparent pointer-events-none rounded-2xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent flex items-center gap-2 mb-2">
            <MessageCircle className="w-8 h-8 text-blue-400" /> AI&ML Chatbot Development
          </h1>
          <p className="text-base text-slate-700 mb-2 text-center">
            Create intelligent conversational AI that understands, learns, and provides exceptional customer experiences with advanced natural language processing and machine learning capabilities.
          </p>
          <div className="w-full">
            <h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2 mb-1">
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
      {/* Right: Details */}
      <div className="w-full md:w-3/5 flex flex-col gap-8">
        {/* How It Works Section */}
        <section className="bg-white/80 rounded-2xl shadow-md border border-blue-50 px-8 py-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
            <Cpu className="w-7 h-7 text-blue-500" /> How It Works
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-4">
            <li>
              <span className="font-semibold">Conversational Design & Analysis:</span> We analyze your business needs and design intelligent conversational flows that understand user intent and provide relevant responses.
            </li>
            <li>
              <span className="font-semibold">AI Model Training & Integration:</span> Train advanced natural language processing models with your domain-specific data for accurate understanding and contextual responses.
            </li>
            <li>
              <span className="font-semibold">Multi-Platform Deployment:</span> Integrate chatbots across websites, mobile apps, messaging platforms, and voice assistants for seamless omnichannel experiences.
            </li>
            <li>
              <span className="font-semibold">Continuous Learning & Optimization:</span> Implement machine learning algorithms that continuously improve chatbot performance based on user interactions and feedback.
            </li>
          </ul>
        </section>
        {/* Why Choose Us Section */}
        <section className="bg-white/80 rounded-2xl shadow-md border border-blue-50 px-8 py-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
            <BarChart className="w-7 h-7 text-blue-500" /> Why Choose Us
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-4">
            <li>Expertise in natural language processing and machine learning technologies with proven implementations across diverse industries.</li>
            <li>Proven track record of successful chatbot deployments with high user satisfaction and significant efficiency improvements.</li>
            <li>Focus on creating human-like conversational experiences with advanced sentiment analysis and emotional intelligence capabilities.</li>
            <li>Comprehensive support from initial design through deployment, monitoring, and continuous optimization for long-term success.</li>
          </ul>
        </section>
        {/* Industries Served Section */}
        <section className="bg-white/80 rounded-2xl shadow-md border border-blue-50 px-8 py-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
            <Globe className="w-7 h-7 text-blue-500" /> Industries Served
          </h2>
          <ul className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <li
                key={industry}
                className="bg-blue-50 text-blue-900 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 shadow-sm hover:bg-blue-100 transition-colors duration-200"
              >
                {industry}
              </li>
            ))}
          </ul>
        </section>
        {/* Conversational AI Expertise Section */}
        <section className="bg-white/80 rounded-2xl shadow-md border border-blue-50 px-8 py-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
            <Zap className="w-7 h-7 text-blue-500" /> Conversational AI Expertise
          </h2>
          <p className="text-slate-700 mb-4">
            Our team specializes in developing intelligent conversational AI systems that can understand context, learn from interactions, and provide personalized experiences.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-4">
            <li>
              <span className="font-semibold">Natural Language Understanding:</span> Implement advanced NLP techniques for intent recognition, entity extraction, and context awareness in conversational flows.
            </li>
            <li>
              <span className="font-semibold">Multi-Modal Integration:</span> Create chatbots that can handle text, voice, and visual inputs across multiple platforms and devices seamlessly.
            </li>
            <li>
              <span className="font-semibold">Emotional Intelligence:</span> Develop chatbots with sentiment analysis capabilities that can understand user emotions and respond appropriately.
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default AIChatbotDevelopment; 