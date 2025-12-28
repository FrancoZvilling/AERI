import React from 'react';
import { Link } from 'react-router-dom';
import {
    Facebook,
    Instagram,
    Youtube,
    MapPin,
    Phone,
    Mail,
    ArrowUp,
    Heart
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="bg-primary text-white pt-16 pb-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block">
                            <img src="/logo.png" alt="AERI Logo" className="h-16 w-auto bg-white/10 p-2 rounded-lg backdrop-blur-sm" />
                        </Link>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            Asociación Empleados de Rentas e Inmobiliaria.
                            Comprometidos con el bienestar y el futuro de nuestros afiliados desde hace más de 50 años.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-110">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 w-fit">Accesos Rápidos</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/subsidios" className="text-gray-300 hover:text-secondary hover:translate-x-2 transition-all block text-sm">
                                    Subsidios y Beneficios
                                </Link>
                            </li>
                            <li>
                                <Link to="/secretarias/turismo" className="text-gray-300 hover:text-secondary hover:translate-x-2 transition-all block text-sm">
                                    Turismo
                                </Link>
                            </li>
                            <li>
                                <Link to="/secretarias/salud" className="text-gray-300 hover:text-secondary hover:translate-x-2 transition-all block text-sm">
                                    Salud y Farmacias
                                </Link>
                            </li>
                            <li>
                                <Link to="/institucional/comision-directiva" className="text-gray-300 hover:text-secondary hover:translate-x-2 transition-all block text-sm">
                                    Institucional
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="text-gray-300 hover:text-secondary hover:translate-x-2 transition-all block text-sm">
                                    Mi AERI
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 w-fit">Contacto</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 text-sm">Calle 45 N° 535, La Plata<br />Buenos Aires, Argentina</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                                <a href="tel:02214248142" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    0221 424-8142
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                                <a href="mailto:consultas@aeri.org.ar" className="text-gray-300 hover:text-white transition-colors text-sm">
                                    consultas@aeri.org.ar
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter or Interactive Map (Simplified here) */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 w-fit">Horarios</h3>
                        <p className="text-gray-300 text-sm mb-4">
                            Nuestras oficinas están abiertas para atención al público:
                        </p>
                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-400 text-sm">Lunes - Viernes</span>
                                <span className="font-semibold text-sm">8:00 - 16:00</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400 text-sm">Sábados y Dom.</span>
                                <span className="text-secondary text-sm">Cerrado</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm text-center md:text-left">
                        AERI © Copyright 2025 Todos los Derechos Reservados.
                    </p>

                    <div className="flex items-center text-sm text-gray-500">
                        <span>Desarrollado por</span>
                        <a
                            href="https://wa.me/5493541315119"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 font-semibold text-secondary hover:text-green-400 transition-colors flex items-center gap-1 group"
                        >
                            Franco Zvilling
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">🚀</span>
                        </a>
                    </div>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
