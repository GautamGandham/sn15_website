import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, TrendingUp, Users, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import bg1Video from '../assets/bg1.mp4';

//const roboticsVideo = 'https://videos.pexels.com/video-files/8561925/8561925-hd_1920_1080_25fps.mp4';

// Custom hook for count up animation
function useCountUp(target: number, duration = 1200, trigger: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) {
      setValue(0);
      return;
    }
    let start = 0;
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * (target - start) + start);
      setValue(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
    requestAnimationFrame(animate);
  }, [target, trigger]);
  return value;
}

function AnimatedStat({ value, trigger }: { value: string, trigger: boolean }) {
  if (value.endsWith('%')) {
    const target = parseFloat(value);
    const animated = useCountUp(target, 1200, trigger);
    return <span>{animated}%</span>;
  } else if (/^[0-9,.]+$/.test(value.replace(/ /g, ''))) {
    const target = parseFloat(value.replace(/,/g, ''));
    const animated = useCountUp(target, 1200, trigger);
    return <span>{animated}</span>;
  } else {
    // For non-numeric (e.g., '50+') just show as is
    return <span>{value}</span>;
  }
}

const Home: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  
  const technologies = {
    frontend: {
      title: 'Frontend',
      icon: '🎨',
      technologies: [
        {
          name: 'React.js',
          description: 'Modern JavaScript library for building interactive user interfaces with component-based architecture and virtual DOM for optimal performance.',
          features: ['Component-based architecture', 'Virtual DOM', 'JSX syntax', 'Rich ecosystem', 'Mobile app development with React Native']
        },
        {
          name: 'Angular',
          description: 'Comprehensive framework for building scalable web applications with TypeScript, dependency injection, and powerful CLI tools.',
          features: ['TypeScript integration', 'Dependency injection', 'Two-way data binding', 'Built-in testing tools', 'Enterprise-ready architecture']
        }
      ]
    },
    backend: {
      title: 'Backend',
      icon: '⚙️',
      technologies: [
        {
          name: 'Python',
          description: 'Versatile programming language ideal for AI/ML development, web applications, and data processing with extensive libraries.',
          features: ['AI/ML libraries (TensorFlow, PyTorch)', 'Web frameworks (Django, Flask)', 'Data analysis (Pandas, NumPy)', 'Automation and scripting', 'Cross-platform compatibility']
        },
        {
          name: 'Java',
          description: 'Enterprise-grade programming language known for reliability, scalability, and extensive ecosystem for building robust applications.',
          features: ['Object-oriented programming', 'Platform independence', 'Enterprise frameworks (Spring)', 'High performance', 'Strong typing and security']
        },
        {
          name: 'Node.js',
          description: 'JavaScript runtime for server-side development enabling full-stack JavaScript applications with non-blocking I/O.',
          features: ['Event-driven architecture', 'NPM ecosystem', 'Real-time applications', 'Microservices support', 'Fast development cycle']
        }
      ]
    },
    mobile: {
      title: 'Mobile',
      icon: '📱',
      technologies: [
        {
          name: 'Flutter',
          description: 'Google\'s UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.',
          features: ['Single codebase for multiple platforms', 'Hot reload for fast development', 'Rich widget library', 'High performance', 'Material Design support']
        },
        {
          name: 'Android',
          description: 'Native Android development using Kotlin and Java for creating high-performance mobile applications with full platform access.',
          features: ['Native performance', 'Full platform APIs', 'Material Design', 'Google Play integration', 'Custom UI components']
        },
        {
          name: 'React Native',
          description: 'Cross-platform mobile development framework using React.js for building native mobile applications with JavaScript.',
          features: ['Cross-platform development', 'Native performance', 'Hot reloading', 'Large community', 'Third-party library support']
        }
      ]
    }
  };

  const stats = [
    { number: '300%', label: 'Efficiency Increase', icon: TrendingUp },
    { number: '99.9%', label: 'Accuracy Rate', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '24/7', label: 'System Uptime', icon: Shield },
  ];
    
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Process orders 10x faster than traditional methods with our AI-powered automation.'
    },
    {
      icon: Shield,
      title: 'Reliable & Secure',
      description: 'Enterprise-grade security and 99.9% uptime guarantee for your peace of mind.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Grow your operations seamlessly with our adaptable robotics platform.'
    },
  ];

  

  // Animation variants for scroll effects
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  /*const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };*/

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: false, margin: '-100px' });

  return (
    <>
      {/* Robotics Motion Video Background */}
      <div className="fixed inset-0 w-screen h-screen -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src={bg1Video}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="pt-20 relative z-10">
      {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover -z-10"
            src={bg1Video}
          />
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/20 -z-10" />
          {/* Floating Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="animate-fade-in"
              >
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="text-primary-400">Automate</span> the shift<br /> nobody wants to do
                </motion.h1>
                <motion.p 
                  className="text-xl text-coffee-100 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Our food automation robots & AI agents free your team to focus on what matters most.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link
                    to="/demo"
                    className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group"
                  >
                    Book Free Demo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  <Link
                    to="/services"
                    className="border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

      {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-slate-100 to-blue-100" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={scaleIn}
              >
                <stat.icon className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-primary-900 mb-1"><AnimatedStat value={stat.number} trigger={inView} /></div>
                <div className="text-metallic-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
        <section className="py-20 bg-gradient-to-r from-slate-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                Why Choose Sn15 AI & Robotics?
            </h2>
            <p className="text-xl text-metallic-600 max-w-3xl mx-auto">
              Our cutting-edge technology delivers unmatched performance and reliability for your warehouse operations.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="text-center p-8 rounded-xl bg-metallic-50 hover:bg-primary-50 transition-all duration-300 group"
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                <feature.icon className="h-12 w-12 text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-primary-900 mb-4">{feature.title}</h3>
                <p className="text-metallic-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="py-20 bg-gradient-to-r from-slate-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-metallic-600 max-w-3xl mx-auto">
              Cutting-edge technologies and frameworks that power our innovative solutions
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Category Navigation */}
              <div className="lg:w-1/3 border-r border-blue-100">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary-900 mb-4">Technology Categories</h3>
                  <div className="space-y-2">
                    {Object.entries(technologies).map(([key, category]) => (
                      <button
                        key={key}
                        onClick={() => setExpandedCategory(expandedCategory === key ? null : key)}
                        className={`w-full p-4 text-left rounded-lg transition-all duration-200 flex items-center justify-between ${
                          expandedCategory === key
                            ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500'
                            : 'bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{category.icon}</span>
                          <span className="font-medium">{category.title}</span>
                        </div>
                        {expandedCategory === key ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Content Area */}
              <div className="lg:w-2/3">
                {expandedCategory ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="p-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-2xl">{technologies[expandedCategory as keyof typeof technologies].icon}</span>
                      <h3 className="text-2xl font-bold text-primary-900">
                        {technologies[expandedCategory as keyof typeof technologies].title} Technologies
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {technologies[expandedCategory as keyof typeof technologies].technologies.map((tech, index) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-blue-50 rounded-xl p-4 border border-blue-100"
                        >
                          <h4 className="font-semibold text-primary-900 mb-3 text-lg">{tech.name}</h4>
                          <p className="text-sm text-metallic-700 mb-4 leading-relaxed">{tech.description}</p>
                          <div className="space-y-2">
                            <h5 className="text-xs font-semibold text-primary-700 uppercase tracking-wide">Key Features:</h5>
                            <ul className="space-y-1">
                              {tech.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-2 text-xs text-metallic-600">
                                  <CheckCircle className="w-3 h-3 text-primary-500 flex-shrink-0 mt-0.5" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <div className="p-6 flex items-center justify-center h-64">
                    <div className="text-center text-gray-500">
                      <div className="text-4xl mb-4">💻</div>
                      <h3 className="text-lg font-medium mb-2">Select a Technology Category</h3>
                      <p className="text-sm">Choose from the categories on the left to explore our technology stack</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-primary-900"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
          >
            Ready to Transform Your Warehouse?
          </motion.h2>
          <motion.p 
            className="text-xl text-primary-700 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            Join the automatiaon revolution and see immediate results in efficiency, accuracy, and cost savings.
          </motion.p>
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;