import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';

const hardwareProducts = [
  {
    name: 'Automated Coffee Machine',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
    description:
      'A smart coffee machine that automates the brewing process, offering a perfect cup every time with minimal human intervention. Ideal for offices, cafes, and public spaces.',
    details: 'Features: One-touch operation, self-cleaning, IoT-enabled, customizable recipes.'
  },
  {
    name: 'Chutney Dispenser',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop',
    description:
      'Revolutionizing food service with AI-driven automation, ensuring consistency, precision, and efficiency every time. Perfect for restaurants and food courts.',
    details: 'Features: AI-driven portion control, hygienic touchless operation, multiple sauce compatibility, easy refill system.'
  },
  {
    name: 'Vada Dispenser',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
    description:
      'A smart vending solution for perfectly crafted vadas, utilizing AI for perfect portioning and quality control. Automated preparation meets traditional taste.',
    details: 'Features: AI quality control, perfect portioning, temperature monitoring, automated cooking cycle.'
  },
  {
    name: 'Service Bot',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    description:
      'Designed to enhance customer engagement, our AI service bot automates inquiries, offers personalized recommendations, and handles support with physical presence.',
    details: 'Features: Natural language processing, autonomous navigation, voice interaction, 24/7 availability.'
  }
];

const softwareProducts = [
  {
    name: 'RoboControl Suite',
    image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=400&h=300&fit=crop',
    description: 'A cloud-based dashboard for monitoring and controlling all your automation hardware in real time.',
    details: 'Features: Real-time analytics, remote control, user management, alerting system.'
  },
  {
    name: 'AI Recipe Optimizer',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
    description: 'AI-powered software to optimize recipes and ingredient usage for maximum efficiency and taste.',
    details: 'Features: Ingredient analysis, cost optimization, taste prediction, nutritional tracking.'
  },
  {
    name: 'Point of Sale (POS)',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    description: 'Our AI-enabled POS system brings intuitive features, such as automatic stock tracking and customer insights, transforming the way businesses manage sales.',
    details: 'Features: Automated inventory management, customer analytics, sales forecasting, integrated payment processing.'
  },
  {
    name: 'Welcome App',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
    description: 'An AI-powered customer service app that offers personalized experiences, intelligent greetings, and seamless interactions.',
    details: 'Features: Personalized greetings, customer recognition, preference learning, multilingual support.'
  },
  {
    name: 'Dashboard',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    description: 'A robust, AI-driven dashboard for real-time data visualization and decision-making, designed to boost business performance.',
    details: 'Features: Real-time data visualization, predictive analytics, customizable widgets, performance metrics.'
  }
];

