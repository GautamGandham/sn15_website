import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Maximize2, BarChart3, Zap, Shield, Clock, TrendingUp } from 'lucide-react';
import botImg from '../assets/bot.jpg';
import coffeeImg from '../assets/coffee.jpg';
import roboArmImg from '../assets/robo arm.jpg';

const ProductDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(0);

  const products = [
    {
      name: 'Service Bot',
      category: 'Food Service & Delivery',
      description: 'A versatile service robot designed for food delivery, customer interaction, and table service in restaurants, hotels, and cafeterias.',
      specs: {
        'Service Speed': '30 tables/hour',
        'Battery Life': '12 hours',
        'Payload': '10 kg',
        'Navigation': 'Autonomous, obstacle avoidance',
        'Interaction': 'Touchscreen & Voice'
      },
      features: [
        'Autonomous food & item delivery',
        'Interactive touchscreen for orders',
        'Voice assistant for customer queries',
        'Safe navigation in crowded spaces',
        'Customizable tray and storage options'
      ],
      image: botImg
    },
    {
      name: 'Automated Coffee Machine',
      category: 'Food & Beverage Automation',
      description: 'One-touch smart coffee for any space—fast, consistent, and fully automated.',
      specs: {
        'Cups per Hour': '60',
        'Beverage Options': 'Espresso, Latte, Cappuccino, Americano',
        'Touchscreen': '7-inch interactive',
        'Self-Cleaning': 'Yes',
        'Remote Monitoring': 'Enabled'
      },
      features: [
        'One-touch beverage selection',
        'Consistent taste and quality',
        'Automated cleaning and maintenance',
        'Customizable recipes',
        'IoT-enabled for remote monitoring'
      ],
      image: coffeeImg
    },
    {
      name: 'Robo Arm (Planned)',
      category: 'Future Automation Project',
      description: 'A next-gen robotic arm for advanced food and warehouse automation. Stay tuned for more details!',
      specs: {
        'Status': 'In Development',
        'Release': 'TBA',
        'Capabilities': 'Precision handling, multi-tasking, AI-powered'
      },
      features: [
        'Versatile automation tasks',
        'AI-driven precision',
        'Safe for food and industrial use',
        'Customizable for various industries'
      ],
      image: roboArmImg
    }
  ];

  const caseStudies = [
    {
      company: 'TechLogistics Corp',
      industry: 'E-commerce',
      challenge: 'Processing 10,000+ orders daily with 95% accuracy',
      solution: 'Deployed 12 PickBot Pro units with SmartShelf integration',
      results: {
        efficiency: '+280%',
        accuracy: '99.9%',
        roi: '8 months'
      }
    },
    {
      company: 'Global Distribution Inc',
      industry: 'Retail',
      challenge: 'High labor costs and seasonal demand fluctuations',
      solution: 'Implemented NavBot Fleet with 20 autonomous vehicles',
      results: {
        efficiency: '+320%',
        accuracy: '99.7%',
        roi: '6 months'
      }
    }
  ];

  const performanceMetrics = [
    { label: 'Average Efficiency Gain', value: '300%', icon: TrendingUp },
    { label: 'System Uptime', value: '99.9%', icon: Shield },
    { label: 'Error Reduction', value: '95%', icon: BarChart3 },
    { label: 'ROI Achievement', value: '8 months', icon: Clock }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative bg-gradient-to-r from-slate-100 to-blue-100">
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none z-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-900 drop-shadow-lg">
              Experience Our Technology
              <span className="text-primary-300"> In Action</span>
            </h1>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto drop-shadow">
              Explore our cutting-edge robotics solutions through interactive demos, 
              technical specifications, and real-world case studies.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Product Viewer */}
      <section className="py-20 bg-gradient-to-r from-slate-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              3D Product Showcase
            </h2>
            <p className="text-xl text-metallic-600">
              Interact with our products and explore their capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Product Selection */}
            <div className="space-y-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedProduct === index
                      ? 'bg-primary-100 border-2 border-primary-500'
                      : 'bg-metallic-50 hover:bg-metallic-100 border-2 border-transparent'
                  }`}
                  onClick={() => setSelectedProduct(index)}
                >
                  <h3 className="font-semibold text-primary-900">{product.name}</h3>
                  <p className="text-sm text-metallic-600">{product.category}</p>
                </div>
              ))}
            </div>

            {/* 3D Viewer */}
            <div className="lg:col-span-2">
              <div className="bg-metallic-50 rounded-xl p-8 h-96 flex flex-row items-center justify-between relative">
                <div className="flex-shrink-0 w-1/2 h-full flex items-center justify-start">
                <img
                  src={products[selectedProduct].image}
                  alt={products[selectedProduct].name}
                    className="h-full w-auto object-contain rounded-lg bg-white"
                />
                </div>
                <div className="flex-1 flex flex-col items-start justify-center pl-8">
                    <div className="text-6xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold mb-2 text-primary-900">{products[selectedProduct].name}</h3>
                  <p className="text-lg text-metallic-700">{products[selectedProduct].description}</p>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors">
                    <RotateCcw className="h-5 w-5" />
                  </button>
                  <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors">
                    <Maximize2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-metallic-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Technical Specifications</h3>
              <div className="space-y-3">
                {Object.entries(products[selectedProduct].specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-metallic-600">{key}:</span>
                    <span className="font-semibold text-primary-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-metallic-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-primary-900 mb-4">Key Features</h3>
              <div className="space-y-2">
                {products[selectedProduct].features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    <span className="text-metallic-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demonstrations */}
      <section className="py-20 bg-gradient-to-r from-slate-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              See Our Robots in Action
            </h2>
            <p className="text-xl text-metallic-600">
              Watch real deployments in working warehouses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-primary-600 to-primary-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-colors"
                  >
                    {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">service bot</h3>
                  <p className="text-sm opacity-90">Automated picking in action</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-metallic-600">
                  Watch our PickBot Pro handle complex picking tasks with precision and speed 
                  in a real e-commerce fulfillment center.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-primary-600 to-primary-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-colors">
                    <Play className="h-8 w-8" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Robo Arm</h3>
                  <p className="text-sm opacity-90">Autonomous navigation system</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-metallic-600">
                  See how our NavBot Fleet coordinates seamlessly to transport materials 
                  throughout a large distribution center.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gradient-to-r from-slate-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Proven Performance
            </h2>
            <p className="text-xl text-metallic-600">
              Real metrics from our deployed solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-metallic-50 rounded-xl">
                <metric.icon className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary-900 mb-2">{metric.value}</div>
                <div className="text-metallic-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {/* Success Stories section removed as per request */}
    </div>
  );
};

export default ProductDemo;