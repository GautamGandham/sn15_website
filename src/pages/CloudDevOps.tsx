import { useState } from 'react';
import { Cloud, CheckCircle, Cpu, BarChart, Zap, Globe, Server, Shield, Boxes, GitBranch, ArrowRight, Play, CheckCircle2, Award, Settings, Users } from 'lucide-react';

const CloudDevOps = () => {
  const [activeTab, setActiveTab] = useState('cloud-infrastructure');

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

  const services = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Infrastructure Design',
      description: 'Design and implement scalable cloud solutions using AWS, Azure, or Google Cloud with best practices.',
      features: ['Multi-cloud architecture', 'Cost optimization', 'High availability setup', 'Disaster recovery planning']
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'CI/CD Pipeline Setup',
      description: 'Automate your software delivery with comprehensive continuous integration and deployment pipelines.',
      features: ['Automated testing', 'Quality gates', 'Deployment automation', 'Release management']
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      title: 'Container Orchestration',
      description: 'Deploy and manage containerized applications using Kubernetes, Docker, and orchestration tools.',
      features: ['Kubernetes clusters', 'Docker containers', 'Service mesh', 'Auto-scaling']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Compliance',
      description: 'Implement robust security practices and ensure compliance with industry standards.',
      features: ['Security audits', 'Compliance monitoring', 'Identity management', 'Data encryption']
    }
  ];

  const capabilities = {
    'cloud-infrastructure': {
      title: 'Cloud Infrastructure',
      description: 'Build scalable and resilient cloud infrastructure with automated deployment and management.',
      features: ['Infrastructure as Code', 'Auto-scaling capabilities', 'Load balancing', 'Network optimization'],
      uptime: '99.99%',
      deployment: '<5min'
    },
    'devops-automation': {
      title: 'DevOps Automation',
      description: 'Streamline development and operations with automated CI/CD pipelines and workflows.',
      features: ['Automated builds', 'Continuous testing', 'Deployment pipelines', 'Release automation'],
      uptime: '99.95%',
      deployment: '<3min'
    },
    'monitoring-optimization': {
      title: 'Monitoring & Optimization',
      description: 'Comprehensive monitoring, logging, and continuous optimization for peak performance.',
      features: ['Real-time monitoring', 'Performance analytics', 'Cost optimization', 'Alert management'],
      uptime: '99.98%',
      deployment: '<4min'
    }
  };

  const processSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'We assess your current infrastructure and design scalable cloud solutions tailored to your business needs.'
    },
    {
      step: '02',
      title: 'Implementation & Migration',
      description: 'Implement cloud infrastructure and CI/CD pipelines with seamless migration strategies and minimal downtime.'
    },
    {
      step: '03',
      title: 'Deployment & Integration',
      description: 'Deploy containerized applications with orchestration tools and integrate monitoring solutions.'
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Continuous monitoring, performance tuning, cost optimization, and 24/7 support for your infrastructure.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-r from-slate-100 to-blue-100">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Cloud className="w-4 h-4" />
                Enterprise Cloud & DevOps Solutions
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Accelerate Your
                <span className="block bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent">
                  Digital Transformation
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Build scalable cloud infrastructure with automated DevOps practices. Deploy faster, more reliable applications with comprehensive monitoring and security.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Play className="w-5 h-5" />
                  Get Started
                </button>
                <button className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-200 border border-gray-200 hover:border-gray-300">
                  View Solutions
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="w-full flex-shrink-0">
              <div className="bg-white/90 rounded-3xl shadow-2xl border border-blue-100 overflow-hidden flex flex-col items-center p-8">
                <div className="w-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-slate-200 relative p-6 mb-6 rounded-2xl">
                  <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Cloud className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Cloud Setup</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <GitBranch className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">CI/CD Pipeline</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Boxes className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Containers</p>
                    </div>
                    <div className="bg-white/80 rounded-xl p-4 text-center">
                      <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-gray-800">Security</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-200/60 to-transparent pointer-events-none rounded-2xl" />
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent flex items-center gap-2 mb-4">
                  <Cloud className="w-8 h-8 text-blue-400" /> Cloud & DevOps
                </h1>
                <p className="text-base text-slate-700 mb-6 text-center">
                  Accelerate your digital transformation with scalable cloud infrastructure, automated DevOps practices, and modern deployment strategies.
                </p>
                <div className="w-full">
                  <h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2 mb-3">
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
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Cloud & DevOps Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud infrastructure and DevOps solutions designed to accelerate your development lifecycle and optimize operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Deep expertise in cloud platforms and DevOps tools for enterprise-grade solutions
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
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-600">{capabilities[activeTab].uptime}</div>
                      <div className="text-sm text-gray-600">Uptime SLA</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-green-600">{capabilities[activeTab].deployment}</div>
                      <div className="text-sm text-gray-600">Deployment Time</div>
                    </div>
                  </div>
                </div>
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
            <section className="bg-white/80 rounded-2xl shadow-lg border border-blue-100 px-8 py-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                <Cpu className="w-6 h-6" />
                How It Works
              </h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Assess current infrastructure and design scalable cloud solutions using AWS, Azure, or Google Cloud.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Implement automated CI/CD pipelines for faster, more reliable software delivery.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Deploy containerized applications using Kubernetes and Docker orchestration.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Set up comprehensive monitoring, logging, and ongoing optimization.</span>
                </li>
              </ul>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-white/80 rounded-2xl shadow-lg border border-blue-100 px-8 py-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Why Choose Us
              </h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Certified cloud architects with expertise in AWS, Azure, and Google Cloud.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Advanced automation and infrastructure-as-code practices.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Focus on security, scalability, and cost optimization.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Comprehensive support and training for your team.</span>
                </li>
              </ul>
            </section>

            {/* Industries Served Section */}
            <section className="bg-white/80 rounded-2xl shadow-lg border border-blue-100 px-8 py-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Industries Served
              </h2>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <span key={industry} className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-900 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                    {industry}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                We deliver cloud and DevOps solutions across diverse industries with scalable infrastructure and automated deployment practices.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              From assessment to optimization, we ensure seamless cloud migration and DevOps transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((process, index) => (
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Cloud className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Build scalable, secure cloud infrastructure with automated DevOps practices. Deploy faster and optimize your operations with our expert team.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors duration-200 inline-flex items-center gap-2">
              <Server className="w-5 h-5" />
              Start Your Project
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

export default CloudDevOps;