import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        {
            title: 'Institucional',
            links: [
                { name: 'Comisión Directiva', path: '/institucional/comision-directiva' },
                { name: 'Junta Electoral', path: '/institucional/junta-electoral' },
                { name: 'Historia', path: '/institucional/historia' },
                { name: 'Biblioteca', path: '/institucional/biblioteca' },
            ],
        },
        {
            title: 'Secretarías',
            links: [
                { name: 'Mujer y Familia', path: '/secretarias/mujer-y-familia' },
                { name: 'Turismo', path: '/secretarias/turismo' },
                { name: 'Gremial', path: '/secretarias/gremial' },
                { name: 'Cultura y Capacitación', path: '/secretarias/cultura' },
                { name: 'Prensa', path: '/secretarias/prensa' },
                { name: 'Actas', path: '/secretarias/actas' },
                { name: 'Salud', path: '/secretarias/salud' },
            ],
        },
    ];

    return (
        <nav className="bg-primary text-white fixed w-full z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center">
                            <img src="/logo.png" alt="AERI Logo" className="h-12 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="hover:text-gray-300 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                            Inicio
                        </Link>

                        {menuItems.map((item) => (
                            <div
                                key={item.title}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(item.title)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className="flex items-center space-x-1 hover:text-gray-300 transition-colors px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
                                    <span>{item.title}</span>
                                    <ChevronDown className="w-4 h-4" />
                                </button>

                                {/* Dropdown Meta-menu */}
                                <AnimatePresence>
                                    {activeDropdown === item.title && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        >
                                            {item.links.map((link) => (
                                                <Link
                                                    key={link.name}
                                                    to={link.path}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                                                >
                                                    {link.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}

                        <Link to="/turnos" className="hover:text-gray-300 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                            Turnos
                        </Link>
                    </div>

                    {/* Mi AERI Button */}
                    <div className="hidden md:block">
                        <Link
                            to="/login"
                            className="bg-secondary hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
                        >
                            <User className="w-4 h-4" />
                            <span>Mi AERI</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-primary shadow-inner max-h-[calc(100vh-5rem)] overflow-y-auto"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                to="/"
                                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-900"
                                onClick={toggleMenu}
                            >
                                Inicio
                            </Link>

                            {menuItems.map((item) => (
                                <div key={item.title} className="space-y-1">
                                    <div className="px-3 py-2 text-gray-300 font-semibold uppercase text-xs tracking-wider">
                                        {item.title}
                                    </div>
                                    {item.links.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-900 pl-6"
                                            onClick={toggleMenu}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            ))}

                            <Link
                                to="/turnos"
                                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-red-600 text-white hover:bg-red-700 mt-4 flex items-center space-x-2"
                                onClick={toggleMenu}
                            >
                                <Calendar className="w-4 h-4" />
                                <span>Turnos</span>
                            </Link>

                            <Link
                                to="/login"
                                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-secondary text-white hover:bg-green-700 mt-4 flex items-center space-x-2"
                                onClick={toggleMenu}
                            >
                                <User className="w-4 h-4" />
                                <span>Mi AERI</span>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
};

export default Navbar;
