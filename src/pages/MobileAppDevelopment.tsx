import React from 'react';
import { Smartphone, CheckCircle, Cpu, BarChart, Zap, Globe } from 'lucide-react';

const features = [
  'Native iOS & Android Development',
  'Cross-platform React Native',
  'UI/UX Design & Prototyping',
  'App Store Optimization',
  'Performance Optimization',
  'Security & Testing'
];

const industries = [
  'Healthcare',
  'E-commerce',
  'Finance',
  'Education',
  'Entertainment',
  'Real Estate'
];

const MobileAppDevelopment: React.FC = () => (
  <div className="pt-24 min-h-screen bg-gradient-to-r from-slate-100 to-blue-100 flex items-center justify-center px-2">
    <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-start">
      {/* Left: Card */}
      <div className="w-full md:w-2/5 flex-shrink-0">
        <div className="bg-white/90 rounded-3xl shadow-2xl border border-blue-100 overflow-hidden flex flex-col items-center p-8">
          <div className="w-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-slate-200 relative p-4 mb-4 rounded-2xl">
            <div className="w-full max-w-xs h-56 rounded-2xl shadow-lg bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
              <Smartphone className="w-24 h-24 text-blue-600" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-200/60 to-transparent pointer-events-none rounded-2xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent flex items-center gap-2 mb-2">
            <Smartphone className="w-8 h-8 text-blue-400" /> Mobile App Development
          </h1>
          <p className="text-base text-slate-700 mb-2 text-center">
            Transform your business with cutting-edge mobile applications that deliver exceptional user experiences, seamless performance, and powerful functionality across iOS and Android platforms.
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
              <span className="font-semibold">Requirements Analysis & Strategy:</span> We collaborate with you to understand your business goals, target audience, and technical requirements to design the perfect mobile solution.
            </li>
            <li>
              <span className="font-semibold">UI/UX Design & Prototyping:</span> Create intuitive, modern interfaces with user-centered design principles, comprehensive prototyping, and thorough user testing to ensure exceptional experiences.
            </li>
            <li>
              <span className="font-semibold">Development & Testing:</span> Build robust, scalable applications using cutting-edge technologies, comprehensive testing protocols, and performance optimization techniques.
            </li>
            <li>
              <span className="font-semibold">Deployment & Maintenance:</span> Deploy to app stores with strategic optimization, ongoing maintenance, and continuous improvement based on user feedback and analytics.
            </li>
          </ul>
        </section>
        {/* Why Choose Us Section */}
        <section className="bg-white/80 rounded-2xl shadow-md border border-blue-50 px-8 py-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
            <BarChart className="w-7 h-7 text-blue-500" /> Why Choose Us
          </h2>
          <ul className="list-disc pl-6 text-slate-700 space-y-4">
            <li>Expert mobile developers with years of experience in native iOS and Android development, plus cross-platform solutions.</li>
            <li>Proven track record of successful app launches with high user satisfaction ratings and strong app store performance.</li>
            <li>Comprehensive end-to-end support from initial concept through development, deployment, and ongoing maintenance.</li>
            <li>Focus on performance, security, and user experience with modern development practices and continuous optimization.</li>
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
        {/* Mobile Technology Expertise Section */}
        <section className="bg-white/80 rounded-2xl shadow-md border border-blue-50 px-8 py-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
            <Zap className="w-7 h-7 text-blue-500" /> Mobile Technology Expertise
          </h2>
          <p className="text-slate-700 mb-4">
            Our team specializes in modern mobile development technologies and frameworks, ensuring your apps are built with the latest best practices and performance optimizations.
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-4">
            <li>
              <span className="font-semibold">Native Development:</span> Build high-performance apps using Swift for iOS and Kotlin for Android, leveraging platform-specific features and optimizations.
            </li>
            <li>
              <span className="font-semibold">Cross-Platform Solutions:</span> Develop efficient, maintainable apps using React Native, Flutter, or other cross-platform frameworks for faster time-to-market.
            </li>
            <li>
              <span className="font-semibold">Modern Architecture:</span> Implement clean architecture patterns, MVVM, and modular design for scalable, maintainable mobile applications.
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default MobileAppDevelopment; 