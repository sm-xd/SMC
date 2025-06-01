import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, CheckCircle2, Target, TrendingUp, Users, Heart } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      className="glass-card p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="w-12 h-12 rounded-lg bg-dark-700 flex items-center justify-center mb-4 text-primary-500">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3">{title}</h3>
      <p className="text-dark-300">{description}</p>
    </motion.div>
  );
};

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <CheckCircle2 size={24} />,
      title: "Quality",
      description: "We deliver high-quality websites and digital solutions that exceed expectations and help businesses succeed online."
    },
    {
      icon: <Target size={24} />,
      title: "Affordability",
      description: "We believe every business deserves a professional online presence without breaking the bank."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Innovation",
      description: "We stay ahead of digital trends to provide cutting-edge solutions that give our clients a competitive edge."
    },
    {
      icon: <Users size={24} />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique needs and create tailored solutions."
    },
    {
      icon: <Heart size={24} />,
      title: "Passion",
      description: "We're passionate about helping small businesses succeed in the digital world through effective online strategies."
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="glass-card p-8 md:p-12 mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                  About <span className="text-gradient">Evoke</span>
                </h1>
                <p className="text-dark-300 text-lg">
                  We are a team of passionate web developers and digital marketers dedicated to helping small businesses and local shops establish a strong online presence. With years of experience and a deep understanding of the challenges small businesses face, we provide affordable, high-quality digital solutions that drive real results.
                </p>
                <p className="text-dark-300 text-lg">
                  Our mission is to democratize access to professional web development services, making it possible for every business—regardless of size or budget—to have a compelling online presence that attracts customers and generates growth.
                </p>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-10 rounded-xl blur-2xl transform scale-110"></div>
                <div className="glass-card p-4 relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Evoke Team" 
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.span 
              className="text-gradient font-heading font-medium uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Story
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              The Journey of Evoke
            </motion.h2>
          </div>
          
          <div className="glass-card p-8 md:p-12">
            <motion.div 
              className="space-y-6 text-lg text-dark-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p>
                Evoke was founded in 2020 with a simple yet powerful mission: to help small businesses and local shops overcome the digital divide. Our founder, a web developer with over a decade of experience, noticed that many small businesses were struggling to establish a meaningful online presence due to the high costs and complexity involved.
              </p>
              <p>
                We started by helping a few local businesses in our community create affordable websites. The impact was immediate—businesses that had previously relied solely on foot traffic and word-of-mouth were suddenly reaching new customers online, growing their customer base, and increasing their revenue.
              </p>
              <p>
                As word spread about our affordable, high-quality services, we grew from a one-person operation to a dedicated team of developers, designers, and digital marketers united by a common goal: to empower small businesses through technology.
              </p>
              <p>
                Today, we've helped over 100 businesses establish and grow their online presence. We remain committed to our founding vision, continuously refining our processes and expanding our services to meet the evolving needs of small businesses in an increasingly digital world.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.span 
              className="text-gradient font-heading font-medium uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Values
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              What Drives Us
            </motion.h2>
            
            <motion.p 
              className="text-dark-300 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              At the core of everything we do are these fundamental values that shape our approach and guide our decisions.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard 
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                index={index}
              />
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <motion.div 
          className="glass-card p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Zap size={40} className="text-primary-500" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Ready to Grow Your Business Online?
          </h2>
          
          <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to create a digital solution that helps your business thrive in the digital landscape.
          </p>
          
          <Link 
            to="/contact" 
            className="btn-primary text-lg"
          >
            Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;