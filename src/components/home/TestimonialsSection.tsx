import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  business: string;
  quote: string;
  rating: number;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      business: "Sharma's Boutique",
      quote: "Evoke completely transformed our online presence. Our new website has already brought in more customers in the first month than we had in the previous six months combined!",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      name: "Rajesh Patel",
      business: "Patel Electronics",
      quote: "As a small electronics shop, we were struggling to compete. The team at Evoke designed a beautiful website for us and set up our online store. Now we're getting orders from all over the city!",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      name: "Ananya Desai",
      business: "Desai Dental Clinic",
      quote: "Our new website helps us manage appointments more efficiently and has significantly reduced no-shows. The team at Evoke was professional, affordable, and delivered exactly what we needed.",
      rating: 4,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

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
            Testimonials
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.p 
            className="text-dark-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Don't just take our word for it. Hear from the small businesses we've helped transform.
          </motion.p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-primary-500"
                />
              </div>
              
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={20}
                    className={i < testimonials[currentIndex].rating ? "text-primary-500" : "text-dark-600"} 
                    fill={i < testimonials[currentIndex].rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              
              <blockquote className="text-xl italic text-white mb-6">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div>
                <h4 className="font-heading font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-dark-300">
                  {testimonials[currentIndex].business}
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-dark-700 text-white hover:bg-primary-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-dark-700 text-white hover:bg-primary-500 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;