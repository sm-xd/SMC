import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PricingCard from '../components/packages/PricingCard';
import AddonCard from '../components/packages/AddonCard';

const PackagesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pricing');
  
  const packages = [
    {
      title: "Basic Static Website",
      price: "₹7,000 - ₹8,000",
      duration: "one-time",
      features: [
        { text: "1-page static website", included: true },
        { text: "Responsive design", included: true },
        { text: "Mobile-friendly", included: true },
        { text: "Contact information", included: true },
        { text: "Completion in 3 days", included: true },
        { text: "Admin panel", included: false },
        { text: "Contact form", included: false },
        { text: "Multiple pages", included: false }
      ],
      isPopular: false
    },
    {
      title: "Standard Static Website",
      price: "₹10,000 - ₹12,000",
      duration: "one-time",
      features: [
        { text: "2-3 pages (Home, About, Contact)", included: true },
        { text: "Responsive design", included: true },
        { text: "Mobile-friendly", included: true },
        { text: "Contact form", included: true },
        { text: "Admin panel to view data", included: true },
        { text: "Completion in 5 days", included: true },
        { text: "Dynamic features", included: false },
        { text: "Full CMS", included: false }
      ],
      isPopular: true
    },
    {
      title: "Premium Package",
      price: "₹20,000 - ₹25,000",
      duration: "one-time",
      features: [
        { text: "5+ pages", included: true },
        { text: "Responsive design", included: true },
        { text: "Dynamic forms & features", included: true },
        { text: "Full CMS integration", included: true },
        { text: "SEO optimization", included: true },
        { text: "Social media integration", included: true },
        { text: "Analytics setup", included: true },
        { text: "Completion in 10 days", included: true }
      ],
      isPopular: false
    }
  ];
  
  const addons = [
    {
      title: "Dynamic Forms & Features",
      price: "₹3,000",
      duration: "+2 Days",
      description: "Add dynamic forms, search functionality, filtering, and interactive elements to enhance user experience."
    },
    {
      title: "Admin Panel (CMS)",
      price: "₹7,000 - ₹8,000",
      duration: "+3 Days",
      description: "Full content management system to easily update products, blog posts, and other website content without technical knowledge."
    },
    {
      title: "Chatbot Integration",
      price: "₹6,000 - ₹10,000",
      duration: "+2-3 Days",
      description: "Integrate WhatsApp, Facebook Messenger, or custom chatbots to provide instant customer support and improve engagement."
    },
    {
      title: "SEO Optimization",
      price: "₹3,000 - ₹6,000",
      duration: "one-time",
      description: "Basic on-page optimization, metadata setup, Google Business Profile, and local SEO to improve search visibility."
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="text-gradient font-heading font-medium uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Our Packages
          </motion.span>
          
          <motion.h1 
            className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Affordable Website Packages
          </motion.h1>
          
          <motion.p 
            className="text-dark-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Choose from our selection of website packages designed specifically for small businesses and local shops. Customize with add-ons for the perfect solution.
          </motion.p>
        </div>
        
        {/* Tabs */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-flex bg-dark-800 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeTab === 'pricing'
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'text-dark-300 hover:text-white'
              }`}
            >
              Pricing Packages
            </button>
            <button
              onClick={() => setActiveTab('addons')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeTab === 'addons'
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'text-dark-300 hover:text-white'
              }`}
            >
              Add-ons
            </button>
          </div>
        </motion.div>
        
        {/* Pricing Packages */}
        {activeTab === 'pricing' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <PricingCard 
                key={index}
                title={pkg.title}
                price={pkg.price}
                duration={pkg.duration}
                features={pkg.features}
                isPopular={pkg.isPopular}
                index={index}
              />
            ))}
          </div>
        )}
        
        {/* Add-ons */}
        {activeTab === 'addons' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addons.map((addon, index) => (
              <AddonCard 
                key={index}
                title={addon.title}
                price={addon.price}
                duration={addon.duration}
                description={addon.description}
                index={index}
              />
            ))}
          </div>
        )}
        
        {/* CTA */}
        <motion.div 
          className="mt-16 text-center glass-card p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Not sure which package is right for you?
          </h2>
          <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your specific requirements and create a custom solution tailored to your business needs.
          </p>
          <Link 
            to="/contact" 
            className="btn-primary text-lg"
          >
            Get a Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PackagesPage;