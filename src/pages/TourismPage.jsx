import React, { useState, useMemo } from 'react';
import HeroSection from '../components/ui/HeroSection';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, User, CheckCircle2, X, Calendar, Hotel, Tent, Star, Filter } from 'lucide-react';
import { tourismData, tourismCategories } from '../data/tourismData';

const TourismPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [selectedCard, setSelectedCard] = useState(null);

    // Filter Logic
    const filteredData = useMemo(() => {
        if (selectedCategory === "Todos") return tourismData;
        return tourismData.filter(item => item.categoria === selectedCategory);
    }, [selectedCategory]);

    // Format Price helper
    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(price);
    };

    return (
        <div className="bg-gray-50 pb-20 min-h-screen font-sans">
            {/* 1. Hero Section (Preserved) */}
            <HeroSection
                title="Turismo AERI"
                subtitle="Viajes al alcance de todos. Beneficios exclusivos para nuestros afiliados."
                backgroundImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">

                {/* 2. Filters Section */}
                <div className="bg-white rounded-2xl shadow-lg p-4 mb-10 overflow-x-auto flex items-center space-x-2 scrollbar-hide border border-gray-100">
                    <Filter className="w-5 h-5 text-[#004080] mr-2 flex-shrink-0" />
                    {tourismCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${selectedCategory === cat
                                ? 'bg-[#004080] text-white shadow-md transform scale-105'
                                : 'bg-gray-100 text-gray-600 hover:bg-[#39c3ef] hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* 3. Cards Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredData.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex flex-col h-full"
                            >
                                {/* Image Cover */}
                                <div className="relative h-60 overflow-hidden bg-gray-200">
                                    <img
                                        src={`/images/turismo/${item.imagen}`} // Assumes images are in public/images/turismo or external
                                        alt={item.nombre}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            // Fallback image based on type
                                            e.target.src = item.tipo === 'Camping'
                                                ? "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1000&auto=format&fit=crop"
                                                : "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop";
                                        }}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                                    {/* Badges - Stacked Top Left */}
                                    <div className="absolute top-4 left-4 flex flex-col items-start space-y-2 max-w-[90%]">
                                        <span className="bg-[#39c3ef] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center w-fit">
                                            <MapPin className="w-3 h-3 mr-1" /> {item.ubicacion}
                                        </span>
                                        <span className="bg-[#1e6df9] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center w-fit">
                                            {item.tipo === 'Hotel' && <Hotel className="w-3 h-3 mr-1" />}
                                            {item.tipo === 'Camping' && <Tent className="w-3 h-3 mr-1" />}
                                            {item.tipo}
                                        </span>
                                    </div>

                                    {/* Destacado Badge if exists */}
                                    {item.destacado && (
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="bg-yellow-400 text-[#0d0d0d] text-xs font-extrabold px-3 py-1 rounded-lg shadow-lg text-center flex items-center justify-center">
                                                <Star className="w-3 h-3 mr-1" /> {item.destacado}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-[#004080] mb-2 leading-tight">{item.nombre}</h3>
                                    <div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">{item.categoria}</div>

                                    {/* Pricing / Summary High Level */}
                                    <div className="mt-auto">
                                        <div className="mb-4">
                                            {item.tarifas && item.tarifas.standard ? (
                                                <div>
                                                    <span className="text-gray-500 text-sm">Desde</span>
                                                    <div className="text-2xl font-bold text-[#00a0e1]">
                                                        {formatPrice(Object.values(item.tarifas.standard)[1] || Object.values(item.tarifas.standard)[0])}
                                                    </div>
                                                </div>
                                            ) : item.tarifas && typeof Object.values(item.tarifas)[0] === 'number' ? (
                                                <div>
                                                    <span className="text-gray-500 text-sm">Desde</span>
                                                    <div className="text-2xl font-bold text-[#00a0e1]">
                                                        {formatPrice(Object.values(item.tarifas).sort((a, b) => a - b)[0])}
                                                    </div>
                                                </div>
                                            ) : (
                                                <span className="text-[#1e6df9] font-bold text-lg">Consultar Tarifas</span>
                                            )}
                                        </div>

                                        <button
                                            onClick={() => setSelectedCard(item)}
                                            className="w-full bg-[#004080] text-white py-3 rounded-xl font-bold hover:bg-[#1e6df9] transition-colors shadow-md flex items-center justify-center group-hover:translate-y-[-2px] cursor-pointer"
                                        >
                                            Ver Detalles <CheckCircle2 className="w-4 h-4 ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredData.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        No hay destinos disponibles en esta categoría por el momento.
                    </div>
                )}

                {/* 4. Contact Footer (Simplified) */}
                <div className="bg-[#023e73] text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#39c3ef] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">¿Tenés dudas?</h2>
                            <p className="text-blue-100 mb-6 text-lg">Nuestro equipo de turismo está listo para asesorarte en tus próximas vacaciones.</p>
                            <div className="space-y-3">
                                <a href="mailto:turismoydeportes@aeri.org.ar" className="flex items-center hover:text-[#39c3ef] transition-colors">
                                    <Mail className="w-5 h-5 mr-3" /> turismoydeportes@aeri.org.ar
                                </a>
                                <div className="flex items-center">
                                    <Phone className="w-5 h-5 mr-3" />
                                    <span>0221 4248142 (int 840)</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <a
                                href="https://wa.me/5492215083285"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-[#128C7E] transition-all transform hover:scale-105 flex items-center"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Contactar por WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* 5. Modal Detail */}
            <AnimatePresence>
                {selectedCard && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCard(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative z-10 flex flex-col md:flex-row"
                        >
                            <button
                                onClick={() => setSelectedCard(null)}
                                className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Modal Image - Left Side on Desktop */}
                            <div className="w-full md:w-2/5 relative h-64 md:h-auto bg-gray-200">
                                <img
                                    src={`/images/turismo/${selectedCard.imagen}`}
                                    alt={selectedCard.nombre}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = selectedCard.tipo === 'Camping'
                                            ? "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1000&auto=format&fit=crop"
                                            : "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop";
                                    }}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 md:hidden" />
                                <div className="absolute bottom-4 left-4 text-white md:hidden">
                                    <h2 className="text-2xl font-bold">{selectedCard.nombre}</h2>
                                    <p className="opacity-90">{selectedCard.ubicacion}</p>
                                </div>
                            </div>

                            {/* Modal Content - Right Side */}
                            <div className="w-full md:w-3/5 p-8 overflow-y-auto">
                                <div className="hidden md:block mb-6">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className="bg-[#39c3ef] text-white text-xs font-bold px-2 py-1 rounded uppercase">{selectedCard.tipo}</span>
                                        <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{selectedCard.categoria}</span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-[#004080] mb-1">{selectedCard.nombre}</h2>
                                    <div className="flex items-center text-gray-500 font-medium">
                                        <MapPin className="w-4 h-4 mr-1 text-[#1e6df9]" /> {selectedCard.ubicacion}
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {/* Vigencia & Regimen */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {selectedCard.vigencia && (
                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                                <div className="text-[#1e6df9] font-bold text-xs uppercase mb-1 flex items-center"><Calendar className="w-3 h-3 mr-1" /> Vigencia</div>
                                                <div className="text-gray-800 font-semibold text-sm">{selectedCard.vigencia}</div>
                                            </div>
                                        )}
                                        {selectedCard.regimen && (
                                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                                <div className="text-[#1e6df9] font-bold text-xs uppercase mb-1 flex items-center"><Hotel className="w-3 h-3 mr-1" /> Régimen</div>
                                                <div className="text-gray-800 font-semibold text-sm">{selectedCard.regimen}</div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Main Info / Tariffs */}
                                    <div>
                                        <h3 className="text-lg font-bold text-[#004080] border-b-2 border-[#39c3ef] pb-2 mb-4 inline-block">Información y Tarifas</h3>

                                        {selectedCard.tarifas ? (
                                            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                                                {Object.entries(selectedCard.tarifas).map(([key, value], idx) => (
                                                    <div key={key} className={`p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center ${idx !== 0 ? 'border-t border-gray-100' : ''}`}>
                                                        <div className="font-bold text-gray-700 capitalize mb-1 sm:mb-0">
                                                            {key.replace(/_/g, ' ')}
                                                        </div>
                                                        <div className="text-right">
                                                            {typeof value === 'object' ? (
                                                                <div className="flex flex-col sm:flex-row sm:space-x-4">
                                                                    {Object.entries(value).map(([subKey, subVal]) => (
                                                                        <div key={subKey}>
                                                                            <span className="text-xs text-gray-400 uppercase mr-1">{subKey}:</span>
                                                                            <span className="font-bold text-[#00a0e1]">{formatPrice(subVal)}</span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            ) : (
                                                                <div className="font-bold text-[#00a0e1] text-lg">{formatPrice(value)}</div>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-gray-600 italic">Consultar tarifas vigentes.</p>
                                        )}
                                    </div>

                                    {/* Description / Extras */}
                                    {(selectedCard.detalles || selectedCard.servicios || selectedCard.descripcion || selectedCard.requisito) && (
                                        <div className="space-y-3 text-sm text-gray-600 bg-blue-50/50 p-4 rounded-xl">
                                            {selectedCard.detalles && <p><strong className="text-[#004080]">Detalles:</strong> {selectedCard.detalles}</p>}
                                            {selectedCard.servicios && <p><strong className="text-[#004080]">Servicios:</strong> {selectedCard.servicios}</p>}
                                            {selectedCard.descripcion && <p><strong className="text-[#004080]">Descripción:</strong> {selectedCard.descripcion}</p>}
                                            {selectedCard.requisito && <p className="text-red-500 font-medium"><strong className="text-red-700">Requisito:</strong> {selectedCard.requisito}</p>}
                                        </div>
                                    )}

                                    {/* Contact Info */}
                                    <div className="pt-4 mt-4 border-t border-gray-100">
                                        <h4 className="font-bold text-gray-900 mb-2">Contacto Directo</h4>
                                        <p className="text-[#023e73] font-medium bg-[#39c3ef]/10 p-3 rounded-lg flex items-center">
                                            <Phone className="w-4 h-4 mr-2" /> {selectedCard.contacto}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TourismPage;
