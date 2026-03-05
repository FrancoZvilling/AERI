import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, User, ChevronDown } from 'lucide-react';

const AfiliadosCargoCard = ({ familiares }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Ensure familiares is an array, if undefined default to []
    const safeFamiliares = familiares || [];
    const dependentsCount = safeFamiliares.length;

    return (
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
                                safeFamiliares.map((familiar, index) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        key={familiar.documentId || index}
                                        className="flex items-center p-3 rounded-lg bg-white border border-gray-100 shadow-sm"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mr-3">
                                            <User className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-800">
                                                {familiar.nombre} {familiar.apellido}
                                            </p>
                                            <div className="flex items-center mt-0.5 space-x-2">
                                                <span className="text-[11px] font-medium text-gray-500">
                                                    DNI {familiar.dni?.toLocaleString('es-AR') || familiar.dni}
                                                </span>
                                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                                <span className="text-[11px] font-medium text-gray-500">
                                                    Socio N° {familiar.numero_socio || 'N/A'}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AfiliadosCargoCard;
