import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = '', label, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const progressPercent = Math.min(progress / (duration * 1000), 1);
        const currentCount = Math.floor(progressPercent * end);
        
        setCount(currentCount);
        
        if (progressPercent < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration]);
  
  return (
    <motion.div 
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl md:text-5xl font-bold font-heading text-white">
        {count}<span className="text-primary-500">{suffix}</span>
      </div>
      <p className="text-dark-300 mt-2">{label}</p>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-dark-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter end={125} suffix="+" label="Projects Delivered" />
            <Counter end={98} suffix="%" label="Client Satisfaction" />
            <Counter end={45} suffix="+" label="Small Businesses" />
            <Counter end={5} suffix="+" label="Years Experience" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;