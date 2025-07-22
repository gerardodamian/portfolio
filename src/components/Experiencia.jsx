import React from "react";
import { motion } from 'framer-motion';
import yalutecLogo from "../img/logoyalutec.jpg";

const Experiencia = () => {
    console.log("🚀 Componente Experiencia renderizado");
    
    return (
        <div className="container mt-44 mx-auto px-4 lg:px-8 md:px-14 w-full">
            <motion.h2 
                id="experiencia" 
                className="secondary-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Experiencia Laboral
            </motion.h2>
            <motion.p 
                className="section-paragraph"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Mi trayectoria profesional como desarrollador web.
            </motion.p>
            
            <motion.div 
                className="flex flex-col md:flex-row items-center justify-center glass-morphism rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ 
                    backgroundColor: 'var(--surface)',
                    borderColor: 'var(--border-color)'
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5 }}
            >
                <div className="mb-6 md:mb-0 md:mr-8">
                    <motion.img 
                        src={yalutecLogo} 
                        alt="Yalutec Logo" 
                        className="w-32 h-32 md:w-40 md:h-40 object-contain bg-white p-4 rounded-lg shadow-md"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
                
                <div className="text-center md:text-left flex-1">
                    <h3 
                        className="text-2xl font-bold mb-2"
                        style={{ color: 'var(--text-color)' }}
                    >
                        Desarrollador Web Junior
                    </h3>
                    <h4 className="text-xl font-semibold mb-3 gradient-text">
                        Yalutec
                    </h4>
                    <p 
                        className="mb-4"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        <span className="font-medium">Duración:</span> 5 meses
                    </p>
                    <p 
                        className="leading-relaxed mb-6"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Desarrollé aplicaciones web utilizando tecnologías modernas, 
                        colaboré en proyectos de front-end y back-end, y contribuí al 
                        desarrollo de soluciones tecnológicas innovadoras.
                    </p>
                    
                    <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                        <motion.span 
                            className="bg-theme text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            JavaScript
                        </motion.span>
                        <motion.span 
                            className="bg-theme text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Angular
                        </motion.span>
                        <motion.span 
                            className="bg-theme text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Web Development
                        </motion.span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Experiencia;