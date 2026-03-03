import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, User, Calendar, Newspaper, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null); // Desktop
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null); // Mobile

    const { isAuthenticated, user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

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
                { name: 'Secretaría Gremial', path: '/secretarias/gremial' },
                { name: 'Secretaría de Salud y Servicios Sociales', path: '/secretarias/salud' },
                { name: 'Secretaría de Prensa y Comunicación', path: '/secretarias/prensa' },
                { name: 'Secretaría de Mujeres, Géneros y Diversidades', path: '/secretarias/mujer-y-familia' },
                { name: 'Secretaría de Cultura y Capacitación', path: '/secretarias/cultura' },
                { name: 'Secretaría de Turismo y Deportes', path: '/secretarias/turismo' },
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
                                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            className="absolute left-0 mt-4 w-72 bg-[#004080]/95 backdrop-blur-md rounded-2xl shadow-2xl py-3 border border-white/10 overflow-hidden ring-1 ring-black ring-opacity-5"
                                        >
                                            {item.links.map((link) => (
                                                <Link
                                                    key={link.name}
                                                    to={link.path}
                                                    className="block px-5 py-3 text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 transition-all duration-300 border-l-4 border-transparent hover:border-[#39c3ef]"
                                                >
                                                    {link.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}

                        <Link to="/noticias" className="hover:text-gray-300 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                            Noticias
                        </Link>
                    </div>

                    {/* Mi AERI & IE Emergencias Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        {isAuthenticated ? (
                            <div className="flex items-center space-x-3">
                                <Link
                                    to="/mi-aeri"
                                    className="bg-[#39c3ef] hover:bg-[#39c3ef]/80 text-[#002855] px-4 py-2 rounded-lg text-sm font-bold transition-colors flex items-center space-x-2"
                                >
                                    <User className="w-4 h-4" />
                                    <span>Mi Panel</span>
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="text-red-400 hover:text-red-500 hover:bg-red-50/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
                                    title="Cerrar Sesión"
                                >
                                    <LogOut className="w-4 h-4" />
                                </button>
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className="bg-[#39c3ef] hover:bg-[#39c3ef]/80 text-[#002855] px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 shadow-sm"
                            >
                                <User className="w-4 h-4" />
                                <span>Mi AERI</span>
                            </Link>
                        )}

                        <a
                            href="https://www.grupoie.com.ar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors flex items-center shadow-md hover:shadow-lg"
                        >
                            <span>IE Emergencias</span>
                        </a>
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
                                    <button
                                        onClick={() => setActiveMobileDropdown(activeMobileDropdown === item.title ? null : item.title)}
                                        className="w-full flex justify-between items-center px-3 py-2 text-white font-medium text-base hover:bg-blue-900 rounded-md transition-colors focus:outline-none"
                                    >
                                        <span>{item.title}</span>
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform duration-200 ${activeMobileDropdown === item.title ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>

                                    <AnimatePresence>
                                        {activeMobileDropdown === item.title && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden bg-blue-900/30 rounded-md"
                                            >
                                                {item.links.map((link) => (
                                                    <Link
                                                        key={link.name}
                                                        to={link.path}
                                                        className="block px-3 py-2 pl-6 text-sm text-gray-200 hover:text-white hover:bg-blue-900/50 transition-colors"
                                                        onClick={toggleMenu}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}

                            <Link
                                to="/noticias"
                                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-green-700 text-white hover:bg-green-800 mt-4 flex items-center space-x-2"
                                onClick={toggleMenu}
                            >
                                <Newspaper className="w-4 h-4" />
                                <span>Noticias</span>
                            </Link>

                            {isAuthenticated ? (
                                <div className="mt-4 space-y-2">
                                    <Link
                                        to="/mi-aeri"
                                        className="w-full text-left px-3 py-2 rounded-md text-base font-bold bg-[#39c3ef] text-[#002855] hover:bg-[#39c3ef]/80 flex items-center space-x-2 shadow-sm"
                                        onClick={toggleMenu}
                                    >
                                        <User className="w-5 h-5" />
                                        <span>Ir a mi Panel</span>
                                    </Link>
                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            toggleMenu();
                                        }}
                                        className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-red-200 hover:text-red-100 hover:bg-red-900/30 flex items-center space-x-2 transition-colors"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        <span>Cerrar Sesión</span>
                                    </button>
                                </div>
                            ) : (
                                <Link
                                    to="/login"
                                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-[#39c3ef] text-[#002855] hover:bg-[#39c3ef]/80 mt-4 flex items-center space-x-2 shadow-sm"
                                    onClick={toggleMenu}
                                >
                                    <User className="w-5 h-5" />
                                    <span>Mi AERI</span>
                                </Link>
                            )}

                            <a
                                href="https://www.grupoie.com.ar/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center px-3 py-2 rounded-md text-base font-bold bg-red-600 text-white hover:bg-red-700 mt-3 transition-colors shadow-sm"
                                onClick={toggleMenu}
                            >
                                IE Emergencias
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav >
    );
};

export default Navbar;
