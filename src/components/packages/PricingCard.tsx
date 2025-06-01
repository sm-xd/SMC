import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  price: string;
  duration: string;
  features: Array<{
    text: string;
    included: boolean;
  }>;
  isPopular?: boolean;
  index: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  duration, 
  features, 
  isPopular = false,
  index
}) => {
  return (
    <motion.div
      className={`glass-card p-8 relative transition-all duration-300 hover:border-primary-500 ${
        isPopular ? 'border-primary-500' : ''
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold py-1 px-4 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <h3 className="text-xl font-heading font-semibold mb-4">{title}</h3>
      
      <div className="mb-6">
        <span className="text-3xl font-bold font-heading">{price}</span>
        <span className="text-dark-300 ml-1">/ {duration}</span>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            {feature.included ? (
              <Check className="text-primary-500 mt-1 mr-2 h-4 w-4 flex-shrink-0" />
            ) : (
              <X className="text-dark-500 mt-1 mr-2 h-4 w-4 flex-shrink-0" />
            )}
            <span className={feature.included ? "text-dark-300" : "text-dark-500 line-through"}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      
      <Link 
        to="/contact" 
        className={`btn w-full ${
          isPopular ? 'btn-primary' : 'btn-outline'
        }`}
      >
        Get Started
      </Link>
    </motion.div>
  );
};

export default PricingCard;