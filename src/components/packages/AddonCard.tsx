import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AddonCardProps {
  title: string;
  price: string;
  duration: string;
  description: string;
  index: number;
}

const AddonCard: React.FC<AddonCardProps> = ({ 
  title, 
  price, 
  duration, 
  description,
  index
}) => {
  return (
    <motion.div
      className="glass-card p-6 flex flex-col transition-all duration-300 hover:border-primary-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-heading font-semibold">{title}</h3>
          <div className="mt-1">
            <span className="text-xl font-bold font-heading">{price}</span>
            <span className="text-dark-300 text-sm ml-1">/ {duration}</span>
          </div>
        </div>
        <div className="text-primary-500">
          <PlusCircle size={24} />
        </div>
      </div>
      
      <p className="text-dark-300 text-sm mb-4 flex-grow">{description}</p>
      
      <Link 
        to="/contact" 
        className="text-primary-500 hover:text-secondary-500 font-medium text-sm inline-flex items-center mt-auto"
      >
        Add to Package
        <svg 
          className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M14 5l7 7m0 0l-7 7m7-7H3" 
          />
        </svg>
      </Link>
    </motion.div>
  );
};

export default AddonCard;