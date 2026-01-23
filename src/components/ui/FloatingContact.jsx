import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Send, Phone } from 'lucide-react';

const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Using DiceBear API for a friendly cartoon avatar
    // Seed 'Felix' gives a nice friendly face
    const avatarUrl = "/avatar.png";

    const toggleOpen = () => setIsOpen(!isOpen);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Mensaje enviado (simulación). ¡Gracias por contactarnos!");
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 bg-white rounded-2xl shadow-2xl w-80 md:w-96 overflow-hidden border border-gray-100"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 flex items-center justify-between">
                            <h3 className="text-white font-bold flex items-center">
                                <span className="mr-2">👋</span> ¡Hola! ¿En qué te ayudamos?
                            </h3>
                            <button
                                onClick={toggleOpen}
                                className="text-white/80 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Body - Form */}
                        <div className="p-5">
                            <form onSubmit={handleSubmit} className="space-y-3">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Nombre y Apellido"
                                        className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Correo electrónico"
                                        className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Teléfono"
                                        className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Tu mensaje..."
                                        rows="3"
                                        className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary text-sm resize-none"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#39c3ef] hover:bg-[#39c3ef]/80 text-[#002855] font-bold py-2 rounded-lg transition-colors flex items-center justify-center text-sm"
                                >
                                    <Send className="w-4 h-4 mr-2" />
                                    Enviar Mensaje
                                </button>
                            </form>

                            {/* Divider & WhatsApp */}
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <p className="text-center text-xs text-gray-400 mb-3">O contactanos directamente</p>
                                <a
                                    href="https://wa.me/5492215083285"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2 rounded-lg transition-colors flex items-center justify-center text-sm shadow-sm"
                                >
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Trigger Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleOpen}
                className="relative group"
            >
                <div className="w-16 h-16 rounded-full bg-white shadow-xl overflow-hidden border-4 border-white flex items-center justify-center relative z-10">
                    {isOpen ? (
                        <div className="bg-primary w-full h-full flex items-center justify-center">
                            <X className="w-8 h-8 text-white" />
                        </div>
                    ) : (
                        <img
                            src={avatarUrl}
                            alt="Asistente AERI"
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>

                {/* Pulse Effect when closed */}
                {!isOpen && (
                    <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39c3ef] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-[#39c3ef]"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
};

export default FloatingContact;
