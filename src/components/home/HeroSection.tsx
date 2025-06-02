import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center bg-dark-900 bg-hero-pattern overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Hero Text */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div variants={item}>
              <span className="inline-block px-4 py-2 rounded-full bg-dark-800 border border-dark-700 text-primary-500 font-medium text-sm mb-6">
                IT Services for Small Businesses
              </span>
            </motion.div>
            
            <motion.h1 
              variants={item}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Transform Your Business With <span className="text-gradient">Digital Solutions</span>
            </motion.h1>
            
            <motion.p 
              variants={item}
              className="text-dark-300 text-lg max-w-2xl"
            >
              We create affordable, professional websites and digital solutions tailored specifically for small businesses and local shops. Get online, reach more customers, and grow your business.
            </motion.p>
            
            <motion.div 
              variants={item}
              className="flex flex-wrap gap-4"
            >
              <Link 
                to="/contact" 
                className="btn-primary"
              >
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/packages" 
                className="btn-outline"
              >
                View Packages
              </Link>
            </motion.div>
          </div>
          
          {/* Hero Image */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={item}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-10 rounded-xl blur-2xl transform scale-110"></div>
              <div className="glass-card p-4 relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Digital Business Transformation" 
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;