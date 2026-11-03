import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X,
    Mail,
    Send,
    Clock,
    AlertCircle,
    Download,
    FileText,
    CheckCircle,
    Inbox
} from 'lucide-react';

const InstructivoCorreoModal = ({ isOpen, onClose }) => {
    // Cerrar con Escape
    useEffect(() => {
        if (!isOpen) return;
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen || typeof document === 'undefined') return null;

    return createPortal(
        <AnimatePresence>
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4 bg-[#001f4e]/90 backdrop-blur-md">
                {/* Backdrop Click */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0"
                    onClick={onClose}
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 15 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden z-20 flex flex-col max-h-[90dvh] border border-gray-100"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4 bg-[#002855] text-white shrink-0 border-b border-[#003366]">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 flex items-center justify-center text-cyan-300">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white">
                                    Voto por Correspondencia
                                </h3>
                                <p className="text-[11px] sm:text-xs text-blue-200">
                                    Elecciones Generales AERI • 12 de Noviembre de 2026
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-white/70 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                            aria-label="Cerrar instructivo"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Scrollable Body */}
                    <div className="p-4 sm:p-6 overflow-y-auto overscroll-contain space-y-4 sm:space-y-6 text-gray-800 text-xs sm:text-sm">
                        
                        {/* Documentación recibida */}
                        <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-3.5 sm:p-4">
                            <h4 className="font-bold text-[#002855] text-xs sm:text-sm mb-2 flex items-center gap-1.5">
                                <Inbox className="w-4 h-4 text-blue-600 shrink-0" />
                                <span>Usted ha recibido la siguiente documentación:</span>
                            </h4>
                            <ul className="space-y-1.5 pl-2 text-gray-700 text-xs sm:text-[13px]">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                                    <span>Un sobre postal grande.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                                    <span>
                                        Un sobre chico con la leyenda <strong>“SU VOTO”</strong> (firmado por las apoderadas y tres miembros de la Junta Electoral Central A.E.R.I.).
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                                    <span>Las boletas de las dos listas (Lista Azul y Lista Blanca).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                                    <span>El instructivo impreso.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pasos para votar */}
                        <div>
                            <h4 className="font-bold text-[#002855] text-sm sm:text-base mb-3 border-b border-gray-200 pb-1.5 uppercase tracking-wide">
                                Pasos para emitir su voto
                            </h4>

                            <div className="space-y-3">
                                {/* Paso 1 */}
                                <div className="flex gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200/70">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0088cc] text-white flex items-center justify-center font-extrabold text-xs sm:text-sm shrink-0 mt-0.5">
                                        1
                                    </div>
                                    <div className="space-y-1 flex-1">
                                        <p className="font-bold text-gray-900 text-xs sm:text-sm">
                                            Prepare su voto
                                        </p>
                                        <p className="text-gray-600 leading-relaxed text-xs sm:text-[13px]">
                                            Deberá introducir una boleta por categoría (Comisión Directiva / Seccional). Colóquela dentro del sobre chico <strong>“SU VOTO”</strong> (no la escriba, tache ni marque). Guarde o deseche la boleta no utilizada para el voto. Cierre el sobre chico.
                                        </p>
                                    </div>
                                </div>

                                {/* Paso 2 */}
                                <div className="flex gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200/70">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0088cc] text-white flex items-center justify-center font-extrabold text-xs sm:text-sm shrink-0 mt-0.5">
                                        2
                                    </div>
                                    <div className="space-y-1 flex-1">
                                        <p className="font-bold text-gray-900 text-xs sm:text-sm">
                                            Arme el sobre postal (grande)
                                        </p>
                                        <p className="text-gray-600 leading-relaxed text-xs sm:text-[13px]">
                                            Introduzca dentro del sobre postal grande el sobre chico cerrado con su voto. Cierre el sobre grande. Coloque en el sobre grande su <strong>Nombre y Apellido, DNI y/o número de afiliado y firme el sobre</strong>.
                                        </p>
                                    </div>
                                </div>

                                {/* Paso 3 */}
                                <div className="flex gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200/70">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0088cc] text-white flex items-center justify-center font-extrabold text-xs sm:text-sm shrink-0 mt-0.5">
                                        3
                                    </div>
                                    <div className="space-y-1 flex-1">
                                        <p className="font-bold text-gray-900 text-xs sm:text-sm">
                                            Envíe su voto
                                        </p>
                                        <p className="text-gray-600 leading-relaxed text-xs sm:text-[13px]">
                                            Diríjase al <strong>Correo Argentino</strong> más cercano y envíelo por <strong>Servicio Expreso</strong>.
                                        </p>
                                    </div>
                                </div>

                                {/* Paso 4 */}
                                <div className="flex gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200/70">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0088cc] text-white flex items-center justify-center font-extrabold text-xs sm:text-sm shrink-0 mt-0.5">
                                        4
                                    </div>
                                    <div className="space-y-1 flex-1">
                                        <p className="font-bold text-gray-900 text-xs sm:text-sm">
                                            Envíelo a tiempo
                                        </p>
                                        <p className="text-gray-600 leading-relaxed text-xs sm:text-[13px]">
                                            Tiene tiempo para realizar el envío hasta el <strong>12 de noviembre de 2026</strong>, hasta la hora de cierre del correo.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Aviso Importante */}
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-3 sm:p-4 rounded-r-xl flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                            <div className="text-xs sm:text-[13px] text-amber-900">
                                <strong>Importante:</strong> El sobre chico debe contener una boleta por categoría: <strong>Comisión Directiva y Seccional</strong>.
                            </div>
                        </div>

                    </div>

                    {/* Footer con opciones de descarga y cierre */}
                    <div className="p-3.5 sm:p-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                        <a
                            href="/instructivo-voto-correo.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-gray-700 bg-white hover:bg-gray-100 border border-gray-300 py-2.5 px-4 rounded-xl shadow-sm transition-all"
                        >
                            <Download className="w-4 h-4 text-blue-600" />
                            <span>Descargar PDF Oficial</span>
                        </a>

                        <button
                            type="button"
                            onClick={onClose}
                            className="w-full sm:w-auto bg-[#002855] hover:bg-[#001f42] text-white font-bold py-2.5 px-6 rounded-xl shadow text-xs sm:text-sm transition-colors cursor-pointer"
                        >
                            Entendido / Volver
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>,
        document.body
    );
};

export default InstructivoCorreoModal;
