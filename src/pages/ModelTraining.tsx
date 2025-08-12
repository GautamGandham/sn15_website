import React from 'react';
import modelTrainingImg from '../assets/model training.jpeg';
import { Settings, CheckCircle, Cpu, BarChart, Zap, Globe } from 'lucide-react';

const features = [
  'Custom Model Architecture',
  'Performance Optimization', 
  'Transfer Learning',
  'Model Fine-tuning',
  'LLM Customization',
  'Hyperparameter Tuning'
];

const industries = [
  'Finance',
  'Healthcare', 
  'Technology',
  'Research',
  'Retail',
  'Manufacturing'
];

const ModelTraining: React.FC = () => (
  <div className="pt-24 min-h-screen bg-gradient-to-r from-slate-100 to-blue-100 flex items-center justify-center px-2">
    <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-start">
      {/* Left: Card */}
      <div className="w-full md:w-2/5 flex-shrink-0">
        <div className="bg-white/90 rounded-3xl shadow-2xl border border-blue-100 overflow-hidden flex flex-col items-center p-8">
          <div className="w-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-slate-200 relative p-4 mb-4 rounded-2xl">
            <img src={modelTrainingImg} alt="Model Training & Optimization" className="object-cover w-full max-w-xs h-56 rounded-2xl shadow-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-200/60 to-transparent pointer-events-none rounded-2xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent flex items-center gap-2 mb-2">
            <Settings className="w-8 h-8 text-blue-400" /> Model Training & Optimization
          </h1>
          <p className="text-base text-slate-700 mb-2 text-center">
            Unlock the full potential of AI with expertly designed, trained, and optimized machine learning models, including advanced large language models (LLMs), tailored to your unique business challenges.
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
              <span className="font-semibold">Data Assessment & Architecture Design:</span> We analyze your data and objectives to craft custom model architectures, including LLMs, optimized for your specific use case.
            </li>
            <li>
              <span className="font-semibold">Advanced Training & Fine-Tuning:</span> Our experts employ cutting-edge techniques, such as gradient-based optimization and hyperparameter tuning, to train and refine models for maximum performance.
            </li>
            <li>
              <span className="font-semibold">Transfer Learning & LLM Customization:</span> Utilize pre-trained LLMs and adapt them to your domain with transfer learning, ensuring rapid deployment and high accuracy.
            </li>
            <li>
              <span className="font-semibold">Continuous Optimization:</span> Implement ongoing monitoring, retraining, and model compression to maintain peak performance and scalability.
            </li>
          </ul>
        </section>
        {/* Why Choose Us Section */}
        <section className="bg-white/80 rounded-2xl shadow-md border border-blue-50 px-8 py-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
            <BarChart className="w-7 h-7 text-blue-500" /> Why Choose Us
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-4">
            <li>Unmatched expertise in machine learning, including state-of-the-art LLMs like transformer-based models.</li>
            <li>Proven track record of delivering high-accuracy, efficient models across diverse industries.</li>
            <li>Comprehensive support from data preprocessing to model deployment and post-deployment optimization.</li>
            <li>Focus on scalable, ethical AI solutions with robust performance metrics.</li>
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
        {/* LLM Specialization Section */}
        <section className="bg-white/80 rounded-2xl shadow-md border border-blue-50 px-8 py-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
            <Zap className="w-7 h-7 text-blue-500" /> Large Language Model Expertise
          </h2>
          <p className="text-slate-700 mb-4">
            Our team specializes in training and deploying large language models (LLMs) for advanced applications, such as natural language understanding, text generation, and conversational AI.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-4">
            <li>
              <span className="font-semibold">Pre-Trained Model Adaptation:</span> Customize models like BERT, GPT, or T5 for specific tasks, such as sentiment analysis or domain-specific chatbots.
            </li>
            <li>
              <span className="font-semibold">Efficient Fine-Tuning:</span> Optimize LLMs with techniques like LoRA (Low-Rank Adaptation) to reduce computational costs while maintaining performance.
            </li>
            <li>
              <span className="font-semibold">Ethical AI Focus:</span> Ensure responsible AI development with bias mitigation and transparency in model behavior.
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default ModelTraining;