import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Sparkles, PiggyBank, Users, Headphones } from 'lucide-react';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3">{title}</h3>
      <p className="text-dark-300">{description}</p>
    </motion.div>
  );
};

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <PiggyBank size={24} />,
      title: "Affordable Pricing",
      description: "Budget-friendly packages designed specifically for small businesses and startups."
    },
    {
      icon: <Clock size={24} />,
      title: "Quick Turnaround",
      description: "Get your website up and running in days, not weeks or months."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Modern Design",
      description: "Clean, professional designs that reflect your brand and engage customers."
    },
    {
      icon: <Shield size={24} />,
      title: "Reliable & Secure",
      description: "Built with security in mind to protect your business and customer data."
    },
    {
      icon: <Users size={24} />,
      title: "Client-Focused",
      description: "We prioritize your needs and work closely with you throughout the process."
    },
    {
      icon: <Headphones size={24} />,
      title: "Ongoing Support",
      description: "We're here to help even after your website is launched with responsive support."
    }
  ];

  return (
    <section className="py-20 bg-dark-800 relative">
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="text-gradient font-heading font-medium uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            The Evoke Advantage
          </motion.h2>
          
          <motion.p 
            className="text-dark-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            We understand the unique challenges small businesses face. Here's why local businesses trust us for their digital needs.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureItem 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;