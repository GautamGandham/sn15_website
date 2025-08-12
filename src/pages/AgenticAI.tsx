import React from 'react';
import agenticAIImg from '../assets/agentic ai .jpeg';
import { Bot, CheckCircle, Cpu, BarChart, Zap, Globe } from 'lucide-react';

const features = [
  'Autonomous Decision Making',
  'Multi-agent Coordination',
  'Workflow Automation',
  'Intelligent Task Delegation',
  'Real-time Learning',
  'Adaptive Behavior'
];

const industries = [
  'Enterprise',
  'Logistics',
  'Customer Service',
  'Operations',
  'Manufacturing',
  'Healthcare'
];

const AgenticAI: React.FC = () => (
  <div className="pt-24 min-h-screen bg-gradient-to-r from-slate-100 to-blue-100 flex items-center justify-center px-2">
    <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-start">
      {/* Left: Card */}
      <div className="w-full md:w-2/5 flex-shrink-0">
        <div className="bg-white/90 rounded-3xl shadow-2xl border border-blue-100 overflow-hidden flex flex-col items-center p-8">
          <div className="w-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-slate-200 relative p-4 mb-4 rounded-2xl">
            <img src={agenticAIImg} alt="Agentic AI Systems" className="object-cover w-full max-w-xs h-56 rounded-2xl shadow-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-200/60 to-transparent pointer-events-none rounded-2xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent flex items-center gap-2 mb-2">
            <Bot className="w-8 h-8 text-blue-400" /> Agentic AI Systems
          </h1>
          <p className="text-base text-slate-700 mb-2 text-center">
            Transform your business operations with intelligent AI agents that make autonomous decisions, coordinate complex workflows, and continuously learn to optimize your processes.
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
              <span className="font-semibold">System Analysis & Agent Design:</span> We analyze your business processes and design intelligent agents that can understand, reason, and act autonomously within your operational environment.
            </li>
            <li>
              <span className="font-semibold">Multi-Agent Coordination:</span> Implement sophisticated coordination protocols that enable multiple AI agents to work together seamlessly, sharing information and optimizing collective performance.
            </li>
            <li>
              <span className="font-semibold">Autonomous Decision Making:</span> Deploy agents with advanced reasoning capabilities that can make complex decisions in real-time, adapting to changing conditions and learning from outcomes.
            </li>
            <li>
              <span className="font-semibold">Continuous Learning & Adaptation:</span> Enable agents to learn from experience, improve their decision-making processes, and adapt to new challenges without human intervention.
            </li>
          </ul>
        </section>
        {/* Why Choose Us Section */}
        <section className="bg-white/80 rounded-2xl shadow-md border border-blue-50 px-8 py-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
            <BarChart className="w-7 h-7 text-blue-500" /> Why Choose Us
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-4">
            <li>Pioneering expertise in agentic AI and autonomous systems with proven implementations across diverse industries.</li>
            <li>Advanced multi-agent coordination frameworks that enable complex workflow automation and optimization.</li>
            <li>Comprehensive support from initial design through deployment, monitoring, and continuous improvement.</li>
            <li>Focus on ethical AI development with transparent decision-making processes and human oversight capabilities.</li>
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
        {/* Autonomous Systems Specialization Section */}
        <section className="bg-white/80 rounded-2xl shadow-md border border-blue-50 px-8 py-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
            <Zap className="w-7 h-7 text-blue-500" /> Autonomous Systems Expertise
          </h2>
          <p className="text-slate-700 mb-4">
            Our team specializes in developing intelligent autonomous systems that can operate independently, make decisions, and coordinate with other agents to achieve complex objectives.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-4">
            <li>
              <span className="font-semibold">Intelligent Workflow Automation:</span> Design agents that can understand business processes, identify optimization opportunities, and implement improvements autonomously.
            </li>
            <li>
              <span className="font-semibold">Multi-Agent Coordination:</span> Implement sophisticated protocols for agent communication, task allocation, and conflict resolution in complex environments.
            </li>
            <li>
              <span className="font-semibold">Adaptive Learning Systems:</span> Enable agents to learn from experience, improve their performance, and adapt to changing conditions without human intervention.
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default AgenticAI;