import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  category: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, benefits, category, index }) => {
  return (
    <motion.div
      className="glass-card overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-6">
        <div className="w-14 h-14 rounded-lg bg-dark-700 flex items-center justify-center mb-6 text-primary-500 group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-secondary-500 group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        
        <span className="text-xs font-medium uppercase tracking-wider text-dark-300 mb-2 inline-block">
          {category}
        </span>
        
        <h3 className="text-xl font-heading font-semibold mb-3">{title}</h3>
        
        <p className="text-dark-300 mb-5">{description}</p>
        
        <div className="mb-5">
          <h4 className="text-sm font-medium text-white mb-3">Key Benefits:</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, i) => (
              <li key={i} className="text-dark-300 text-sm flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="px-6 py-4 border-t border-dark-700 bg-dark-700/50">
        <Link 
          to="/packages" 
          className="text-primary-500 hover:text-secondary-500 font-medium inline-flex items-center"
        >
          View Related Packages
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;