const Products = () => {
  const [category, setCategory] = useState('Hardware');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [slideDirection, setSlideDirection] = useState('right');
  const [showCategorySelector, setShowCategorySelector] = useState(false);
  const touchStartX = useRef(null);
  const intervalRef = useRef(null);
  const categorySelectorRef = useRef(null);

  // Auto-switch only when not manually controlled
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    // Only auto-switch if user hasn't manually selected a category
    if (!showCategorySelector && selectedProduct === null) {
      intervalRef.current = setInterval(() => {
        setSlideDirection(category === 'Hardware' ? 'right' : 'left');
        setCategory(prev => (prev === 'Hardware' ? 'Software' : 'Hardware'));
        setSelectedProduct(null);
        setHoveredProduct(null);
      }, 10000); // Increased to 10 seconds
    }
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [category, showCategorySelector, selectedProduct]);

  // Click outside to close category selector
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categorySelectorRef.current && !categorySelectorRef.current.contains(event.target)) {
        setShowCategorySelector(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Swipe gesture handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (category === 'Hardware' && deltaX > 60) {
      setSlideDirection('right');
      setCategory('Software');
      setSelectedProduct(null);
      setHoveredProduct(null);
    } else if (category === 'Software' && deltaX < -60) {
      setSlideDirection('left');
      setCategory('Hardware');
      setSelectedProduct(null);
      setHoveredProduct(null);
    }
    touchStartX.current = null;
  };

  // Category change handler
  const handleCategoryChange = (newCategory) => {
    if (newCategory !== category) {
      setSlideDirection(newCategory === 'Software' ? 'right' : 'left');
      setCategory(newCategory);
      setSelectedProduct(null);
      setHoveredProduct(null);
    }
    setShowCategorySelector(false);
  };

  const currentProducts = category === 'Hardware' ? hardwareProducts : softwareProducts;

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="py-16 bg-gradient-to-r from-slate-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header with Category Selector */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
              AI-Enabled Products by SNFifteen
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              We specialize in creating products that leverage AI to automate and optimize key processes. 
              From smart dispensers to powerful management systems, each product delivers exceptional performance with ease of use.
            </p>
            
            {/* Category Selector Dropdown */}
            <div className="relative inline-block" ref={categorySelectorRef}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center px-8 py-4 bg-slate-700 text-white rounded-lg text-lg font-medium shadow-lg hover:bg-slate-800 transition-all duration-200 mx-auto border border-slate-600"
                onClick={() => setShowCategorySelector(!showCategorySelector)}
              >
                <span className="mr-3">{category} Products</span>
                <motion.div
                  animate={{ rotate: showCategorySelector ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {showCategorySelector && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden z-50 min-w-[220px]"
                  >
                    <button
                      className={`w-full px-6 py-4 text-left font-medium transition-all duration-200 ${
                        category === 'Hardware' 
                          ? 'bg-slate-100 text-slate-800 border-l-4 border-slate-600' 
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                      onClick={() => handleCategoryChange('Hardware')}
                    >
                      Hardware Products
                    </button>
                    <button
                      className={`w-full px-6 py-4 text-left font-medium transition-all duration-200 border-t border-slate-100 ${
                        category === 'Software' 
                          ? 'bg-slate-100 text-slate-800 border-l-4 border-slate-600' 
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                      onClick={() => handleCategoryChange('Software')}
                    >
                      Software Products
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Navigation Arrows - Simplified */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden">
              <button
                className={`px-6 py-3 font-medium transition-all duration-200 ${
                  category === 'Hardware' 
                    ? 'bg-slate-700 text-white' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
                onClick={() => handleCategoryChange('Hardware')}
              >
                Hardware
              </button>
              <button
                className={`px-6 py-3 font-medium transition-all duration-200 border-l border-slate-200 ${
                  category === 'Software' 
                    ? 'bg-slate-700 text-white' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
                onClick={() => handleCategoryChange('Software')}
              >
                Software
              </button>
            </div>
          </div>

          {/* Floating Arrow Buttons - More Subtle */}
          {category === 'Software' && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="fixed left-6 top-1/2 -translate-y-1/2 z-40 bg-white text-slate-700 rounded-full p-3 shadow-lg hover:shadow-xl border border-slate-200 transition-all duration-200"
              onClick={() => handleCategoryChange('Hardware')}
              aria-label="Go to Hardware"
            >
              <ArrowLeft className="h-5 w-5" />
            </motion.button>
          )}
          {category === 'Hardware' && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="fixed right-6 top-1/2 -translate-y-1/2 z-40 bg-white text-slate-700 rounded-full p-3 shadow-lg hover:shadow-xl border border-slate-200 transition-all duration-200"
              onClick={() => handleCategoryChange('Software')}
              aria-label="Go to Software"
            >
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          )}

          {/* Products Grid */}
          <div className="relative" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <AnimatePresence mode="wait">
              <motion.div
                key={category}
                initial={{ x: slideDirection === 'right' ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: slideDirection === 'right' ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
              >
                {currentProducts.map((product, idx) => (
                  <motion.div
                    key={product.name}
                    className={`group relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer border transition-all duration-300 hover:shadow-xl ${
                      selectedProduct === idx ? 'border-slate-400 shadow-lg ring-2 ring-slate-200' : 'border-slate-200 hover:border-slate-300'
                    }`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.3 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -4 }}
                    onMouseEnter={() => setHoveredProduct(idx)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900">{product.name}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">{product.description}</p>
                    </div>

                    <AnimatePresence>
                      {hoveredProduct === idx && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4"
                        >
                          <button
                            className="w-full bg-slate-700 text-white py-2.5 px-4 rounded-md font-medium hover:bg-slate-800 transition-colors duration-200 shadow-sm"
                            onClick={(e) => { 
                              e.stopPropagation(); 
                              setSelectedProduct(selectedProduct === idx ? null : idx); 
                            }}
                          >
                            {selectedProduct === idx ? 'Hide Details' : 'View Details'}
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Product Details */}
            <AnimatePresence>
              {selectedProduct !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white rounded-lg shadow-lg border border-slate-200 p-8 max-w-4xl mx-auto"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                      <img 
                        src={currentProducts[selectedProduct].image} 
                        alt={currentProducts[selectedProduct].name} 
                        className="w-full h-64 object-cover rounded-lg shadow-sm border border-slate-100" 
                      />
                    </div>
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-slate-800">
                          {currentProducts[selectedProduct].name}
                        </h3>
                        <button
                          className="text-slate-400 hover:text-slate-600 transition-colors duration-200 ml-4"
                          onClick={() => setSelectedProduct(null)}
                          aria-label="Close details"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {currentProducts[selectedProduct].description}
                      </p>
                      
                      <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                        <h4 className="font-semibold text-slate-800 mb-2">Technical Details</h4>
                        <p className="text-slate-700 text-sm leading-relaxed">
                          {currentProducts[selectedProduct].details}
                        </p>
                      </div>
                      
                      <div className="flex gap-3 mt-6">
                        <button className="bg-slate-700 text-white px-6 py-2.5 rounded-md font-medium hover:bg-slate-800 transition-colors duration-200 shadow-sm">
                          Learn More
                        </button>
                        <button className="border border-slate-300 text-slate-700 px-6 py-2.5 rounded-md font-medium hover:bg-slate-50 transition-colors duration-200">
                          Contact Sales
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;