import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Vote,
    Search,
    X,
    IdCard,
    Mail,
    MapPin,
    Keyboard,
    AlertCircle,
    ChevronRight,
    ArrowLeft,
    FileText
} from 'lucide-react';
import InstructivoCorreoModal from './InstructivoCorreoModal';

const PadronModal = ({ isOpen, onClose, initialView = 'announcement' }) => {
    const [view, setView] = useState(initialView); // 'announcement' | 'search'
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [showInstructivo, setShowInstructivo] = useState(false);
    const inputRef = useRef(null);

    // Sincronizar vista inicial cuando se abre el modal
    useEffect(() => {
        if (isOpen) {
            setView(initialView);
            if (initialView === 'search') {
                setTimeout(() => {
                    inputRef.current?.focus();
                }, 300);
            }
        }
    }, [isOpen, initialView]);

    // Cerrar con tecla Escape y bloquear scroll de fondo
    useEffect(() => {
        if (!isOpen) return;

        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleEsc);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    // Búsqueda con debounce en el endpoint interno /api/padron
    useEffect(() => {
        const clean = searchTerm.trim().replace(/\D/g, '');

        if (clean.length < 5) {
            setResults([]);
            setHasSearched(false);
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        const timeoutId = setTimeout(async () => {
            try {
                const response = await fetch(`/api/padron?dni=${encodeURIComponent(clean)}`);
                if (response.ok) {
                    const data = await response.json();
                    setResults(Array.isArray(data) ? data : []);
                } else {
                    setResults([]);
                }
            } catch (error) {
                console.error('Error al consultar el padrón:', error);
                setResults([]);
            } finally {
                setIsLoading(false);
                setHasSearched(true);
            }
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [searchTerm]);

    const handleSwitchToSearch = () => {
        setView('search');
        setTimeout(() => {
            inputRef.current?.focus();
        }, 200);
    };

    const handleSwitchToAnnouncement = () => {
        setView('announcement');
        setSearchTerm('');
        setResults([]);
        setHasSearched(false);
    };

    if (!isOpen || typeof document === 'undefined') return null;

    return createPortal(
        <>
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-[#001f4e]/85 backdrop-blur-sm">
                {/* Backdrop Click */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0"
                    onClick={onClose}
                />

                {/* Main Modal Container: 100% responsive con max-h adaptado a móviles */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 15 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden z-10 flex flex-col max-h-[88dvh] sm:max-h-[90vh] border border-gray-100"
                >
                    {/* Header adaptable */}
                    <div className="flex items-center justify-between px-4 py-3.5 sm:px-6 sm:py-5 border-b border-gray-200 bg-white shrink-0">
                        <div className="flex items-center gap-2.5 sm:gap-4">
                            <div className="text-2xl sm:text-4xl font-extrabold brand-blue tracking-tighter italic">
                                AERI
                            </div>
                            <div className="border-l-2 border-gray-300 pl-2.5 sm:pl-4">
                                <h2 className="text-sm sm:text-xl font-bold brand-blue leading-tight tracking-wide">
                                    ELECCIONES 2026
                                </h2>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-700 active:bg-gray-100 p-1.5 sm:p-2 rounded-full transition-colors cursor-pointer"
                            aria-label="Cerrar modal"
                        >
                            <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                    </div>

                    {/* View 1: Announcement (Initial) */}
                    {view === 'announcement' && (
                        <motion.div
                            key="view-announcement"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="p-4 sm:p-8 text-center flex-1 overflow-y-auto overscroll-contain"
                        >
                            <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center rounded-2xl bg-blue-50/80 text-[#0088cc] shadow-inner">
                                <Vote className="w-8 h-8 sm:w-12 sm:h-12" />
                            </div>

                            <h1 className="text-2xl sm:text-4xl font-extrabold brand-blue mb-1 sm:mb-2 tracking-tight">
                                12 de Noviembre
                            </h1>

                            <h3 className="text-sm sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 leading-snug">
                                ¡TU PARTICIPACIÓN ES FUNDAMENTAL!<br />
                                <span className="text-[#0088cc]">ELEGIMOS EL FUTURO DE NUESTRO GREMIO</span>
                            </h3>

                            <p className="text-xs sm:text-base text-gray-600 mb-3 sm:mb-5 max-w-lg mx-auto leading-relaxed">
                                El próximo jueves 12 de noviembre se llevarán a cabo las elecciones para renovar las autoridades de nuestro sindicato. Te invitamos a ser parte de esta jornada democrática.
                            </p>

                            <p className="text-[11px] sm:text-sm text-gray-500 mb-6 sm:mb-8 max-w-md mx-auto leading-normal">
                                Ya podés consultar de forma rápida en qué sector, mesa y modalidad te toca votar ingresando tu número de documento.
                            </p>

                            <button
                                onClick={handleSwitchToSearch}
                                className="brand-light-blue-bg text-white font-bold py-3 px-6 sm:py-3.5 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto text-sm sm:text-lg flex items-center justify-center mx-auto gap-2 cursor-pointer touch-manipulation"
                            >
                                <span>CONSULTÁ DÓNDE VOTÁS</span>
                                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>

                            <button
                                onClick={onClose}
                                className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 hover:text-gray-800 underline block mx-auto cursor-pointer p-1"
                            >
                                Cerrar y continuar al sitio
                            </button>
                        </motion.div>
                    )}

                    {/* View 2: Search */}
                    {view === 'search' && (
                        <motion.div
                            key="view-search"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="p-3.5 sm:p-6 md:p-8 flex flex-col flex-1 overflow-hidden"
                        >
                            <div className="mb-3 sm:mb-6 text-center shrink-0">
                                <h2 className="text-base sm:text-2xl font-bold brand-blue mb-0.5 sm:mb-1 leading-snug">
                                    Buscá tu lugar y modalidad de votación
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-600">
                                    Ingresá tu DNI para saber dónde votás
                                </p>
                            </div>

                            {/* Campo de búsqueda con tamaño de fuente adecuado para que iOS no haga autozoom */}
                            <div className="flex gap-2 mb-3 sm:mb-5 shadow-sm shrink-0">
                                <div className="relative flex-1">
                                    <Search className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3.5 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="Ingresá tu DNI sin puntos..."
                                        className="w-full pl-10 pr-9 sm:pl-12 sm:pr-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#0088cc] text-base sm:text-lg transition-colors bg-gray-50 focus:bg-white"
                                    />
                                    {searchTerm && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setSearchTerm('');
                                                inputRef.current?.focus();
                                            }}
                                            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 rounded-full"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Results Area */}
                            <div className="flex-1 overflow-y-auto pr-1 sm:pr-2 space-y-2.5 sm:space-y-4 min-h-[26vh] max-h-[46vh] sm:max-h-[48vh] overscroll-contain">
                                {/* Estado 1: Menos de 5 números */}
                                {searchTerm.trim().length < 5 && (
                                    <div className="text-center text-gray-500 italic py-8 sm:py-12 flex flex-col items-center justify-center px-4">
                                        <Keyboard className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3 text-gray-300 block" />
                                        <p className="text-xs sm:text-sm">
                                            {searchTerm.trim().length === 0
                                                ? 'Ingresá tu número de DNI arriba para comenzar la búsqueda...'
                                                : 'Ingresá al menos 5 números para buscar...'}
                                        </p>
                                    </div>
                                )}

                                {/* Estado 2: Buscando (Loading) */}
                                {isLoading && searchTerm.trim().length >= 5 && (
                                    <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-gray-500">
                                        <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 border-b-2 border-[#0088cc] mb-3"></div>
                                        <p className="text-xs sm:text-sm font-medium">Buscando en el padrón electoral...</p>
                                    </div>
                                )}

                                {/* Estado 3: Sin resultados */}
                                {!isLoading && searchTerm.trim().length >= 5 && hasSearched && results.length === 0 && (
                                    <div className="text-center text-red-500 font-semibold py-8 sm:py-12 flex flex-col items-center justify-center px-4">
                                        <AlertCircle className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 opacity-60 block" />
                                        <p className="text-xs sm:text-sm">No se encontró ningún afiliado con ese DNI.</p>
                                    </div>
                                )}

                                {/* Estado 4: Resultados encontrados */}
                                {!isLoading && results.length > 0 && results.map((m, idx) => (
                                    <div
                                        key={idx}
                                        className="border-2 border-green-500 rounded-xl p-3.5 sm:p-5 bg-green-50/80 relative overflow-hidden transition-all hover:shadow-md"
                                    >
                                        <div className="absolute top-0 right-0 bg-green-600 text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-bl-lg tracking-wider">
                                            BÚSQUEDA EXITOSA
                                        </div>
                                        <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2.5 sm:mb-4 pr-24 sm:pr-28 border-b border-green-200 pb-1.5 sm:pb-2 break-words leading-tight">
                                            {m['APELLIDO Y NOMBRE']}
                                        </h3>

                                        <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700">
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <IdCard className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" />
                                                <span>Documento: <strong className="text-gray-900">{m['DOCUMENTO']}</strong></span>
                                            </div>
                                            <div className="flex items-center gap-2 sm:gap-3">
                                                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" />
                                                <span>
                                                    Modalidad:{' '}
                                                    <strong className="uppercase bg-blue-100 text-blue-800 px-1.5 py-0.5 sm:px-2 rounded border border-blue-200 text-[11px] sm:text-xs">
                                                        {m['DISTRIBUCION']}
                                                    </strong>
                                                </span>
                                            </div>
                                            <div className="flex items-start gap-2 sm:gap-3">
                                                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 shrink-0" />
                                                <div className="leading-snug">
                                                    <span className="text-gray-600">Mesa asignada:</span>
                                                    <p className="text-gray-900 text-sm sm:text-lg font-bold mt-0.5 break-words">
                                                        {m['UBICACION']}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Botón de Instructivo para voto por correo */}
                                        {m['DISTRIBUCION'] && m['DISTRIBUCION'].toUpperCase().includes('CORREO') && (
                                            <div className="mt-3 pt-2.5 border-t border-green-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white/70 -mx-3.5 -mb-3.5 sm:-mx-5 sm:-mb-5 p-3 sm:p-3.5 rounded-b-xl">
                                                <div className="flex items-center gap-1.5 text-xs text-gray-700 font-medium">
                                                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shrink-0"></span>
                                                    <span>Votación por correspondencia postal</span>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => setShowInstructivo(true)}
                                                    className="flex items-center justify-center gap-1.5 bg-[#002855] hover:bg-[#001f42] text-white text-xs sm:text-sm font-bold py-2 px-3.5 sm:px-4 rounded-lg shadow-sm transition-all transform active:scale-95 cursor-pointer touch-manipulation"
                                                >
                                                    <FileText className="w-3.5 h-3.5 text-cyan-300" />
                                                    <span>INSTRUCTIVO</span>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Footer links adaptable */}
                            <div className="mt-3 sm:mt-6 text-center pt-3 sm:pt-4 border-t border-gray-100 shrink-0">
                                <div className="flex items-center justify-center gap-4 text-xs sm:text-sm">
                                    <button
                                        onClick={handleSwitchToAnnouncement}
                                        className="text-gray-600 hover:text-gray-900 underline font-semibold flex items-center gap-1 cursor-pointer py-1"
                                    >
                                        <ArrowLeft className="w-3.5 h-3.5" />
                                        <span>Volver al inicio</span>
                                    </button>
                                    <span className="text-gray-300">|</span>
                                    <button
                                        onClick={onClose}
                                        className="text-gray-500 hover:text-gray-800 underline cursor-pointer py-1"
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
        {/* Modal de Instructivo Voto por Correo */}
        <InstructivoCorreoModal
            isOpen={showInstructivo}
            onClose={() => setShowInstructivo(false)}
        />
        </>,
        document.body
    );
};

export default PadronModal;
