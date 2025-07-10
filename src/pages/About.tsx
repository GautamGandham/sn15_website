import React, { useRef } from 'react';
import { Award, Target, Lightbulb, TrendingUp, Users, Globe } from 'lucide-react';
import coffeeImg from '../assets/coffee.jpg';
import chutneyImg from '../assets/chutney.avif';
import roboArmImg from '../assets/robo arm.jpg';
import { motion, useInView, useViewportScroll, useTransform } from 'framer-motion';

const bg3d = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80'; // Example 3D robotics/AI image

const About: React.FC = () => {
  const milestones = [
    { year: '2019', title: 'Company Founded', description: 'Started with a vision to revolutionize warehouse automation' },
    { year: '2020', title: 'First Product Launch', description: 'Deployed our first autonomous warehouse robot' },
    { year: '2021', title: 'Series A Funding', description: 'Raised $15M to scale operations and R&D' },
    { year: '2022', title: '50+ Clients', description: 'Successfully deployed solutions across 50+ warehouses' },
    { year: '2023', title: 'AI Breakthrough', description: 'Launched next-gen AI-powered optimization platform' },
    { year: '2024', title: 'Global Expansion', description: 'Expanded operations to Europe and Asia' },
  ];

  const achievements = [
    { icon: Award, title: 'Industry Recognition', description: 'Winner of Best Robotics Innovation Award 2023' },
    { icon: Users, title: '50M+ Items Processed', description: 'Our systems have successfully processed over 50 million items' },
    { icon: TrendingUp, title: '300% Efficiency Gain', description: 'Average efficiency improvement across all deployments' },
    { icon: Globe, title: 'Global Presence', description: 'Operating in 15+ countries worldwide' },
  ];

  return (
    <>
      {/* 3D Background Image - fixed, always visible */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -50, width: '100vw', height: '100vh', background: '#a0522d' }} />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative bg-saddlebrown-100">
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-saddlebrown-200/80 pointer-events-none z-0" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
                Pioneering the Future of
                <span className="text-brand-300"> Food Automation Robotics</span>
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto drop-shadow">
                Revolutionizing food operations with cutting-edge AI and robotics solutions. Transform your kitchens and food service with intelligent automation.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-saddlebrown-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="border-2 border-brand rounded-xl p-8 bg-white/80">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-primary-600 mr-3" />
                  <h2 className="text-3xl font-bold text-primary-900">Our Mission</h2>
                </div>
                <p className="text-metallic-700 text-lg leading-relaxed mb-6">
                  To democratize food automation robotics by making cutting-edge robotics and AI accessible 
                  to businesses of all sizes. We believe that every food business should have the power of 
                  intelligent automation to optimize operations and drive growth.
                </p>
                <p className="text-metallic-700 text-lg leading-relaxed">
                  Our technology not only increases efficiency but also creates safer working environments 
                  and enables human workers to focus on higher-value tasks.
                </p>
              </div>
              
              <div className="border-2 border-brand rounded-xl p-8 bg-white/80">
                <div className="flex items-center mb-6">
                  <Lightbulb className="h-8 w-8 text-primary-600 mr-3" />
                  <h2 className="text-3xl font-bold text-primary-900">Our Vision</h2>
                </div>
                <p className="text-metallic-700 text-lg leading-relaxed mb-6">
                  To become the global leader in intelligent food automation robotics, setting new standards 
                  for efficiency, reliability, and innovation in the food industry.
                </p>
                <p className="text-metallic-700 text-lg leading-relaxed">
                  We envision a future where autonomous systems seamlessly integrate with human workers, 
                  creating food businesses that are not just efficient, but truly intelligent and adaptive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Projects */}
        <section className="py-20 bg-saddlebrown-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                Our Products
              </h2>
              <p className="text-xl text-metallic-600 max-w-3xl mx-auto">
                We are passionate about building innovative automation solutions for everyday needs. Here are some of our flagship and upcoming projects:
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Automated Coffee Machine - Rotate In Animation */}
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center"
                initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.img 
                  src={coffeeImg} 
                  alt="Automated Coffee Machine" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-xl font-bold text-primary-900 mb-2">Automated Coffee Machine</h3>
                <p className="text-metallic-700 text-center">A smart coffee machine that automates the brewing process, offering a perfect cup every time with minimal human intervention. Ideal for offices, cafes, and public spaces.</p>
              </motion.div>
              
              {/* Automated Chutney Dispenser - Slide from Left Animation */}
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center"
                initial={{ opacity: 0, x: -100, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                whileHover={{ 
                  x: 10, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.img 
                  src={chutneyImg} 
                  alt="Automated Chutney Dispenser" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="text-xl font-bold text-primary-900 mb-2">Automated Chutney Dispenser</h3>
                <p className="text-metallic-700 text-center">A hygienic, programmable dispenser for serving chutneys and sauces, designed for restaurants and food courts to ensure consistency and reduce waste.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-saddlebrown-200" id="our-journey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-metallic-600">
                Key milestones that shaped our company and the industry
              </p>
            </div>

            <div className="relative" style={{ minHeight: 400 }}>
              {/* Animated vertical line with scroll-linked height and highlight */}
              {(() => {
                const timelineRef = useRef(null);
                const { scrollYProgress } = useViewportScroll();
                // Animate height from 0% to 100% as user scrolls this section
                const lineHeight = useTransform(scrollYProgress, [0.2, 0.5], ['0%', '100%']);
                const highlightColor = useTransform(scrollYProgress, [0.2, 0.5], ['#e0e0e0', '#2563eb']);
                const tipY = useTransform(lineHeight, v => `calc(${v} - 12px)`);
                return (
                  <>
                    {/* Base line */}
                    <motion.div
                      ref={timelineRef}
                      style={{ height: '100%', background: '#e0e0e0', originY: 0 }}
                      className="absolute left-1/2 transform -translate-x-1/2 w-1 rounded-full"
                    />
                    {/* Highlighted fill bar */}
                    <motion.div
                      style={{ height: lineHeight, background: highlightColor, originY: 0 }}
                      className="absolute left-1/2 transform -translate-x-1/2 w-1 rounded-full z-10"
                    />
                    {/* Glowing highlight at the tip */}
                    <motion.div
                      style={{ top: tipY, background: highlightColor }}
                      className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full shadow-lg z-20"
                      animate={{ boxShadow: [
                        '0 0 0 0 #fff0',
                        '0 0 16px 8px #641e1688',
                        '0 0 0 0 #fff0'
                      ] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  </>
                );
              })()}
              <div className="space-y-12">
                {milestones.map((milestone, index) => {
                  // Animated dot for each milestone
                  const dotRef = useRef(null);
                  const isDotInView = useInView(dotRef, { once: true, margin: '-100px' });
                  return (
                    <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}> 
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                          <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-semibold text-primary-900 mb-2">{milestone.title}</h3>
                          <p className="text-metallic-600">{milestone.description}</p>
                        </div>
                      </div>
                      {/* Animated dot */}
                      <motion.div
                        ref={dotRef}
                        initial={{ scale: 0.5, opacity: 0.5 }}
                        animate={isDotInView ? { scale: 1.2, opacity: 1 } : {}}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        className="relative flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full z-10 shadow-lg"
                      >
                        <motion.div
                          animate={isDotInView ? { scale: [1, 1.3, 1], boxShadow: ['0 0 0 0 #fff0', '0 0 0 8px #C4A48444', '0 0 0 0 #fff0'] } : {}}
                          transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 * index }}
                          className="w-4 h-4 bg-white rounded-full"
                        />
                      </motion.div>
                      <div className="w-1/2"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-saddlebrown-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                Our Achievements
              </h2>
              <p className="text-xl text-metallic-600">
                Recognition and milestones that demonstrate our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors duration-300">
                  <achievement.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">{achievement.title}</h3>
                  <p className="text-metallic-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation Focus */}
        <section className="py-20 bg-saddlebrown-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Innovation at Our Core
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  We invest heavily in research and development, with 40% of our team dedicated to 
                  pushing the boundaries of what's possible in warehouse automation.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                    <span>Advanced Machine Learning Algorithms</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                    <span>Computer Vision and Perception Systems</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                    <span>Autonomous Navigation Technology</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                    <span>Predictive Analytics and Optimization</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100/90 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                    <div className="text-gray-700">Patents Filed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">40%</div>
                    <div className="text-gray-700">R&D Investment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
                    <div className="text-gray-700">PhD Researchers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                    <div className="text-gray-700">Innovation Focus</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;