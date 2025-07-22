import React from "react";
import { motion } from "framer-motion";
import krypt from "../img/deportes.jpg";
import humblefood from "../img/terapia-de-biomagnetismo.jpg";
import blackFlag from "../img/ecommerce-.jpg";
import airBalloon from "../img/e-commerce.jpg";
import restaurant from "../img/restaurante.jpg";
import github from "../img/github.png";
import peliculas from "../img/pelis.webp";

const Work = () => {
    return (
        <div className="container mt-44 mx-auto flex justify-between items-center px-4 lg:px-8 md:px-14 w-full">
            <section className="w-full">
                <motion.h2 
                    id="work" 
                    className="secondary-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Mi trabajo
                </motion.h2>
                <motion.p 
                    className="section-paragraph"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    He tenido la oportunidad de crear algunas páginas utilizando
                    tecnologías tanto de frontend como de backend.
                </motion.p>

                {/* 👈 TODOS LOS PROYECTOS DENTRO DEL CONTENEDOR CON ESPACIADO */}
                <div className="space-y-16 my-16">
                    
                    {/* PROYECTO 1: E-commerce React */}
                    <motion.div 
                        className="w-full border border-nav p-6 xl:px-32 xl:py-20 flex justify-center flex-col rounded-lg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="mb-6 flex items-center justify-center">
                            <img
                                src={airBalloon}
                                alt="E-commerce React"
                                className="w-128 rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="flex flex-col justify-center items-center text-center">
                            <h3 className="text-white text-3xl font-semibold mb-4">
                                E-commerce con carrito de compras
                            </h3>

                            <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                                <div className="badge">Frontend</div>
                                <div className="badge">React</div>
                                <div className="badge">Bootstrap</div>
                                <div className="badge">Firebase</div>
                                <div className="badge">Vercel</div>
                            </div>

                            <p className="text-secondary mb-8">
                                Single Page Application donde se puede comprar productos agregando todo en un carrito de compras.
                            </p>

                            <div className="flex flex-col md:flex-row justify-center gap-4">
                                <motion.a
                                    href="https://pre-entrega2-montini-gerardo.vercel.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-8 py-4 bg-theme text-white font-bold flex items-center justify-center space-x-3 w-56 rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <p>Ir al sitio</p>
                                    <div>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z" fill="white"/>
                                            <path d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z" fill="white"/>
                                        </svg>
                                    </div>
                                </motion.a>
                                <motion.a
                                    href="https://github.com/gerardodamian/EntregaFinal-Montini-Gerardo.git"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-8 py-4 bg-theme text-white font-bold flex items-center justify-center space-x-3 w-56 rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <p>Repositorio</p>
                                    <div>
                                        <img src={github} alt="GitHub" className="w-6"/>
                                    </div>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* PROYECTO 2: RESTAURANTE */}
                    <motion.div
                        className="w-full border border-nav p-6 xl:px-32 xl:py-20 flex justify-center flex-col rounded-lg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="mb-6 flex items-center justify-center">
                            <img
                                src={restaurant}
                                alt="Sistema de Restaurante"
                                className="w-128 rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="flex flex-col justify-center items-center text-center">
                            <h3 className="text-white text-3xl font-semibold mb-4">
                                🍽️ Sistema de Gestión de Restaurante
                            </h3>

                            <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                                <div className="badge">Frontend</div>
                                <div className="badge">Bootstrap</div>
                                <div className="badge">Node.js</div>
                                <div className="badge">Css</div>
                                <div className="badge">Typescript</div>
                                <div className="badge">Javascript</div>
                            </div>

                            <p className="text-secondary mb-8">
                                Sistema completo de gestión de restaurante con menú digital, sistema de pedidos, gestión de mesas y panel administrativo para el personal.
                            </p>

                            <div className="flex flex-col md:flex-row justify-center gap-4">
                                <motion.a
                                    href="https://gerardodamian.github.io/restaurant-el-trebol/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-8 py-4 bg-theme text-white font-bold flex items-center justify-center space-x-3 w-56 rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <p>Ir al sitio</p>
                                    <div>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z" fill="white"/>
                                            <path d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z" fill="white"/>
                                        </svg>
                                    </div>
                                </motion.a>
                                <motion.a
                                    href="https://github.com/gerardodamian/restaurant-el-trebol"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-8 py-4 bg-theme text-white font-bold flex items-center justify-center space-x-3 w-56 rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <p>Repositorio</p>
                                    <div>
                                        <img src={github} alt="GitHub" className="w-6"/>
                                    </div>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* PROYECTO 3: Pierce Commerce */}
                    <motion.div 
                        className="w-full border border-nav p-6 xl:px-32 xl:py-20 flex justify-center flex-col rounded-lg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="mb-6 flex items-center justify-center">
                            <img
                                src={krypt}
                                alt="Pierce Commerce"
                                className="rounded-md shadow-lg"
                            />
                        </div>

                        <div className="flex flex-col justify-center items-center text-center">
                            <h3 className="text-white text-3xl font-semibold mb-4">
                                Pierce Commerce
                            </h3>

                            <div className="w-full lg:w-auto flex flex-wrap justify-center gap-3 mt-6 mb-8">
                                <div className="badge">Frontend</div>
                                <div className="badge">Html</div>
                                <div className="badge">Bootstrap</div>
                                <div className="badge">NodeJS</div>
                                <div className="badge">Css</div>
                            </div>

                            <p className="text-secondary mb-8">
                                Aplicación para negocios de ventas de artículos de deportes y electrodomésticos.
                            </p>

                            <div className="flex flex-col md:flex-row justify-center gap-4">
                                <motion.a
                                    href="https://gerardodamian.github.io/piercecommerce/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-8 py-4 bg-theme text-white font-bold flex items-center justify-center space-x-3 w-56 rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <p>Ir al sitio</p>
                                    <div>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z" fill="white"/>
                                            <path d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z" fill="white"/>
                                        </svg>
                                    </div>
                                </motion.a>
                                <motion.a
                                    href="https://github.com/gerardodamian/piercecommerce.git"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-8 py-4 bg-theme text-white font-bold flex items-center justify-center space-x-3 w-56 rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <p>Repositorio</p>
                                    <div>
                                        <img src={github} alt="GitHub" className="w-6"/>
                                    </div>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* RESTO DE PROYECTOS - mantén el código existente pero agrega motion y elimina divs extra */}
                    <motion.div 
                        className="w-full border border-nav p-6 xl:px-32 xl:py-20 flex justify-center flex-col rounded-lg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="mb-6 flex items-center justify-center">
                            <img
                                src={humblefood}
                                alt="Biomagnetismo"
                                className="rounded-md shadow-lg"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center text-center">
                            <h3 className="text-white text-3xl font-semibold mb-4">
                                Biomagnetismo Medicinal
                            </h3>

                            <div className="w-full lg:w-auto flex flex-wrap justify-center gap-3 mt-6 mb-8">
                                <div className="badge">Frontend</div>
                                <div className="badge">Html</div>
                                <div className="badge">Css</div>
                                <div className="badge">TypeScript</div>
                                <div className="badge">Bootstrap</div>
                                <div className="badge">NodeJS</div>
                            </div>

                            <p className="text-secondary mb-8">
                                Página web para terapeutas que informen a pacientes sobre tratamientos y turnos.
                            </p>
                            <div className="flex flex-col md:flex-row justify-center gap-4">
                                <motion.a
                                    href="https://gerardodamian.github.io/Biomagnetismo-Medicinal/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-8 py-4 bg-theme text-white font-bold flex items-center justify-center space-x-3 w-56 rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <p>Ir al sitio</p>
                                    <div>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z" fill="white"/>
                                            <path d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z" fill="white"/>
                                        </svg>
                                    </div>
                                </motion.a>
                                <motion.a
                                    href="https://github.com/gerardodamian/Proyecto-final-gerardo-montini.git"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-8 py-4 bg-theme text-white font-bold flex items-center justify-center space-x-3 w-56 rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <p>Repositorio</p>
                                    <div>
                                        <img src={github} alt="GitHub" className="w-6"/>
                                    </div>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* PROYECTO 5: Deportes Norte */}
                    <motion.div 
                        className="w-full border border-nav p-6 xl:px-32 xl:py-20 flex justify-center flex-col rounded-lg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="mb-6 flex items-center justify-center">
                            <img src={blackFlag} alt="Deportes Norte" className="rounded-md shadow-lg"/>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center">
                            <h3 className="text-white text-3xl font-semibold mb-4">
                                E-COMMERCE "Deportes Norte"
                            </h3>

                            <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                                <div className="badge">Frontend</div>
                                <div className="badge">NodeJS</div>
                                <div className="badge">Html</div>
                                <div className="badge">Css</div>
                                <div className="badge">Javascript</div>
                                <div className="badge">Bootstrap</div>
                            </div>

                            <p className="text-secondary mb-8">
                                E-Commerce enfocado a ventas de productos. Plataforma interactiva para comprar artículos al mejor precio.
                            </p>
                            <div className="flex flex-col md:flex-row justify-center gap-4">
                                <motion.a
                                    href="https://gerardodamian.github.io/entrega-proyecto-final-montini-gerardo/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-8 py-4 bg-theme text-white font-bold flex items-center justify-center space-x-3 w-56 rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <p>Ir al sitio</p>
                                    <div>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z" fill="white"/>
                                            <path d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z" fill="white"/>
                                        </svg>
                                    </div>
                                </motion.a>
                                <motion.a
                                    href="https://github.com/gerardodamian/entrega-proyecto-final-montini-gerardo.git"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-8 py-4 bg-theme text-white font-bold flex items-center justify-center space-x-3 w-56 rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <p>Repositorio</p>
                                    <div>
                                        <img src={github} alt="GitHub" className="w-6"/>
                                    </div>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* PROYECTO 6: Buscador de Películas */}
                    <motion.div 
                        className="w-full border border-nav p-6 xl:px-32 xl:py-20 flex justify-center flex-col rounded-lg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="mb-6 flex items-center justify-center">
                            <img
                                src={peliculas}
                                alt="Buscador de Películas"
                                className="w-100 rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="flex flex-col justify-center items-center text-center">
                            <h3 className="text-white text-3xl font-semibold mb-4">
                                Buscador de Películas
                            </h3>

                            <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                                <div className="badge">Frontend</div>
                                <div className="badge">Javascript</div>
                                <div className="badge">Html</div>
                                <div className="badge">Css</div>
                                <div className="badge">Bootstrap</div>
                            </div>

                            <p className="text-secondary mb-8">
                                Single Page Application donde se puede usar una API para buscar películas.
                            </p>

                            <div className="flex flex-col md:flex-row justify-center gap-4">
                                <motion.a
                                    href="https://gerardodamian.github.io/buscador-pelis/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-8 py-4 bg-theme text-white font-bold flex items-center justify-center space-x-3 w-56 rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <p>Ir al sitio</p>
                                    <div>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z" fill="white"/>
                                            <path d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z" fill="white"/>
                                        </svg>
                                    </div>
                                </motion.a>
                                <motion.a
                                    href="https://github.com/gerardodamian/buscador-pelis.git"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-8 py-4 bg-theme text-white font-bold flex items-center justify-center space-x-3 w-56 rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <p>Repositorio</p>
                                    <div>
                                        <img src={github} alt="GitHub" className="w-6"/>
                                    </div>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default Work;
