import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Code, Search, Settings, BarChart, MessageSquare, Monitor, Layers, Database } from 'lucide-react';
import ServiceCard from '../components/services/ServiceCard';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  category: string;
}

const ServicesPage: React.FC = () => {
  const categories = ['All', 'Web Development', 'E-commerce', 'Marketing', 'Support'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const services: Service[] = [
    {
      id: 1,
      title: "Static Websites",
      description: "Simple yet effective websites that showcase your business and its services.",
      icon: <Globe size={24} />,
      benefits: [
        "Fast loading times",
        "Easy to maintain",
        "Secure and reliable",
        "Cost-effective solution"
      ],
      category: "Web Development"
    },
    {
      id: 2,
      title: "Dynamic Websites",
      description: "Interactive websites with advanced functionality and user engagement features.",
      icon: <Layers size={24} />,
      benefits: [
        "Interactive user experience",
        "Content management system",
        "User authentication",
        "Database integration"
      ],
      category: "Web Development"
    },
    {
      id: 3,
      title: "E-commerce Stores",
      description: "Online stores that let you sell products directly to customers.",
      icon: <ShoppingCart size={24} />,
      benefits: [
        "Product catalog management",
        "Secure payment processing",
        "Inventory tracking",
        "Order management"
      ],
      category: "E-commerce"
    },
    {
      id: 4,
      title: "Custom Web Applications",
      description: "Tailored web applications to automate business processes and workflows.",
      icon: <Code size={24} />,
      benefits: [
        "Process automation",
        "Increased efficiency",
        "Custom functionality",
        "Scalable architecture"
      ],
      category: "Web Development"
    },
    {
      id: 5,
      title: "SEO Optimization",
      description: "Improve your website's visibility in search engines to attract more customers.",
      icon: <Search size={24} />,
      benefits: [
        "Higher search rankings",
        "Increased organic traffic",
        "Local SEO optimization",
        "Performance improvements"
      ],
      category: "Marketing"
    },
    {
      id: 6,
      title: "Content Management",
      description: "User-friendly admin panels to manage your website content without technical skills.",
      icon: <Settings size={24} />,
      benefits: [
        "Easy content updates",
        "User role management",
        "Media library",
        "Content scheduling"
      ],
      category: "Support"
    },
    {
      id: 7,
      title: "Analytics & Reporting",
      description: "Track website performance and gain insights into customer behavior.",
      icon: <BarChart size={24} />,
      benefits: [
        "Visitor tracking",
        "Behavior analysis",
        "Conversion tracking",
        "Performance reporting"
      ],
      category: "Marketing"
    },
    {
      id: 8,
      title: "Chatbot Integration",
      description: "Engage with customers 24/7 through automated chat solutions.",
      icon: <MessageSquare size={24} />,
      benefits: [
        "24/7 customer support",
        "Lead qualification",
        "FAQ automation",
        "WhatsApp/Facebook integration"
      ],
      category: "Support"
    },
    {
      id: 9,
      title: "Responsive Design",
      description: "Ensure your website looks great on all devices - mobile, tablet, and desktop.",
      icon: <Monitor size={24} />,
      benefits: [
        "Mobile-first approach",
        "Cross-device compatibility",
        "Improved user experience",
        "Better search rankings"
      ],
      category: "Web Development"
    },
    {
      id: 10,
      title: "Database Solutions",
      description: "Robust database design and implementation for your business data.",
      icon: <Database size={24} />,
      benefits: [
        "Secure data storage",
        "Data backup & recovery",
        "Scalable architecture",
        "Performance optimization"
      ],
      category: "Support"
    }
  ];
  
  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="pt-28 pb-20 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="text-gradient font-heading font-medium uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Our Services
          </motion.span>
          
          <motion.h1 
            className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive IT Solutions
          </motion.h1>
          
          <motion.p 
            className="text-dark-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            We offer a wide range of IT services tailored specifically for small businesses and local shops. Explore our services to find the perfect solution for your needs.
          </motion.p>
        </div>
        
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-dark-800 text-dark-300 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              benefits={service.benefits}
              category={service.category}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;