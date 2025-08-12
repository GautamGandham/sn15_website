import React from 'react';
import { Cloud, CheckCircle, Cpu, BarChart, Zap, Globe } from 'lucide-react';

const features = [
  'Cloud Infrastructure Setup',
  'CI/CD Pipeline Automation',
  'Container Orchestration',
  'Monitoring & Security',
  'Infrastructure as Code',
  'Performance Optimization'
];

const industries = [
  'Technology',
  'Finance',
  'Healthcare',
  'E-commerce',
  'Startups',
  'Manufacturing'
];

const CloudDevOps: React.FC = () => (
  <div className="pt-24 min-h-screen bg-gradient-to-r from-slate-100 to-blue-100 flex items-center justify-center px-2">
    <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-start">
      {/* Left: Card */}
      <div className="w-full md:w-2/5 flex-shrink-0">
        <div className="bg-white/90 rounded-3xl shadow-2xl border border-blue-100 overflow-hidden flex flex-col items-center p-8">
          <div className="w-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-slate-200 relative p-4 mb-4 rounded-2xl">
            <div className="w-full max-w-xs h-56 rounded-2xl shadow-lg bg-gradient-to-br from-blue-200 to-cyan-200 flex items-center justify-center">
              <Cloud className="w-24 h-24 text-blue-600" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-200/60 to-transparent pointer-events-none rounded-2xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent flex items-center gap-2 mb-2">
            <Cloud className="w-8 h-8 text-blue-400" /> Cloud Computing & DevOps Services
          </h1>
          <p className="text-base text-slate-700 mb-2 text-center">
            Accelerate your digital transformation with scalable cloud infrastructure, automated DevOps practices, and modern deployment strategies that ensure reliability, security, and performance.
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
              <span className="font-semibold">Infrastructure Assessment & Design:</span> We assess your current infrastructure and design scalable cloud solutions using AWS, Azure, or Google Cloud with best practices for security and performance.
            </li>
            <li>
              <span className="font-semibold">CI/CD Pipeline Implementation:</span> Implement automated continuous integration and deployment pipelines that enable faster, more reliable software delivery with comprehensive testing and quality gates.
            </li>
            <li>
              <span className="font-semibold">Container Orchestration & Management:</span> Deploy and manage containerized applications using Kubernetes, Docker, and other orchestration tools for scalable, resilient infrastructure.
            </li>
            <li>
              <span className="font-semibold">Monitoring & Optimization:</span> Set up comprehensive monitoring, logging, and alerting systems with ongoing optimization for cost, performance, and security improvements.
            </li>
          </ul>
        </section>
        {/* Why Choose Us Section */}
        <section className="bg-white/80 rounded-2xl shadow-md border border-blue-50 px-8 py-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
            <BarChart className="w-7 h-7 text-blue-500" /> Why Choose Us
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-4">
            <li>Certified cloud architects with expertise in AWS, Azure, and Google Cloud with proven track record of successful cloud migrations and DevOps transformations.</li>
            <li>Advanced automation and infrastructure-as-code practices that ensure consistent, reliable deployments and reduce manual errors.</li>
            <li>Focus on security, scalability, and cost optimization with comprehensive monitoring and performance tuning for enterprise environments.</li>
            <li>Comprehensive support and training services ensuring your team can effectively manage and optimize your cloud infrastructure.</li>
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
        {/* Cloud & DevOps Expertise Section */}
        <section className="bg-white/80 rounded-2xl shadow-md border border-blue-50 px-8 py-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
            <Zap className="w-7 h-7 text-blue-500" /> Cloud & DevOps Expertise
          </h2>
          <p className="text-slate-700 mb-4">
            Our team specializes in modern cloud computing and DevOps practices, ensuring your applications are deployed with the highest standards of reliability, security, and performance.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-4">
            <li>
              <span className="font-semibold">Multi-Cloud Strategy:</span> Design and implement hybrid and multi-cloud solutions that optimize costs, improve reliability, and leverage the best features of each cloud provider.
            </li>
            <li>
              <span className="font-semibold">Infrastructure as Code:</span> Implement infrastructure automation using Terraform, CloudFormation, and other IaC tools for consistent, version-controlled infrastructure management.
            </li>
            <li>
              <span className="font-semibold">Security & Compliance:</span> Ensure your cloud infrastructure meets industry standards and compliance requirements with robust security practices and monitoring.
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default CloudDevOps; 