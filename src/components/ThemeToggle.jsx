// src/components/ThemeToggle.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className={`fixed bottom-6 right-4 md:top-4 md:right-20 md:bottom-auto z-50 p-3 rounded-full shadow-lg transition-colors duration-300 ${
                darkMode
                    ? "bg-gray-800 hover:bg-gray-700 border border-gray-600"
                    : "bg-white hover:bg-gray-100 border border-gray-300"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
        >
            <motion.div
                animate={{ rotate: darkMode ? 0 : 180 }}
                transition={{ duration: 0.3 }}
                className="text-xl md:text-2xl"
            >
                {darkMode ? "🌙" : "☀️"}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;
