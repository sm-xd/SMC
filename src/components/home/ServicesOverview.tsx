import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, ShoppingCart, BarChart, Settings, Code, Search } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className="glass-card p-6 flex flex-col items-start transition-all duration-300 hover:border-primary-500 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="w-14 h-14 rounded-lg bg-dark-700 flex items-center justify-center mb-6 text-primary-500 group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-secondary-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-heading text-xl font-semibold mb-3">{title}</h3>
      <p className="text-dark-300 mb-5">{description}</p>
      <Link 
        to="/services" 
        className="text-primary-500 hover:text-secondary-500 font-medium inline-flex items-center mt-auto"
      >
        Learn More
        <svg 
          className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
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

const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: <Globe size={28} />,
      title: "Website Development",
      description: "Professional, responsive websites tailored for your small business needs.",
      delay: 0
    },
    {
      icon: <ShoppingCart size={28} />,
      title: "E-commerce Solutions",
      description: "Sell products online with easy-to-manage online stores and payment processing.",
      delay: 1
    },
    {
      icon: <Code size={28} />,
      title: "Web Applications",
      description: "Custom web applications to automate and streamline your business processes.",
      delay: 2
    },
    {
      icon: <Settings size={28} />,
      title: "Content Management",
      description: "User-friendly admin panels to manage your website content without technical skills.",
      delay: 3
    },
    {
      icon: <Search size={28} />,
      title: "SEO Optimization",
      description: "Improve your visibility in search engines and attract more customers.",
      delay: 4
    },
    {
      icon: <BarChart size={28} />,
      title: "Analytics & Reporting",
      description: "Track website performance and gain insights into customer behavior.",
      delay: 5
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
            Our Services
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Digital Solutions for Your Business
          </motion.h2>
          <motion.p 
            className="text-dark-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            We offer a comprehensive range of IT services designed specifically for small businesses and local shops.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
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
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;