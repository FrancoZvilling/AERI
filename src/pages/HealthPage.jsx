import React, { useState, useRef } from 'react';
import HeroSection from '../components/ui/HeroSection';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronUp, MapPin, Phone, Info, Glasses, ShieldCheck, FileCheck, ArrowDown, AlertTriangle } from 'lucide-react';
import { medicalServices, pharmacies, optics, safetyData } from '../data/healthData';

const HealthPage = () => {
    const [activeTab, setActiveTab] = useState('services'); // 'services', 'pharmacies', 'optics'
    const [openServiceId, setOpenServiceId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [safetyExpanded, setSafetyExpanded] = useState(null); // 'definitions', 'rights', 'legislation'

    const safetyRef = useRef(null);

    const toggleService = (id) => {
        setOpenServiceId(openServiceId === id ? null : id);
    };

    const scrollToSafety = () => {
        safetyRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Filter items based on search
    const filteredPharmacies = pharmacies.filter(p =>
        p.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredOptics = optics.filter(o =>
        o.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gray-50 pb-20">
            <HeroSection
                title="Salud y Bienestar"
                subtitle="Cobertura integral y beneficios exclusivos para el cuidado de tu salud."
                backgroundImage="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2000&auto=format&fit=crop"
            >
                <button
                    onClick={scrollToSafety}
                    className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-medium transition-all flex items-center mx-auto"
                >
                    <ShieldCheck className="w-5 h-5 mr-2" />
                    Más información sobre Seguridad Laboral
                    <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                </button>
            </HeroSection>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">

                {/* Navigation Tabs */}
                <div className="bg-white rounded-xl shadow-lg p-2 flex flex-col md:flex-row mb-8">
                    <button
                        onClick={() => { setActiveTab('services'); setSearchTerm(''); }}
                        className={`flex-1 py-4 px-6 rounded-lg font-bold text-lg transition-all ${activeTab === 'services' ? 'bg-[#004080] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        Prestaciones Médicas
                    </button>
                    <button
                        onClick={() => { setActiveTab('pharmacies'); setSearchTerm(''); }}
                        className={`flex-1 py-4 px-6 rounded-lg font-bold text-lg transition-all ${activeTab === 'pharmacies' ? 'bg-[#004080] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        Farmacias
                    </button>
                    <button
                        onClick={() => { setActiveTab('optics'); setSearchTerm(''); }}
                        className={`flex-1 py-4 px-6 rounded-lg font-bold text-lg transition-all ${activeTab === 'optics' ? 'bg-[#004080] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        Ópticas
                    </button>
                </div>

                {/* --- CONTENT AREA --- */}
                <motion.div
                    key={activeTab} // Animate when tab changes
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* 1. SERVICES TAB */}
                    {activeTab === 'services' && (
                        <div className="space-y-4">
                            {medicalServices.map((service) => {
                                const Icon = service.icon;
                                const isOpen = openServiceId === service.id;

                                return (
                                    <div key={service.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                        <button
                                            onClick={() => toggleService(service.id)}
                                            className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors text-left"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className={`p-3 rounded-full ${isOpen ? 'bg-[#39c3ef] text-white' : 'bg-gray-100 text-gray-500'} transition-colors`}>
                                                    <Icon className="w-6 h-6" />
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                                            </div>
                                            {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                                        </button>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="border-t border-gray-100 bg-gray-50/50"
                                                >
                                                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">

                                                        {/* IOMA */}
                                                        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                                            <h4 className="font-bold text-primary mb-3 uppercase tracking-wider text-sm border-b border-blue-200 pb-2">Cobertura IOMA</h4>
                                                            <ul className="space-y-2">
                                                                {service.ioma.map((item, idx) => (
                                                                    <li key={idx} className="flex items-start text-gray-700 text-sm">
                                                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        {/* AERI + Requirements */}
                                                        <div className="space-y-6">
                                                            {service.aeri.length > 0 && (
                                                                <div className="bg-[#39c3ef]/10 p-6 rounded-xl border border-[#39c3ef]/20">
                                                                    <h4 className="font-bold text-[#39c3ef] mb-3 uppercase tracking-wider text-sm border-b border-[#39c3ef]/30 pb-2">Cobertura AERI</h4>
                                                                    <ul className="space-y-2">
                                                                        {service.aeri.map((item, idx) => (
                                                                            <li key={idx} className="flex items-start text-gray-700 text-sm">
                                                                                <div className="w-1.5 h-1.5 bg-[#39c3ef] rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                                                                {item}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}

                                                            {service.requirements.length > 0 && (
                                                                <div className="p-4 rounded-xl border border-gray-200 bg-white">
                                                                    <h4 className="font-bold text-gray-800 mb-3 flex items-center text-sm">
                                                                        <Info className="w-4 h-4 mr-2 text-gray-400" />
                                                                        Requisitos de Trámite
                                                                    </h4>
                                                                    <ul className="space-y-1">
                                                                        {service.requirements.map((req, idx) => (
                                                                            <li key={idx} className="text-gray-600 text-sm pl-6 relative">
                                                                                <span className="absolute left-0 text-gray-300">•</span>
                                                                                {req}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            )}
                                                        </div>

                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* 2. PHARMACIES TAB */}
                    {activeTab === 'pharmacies' && (
                        <div>
                            <div className="mb-6 relative">
                                <input
                                    type="text"
                                    placeholder="Buscar por ciudad o nombre de farmacia..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-[#39c3ef] focus:border-transparent outline-none text-lg"
                                />
                                <Search className="w-6 h-6 text-gray-400 absolute left-4 top-4" />
                            </div>

                            {filteredPharmacies.length === 0 ? (
                                <div className="text-center py-20 text-gray-500">
                                    No se encontraron farmacias con ese criterio.
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredPharmacies.map((pharmacy, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded uppercase">
                                                    {pharmacy.city}
                                                </span>
                                                <div className="p-2 bg-[#39c3ef]/10 rounded-full text-[#39c3ef]">
                                                    <MapPin className="w-4 h-4" />
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-800 mb-2">{pharmacy.name}</h3>
                                            <p className="text-gray-500 text-sm mb-1">{pharmacy.address}</p>
                                            {pharmacy.phone && (
                                                <p className="text-[#39c3ef] font-medium text-sm flex items-center mt-2">
                                                    <Phone className="w-3 h-3 mr-1" />
                                                    {pharmacy.phone}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* 3. OPTICS TAB */}
                    {activeTab === 'optics' && (
                        <div>
                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8 flex items-start space-x-4">
                                <div className="p-3 bg-blue-100 text-primary rounded-full">
                                    <Info className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary text-lg mb-1">Información Importante</h3>
                                    <p className="text-blue-800">
                                        En el interior se trabaja por reintegro hasta un monto de <strong>$5.000</strong>, hasta 2 pares al año.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-6 relative">
                                <input
                                    type="text"
                                    placeholder="Buscar óptica..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-[#39c3ef] focus:border-transparent outline-none text-lg"
                                />
                                <Search className="w-6 h-6 text-gray-400 absolute left-4 top-4" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredOptics.map((optic, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-start space-x-4">
                                        <div className="p-3 bg-[#1e6df9]/10 rounded-full text-[#1e6df9]">
                                            <Glasses className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800">{optic.name}</h3>
                                            <p className="text-gray-500 text-sm mt-1">{optic.address}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </motion.div>

                {/* --- SECCIÓN SALUD Y SEGURIDAD LABORAL --- */}
                <div ref={safetyRef} className="mt-24 pt-12 border-t border-gray-200">

                    <div className="text-center mb-12">
                        <div className="inline-block p-4 rounded-full bg-orange-100 mb-4">
                            <ShieldCheck className="w-10 h-10 text-orange-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Salud y Seguridad Laboral</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Información clave sobre accidentes de trabajo, enfermedades profesionales y normativa vigente (Ley 24557).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8">

                        {/* 1. Definiciones Clave */}
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                            <div className="p-6 bg-orange-50 border-b border-orange-100 flex items-center">
                                <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
                                <h3 className="text-xl font-bold text-gray-900">Conceptos Fundamentales</h3>
                            </div>
                            <div className="p-6 space-y-6">
                                {safetyData.definitions.map((def, idx) => (
                                    <div key={idx} className="bg-gray-50 p-5 rounded-xl">
                                        <h4 className="font-bold text-gray-800 mb-2 text-lg">{def.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{def.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 2. Derechos y Deberes */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {safetyData.rightsAndDuties.map((roleSection, idx) => (
                                <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                                    <h4 className="font-bold text-primary text-center mb-4 uppercase tracking-wider text-sm border-b pb-2">
                                        {roleSection.role}
                                    </h4>
                                    <ul className="space-y-3">
                                        {roleSection.items.map((item, i) => (
                                            <li key={i} className="flex items-start text-sm text-gray-600">
                                                <div className="mt-1.5 mr-2 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* 3. Credencial (Importante) */}
                        <div className="bg-blue-600 rounded-2xl shadow-lg p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <FileCheck className="w-32 h-32" />
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                                <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                                    <Info className="w-8 h-8 text-blue-100" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">Credencial Obligatoria de ART</h3>
                                    <p className="text-blue-100 mb-4 text-lg">{safetyData.important.text}</p>
                                    <div className="bg-white/20 rounded-lg p-4 inline-block">
                                        <span className="font-bold text-white block mb-1 uppercase text-sm tracking-wide">Cómo descargarla:</span>
                                        <p className="text-white font-medium">{safetyData.important.steps}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. Legislación */}
                        <div className="bg-gray-100 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <FileCheck className="w-6 h-6 text-gray-500 mr-2" />
                                Legislación de Interés
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {safetyData.legislation.map((law, idx) => (
                                    <a key={idx} href="#" className="block p-4 bg-[#3dd1f2] rounded-lg shadow-sm hover:shadow-md hover:bg-[#3bc1de] transition-all text-gray-900 font-medium text-sm border-l-4 border-[#0d0d0d]">
                                        {law}
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default HealthPage;
