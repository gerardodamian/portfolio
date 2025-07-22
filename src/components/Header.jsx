import React from "react";
import { motion } from "framer-motion";
import constancia from "../cv/Constancia.pdf";
import myPhoto from "../img/myphoto.jpg";

const Header = () => {
    return (
        <div className="container mt-8 mx-auto md:mx-0 flex justify-between items-center md:px-14 lg:px-18 w-full z-10">
            <div className="flex flex-wrap md:flex-nowrap">
                {/* Navegación lateral animada */}
                <nav className="lg:mr-24 lg:w-4 hidden fixed left-percentage xl:block">
                    <motion.div
                        className="absolute left-50 transform -translate-x-1/2 space-y-10 mt-36"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Nav dots con animaciones individuales */}
                        {[
                            { href: "!#", text: "Inicio" },
                            { href: "#work", text: "Trabajo" },
                            { href: "#experiencia", text: "Experiencia" },
                            { href: "#tech", text: "Tecnologías" },
                            { href: "#cert", text: "Certificados" },
                            { href: "#hire", text: "Contactame" },
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                className={`nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body ${
                                    index === 0 ? "selected-circle" : ""
                                }`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    duration: 0.3,
                                    delay: 0.4 + index * 0.1,
                                }}
                                whileHover={{ scale: 1.2 }}
                            >
                                <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0 hover:opacity-100 transition-opacity">
                                    {item.text}
                                </span>
                            </motion.a>
                        ))}
                    </motion.div>
                </nav>

                {/* Contenido principal animado */}
                <motion.div
                    className="flex flex-wrap lg:ml-28 justify-center md:justify-start max-w-xl mt-0 md:my-36"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left mobile:text-4xl z-10"
                        style={{ color: 'var(--text-color)' }}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Construyendo
                        <br />
                        <motion.span
                            className="gradient-text font-bold"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            hermosas experiencias web.
                        </motion.span>
                    </motion.h1>

                    {/* Botones con animaciones mejoradas */}
                    <motion.div
                        className="w-full flex flex-col sm:flex-row justify-center md:justify-start gap-4"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        {/* CV Online Button */}
                        <motion.a
                            href="https://gerardodamian.github.io/curriculum/"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold mt-12 flex items-center justify-center space-x-3 rounded-lg shadow-lg hover:text-gray-200 transition-colors"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div>
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                >
                                    <path
                                        d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <span>Ver CV Online</span>
                        </motion.a>

                        {/* Download Reference Button */}
                        <motion.button
                            className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold mt-12 flex items-center space-x-3 rounded-lg shadow-lg"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div>
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                >
                                    <path
                                        d="M11 15.125L6.1875 10.3125L7.5625 8.9375L9.625 11V3.4375H12.375V11L14.4375 8.9375L15.8125 10.3125L11 15.125ZM4.8125 18.5625C4.3125 18.5625 3.88281 18.3906 3.52344 18.0469C3.16406 17.7031 2.98438 17.2969 2.98438 16.8281V13.75H5.73438V16.8281H16.2656V13.75H19.0156V16.8281C19.0156 17.2969 18.8359 17.7031 18.4766 18.0469C18.1172 18.3906 17.6875 18.5625 17.1875 18.5625H4.8125Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <a href={constancia} download={constancia}>
                                <span>Download Referencia</span>
                            </a>
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Imagen con animación de entrada */}
                <motion.img
                    src={myPhoto}
                    alt="Gerardo Montini"
                    className="shadow-lg shadow-black w-2/3 rounded-full mt-20 mx-auto md:absolute md:mt-0 right-12 md:w-2/6 lg:w-5/12 lg:mr-8 z-1"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                    whileHover={{ scale: 1.05 }}
                />
            </div>
        </div>
    );
};

export default Header;
