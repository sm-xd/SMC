import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PackageCardProps {
  title: string;
  price: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
  delay: number;
}

const PackageCard: React.FC<PackageCardProps> = ({ 
  title, 
  price, 
  duration, 
  features, 
  isPopular = false,
  delay
}) => {
  return (
    <motion.div
      className={`glass-card p-8 relative transition-all duration-300 hover:border-primary-500 ${
        isPopular ? 'border-primary-500' : ''
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
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
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="text-primary-500 mt-1 mr-2 h-4 w-4 flex-shrink-0" />
            <span className="text-dark-300">{feature}</span>
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

const PackagesSection: React.FC = () => {
  const packages = [
    {
      title: "Basic Static Website",
      price: "₹7,000",
      duration: "one-time",
      features: [
        "1-page static website",
        "Responsive design",
        "Mobile-friendly",
        "Contact information",
        "Completion in 3 days"
      ],
      isPopular: false,
      delay: 0
    },
    {
      title: "Standard Static Website",
      price: "₹12,000",
      duration: "one-time",
      features: [
        "2-3 pages (Home, About, Contact)",
        "Responsive design",
        "Contact form",
        "Admin panel to view data",
        "Completion in 5 days"
      ],
      isPopular: true,
      delay: 1
    },
    {
      title: "Premium Package",
      price: "₹20,000",
      duration: "one-time",
      features: [
        "Standard package features",
        "Dynamic forms & features",
        "Full CMS integration",
        "SEO optimization",
        "Completion in 10 days"
      ],
      isPopular: false,
      delay: 2
    }
  ];

  return (
    <section className="py-20 bg-dark-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="text-gradient font-heading font-medium uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Packages
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Affordable Website Packages
          </motion.h2>
          
          <motion.p 
            className="text-dark-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Choose from our selection of website packages designed specifically for small businesses and local shops.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard 
              key={index}
              title={pkg.title}
              price={pkg.price}
              duration={pkg.duration}
              features={pkg.features}
              isPopular={pkg.isPopular}
              delay={pkg.delay}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/packages" className="inline-flex items-center font-medium text-primary-500 hover:text-secondary-500">
            View All Packages & Add-ons
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;