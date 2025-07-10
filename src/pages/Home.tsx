import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, TrendingUp, Users, CheckCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import bg1Video from '../assets/bg1.mp4';

const roboticsVideo = 'https://videos.pexels.com/video-files/8561925/8561925-hd_1920_1080_25fps.mp4';

const Home: React.FC = () => {
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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'VP Operations, LogiCorp',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'SnFifteen transformed our warehouse operations completely. We saw a 300% increase in efficiency within the first month.'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, TechLogistics',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: 'The ROI was immediate. Their robots work seamlessly with our existing systems and the support team is exceptional.'
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

  const fadeInLeft = {
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
  };

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
        <section className="py-16 bg-saddlebrown-50">
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
                <div className="text-3xl font-bold text-primary-900 mb-1">{stat.number}</div>
                <div className="text-metallic-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
        <section className="py-20 bg-saddlebrown-200">
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

      {/* CTA Section */}
        <section className="py-20 bg-saddlebrown-50">
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