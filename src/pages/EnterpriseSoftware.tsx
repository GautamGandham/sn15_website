import React from 'react';
import { Building2, CheckCircle, Cpu, BarChart, Zap, Globe } from 'lucide-react';

const features = [
  'Custom ERP Systems',
  'CRM Solutions',
  'Workflow Automation',
  'Data Analytics Platforms',
  'Integration Services',
  'Security & Compliance'
];

const industries = [
  'Manufacturing',
  'Healthcare',
  'Finance',
  'Logistics',
  'Retail',
  'Technology'
];

const EnterpriseSoftware: React.FC = () => (
  <div className="pt-24 min-h-screen bg-gradient-to-r from-slate-100 to-blue-100 flex items-center justify-center px-2">
    <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-start">
      {/* Left: Card */}
      <div className="w-full md:w-2/5 flex-shrink-0">
        <div className="bg-white/90 rounded-3xl shadow-2xl border border-blue-100 overflow-hidden flex flex-col items-center p-8">
          <div className="w-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-slate-200 relative p-4 mb-4 rounded-2xl">
            <div className="w-full max-w-xs h-56 rounded-2xl shadow-lg bg-gradient-to-br from-blue-200 to-indigo-200 flex items-center justify-center">
              <Building2 className="w-24 h-24 text-blue-600" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-200/60 to-transparent pointer-events-none rounded-2xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent flex items-center gap-2 mb-2">
            <Building2 className="w-8 h-8 text-blue-400" /> Custom Enterprise Software Solution
          </h1>
          <p className="text-base text-slate-700 mb-2 text-center">
            Transform your business operations with tailored enterprise software solutions that streamline processes, enhance productivity, and provide comprehensive data insights for informed decision-making.
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
              <span className="font-semibold">Business Analysis & Requirements Gathering:</span> We conduct comprehensive analysis of your business processes, workflows, and requirements to design tailored enterprise solutions.
            </li>
            <li>
              <span className="font-semibold">Architecture Design & Development:</span> Design scalable enterprise architecture with security and compliance in mind, then develop custom software using enterprise-grade technologies.
            </li>
            <li>
              <span className="font-semibold">Integration & Deployment:</span> Seamlessly integrate with existing systems, implement robust security measures, and deploy with comprehensive testing and quality assurance.
            </li>
            <li>
              <span className="font-semibold">Training & Ongoing Support:</span> Provide comprehensive training for your team and offer ongoing support, maintenance, and optimization for long-term success.
            </li>
          </ul>
        </section>
        {/* Why Choose Us Section */}
        <section className="bg-white/80 rounded-2xl shadow-md border border-blue-50 px-8 py-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
            <BarChart className="w-7 h-7 text-blue-500" /> Why Choose Us
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-4">
            <li>Deep understanding of enterprise software architecture and business processes with proven track record across diverse industries.</li>
            <li>Focus on security, scalability, and compliance for enterprise environments with robust data protection and regulatory adherence.</li>
            <li>Comprehensive support and maintenance services ensuring long-term success and continuous improvement of your enterprise solutions.</li>
            <li>Proven expertise in integrating complex systems and optimizing business workflows for maximum efficiency and productivity.</li>
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
        {/* Enterprise Solutions Expertise Section */}
        <section className="bg-white/80 rounded-2xl shadow-md border border-blue-50 px-8 py-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
            <Zap className="w-7 h-7 text-blue-500" /> Enterprise Solutions Expertise
          </h2>
          <p className="text-slate-700 mb-4">
            Our team specializes in developing comprehensive enterprise software solutions that address complex business challenges and drive operational excellence.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-4">
            <li>
              <span className="font-semibold">ERP Systems:</span> Design and implement comprehensive enterprise resource planning solutions that integrate all aspects of your business operations.
            </li>
            <li>
              <span className="font-semibold">CRM Solutions:</span> Build powerful customer relationship management systems that enhance customer engagement and drive sales growth.
            </li>
            <li>
              <span className="font-semibold">Workflow Automation:</span> Streamline business processes with intelligent automation that reduces manual work and improves efficiency.
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default EnterpriseSoftware; 