import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  }
};

const answerVariants = {
  open: { 
    opacity: 1,
    height: 'auto',
    marginTop: '0.75rem',
    transition: { 
      type: 'spring',
      damping: 20,
      stiffness: 100 
    }
  },
  closed: { 
    opacity: 0,
    height: 0,
    marginTop: 0,
    transition: { 
      type: 'spring',
      damping: 30,
      stiffness: 100 
    }
  }
};

const viewportOptions = {
  once: true,
  amount: 0.1,
  margin: '0px 0px -100px 0px'
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'Berapa lama waktu pengerjaan proyek?',
      answer: 'Waktu pengerjaan bervariasi tergantung pada kompleksitas proyek. Rata-rata proyek kami membutuhkan waktu 2-4 minggu untuk diselesaikan.'
    },
    {
      question: 'Informasi apa saja yang perlu saya siapkan sebelum memulai proyek?',
      answer: 'Pada tahap konsultasi, kami akan menggali informasi sebanyak mungkin mengenai kebutuhan bisnis Anda, target audiens, fitur yang diinginkan, hingga preferensi desain. Semakin lengkap informasi yang Anda berikan, semakin baik kami dapat merancang fondasi proyek Anda.'
    },
    {
      question: 'Bagaimana metode pembayarannya?',
      answer: 'Kami menerima pembayaran melalui transfer bank dan dompet digital. '
    },
    {
      question: 'Apakah bisa request fitur tambahan di tengah pengerjaan?',
      answer: 'Tentu bisa. Namun, penambahan fitur baru di tengah pengerjaan mungkin akan mempengaruhi timeline dan biaya proyek.'
    },
    {
      question: 'Bagaimana proses revisi?',
      answer: 'Kami memberikan 3x revisi minor untuk setiap tahap pengembangan. Revisi tambahan bisa dibicarakan lebih lanjut.'
    },
    {
      question: 'Bagaimana jika saya belum memiliki desain untuk website saya?',
      answer: 'Tidak masalah. Jika Anda belum memiliki desain, kami siap membantu membuat wireframe dan mockup visual sebagai gambaran awal bagaimana tampilan situs Anda nantinya. Namun, jika Anda sudah memiliki desain dalam format Figma atau JPG, kami akan langsung menganalisisnya untuk diimplementasikan.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 md:px-8 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOptions}
            transition={{ delay: 0.2 }}
          >
            FAQ Pertanyaan Umum
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOptions}
            transition={{ delay: 0.4 }}
          >
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={viewportOptions}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-accent/30 transition-all duration-300"
              whileHover={{ 
                y: -2,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)'
              }}
            >
              <motion.button
                className={`w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none`}
                onClick={() => toggleFAQ(index)}
                initial={false}
                animate={{
                  color: activeIndex === index ? '#3b82f6' : '#ffffff',
                  backgroundColor: activeIndex === index ? 'rgba(30, 41, 59, 0.5)' : 'transparent'
                }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <motion.span
                  animate={{
                    rotate: activeIndex === index ? 180 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? (
                    <FiChevronUp className="w-5 h-5" />
                  ) : (
                    <FiChevronDown className="w-5 h-5" />
                  )}
                </motion.span>
              </motion.button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="px-6 overflow-hidden"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={answerVariants}
                  >
                    <div className="pb-5 text-gray-300">
                      {faq.answer.split('\n').map((paragraph, i) => (
                        <p key={i} className="mb-3 last:mb-0">{paragraph}</p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.div 
                className="h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: activeIndex === index ? 1 : 0,
                  opacity: activeIndex === index ? 1 : 0.5
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;