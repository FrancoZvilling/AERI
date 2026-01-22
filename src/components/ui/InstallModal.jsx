import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Share, PlusSquare, Smartphone, Download, CheckCircle } from 'lucide-react';

const InstallModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative"
                        >
                            {/* Header Gradient */}
                            <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Download className="w-24 h-24 transform rotate-12" />
                                </div>
                                <h3 className="text-2xl font-bold relative z-10">Instalar App Mi AERI</h3>
                                <p className="text-blue-100 text-sm mt-1 relative z-10">Tené tu credencial siempre a mano</p>

                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-1 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 space-y-6">
                                <p className="text-gray-600 text-center font-medium">
                                    Si no te apareció el aviso automático, seguí estos pasos según tu dispositivo:
                                </p>

                                {/* iOS Instructions */}
                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="bg-black text-white p-1.5 rounded-lg">
                                            <Smartphone className="w-4 h-4" />
                                        </div>
                                        <h4 className="font-bold text-gray-800">iPhone / iPad (iOS)</h4>
                                    </div>
                                    <ol className="space-y-3 text-sm text-gray-600">
                                        <li className="flex items-start gap-3">
                                            <span className="bg-gray-200 text-gray-700 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                                            <span>
                                                Tocá el botón <strong>Compartir</strong> <Share className="w-4 h-4 inline mx-1 text-blue-500" /> en la barra inferior.
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="bg-gray-200 text-gray-700 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                                            <span>
                                                Buscá y seleccioná <strong>"Agregar a Inicio"</strong> <PlusSquare className="w-4 h-4 inline mx-1 text-gray-500" />.
                                            </span>
                                        </li>
                                    </ol>
                                </div>

                                {/* Android / Other Instructions */}
                                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="bg-green-600 text-white p-1.5 rounded-lg">
                                            <Smartphone className="w-4 h-4" />
                                        </div>
                                        <h4 className="font-bold text-gray-800">Android / Chrome</h4>
                                    </div>
                                    <ol className="space-y-3 text-sm text-gray-600">
                                        <li className="flex items-start gap-3">
                                            <span className="bg-gray-200 text-gray-700 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                                            <span>
                                                Tocá el menú del navegador (tres puntos <span className="font-bold text-lg leading-none">⋮</span>).
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="bg-gray-200 text-gray-700 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                                            <span>
                                                Seleccioná <strong>"Instalar aplicación"</strong> o <strong>"Agregar a la pantalla principal"</strong>.
                                            </span>
                                        </li>
                                    </ol>
                                </div>

                                <button
                                    onClick={onClose}
                                    className="w-full py-3 rounded-xl font-bold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                                >
                                    Entendido
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default InstallModal;
