import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Vote,
    X,
    ChevronRight,
    ArrowLeft,
    BarChart3,
    Table,
    FileText,
    ZoomIn,
    ExternalLink,
    Maximize2,
    Search,
    Layers,
    Calendar,
    CheckCircle2,
    Building2,
    Users
} from 'lucide-react';
import {
    escrutinioIntro,
    actasOficiales,
    totalesGenerales,
    subtotalesPorSeccional,
    mesas
} from '../../data/escrutinioData';

const PadronModal = ({ isOpen, onClose, initialView = 'announcement' }) => {
    const [view, setView] = useState(initialView); // 'announcement' | 'results'
    const [activeTab, setActiveTab] = useState('resumen'); // 'resumen' | 'mesas' | 'actas'
    const [mesaCategory, setMesaCategory] = useState('comision_directiva'); // 'comision_directiva' | 'seccionales'
    const [mesaSearch, setMesaSearch] = useState('');
    const [selectedActa, setSelectedActa] = useState(null); // Lightbox acta object

    // Sincronizar vista inicial cuando se abre el modal
    useEffect(() => {
        if (isOpen) {
            setView(initialView);
        }
    }, [isOpen, initialView]);

    // Cerrar con Escape y bloquear scroll del body
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                if (selectedActa) {
                    setSelectedActa(null);
                } else {
                    onClose();
                }
            }
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose, selectedActa]);

    if (!isOpen || typeof document === 'undefined') return null;

    // Filtro de mesas
    const filteredMesas = mesas.filter((m) =>
        m.mesa.toLowerCase().includes(mesaSearch.toLowerCase())
    );

    const handleSwitchToResults = () => {
        setView('results');
    };

    const handleSwitchToAnnouncement = () => {
        setView('announcement');
    };

    return createPortal(
        <>
            <AnimatePresence>
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-4 bg-[#001f4e]/85 backdrop-blur-sm">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0"
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 15 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        onClick={(e) => e.stopPropagation()}
                        className={`relative bg-white rounded-2xl shadow-2xl w-full z-10 flex flex-col border border-gray-100 overflow-hidden transition-all duration-300 ${
                            view === 'results'
                                ? 'max-w-5xl max-h-[92dvh] sm:max-h-[90vh]'
                                : 'max-w-2xl max-h-[90dvh] sm:max-h-[88vh]'
                        }`}
                    >
                        {/* Header Institucional AERI */}
                        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-gray-200 bg-white shrink-0">
                            <div className="flex items-center gap-2.5 sm:gap-4">
                                <div className="text-2xl sm:text-3xl font-extrabold brand-blue tracking-tighter italic">
                                    AERI
                                </div>
                                <div className="border-l-2 border-gray-300 pl-2.5 sm:pl-4">
                                    <h2 className="text-xs sm:text-base font-extrabold brand-blue leading-tight tracking-wide uppercase">
                                        Elecciones Generales 2026
                                    </h2>
                                    <p className="text-[10px] sm:text-xs text-gray-500 font-medium hidden xs:block">
                                        Junta Electoral Central • Resultados Oficiales
                                    </p>
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

                        {/* VISTA 1: ANUNCIO / PORTADA */}
                        {view === 'announcement' && (
                            <motion.div
                                key="view-announcement"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="p-4 sm:p-7 md:p-8 text-center flex-1 overflow-y-auto overscroll-contain"
                            >
                                {/* Badge Superior */}
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#0088cc] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-[#0088cc] animate-pulse"></span>
                                    <span>Comunicado Oficial • Escrutinio Provisorio</span>
                                </div>

                                {/* Icono */}
                                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 text-[#002855] shadow-inner border border-blue-100">
                                    <Vote className="w-7 h-7 sm:w-8 sm:h-8 text-[#0088cc]" />
                                </div>

                                {/* Título Principal */}
                                <h1 className="text-xl sm:text-3xl font-extrabold text-gray-900 mb-2 sm:mb-3 tracking-tight leading-tight max-w-xl mx-auto">
                                    Escrutinio provisorio de las elecciones del jueves 12 de noviembre
                                </h1>

                                <p className="text-xs sm:text-sm text-gray-600 mb-5 sm:mb-6 max-w-lg mx-auto leading-relaxed">
                                    Concluido el acto comicial y con el <strong>100% de las mesas escrutadas</strong> en toda la provincia de Buenos Aires y CABA, se informan los resultados provisorios oficiales para Comisión Directiva y Comisiones Seccionales.
                                </p>

                                {/* Tarjeta Resumen de Resultados */}
                                <div className="bg-gradient-to-br from-gray-50 to-blue-50/40 rounded-2xl p-4 sm:p-5 border border-blue-100/80 mb-6 shadow-sm max-w-lg mx-auto text-left">
                                    <div className="flex items-center justify-between border-b border-gray-200/80 pb-2.5 mb-3.5">
                                        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center gap-1.5">
                                            <BarChart3 className="w-3.5 h-3.5 text-[#0088cc]" />
                                            Comisión Directiva Central
                                        </span>
                                        <span className="text-[11px] sm:text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                            100% Escrutado
                                        </span>
                                    </div>

                                    {/* Comparativa de Listas */}
                                    <div className="space-y-3">
                                        {/* Lista Blanca */}
                                        <div className="bg-white rounded-xl p-3 border border-gray-200/80 shadow-xs">
                                            <div className="flex justify-between items-center mb-1.5">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-3 h-3 rounded-full bg-slate-400 border border-gray-300"></span>
                                                    <span className="font-extrabold text-gray-900 text-sm sm:text-base">
                                                        LISTA BLANCA
                                                    </span>
                                                </div>
                                                <div className="text-right">
                                                    <span className="font-extrabold text-gray-900 text-base sm:text-lg">
                                                        1.025
                                                    </span>
                                                    <span className="text-xs text-gray-500 ml-1 font-semibold">
                                                        (50,32%)
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                                <div className="bg-slate-600 h-2 rounded-full" style={{ width: '50.32%' }}></div>
                                            </div>
                                        </div>

                                        {/* Lista Azul */}
                                        <div className="bg-white rounded-xl p-3 border border-blue-200/80 shadow-xs">
                                            <div className="flex justify-between items-center mb-1.5">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-3 h-3 rounded-full bg-[#0088cc]"></span>
                                                    <span className="font-extrabold text-[#002855] text-sm sm:text-base">
                                                        LISTA AZUL
                                                    </span>
                                                </div>
                                                <div className="text-right">
                                                    <span className="font-extrabold text-[#002855] text-base sm:text-lg">
                                                        998
                                                    </span>
                                                    <span className="text-xs text-gray-500 ml-1 font-semibold">
                                                        (48,99%)
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                                <div className="bg-[#0088cc] h-2 rounded-full" style={{ width: '48.99%' }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Datos Complementarios */}
                                    <div className="grid grid-cols-3 gap-2 mt-3.5 pt-3 border-t border-gray-200 text-center text-[11px] sm:text-xs">
                                        <div>
                                            <span className="text-gray-500 block">Afiliados votaron</span>
                                            <strong className="text-gray-900 font-bold sm:text-sm">2.037</strong>
                                        </div>
                                        <div>
                                            <span className="text-gray-500 block">Diferencia urnas</span>
                                            <strong className="text-emerald-700 font-bold sm:text-sm">0</strong>
                                        </div>
                                        <div>
                                            <span className="text-gray-500 block">Blancos / Nulos</span>
                                            <strong className="text-gray-900 font-bold sm:text-sm">7 / 6</strong>
                                        </div>
                                    </div>
                                </div>

                                {/* Botón Ver Escrutinio */}
                                <button
                                    onClick={handleSwitchToResults}
                                    className="brand-light-blue-bg text-white font-bold py-3.5 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto text-sm sm:text-base flex items-center justify-center mx-auto gap-2.5 cursor-pointer touch-manipulation group"
                                >
                                    <Table className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span>VER ESCRUTINIO COMPLETO</span>
                                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
                                </button>

                                <button
                                    onClick={onClose}
                                    className="mt-4 sm:mt-5 text-xs sm:text-sm text-gray-500 hover:text-gray-800 underline block mx-auto cursor-pointer p-1"
                                >
                                    Cerrar y continuar al sitio
                                </button>
                            </motion.div>
                        )}

                        {/* VISTA 2: ESCRUTINIO COMPLETO */}
                        {view === 'results' && (
                            <motion.div
                                key="view-results"
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="flex flex-col flex-1 overflow-hidden"
                            >
                                {/* Barra de navegación de pestañas */}
                                <div className="bg-gray-50 px-4 sm:px-6 pt-3 pb-2 border-b border-gray-200 shrink-0">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                                        <div>
                                            <h3 className="text-base sm:text-lg font-extrabold text-gray-900 leading-tight">
                                                Escrutinio Provisorio Oficial
                                            </h3>
                                            <p className="text-[11px] sm:text-xs text-gray-500">
                                                Jueves 12 de Noviembre de 2026 • A.E.R.I.
                                            </p>
                                        </div>

                                        {/* Selector de Pestañas */}
                                        <div className="flex items-center gap-1 bg-gray-200/80 p-1 rounded-xl self-start sm:self-auto">
                                            <button
                                                onClick={() => setActiveTab('resumen')}
                                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                                    activeTab === 'resumen'
                                                        ? 'bg-white text-[#002855] shadow-xs'
                                                        : 'text-gray-600 hover:text-gray-900'
                                                }`}
                                            >
                                                <BarChart3 className="w-3.5 h-3.5" />
                                                <span>Resumen</span>
                                            </button>
                                            <button
                                                onClick={() => setActiveTab('mesas')}
                                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                                    activeTab === 'mesas'
                                                        ? 'bg-white text-[#002855] shadow-xs'
                                                        : 'text-gray-600 hover:text-gray-900'
                                                }`}
                                            >
                                                <Table className="w-3.5 h-3.5" />
                                                <span>Mesas (1 a 26)</span>
                                            </button>
                                            <button
                                                onClick={() => setActiveTab('actas')}
                                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                                    activeTab === 'actas'
                                                        ? 'bg-white text-[#002855] shadow-xs'
                                                        : 'text-gray-600 hover:text-gray-900'
                                                }`}
                                            >
                                                <FileText className="w-3.5 h-3.5" />
                                                <span>Actas Oficiales</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Contenido scrollable de las pestañas */}
                                <div className="flex-1 overflow-y-auto p-3.5 sm:p-6 overscroll-contain bg-gray-50/30">
                                    {/* PESTAÑA 1: RESUMEN Y SECCIONALES */}
                                    {activeTab === 'resumen' && (
                                        <div className="space-y-6">
                                            {/* Totales Generales */}
                                            <div>
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="w-2.5 h-2.5 rounded-full bg-[#0088cc]"></span>
                                                    <h4 className="text-xs sm:text-sm font-extrabold text-gray-800 uppercase tracking-wider">
                                                        Totales Generales de los Comicios
                                                    </h4>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {/* Tarjeta Comisión Directiva */}
                                                    <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-200 shadow-xs">
                                                        <div className="flex justify-between items-center mb-3">
                                                            <h5 className="font-bold text-gray-900 text-sm sm:text-base flex items-center gap-2">
                                                                <Users className="w-4 h-4 text-[#0088cc]" />
                                                                Comisión Directiva
                                                            </h5>
                                                            <span className="text-[10px] font-bold uppercase bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100">
                                                                Provisorio
                                                            </span>
                                                        </div>

                                                        <div className="space-y-2.5 mb-4">
                                                            <div className="flex justify-between items-center">
                                                                <span className="text-xs sm:text-sm font-bold text-gray-700 flex items-center gap-1.5">
                                                                    <span className="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
                                                                    Lista Blanca:
                                                                </span>
                                                                <span className="text-sm sm:text-base font-extrabold text-gray-900">
                                                                    {totalesGenerales.comision_directiva.lista_blanca.toLocaleString('es-AR')}
                                                                    <span className="text-xs text-gray-500 font-semibold ml-1">
                                                                        ({totalesGenerales.comision_directiva.porcentaje_blanca}%)
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                                                <div className="bg-slate-600 h-2 rounded-full" style={{ width: `${totalesGenerales.comision_directiva.porcentaje_blanca}%` }}></div>
                                                            </div>

                                                            <div className="flex justify-between items-center pt-1">
                                                                <span className="text-xs sm:text-sm font-bold text-gray-700 flex items-center gap-1.5">
                                                                    <span className="w-2.5 h-2.5 rounded-full bg-[#0088cc]"></span>
                                                                    Lista Azul:
                                                                </span>
                                                                <span className="text-sm sm:text-base font-extrabold text-[#002855]">
                                                                    {totalesGenerales.comision_directiva.lista_azul.toLocaleString('es-AR')}
                                                                    <span className="text-xs text-gray-500 font-semibold ml-1">
                                                                        ({totalesGenerales.comision_directiva.porcentaje_azul}%)
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                                                <div className="bg-[#0088cc] h-2 rounded-full" style={{ width: `${totalesGenerales.comision_directiva.porcentaje_azul}%` }}></div>
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-3 gap-2 pt-2.5 border-t border-gray-100 text-center text-[10px] sm:text-xs text-gray-600">
                                                            <div className="bg-gray-50 p-1.5 rounded-md">
                                                                <span className="block text-gray-400">Nulos</span>
                                                                <strong>{totalesGenerales.comision_directiva.votos_nulos}</strong>
                                                            </div>
                                                            <div className="bg-gray-50 p-1.5 rounded-md">
                                                                <span className="block text-gray-400">Recurridos</span>
                                                                <strong>{totalesGenerales.comision_directiva.votos_recurridos}</strong>
                                                            </div>
                                                            <div className="bg-gray-50 p-1.5 rounded-md">
                                                                <span className="block text-gray-400">En Blanco</span>
                                                                <strong>{totalesGenerales.comision_directiva.votos_en_blanco}</strong>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Tarjeta Comisiones Seccionales */}
                                                    <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-200 shadow-xs">
                                                        <div className="flex justify-between items-center mb-3">
                                                            <h5 className="font-bold text-gray-900 text-sm sm:text-base flex items-center gap-2">
                                                                <Building2 className="w-4 h-4 text-[#0088cc]" />
                                                                Comisiones Seccionales (Total)
                                                            </h5>
                                                            <span className="text-[10px] font-bold uppercase bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100">
                                                                Provisorio
                                                            </span>
                                                        </div>

                                                        <div className="space-y-2.5 mb-4">
                                                            <div className="flex justify-between items-center">
                                                                <span className="text-xs sm:text-sm font-bold text-gray-700 flex items-center gap-1.5">
                                                                    <span className="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
                                                                    Lista Blanca:
                                                                </span>
                                                                <span className="text-sm sm:text-base font-extrabold text-gray-900">
                                                                    {totalesGenerales.seccionales.lista_blanca.toLocaleString('es-AR')}
                                                                    <span className="text-xs text-gray-500 font-semibold ml-1">
                                                                        ({totalesGenerales.seccionales.porcentaje_blanca}%)
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                                                <div className="bg-slate-600 h-2 rounded-full" style={{ width: `${totalesGenerales.seccionales.porcentaje_blanca}%` }}></div>
                                                            </div>

                                                            <div className="flex justify-between items-center pt-1">
                                                                <span className="text-xs sm:text-sm font-bold text-gray-700 flex items-center gap-1.5">
                                                                    <span className="w-2.5 h-2.5 rounded-full bg-[#0088cc]"></span>
                                                                    Lista Azul:
                                                                </span>
                                                                <span className="text-sm sm:text-base font-extrabold text-[#002855]">
                                                                    {totalesGenerales.seccionales.lista_azul.toLocaleString('es-AR')}
                                                                    <span className="text-xs text-gray-500 font-semibold ml-1">
                                                                        ({totalesGenerales.seccionales.porcentaje_azul}%)
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                                                <div className="bg-[#0088cc] h-2 rounded-full" style={{ width: `${totalesGenerales.seccionales.porcentaje_azul}%` }}></div>
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-3 gap-2 pt-2.5 border-t border-gray-100 text-center text-[10px] sm:text-xs text-gray-600">
                                                            <div className="bg-gray-50 p-1.5 rounded-md">
                                                                <span className="block text-gray-400">Nulos</span>
                                                                <strong>{totalesGenerales.seccionales.votos_nulos}</strong>
                                                            </div>
                                                            <div className="bg-gray-50 p-1.5 rounded-md">
                                                                <span className="block text-gray-400">Recurridos</span>
                                                                <strong>{totalesGenerales.seccionales.votos_recurridos}</strong>
                                                            </div>
                                                            <div className="bg-gray-50 p-1.5 rounded-md">
                                                                <span className="block text-gray-400">En Blanco</span>
                                                                <strong>{totalesGenerales.seccionales.votos_en_blanco}</strong>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Subtotales por Seccional */}
                                            <div>
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-2.5 h-2.5 rounded-full bg-[#0088cc]"></span>
                                                        <h4 className="text-xs sm:text-sm font-extrabold text-gray-800 uppercase tracking-wider">
                                                            Subtotales por Seccional
                                                        </h4>
                                                    </div>
                                                    <span className="text-[11px] text-gray-500 font-medium">
                                                        6 Seccionales
                                                    </span>
                                                </div>

                                                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                                                    <div className="overflow-x-auto">
                                                        <table className="w-full text-left border-collapse">
                                                            <thead>
                                                                <tr className="bg-gray-100/80 text-[11px] sm:text-xs font-bold text-gray-700 uppercase tracking-wider border-b border-gray-200">
                                                                    <th className="py-3 px-3 sm:px-4">Seccional</th>
                                                                    <th className="py-3 px-3 sm:px-4 text-center">Lista Blanca</th>
                                                                    <th className="py-3 px-3 sm:px-4 text-center">Lista Azul</th>
                                                                    <th className="py-3 px-3 sm:px-4 text-right">Total</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                                                                {subtotalesPorSeccional.detalle.map((item, idx) => (
                                                                    <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                                                                        <td className="py-2.5 sm:py-3 px-3 sm:px-4 font-bold text-gray-900">
                                                                            {item.seccional}
                                                                        </td>
                                                                        <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-center font-semibold text-gray-800">
                                                                            {item.lista_blanca.toLocaleString('es-AR')}
                                                                        </td>
                                                                        <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-center font-semibold text-[#002855]">
                                                                            {item.lista_azul.toLocaleString('es-AR')}
                                                                        </td>
                                                                        <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-extrabold text-gray-900">
                                                                            {item.total.toLocaleString('es-AR')}
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                                <tr className="bg-blue-50/60 font-extrabold text-xs sm:text-sm border-t-2 border-gray-300">
                                                                    <td className="py-3 px-3 sm:px-4 text-[#002855] uppercase">
                                                                        TOTALES
                                                                    </td>
                                                                    <td className="py-3 px-3 sm:px-4 text-center text-gray-900">
                                                                        {subtotalesPorSeccional.totales.lista_blanca.toLocaleString('es-AR')}
                                                                    </td>
                                                                    <td className="py-3 px-3 sm:px-4 text-center text-[#002855]">
                                                                        {subtotalesPorSeccional.totales.lista_azul.toLocaleString('es-AR')}
                                                                    </td>
                                                                    <td className="py-3 px-3 sm:px-4 text-right text-gray-900">
                                                                        {subtotalesPorSeccional.totales.total.toLocaleString('es-AR')}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Acceso Rápido a Actas */}
                                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50/40 rounded-xl p-4 border border-blue-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                                <div>
                                                    <h5 className="font-bold text-[#002855] text-sm flex items-center gap-1.5">
                                                        <FileText className="w-4 h-4 text-[#0088cc]" />
                                                        Actas Oficiales Escaneadas
                                                    </h5>
                                                    <p className="text-xs text-gray-600 mt-0.5">
                                                        Podés consultar las planillas escaneadas originales firmadas por las autoridades de mesa.
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => setActiveTab('actas')}
                                                    className="bg-[#002855] hover:bg-[#001f42] text-white text-xs font-bold py-2 px-4 rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                                                >
                                                    <span>VER ACTAS</span>
                                                    <ChevronRight className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {/* PESTAÑA 2: DETALLE DE MESAS */}
                                    {activeTab === 'mesas' && (
                                        <div className="space-y-4">
                                            {/* Controles de la tabla: Filtro de Búsqueda y Selector de Categoría */}
                                            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                                                {/* Buscador de Mesas */}
                                                <div className="relative flex-1 max-w-md">
                                                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                                    <input
                                                        type="text"
                                                        value={mesaSearch}
                                                        onChange={(e) => setMesaSearch(e.target.value)}
                                                        placeholder="Buscar por mesa, organismo o localidad..."
                                                        className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-[#0088cc]"
                                                    />
                                                    {mesaSearch && (
                                                        <button
                                                            onClick={() => setMesaSearch('')}
                                                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                        >
                                                            <X className="w-3.5 h-3.5" />
                                                        </button>
                                                    )}
                                                </div>

                                                {/* Selector de Categoría */}
                                                <div className="flex items-center gap-1 bg-gray-200/80 p-1 rounded-xl self-start sm:self-auto shrink-0">
                                                    <button
                                                        onClick={() => setMesaCategory('comision_directiva')}
                                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                                            mesaCategory === 'comision_directiva'
                                                                ? 'bg-white text-[#002855] shadow-xs'
                                                                : 'text-gray-600 hover:text-gray-900'
                                                        }`}
                                                    >
                                                        Comisión Directiva
                                                    </button>
                                                    <button
                                                        onClick={() => setMesaCategory('seccionales')}
                                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                                            mesaCategory === 'seccionales'
                                                                ? 'bg-white text-[#002855] shadow-xs'
                                                                : 'text-gray-600 hover:text-gray-900'
                                                        }`}
                                                    >
                                                        Seccionales
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Tabla de Mesas */}
                                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs">
                                                <div className="overflow-x-auto max-h-[50vh] overscroll-contain">
                                                    <table className="w-full text-left border-collapse">
                                                        <thead className="sticky top-0 bg-gray-100 z-10 border-b border-gray-200">
                                                            <tr className="text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                                                                <th className="py-2.5 px-3">Mesa / Ubicación</th>
                                                                <th className="py-2.5 px-2 text-center">Votaron</th>
                                                                <th className="py-2.5 px-2 text-center">Sobres</th>
                                                                <th className="py-2.5 px-2.5 text-center bg-gray-200/60">Blanca</th>
                                                                <th className="py-2.5 px-2.5 text-center bg-blue-100/70 text-[#002855]">Azul</th>
                                                                <th className="py-2.5 px-2 text-center">Nulos</th>
                                                                <th className="py-2.5 px-2 text-center">Rec.</th>
                                                                <th className="py-2.5 px-2 text-center">Blanco</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100 text-xs">
                                                            {filteredMesas.map((m, idx) => {
                                                                const categoryData = m[mesaCategory] || {};
                                                                const blanca = categoryData.lista_blanca;
                                                                const azul = categoryData.lista_azul;
                                                                const isBlancaWinner = blanca !== null && azul !== null && blanca > azul;
                                                                const isAzulWinner = blanca !== null && azul !== null && azul > blanca;

                                                                return (
                                                                    <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                                                                        <td className="py-2 px-3 font-bold text-gray-900 whitespace-nowrap">
                                                                            {m.mesa}
                                                                        </td>
                                                                        <td className="py-2 px-2 text-center text-gray-700">
                                                                            {m.afiliados_votaron !== null ? m.afiliados_votaron : '-'}
                                                                        </td>
                                                                        <td className="py-2 px-2 text-center text-gray-700">
                                                                            {m.sobres !== null ? m.sobres : '-'}
                                                                        </td>
                                                                        <td className={`py-2 px-2.5 text-center font-bold ${
                                                                            isBlancaWinner ? 'text-gray-900 bg-gray-100/60' : 'text-gray-600'
                                                                        }`}>
                                                                            {blanca !== null ? blanca : '-'}
                                                                        </td>
                                                                        <td className={`py-2 px-2.5 text-center font-bold ${
                                                                            isAzulWinner ? 'text-[#002855] bg-blue-50' : 'text-gray-600'
                                                                        }`}>
                                                                            {azul !== null ? azul : '-'}
                                                                        </td>
                                                                        <td className="py-2 px-2 text-center text-gray-500">
                                                                            {categoryData.votos_nulos !== null ? categoryData.votos_nulos : '-'}
                                                                        </td>
                                                                        <td className="py-2 px-2 text-center text-gray-500">
                                                                            {categoryData.votos_recurridos !== null ? categoryData.votos_recurridos : '-'}
                                                                        </td>
                                                                        <td className="py-2 px-2 text-center text-gray-500">
                                                                            {categoryData.votos_en_blanco !== null ? categoryData.votos_en_blanco : '-'}
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            })}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            {filteredMesas.length === 0 && (
                                                <div className="text-center py-6 text-gray-500 text-xs">
                                                    No se encontraron mesas que coincidan con &quot;{mesaSearch}&quot;.
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* PESTAÑA 3: ACTAS OFICIALES (IMÁGENES) */}
                                    {activeTab === 'actas' && (
                                        <div className="space-y-4">
                                            <div className="bg-amber-50/80 border border-amber-200 p-3 sm:p-3.5 rounded-xl text-xs text-amber-900 leading-relaxed flex items-start gap-2.5">
                                                <FileText className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                                                <div>
                                                    <strong className="block font-bold">Documentación Oficial de Respaldo</strong>
                                                    Las siguientes actas corresponden a los escaneos originales de las planillas rubricadas por las autoridades de la Junta Electoral Central y los fiscales/apoderados partidarios.
                                                    Haga clic en cualquiera de ellas para <strong>ampliar en pantalla completa</strong> o descargarlas.
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {actasOficiales.map((acta) => (
                                                    <div
                                                        key={acta.id}
                                                        className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col group"
                                                    >
                                                        {/* Header de la tarjeta */}
                                                        <div className="p-3 sm:p-3.5 border-b border-gray-100 flex items-center justify-between">
                                                            <div>
                                                                <h5 className="font-extrabold text-gray-900 text-xs sm:text-sm">
                                                                    {acta.title}
                                                                </h5>
                                                                <p className="text-[10px] sm:text-xs text-gray-500">
                                                                    {acta.subtitle}
                                                                </p>
                                                            </div>
                                                            <a
                                                                href={acta.src}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-gray-400 hover:text-[#0088cc] p-1.5 rounded-lg transition-colors"
                                                                title="Abrir imagen original"
                                                            >
                                                                <ExternalLink className="w-4 h-4" />
                                                            </a>
                                                        </div>

                                                        {/* Contenedor de la Imagen con Hover Zoom */}
                                                        <div
                                                            onClick={() => setSelectedActa(acta)}
                                                            className="relative bg-gray-100 flex items-center justify-center p-3 cursor-pointer overflow-hidden min-h-[220px] max-h-[340px]"
                                                        >
                                                            <img
                                                                src={acta.src}
                                                                alt={acta.title}
                                                                loading="lazy"
                                                                className="max-h-[300px] w-auto object-contain rounded-lg shadow-xs group-hover:scale-[1.02] transition-transform duration-200"
                                                            />
                                                            <div className="absolute inset-0 bg-[#001f4e]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                                                <span className="bg-white/95 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                                                                    <Maximize2 className="w-3.5 h-3.5 text-[#0088cc]" />
                                                                    Ampliar documento
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* Footer con acciones */}
                                                        <div className="p-2.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs">
                                                            <button
                                                                onClick={() => setSelectedActa(acta)}
                                                                className="text-[#0088cc] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                                                            >
                                                                <ZoomIn className="w-3.5 h-3.5" />
                                                                <span>Ver en detalle</span>
                                                            </button>
                                                            <a
                                                                href={acta.src}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-gray-500 hover:text-gray-800 flex items-center gap-1 font-medium"
                                                            >
                                                                <span>Abrir pestaña</span>
                                                                <ExternalLink className="w-3 h-3" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Footer de la Vista 2 */}
                                <div className="px-4 py-3 sm:px-6 sm:py-3.5 border-t border-gray-200 bg-white shrink-0 flex items-center justify-between text-xs sm:text-sm">
                                    <button
                                        onClick={handleSwitchToAnnouncement}
                                        className="text-gray-600 hover:text-gray-900 font-semibold flex items-center gap-1.5 cursor-pointer py-1"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        <span>Volver a la portada</span>
                                    </button>

                                    <button
                                        onClick={onClose}
                                        className="bg-[#002855] hover:bg-[#001f42] text-white font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer text-xs sm:text-sm"
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </AnimatePresence>

            {/* LIGHTBOX: VISOR DE PANTALLA COMPLETA DE ACTAS OFICIALES */}
            <AnimatePresence>
                {selectedActa && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[120] bg-black/95 flex flex-col justify-between p-3 sm:p-5 select-none"
                        onClick={() => setSelectedActa(null)}
                    >
                        {/* Lightbox Header */}
                        <div
                            className="flex items-center justify-between text-white shrink-0 pb-3"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div>
                                <h4 className="font-bold text-sm sm:text-base">{selectedActa.title}</h4>
                                <p className="text-xs text-gray-400">{selectedActa.subtitle}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <a
                                    href={selectedActa.src}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                                    title="Abrir en pestaña nueva"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                                <button
                                    onClick={() => setSelectedActa(null)}
                                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                                    aria-label="Cerrar visor"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        {/* Lightbox Image Container */}
                        <div
                            className="flex-1 flex items-center justify-center overflow-auto p-2"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedActa.src}
                                alt={selectedActa.title}
                                className="max-h-[82vh] max-w-full object-contain rounded-lg shadow-2xl"
                            />
                        </div>

                        {/* Lightbox Footer */}
                        <div
                            className="text-center text-xs text-gray-400 pt-2 shrink-0"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Haga clic en la cruz o presione Escape para salir
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>,
        document.body
    );
};

export default PadronModal;
