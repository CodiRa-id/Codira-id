import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

const viewportOptions = {
  once: true,
  amount: 0.1,
  margin: '0px 0px -100px 0px'
};

const ContactCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    variants={item}
    whileHover={{ 
      y: -5,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 }
    }}
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
  >
    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 dark:text-blue-400 text-xl mb-4">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </motion.div>
);

const SocialLink = ({ icon: Icon, href, delay = 0 }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    variants={item}
    whileHover={{ 
      y: -5,
      scale: 1.1,
      transition: { duration: 0.2 }
    }}
    className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white transition-colors"
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={viewportOptions}
          variants={fadeIn}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            variants={item}
          >
            Hubungi <span className="text-accent">Kami</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={item}
          >
            Punya pertanyaan atau ingin bekerjasama? Silakan hubungi kami melalui form berikut atau kontak yang tersedia.
          </motion.p>
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={viewportOptions}
          variants={fadeIn}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Form Section - Left Side */}
            <motion.div 
              className="w-full lg:w-8/12 p-8 lg:p-12 relative overflow-hidden"
              variants={slideInLeft}
            >
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-10 -right-10 w-32 h-32 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.div 
                className="absolute -bottom-8 left-20 w-24 h-24 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              
              <motion.div 
                className="relative z-10"
                variants={container}
              >
                <motion.div 
                  className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6"
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                  </svg>
                  Hubungi Kami
                </motion.div>
                
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 leading-tight"
                  variants={item}
                >
                  Mari Wujudkan <span className="text-accent">Ide Kreatif</span> <br /> Anda Bersama Kami
                </motion.h3>
                
                <motion.p 
                  className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
                  variants={item}
                >
                  Tim profesional kami siap membantu mewujudkan visi digital Anda. Kirim pesan dan kami akan merespons dalam waktu 1x24 jam.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  variants={item}
                >
                  <motion.a 
                    href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=codira85@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-accent text-white font-medium rounded-xl hover:bg-accent/90 transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiMail className="mr-2" /> Email Kami
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Info Section - Right Side */}
            <motion.div 
              className="w-full lg:w-4/12 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 lg:p-12 relative overflow-hidden"
              variants={slideInRight}
            >
              <motion.div 
                className="absolute inset-0 bg-grid-white/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              />
              
              <motion.div 
                className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: 'spring', stiffness: 50 }}
              />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-2xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Informasi Kontak
                </motion.h3>
                
                <motion.div 
                  className="space-y-6"
                  variants={container}
                >
                  <motion.div 
                    className="flex items-start"
                    variants={item}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white mr-4 mt-1">
                      <FiMail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-100">Email</h4>
                      <a href="mailto:codira85@gmail.com" className="text-white hover:text-blue-200 transition-colors">codira85@gmail.com</a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    variants={item}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white mr-4 mt-1">
                      <FiPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-100">Telepon</h4>
                      <a href="tel:+6285889017586" className="text-white hover:text-blue-200 transition-colors">0858-8901-7586</a>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="pt-6 mt-6 border-t border-white/10"
                    variants={item}
                  >
                    <motion.h4 
                      className="font-medium text-blue-100 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Ikuti Kami
                    </motion.h4>
                    <motion.div 
                      className="flex space-x-4"
                      variants={container}
                    >
                      <motion.a 
                        href="https://www.instagram.com/codira_id/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white"
                        variants={item}
                        whileHover={{ y: -3, scale: 1.1 }}
                      >
                        <FaInstagram className="w-5 h-5" />
                      </motion.a>
                      <motion.a 
                        href="https://www.youtube.com/@CodiRa-z9h" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white"
                        variants={item}
                        whileHover={{ y: -3, scale: 1.1 }}
                      >
                        <FaYoutube className="w-5 h-5" />
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;