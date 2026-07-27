import React, { useState, useRef, useEffect } from 'react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FlyerModal = ({ isOpen, onClose, imageSrc, title }) => {
    // Cerrar con tecla Escape
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-8"
                    onClick={onClose} // Clic afuera cierra
                >
                    <div 
                        className="relative w-full max-w-5xl h-full max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()} // Previene cerrar al tocar el contenido
                    >
                        {/* Botón Cerrar (Fuera de la imagen en desktop, arriba en mobile) */}
                        <button
                            onClick={onClose}
                            className="absolute -top-2 right-0 sm:-top-8 sm:-right-8 z-50 p-2 bg-white/10 hover:bg-white/30 text-white rounded-full backdrop-blur-lg transition-all border border-white/20"
                            aria-label="Cerrar modal"
                        >
                            <X className="w-6 h-6 sm:w-8 sm:h-8" />
                        </button>

                        {/* Contenedor Interactivo */}
                        <div 
                            className="relative w-full h-full flex items-center justify-center rounded-xl overflow-hidden select-none"
                        >
                            {/* La Imagen */}
                            <img 
                                src={imageSrc} 
                                alt={title || "Flyer ampliado"}
                                className="w-full h-full object-contain"
                                draggable={false}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FlyerModal;
