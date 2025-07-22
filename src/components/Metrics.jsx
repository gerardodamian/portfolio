// src/components/Metrics.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Metrics = () => {
  const metrics = [
    { number: "30+", label: "Proyectos", icon: "📊" },
    { number: "3", label: "Años Experiencia", icon: "⏰" },
    { number: "9", label: "Certificados", icon: "🏆" },
    { number: "100%", label: "Satisfacción", icon: "⭐" }
  ];

  return (
    <div className="container mt-44 mx-auto px-4 lg:px-8 md:px-14 w-full">
      <motion.h2 
        className="secondary-title text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Métricas de Impacto
      </motion.h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            className="text-center p-6 glass-morphism rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-4xl mb-2">{metric.icon}</div>
            <motion.h3 
              className="text-4xl font-bold text-theme mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              {metric.number}
            </motion.h3>
            <p className="text-gray-300">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Metrics;