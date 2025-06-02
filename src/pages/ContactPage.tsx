import React from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

interface ContactFormInputs {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  service: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<ContactFormInputs>();
  
  const onSubmit: SubmitHandler<ContactFormInputs> = (data) => {
    console.log(data);
    // In a real implementation, this would send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  return (
    <div className="pt-28 pb-20 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="text-gradient font-heading font-medium uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Contact Us
          </motion.span>
          
          <motion.h1 
            className="text-3xl md:text-5xl font-heading font-bold mt-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Get In Touch
          </motion.h1>
          
          <motion.p 
            className="text-dark-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Have a question or ready to start your project? We're here to help. Fill out the form below and we'll get back to you as soon as possible.
          </motion.p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-2xl font-heading font-semibold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg bg-dark-800 border ${errors.name ? 'border-secondary-500' : 'border-dark-700'} text-white focus:outline-none focus:border-primary-500`}
                      placeholder="John Doe"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-secondary-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-3 rounded-lg bg-dark-800 border ${errors.email ? 'border-secondary-500' : 'border-dark-700'} text-white focus:outline-none focus:border-primary-500`}
                      placeholder="john@example.com"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="text-secondary-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      className={`w-full px-4 py-3 rounded-lg bg-dark-800 border ${errors.phone ? 'border-secondary-500' : 'border-dark-700'} text-white focus:outline-none focus:border-primary-500`}
                      placeholder="+91 98765 43210"
                      {...register("phone")}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="businessType" className="block text-white mb-2">Business Type</label>
                    <select
                      id="businessType"
                      className={`w-full px-4 py-3 rounded-lg bg-dark-800 border ${errors.businessType ? 'border-secondary-500' : 'border-dark-700'} text-white focus:outline-none focus:border-primary-500`}
                      {...register("businessType", { required: "Please select your business type" })}
                    >
                      <option value="">Select business type</option>
                      <option value="retail">Retail Store</option>
                      <option value="restaurant">Restaurant/Café</option>
                      <option value="service">Service Provider</option>
                      <option value="professional">Professional Services</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.businessType && (
                      <p className="text-secondary-500 text-sm mt-1">{errors.businessType.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-white mb-2">Interested Service</label>
                  <select
                    id="service"
                    className={`w-full px-4 py-3 rounded-lg bg-dark-800 border ${errors.service ? 'border-secondary-500' : 'border-dark-700'} text-white focus:outline-none focus:border-primary-500`}
                    {...register("service", { required: "Please select a service" })}
                  >
                    <option value="">Select service</option>
                    <option value="basic">Basic Static Website</option>
                    <option value="standard">Standard Static Website</option>
                    <option value="premium">Premium Package</option>
                    <option value="ecommerce">E-commerce Solution</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="custom">Custom Solution</option>
                  </select>
                  {errors.service && (
                    <p className="text-secondary-500 text-sm mt-1">{errors.service.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg bg-dark-800 border ${errors.message ? 'border-secondary-500' : 'border-dark-700'} text-white focus:outline-none focus:border-primary-500`}
                    placeholder="Tell us about your project requirements..."
                    {...register("message", { required: "Message is required" })}
                  ></textarea>
                  {errors.message && (
                    <p className="text-secondary-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <div>
                  <button 
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="glass-card p-8 md:p-12 mb-8">
              <h2 className="text-2xl font-heading font-semibold mb-6">Contact Information</h2>
              
              <ul className="space-y-6">
                <li className="flex">
                  <div className="w-12 h-12 rounded-lg bg-dark-700 flex items-center justify-center mr-4 text-primary-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <a href="mailto:info@evokeservices.com" className="text-dark-300 hover:text-primary-500 transition-colors">
                      info@evokeservices.com
                    </a>
                  </div>
                </li>
                <li className="flex">
                  <div className="w-12 h-12 rounded-lg bg-dark-700 flex items-center justify-center mr-4 text-primary-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Phone</h3>
                    <a href="tel:+919876543210" className="text-dark-300 hover:text-primary-500 transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </li>
                <li className="flex">
                  <div className="w-12 h-12 rounded-lg bg-dark-700 flex items-center justify-center mr-4 text-primary-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Address</h3>
                    <address className="text-dark-300 not-italic">
                      Tech Hub, 123 Digital Avenue,<br />
                      Bengaluru, 560001
                    </address>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-lg bg-dark-700 flex items-center justify-center mr-4 text-primary-500">
                  <MessageSquare size={20} />
                </div>
                <h2 className="text-2xl font-heading font-semibold">WhatsApp Us</h2>
              </div>
              
              <p className="text-dark-300 mb-6">
                For quick inquiries, feel free to reach out to us on WhatsApp. We typically respond within 2 hours during business hours.
              </p>
              
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center"
              >
                Chat on WhatsApp
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Map Section */}
        <motion.div 
          className="mt-16 glass-card p-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Placeholder for Google Map - In a real implementation, this would be an actual embedded map */}
          <div className="w-full h-96 bg-dark-800 rounded-lg flex items-center justify-center text-dark-400">
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-4 text-primary-500" />
              <p className="text-xl font-medium">Google Map Would Be Embedded Here</p>
              <p className="text-dark-400">Tech Hub, 123 Digital Avenue, Bengaluru, 560001</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;