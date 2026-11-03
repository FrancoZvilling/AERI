import React from 'react';
import { motion } from 'framer-motion';
import { Vote } from 'lucide-react';

/**
 * Botón flotante para consultar el Padrón Electoral.
 * Ubicación: abajo a la derecha (responsive en desktop y móviles).
 * Efecto: Pulso y parpadeo sutil, pausado y elegante con colores institucionales.
 * Colores: Fondo azul oscuro AERI (#002855), borde blanco de 2px y letras blancas.
 */
const FloatingElectoralButton = ({ onClick }) => {
    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center justify-end select-none">
            <motion.button
                onClick={onClick}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                animate={{
                    boxShadow: [
                        "0 10px 25px -5px rgba(0, 40, 85, 0.45), 0 0 0 0px rgba(57, 195, 239, 0)",
                        "0 12px 30px -4px rgba(0, 40, 85, 0.55), 0 0 0 6px rgba(57, 195, 239, 0.3)",
                        "0 10px 25px -5px rgba(0, 40, 85, 0.45), 0 0 0 0px rgba(57, 195, 239, 0)"
                    ]
                }}
                transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative flex items-center gap-2 sm:gap-2.5 bg-[#002855] text-white border-2 border-white px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-full shadow-2xl hover:bg-[#001f42] transition-colors cursor-pointer touch-manipulation group"
                aria-label="Consultar Padrón Elecciones 2026"
            >
                {/* Indicador titilante suave */}
                <span className="relative flex h-2.5 w-2.5">
                    <motion.span
                        animate={{ opacity: [0.3, 1, 0.3], scale: [0.85, 1.2, 0.85] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                        className="inline-flex h-full w-full rounded-full bg-cyan-400"
                    />
                </span>

                {/* Ícono de Votación */}
                <Vote className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300" />

                {/* Texto */}
                <span className="font-extrabold text-xs sm:text-sm tracking-wide uppercase whitespace-nowrap">
                    Elecciones 2026
                </span>
            </motion.button>
        </div>
    );
};

export default FloatingElectoralButton;
