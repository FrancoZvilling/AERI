import React, { useState, useRef, useEffect } from 'react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FlyerModal = ({ isOpen, onClose, imageSrc, title }) => {
    const [isZoomed, setIsZoomed] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const imgRef = useRef(null);

    // Cerrar con tecla Escape
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Reseteamos el zoom al cerrar
    useEffect(() => {
        if (!isOpen) {
            setIsZoomed(false);
        }
    }, [isOpen]);

    const handleMouseMove = (e) => {
        // Solo aplicar el zoom exacto si estamos haciendo hover y no estamos en táctil puro
        if (!imgRef.current) return;
        const { left, top, width, height } = imgRef.current.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setMousePos({ x, y });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-8"
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
                            className="relative w-full h-full flex items-center justify-center rounded-xl overflow-hidden cursor-zoom-in group select-none"
                            onMouseMove={handleMouseMove}
                            onMouseEnter={() => setIsZoomed(true)}
                            onMouseLeave={() => setIsZoomed(false)}
                            onClick={() => setIsZoomed(!isZoomed)}
                        >
                            {/* La Imagen con efecto lupa */}
                            <img 
                                ref={imgRef}
                                src={imageSrc} 
                                alt={title || "Flyer ampliado"}
                                className="w-full h-full object-contain transition-transform duration-300 ease-out"
                                style={{
                                    transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                                    transform: isZoomed ? 'scale(2.5)' : 'scale(1)'
                                }}
                                draggable={false}
                            />

                            {/* Indicador Flotante (solo para que se entienda la acción) */}
                            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center space-x-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                                {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
                                <span className="text-sm font-medium hidden sm:inline">
                                    {isZoomed ? 'Quitar Lupa' : 'Lupa Activa'}
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FlyerModal;
