import React, { useState, useMemo, useEffect } from 'react';
import HeroSection from '../components/ui/HeroSection';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, User, CheckCircle2, X, Calendar, Hotel, Tent, Star, Filter, ChevronLeft, ChevronRight, AlertTriangle, Info, Loader2 } from 'lucide-react';

const TourismPage = () => {
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        const fetchTurismos = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/turismos?populate=*`);
                if (!response.ok) throw new Error('Error al cargar destinos');
                const result = await response.json();

                const mappedData = result.data.map(item => ({
                    id: item.documentId || item.id,
                    nombre: item.titulo,
                    categoria: item.categoria,
                    ubicacion: item.ubicacion,
                    tipo: item.tipo_alojamiento,
                    precio: item.tarifa,
                    vigencia: item.vigencia,
                    regimen: item.regimen,
                    detalles: item.informacion,
                    contacto: item.contacto,
                    imagen: item.imagen?.url ? (item.imagen.url.startsWith('http') ? item.imagen.url : `${import.meta.env.VITE_API_URL}${item.imagen.url}`) : null,
                }));
                setDestinations(mappedData);
            } catch (err) {
                console.error("Error fetching turismos:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchTurismos();
    }, []);

    const tourismCategories = useMemo(() => {
        const categories = new Set(destinations.map(item => item.categoria).filter(Boolean));
        return ["Todos", ...Array.from(categories)];
    }, [destinations]);

    // Filter Logic
    const filteredData = useMemo(() => {
        if (selectedCategory === "Todos") return destinations;
        return destinations.filter(item => item.categoria === selectedCategory);
    }, [selectedCategory, destinations]);

    return (
        <div
            className="pb-20 min-h-screen font-sans bg-fixed bg-cover bg-center overflow-x-hidden"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        >
            <div className="fixed inset-0 bg-white/40 pointer-events-none z-0" /> {/* Overlay para suavizar */}
            {/* 1. Hero Section (Preserved) */}
            <HeroSection
                title="Secretaría de Turismo y Deportes"
                subtitle="Viajes al alcance de todos. Beneficios exclusivos para nuestros afiliados."
                backgroundImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">

                {/* 2. Filters Section */}
                <div className="w-fit max-w-full mx-auto bg-white rounded-full shadow-lg p-3 mb-3 flex items-center space-x-2 border border-gray-100 overflow-x-auto scrollbar-hide">
                    <div className="bg-blue-50 p-2 rounded-full hidden sm:block">
                        <Filter className="w-5 h-5 text-[#004080]" />
                    </div>
                    {tourismCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${selectedCategory === cat
                                ? 'bg-[#004080] text-white shadow-md transform scale-105'
                                : 'bg-transparent text-gray-600 hover:bg-gray-100 hover:text-[#004080]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="block md:hidden text-center text-xs text-[#004080] font-semibold tracking-widest mb-10 animate-pulse bg-white/80 py-1 px-3 rounded-full w-fit mx-auto shadow-sm">
                    DESLIZÁ &gt;&gt;&gt;
                </div>

                {/* 3. Cards Sections (Carousels) / Empty States */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-12 h-12 text-[#1e6df9] animate-spin mb-4" />
                        <p className="text-[#004080] font-semibold text-lg animate-pulse">Cargando destinos turísticos...</p>
                    </div>
                ) : destinations.length === 0 ? (
                    <div className="bg-white p-12 rounded-3xl shadow-lg border border-gray-100 text-center mb-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#39c3ef] rounded-full mix-blend-multiply filter blur-3xl opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="bg-blue-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                            <MapPin className="w-10 h-10 text-[#1e6df9]" />
                        </div>
                        <h3 className="text-3xl font-bold text-[#004080] mb-3 relative z-10">Preparando nuevos destinos</h3>
                        <p className="text-gray-600 max-w-xl mx-auto text-lg relative z-10">
                            Por el momento no hay viajes disponibles para ofrecer, pero pronto agregaremos nuevas opciones y convenios para nuestros afiliados. ¡Mantenete atento!
                        </p>
                    </div>
                ) : (
                    <div className="space-y-12 mb-20">
                        {(selectedCategory === "Todos" ? tourismCategories.filter(c => c !== "Todos") : [selectedCategory]).map((category) => {
                            const items = destinations.filter(item => item.categoria === category);
                            if (items.length === 0) return null;

                            return (
                                <CategoryCarousel
                                    key={category}
                                    title={category}
                                    items={items}
                                    onSelectCard={setSelectedCard}
                                />
                            );
                        })}
                    </div>
                )}

                {!loading && destinations.length > 0 && filteredData.length === 0 && (
                    <div className="text-center py-20 text-gray-500 text-lg">
                        No hay destinos disponibles en esta categoría por el momento.
                    </div>
                )}

                {/* 4. Contact Footer (Simplified) */}
                <div className="bg-[#023e73] text-white rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
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
                                href="tel:02214248142"
                                className="bg-[#39c3ef] text-[#002855] px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-white transition-all transform hover:scale-105 flex items-center"
                            >
                                <Phone className="w-5 h-5 mr-3" />
                                Llamar al 0221 4248142
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
                                    src={selectedCard.imagen?.includes('/') ? selectedCard.imagen : `/images/turismo/${selectedCard.imagen}`}
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
                            <div className="w-full md:w-3/5 p-5 md:p-8 overflow-y-auto">
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

                                    {/* Seccion Info Adicional Estructurada */}
                                    {selectedCard.entidad_prestadora && (
                                        <div className="mb-4 text-sm font-semibold text-[#004080] bg-[#39c3ef]/20 p-3 rounded-lg flex items-center shadow-sm">
                                            <Info className="w-5 h-5 mr-3 text-[#1e6df9]" />
                                            Prestador: {selectedCard.entidad_prestadora}
                                        </div>
                                    )}

                                    {selectedCard.servicios_destacados && (
                                        <div className="mb-6">
                                            <h3 className="text-md font-bold text-[#004080] border-b-2 border-[#39c3ef]/30 pb-2 mb-4">
                                                Servicios e Instalaciones
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {selectedCard.servicios_destacados.map((item, i) => (
                                                    <div key={i} className="flex items-start bg-gray-50 p-3 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                                        <CheckCircle2 className="w-4 h-4 text-[#39c3ef] mr-2 mt-0.5 flex-shrink-0" />
                                                        <span className="text-gray-700 text-sm font-medium">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {selectedCard.ingreso_predio && (
                                        <div className="mb-6">
                                            <h3 className="text-md font-bold text-[#004080] border-b-2 border-[#39c3ef]/30 pb-2 mb-4">
                                                Información de Ingreso
                                            </h3>
                                            <div className="space-y-2">
                                                {selectedCard.ingreso_predio.map((item, i) => (
                                                    <div key={i} className="flex items-center bg-blue-50/50 p-3 rounded-lg border border-blue-100/50">
                                                        <div className="w-2 h-2 rounded-full bg-[#1e6df9] mr-3 flex-shrink-0"></div>
                                                        <span className="text-gray-700 text-sm">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {selectedCard.requisito_obligatorio && (
                                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-6 shadow-sm">
                                            <div className="flex items-start">
                                                <AlertTriangle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <h4 className="text-red-800 font-bold text-sm mb-1 uppercase tracking-wider">Importante</h4>
                                                    <p className="text-red-700 text-sm font-medium">{selectedCard.requisito_obligatorio}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Main Info */}
                                    <div>
                                        <h3 className="text-lg font-bold text-[#004080] border-b-2 border-[#39c3ef] pb-2 mb-4 inline-block">Información</h3>
                                        <div className="space-y-4 text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                                            {selectedCard.detalles || selectedCard.info_adicional || selectedCard.descripcion || "Un destino excepcional pensado para el descanso y la recreación, con excelentes comodidades para disfrutar de una estadía inolvidable. Contáctenos directamente para conocer las opciones disponibles y las tarifas vigentes acordes a la temporada."}
                                        </div>
                                    </div>

                                    {/* Contact Info */}
                                    {selectedCard.contacto && (
                                        <div className="pt-4 mt-4 border-t border-gray-100">
                                            <h4 className="font-bold text-gray-900 mb-2">Contacto Directo</h4>
                                            <p className="text-[#023e73] font-medium bg-[#39c3ef]/10 p-3 rounded-lg flex items-center whitespace-pre-line">
                                                <Phone className="w-4 h-4 mr-2" /> {selectedCard.contacto}
                                            </p>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

const CategoryCarousel = ({ title, items, onSelectCard }) => {
    const scrollContainerRef = React.useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = direction === 'left' ? -current.offsetWidth / 2 : current.offsetWidth / 2;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="relative">
            <div className="mb-8 pl-1">
                <div className="inline-flex items-center bg-[#004080] text-white px-8 py-3 rounded-r-full shadow-xl border-l-8 border-[#39c3ef]">
                    <h2 className="text-2xl font-bold tracking-wide drop-shadow-md">{title}</h2>
                </div>
            </div>

            <div className="group/carousel relative">
                {/* Navigation Arrows */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/90 text-[#004080] p-3 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0 hover:bg-[#39c3ef] hover:text-white cursor-pointer hidden md:block"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/90 text-[#004080] p-3 rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-[#39c3ef] hover:text-white cursor-pointer hidden md:block"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Mobile Scroll Indicator */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 md:hidden pointer-events-none animate-pulse">
                    <div className="bg-white/80 p-2 rounded-l-full shadow-md text-[#004080]">
                        <ChevronRight className="w-5 h-5" />
                    </div>
                </div>

                {/* Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 snap-x snap-mandatory pt-2 pb-8 px-2 scrollbar-hide -mx-2"
                >
                    {items.map((item) => (
                        <div key={item.id} className="min-w-[80vw] md:min-w-[45vw] lg:min-w-[calc(33.333%-16px)] snap-center">
                            <TourismCard item={item} onSelect={() => onSelectCard(item)} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TourismCard = ({ item, onSelect }) => {
    // Disable animation on mobile to ensure visibility
    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

    return (
        <motion.div
            layout
            initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "200px" }}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex flex-col h-full ring-1 ring-black/5"
        >
            {/* Image Cover */}
            <div className="relative h-60 overflow-hidden bg-gray-200">
                <img
                    src={item.imagen?.includes('/') ? item.imagen : `/images/turismo/${item.imagen}`}
                    alt={item.nombre}
                    onError={(e) => {
                        e.target.onerror = null;
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
                <h3 className="text-xl font-bold text-[#004080] mb-2 leading-tight line-clamp-2 min-h-[3.5rem]">{item.nombre}</h3>
                <div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">{item.categoria}</div>

                {/* Pricing / Summary High Level */}
                <div className="mt-auto">
                    <div className="mb-4">
                        <span className="text-[#1e6df9] font-bold text-lg">{item.precio || "Consultar Tarifas"}</span>
                    </div>

                    <button
                        onClick={onSelect}
                        className="w-full bg-[#004080] text-white py-3 rounded-xl font-bold hover:bg-[#1e6df9] transition-colors shadow-md flex items-center justify-center group-hover:translate-y-[-2px] cursor-pointer"
                    >
                        Ver Detalles <CheckCircle2 className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default TourismPage;
