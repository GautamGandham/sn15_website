import React, { useState } from 'react';
import { Box, Truck, BarChart3, Settings, Calculator, DollarSign, Clock, TrendingUp } from 'lucide-react';

const Services: React.FC = () => {
  const [roiInputs, setRoiInputs] = useState({
    currentOrders: 1000,
    currentCost: 50000,
    warehouseSize: 10000,
  });

  const [roiResults, setRoiResults] = useState({
    savings: 0,
    efficiency: 0,
    payback: 0,
  });

  const services = [
    {
      icon: Box,
      title: 'Automated Picking Systems',
      description: 'AI-powered robots that can pick items with 99.9% accuracy, reducing errors and increasing speed.',
      features: ['Computer vision recognition', 'Multi-item handling', 'Real-time inventory tracking'],
      industries: ['E-commerce', 'Retail', 'Manufacturing']
    },
    {
      icon: Truck,
      title: 'Autonomous Material Handling',
      description: 'Self-navigating vehicles that transport goods efficiently throughout your warehouse.',
      features: ['Dynamic path optimization', 'Collision avoidance', 'Fleet coordination'],
      industries: ['Logistics', 'Distribution', 'Food & Beverage']
    },
    {
      icon: BarChart3,
      title: 'Inventory Management',
      description: 'Smart systems that track, analyze, and optimize inventory levels in real-time.',
      features: ['Predictive analytics', 'Demand forecasting', 'Automated reordering'],
      industries: ['Retail', 'Healthcare', 'Automotive']
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration with your existing WMS, ERP, and other warehouse systems.',
      features: ['API connectivity', 'Custom middleware', 'Legacy system support'],
      industries: ['Enterprise', 'Manufacturing', 'Distribution']
    },
  ];

  const calculateROI = () => {
    const { currentOrders, currentCost, warehouseSize } = roiInputs;
    
    // Simplified ROI calculation
    const efficiencyGain = Math.min(300, Math.floor(warehouseSize / 100) * 10);
    const costReduction = currentCost * 0.4; // 40% cost reduction
    const annualSavings = costReduction * 12;
    const implementationCost = warehouseSize * 15; // $15 per sq ft
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
      <section className="py-20 relative">
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-saddlebrown-100/70 pointer-events-none z-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Comprehensive Warehouse
              <span className="text-primary-300"> Automation Solutions</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto drop-shadow">
              From automated picking to intelligent inventory management, our solutions are designed 
              to transform every aspect of your warehouse operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-saddlebrown-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-metallic-600">
              Tailored solutions for every warehouse automation need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-metallic-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <service.icon className="h-12 w-12 text-primary-600 mb-6" />
                <h3 className="text-2xl font-bold text-primary-900 mb-4">{service.title}</h3>
                <p className="text-metallic-700 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-primary-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-metallic-600">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary-900 mb-3">Industries:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.industries.map((industry, idx) => (
                      <span key={idx} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
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
      <section className="py-20 bg-saddlebrown-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              ROI Calculator
            </h2>
            <p className="text-xl text-metallic-600">
              Calculate your potential return on investment with our automation solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Your Current Operations</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-metallic-700 mb-2">
                    Daily Orders Processed
                  </label>
                  <input
                    type="number"
                    value={roiInputs.currentOrders}
                    onChange={(e) => setRoiInputs({...roiInputs, currentOrders: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-metallic-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-metallic-700 mb-2">
                    Monthly Labor Costs ($)
                  </label>
                  <input
                    type="number"
                    value={roiInputs.currentCost}
                    onChange={(e) => setRoiInputs({...roiInputs, currentCost: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-metallic-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-metallic-700 mb-2">
                    Warehouse Size (sq ft)
                  </label>
                  <input
                    type="number"
                    value={roiInputs.warehouseSize}
                    onChange={(e) => setRoiInputs({...roiInputs, warehouseSize: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-3 border border-metallic-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="bg-primary-900 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Projected Results</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-primary-800/50 rounded-lg">
                  <div className="flex items-center">
                    <DollarSign className="h-6 w-6 text-primary-400 mr-3" />
                    <span>Annual Savings</span>
                  </div>
                  <span className="text-2xl font-bold text-primary-400">
                    ${roiResults.savings.toLocaleString()}
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-primary-800/50 rounded-lg">
                  <div className="flex items-center">
                    <TrendingUp className="h-6 w-6 text-primary-400 mr-3" />
                    <span>Efficiency Increase</span>
                  </div>
                  <span className="text-2xl font-bold text-primary-400">
                    {roiResults.efficiency}%
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-primary-800/50 rounded-lg">
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-primary-400 mr-3" />
                    <span>Payback Period</span>
                  </div>
                  <span className="text-2xl font-bold text-primary-400">
                    {roiResults.payback} months
                  </span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-primary-800/30 rounded-lg">
                <p className="text-primary-200 text-sm">
                  * Calculations are estimates based on industry averages and may vary based on specific implementation details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-20 bg-saddlebrown-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Seamless Integration
            </h2>
            <p className="text-xl text-metallic-600">
              Our solutions work with your existing systems and infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">WMS Integration</h3>
              <p className="text-metallic-600">
                Connect with SAP, Oracle, Manhattan, and other warehouse management systems
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">ERP Connectivity</h3>
              <p className="text-metallic-600">
                Seamless data flow with your existing enterprise resource planning systems
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Box className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Legacy Support</h3>
              <p className="text-metallic-600">
                Work with older systems through custom APIs and middleware solutions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;