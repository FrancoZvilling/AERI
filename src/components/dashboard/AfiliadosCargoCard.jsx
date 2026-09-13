import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, User, ChevronDown, X, CreditCard } from 'lucide-react';
import { createPortal } from 'react-dom';
import DigitalCredential from './DigitalCredential';

const AfiliadosCargoCard = ({ familiares, externos, titularNumeroSocio, titularZona }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFamiliar, setSelectedFamiliar] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Extraer familiares_a_cargo
    let familiaresArray = familiares || [];
    if (familiaresArray && !Array.isArray(familiaresArray)) {
        if (Array.isArray(familiaresArray.data)) {
            familiaresArray = familiaresArray.data;
        }
    }
    const listaFamiliares = Array.isArray(familiaresArray) ? familiaresArray : [];

    // Extraer familiar_externos
    let externosArray = externos || [];
    if (externosArray && !Array.isArray(externosArray)) {
        if (Array.isArray(externosArray.data)) {
            externosArray = externosArray.data;
        }
    }
    const listaExternos = Array.isArray(externosArray) ? externosArray : [];

    // Combinar listas
    const listaCompleta = [...listaFamiliares, ...listaExternos];
    const dependentsCount = listaCompleta.length;

    const handleFamiliarClick = (familiar) => {
        setSelectedFamiliar(familiar);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md">
                {/* Header / Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 focus:outline-none cursor-pointer transition-colors"
                >
                    <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                            <Users className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-sm font-bold text-gray-800">Afiliados a Cargo</h4>
                            <p className="text-xs text-gray-500">Miembros de tu grupo familiar</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <div className="bg-blue-50 text-primary text-xs font-bold px-2 py-1 rounded-md">
                            {dependentsCount}
                        </div>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="border-t border-gray-100"
                        >
                            <div className="p-5 pt-3 space-y-3 bg-gray-50/50">
                                {dependentsCount === 0 ? (
                                    <p className="text-sm text-gray-500 text-center py-2">
                                        No tenés familiares a cargo registrados.
                                    </p>
                                ) : (
                                    listaCompleta.map((familiar, index) => (
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            key={familiar.documentId || familiar.id || index}
                                            onClick={() => handleFamiliarClick(familiar)}
                                            className="flex items-center p-3 rounded-lg bg-white border border-gray-100 shadow-sm hover:border-primary/30 hover:bg-blue-50/30 cursor-pointer transition-all group"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mr-3 group-hover:bg-primary group-hover:text-white transition-colors">
                                                <User className="w-5 h-5 text-primary group-hover:text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors">
                                                    {familiar.nombre} {familiar.apellido}
                                                </p>
                                                <div className="flex items-center mt-0.5 space-x-2">
                                                    <span className="text-[11px] font-medium text-gray-500">
                                                        DNI {familiar.dni?.toLocaleString('es-AR') || familiar.dni}
                                                    </span>
                                                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                    <span className="text-[11px] font-medium text-gray-500">
                                                        Socio N° {titularNumeroSocio || 'N/A'}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="flex items-center text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-full uppercase tracking-wider">
                                                    <CreditCard className="w-3 h-3 mr-1" />
                                                    Tarjeta
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Modal de Credencial para Familiar */}
            <AnimatePresence>
                {isModalOpen && selectedFamiliar && typeof document !== 'undefined' && createPortal(
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-sm z-10"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            
                            <DigitalCredential
                                nombre={selectedFamiliar.nombre}
                                apellido={selectedFamiliar.apellido}
                                numero_socio={titularNumeroSocio}
                                zona={titularZona}
                                qrPayload={String(selectedFamiliar.dni)}
                                variant="familiar"
                            />
                        </motion.div>
                    </div>,
                    document.body
                )}
            </AnimatePresence>
        </>
    );
};

export default AfiliadosCargoCard;
