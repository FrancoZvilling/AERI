import React, { useState, useEffect, useMemo } from 'react';
import HeroSection from '../components/ui/HeroSection';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ChevronDown, ChevronUp, User, Users } from 'lucide-react';
import { introContent, mainAuthorities, staffGroups } from '../data/commissionData';
import { electoralIntro, centralBoard, seccionalBoards } from '../data/electoralData';
import { historyIntro, historyTimeline } from '../data/historyData';
import InstitutionalLayout from '../components/layout/InstitutionalLayout'; // Keep for other pages if needed

const InstitutionalPage = ({ title, subtitle, showAuthorities = false, showDocs = false, backgroundImage }) => {

    // Helper boolean checks
    const isCommissionPage = showAuthorities && !showDocs && title === "Comisión Directiva";
    const isElectoralPage = title === "Junta Electoral";
    const isHistoryPage = title === "Nuestra Historia";

    if (!isCommissionPage && !isElectoralPage && !isHistoryPage) {
        // Fallback to legacy layout for Library pages or others
        return (
            <InstitutionalLayout
                title={title}
                subtitle={subtitle}
                authorities={[]}
                documents={showDocs ? [] : []}
                backgroundImage={backgroundImage}
            />
        );
    }

    // --- HISTORY PAGE SPECIFIC LOGIC ---
    if (isHistoryPage) {
        return (
            <div className="bg-gray-50 pb-20">
                <HeroSection
                    title={title}
                    subtitle={subtitle}
                    backgroundImage={backgroundImage || "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop"} // Vintage/History vibe
                />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">

                    {/* Intro Card - History */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 text-center"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{historyIntro.title}</h2>
                        <h3 className="text-xl text-primary font-medium mb-6">{historyIntro.subtitle}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {historyIntro.description}
                        </p>
                    </motion.div>

                    {/* Timeline Container */}
                    <div className="relative border-l-4 border-gray-200 ml-4 md:ml-10 space-y-16 py-8">
                        {historyTimeline.map((item, index) => {
                            const Icon = item.icon;
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative pl-8 md:pl-16"
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute -left-[14px] top-0 flex items-center justify-center w-7 h-7 bg-primary rounded-full border-4 border-white shadow-md">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                    </div>

                                    {/* Content Card */}
                                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                        {/* Header with Year */}
                                        <div className="bg-[#004080] px-6 py-4 flex items-center justify-between">
                                            <div className="flex items-center text-white">
                                                <Icon className="w-6 h-6 mr-3 opacity-90" />
                                                <span className="font-bold text-lg">{item.year}</span>
                                            </div>
                                        </div>

                                        <div className="p-6 md:p-8">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                                {item.content}
                                            </p>

                                            {item.highlight && (
                                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                                                    <p className="text-yellow-800 font-medium italic flex items-start">
                                                        <span className="text-2xl mr-2 leading-none">“</span>
                                                        {item.highlight}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="text-center mt-12 text-gray-400 italic">
                        SECRETARIA DE PRENSA DE AERI. Febrero 2019.
                    </div>

                </div>
            </div>
        );
    }

    // --- COMMISSION PAGE SPECIFIC LOGIC ---
    const [currentSlide, setCurrentSlide] = useState(0);
    const [expandedGroup, setExpandedGroup] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint is 1024
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setCurrentSlide(0);
    }, [isMobile]);

    const orderedAuthorities = useMemo(() => {
        if (!isMobile) return mainAuthorities;

        // En PC: 0=ProSec, 1=Adjunto, 2=Gremial, 3=General
        // En Móvil se quiere: General(3), Gremial(2), Adjunto(1), ProSec(0)
        const proSecGremial = mainAuthorities[0];
        const secAdjunto = mainAuthorities[1];
        const secGremial = mainAuthorities[2];
        const secGeneral = mainAuthorities[3];
        const rest = mainAuthorities.slice(4);

        return [
            secGeneral,
            secGremial,
            secAdjunto,
            proSecGremial,
            ...rest
        ];
    }, [isMobile]);

    const itemsPerSlide = isMobile ? 1 : 4;
    const totalSlides = Math.ceil(orderedAuthorities.length / itemsPerSlide);

    // Carousel Logic
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const visibleAuthorities = orderedAuthorities.slice(currentSlide * itemsPerSlide, currentSlide * itemsPerSlide + itemsPerSlide);

    // Helper to get role badge styles
    const getRoleBadgeStyle = (role) => {
        const lowerRole = role.toLowerCase();
        if (lowerRole.includes('presidente')) return 'bg-primary text-white shadow-sm';
        if (lowerRole.includes('secretario')) return 'bg-[#1e6df9] text-white shadow-sm';
        return 'bg-blue-50 text-blue-700 border border-blue-100';
    };

    if (isElectoralPage) {
        const president = centralBoard.members.find(m => m.role.toLowerCase().includes('presidente'));
        const secretary = centralBoard.members.find(m => m.role.toLowerCase().includes('secretario'));
        const vocales = centralBoard.members.filter(m => m.role.toLowerCase().includes('vocal'));
        return (
            <div className="bg-gray-50 pb-20">
                <HeroSection
                    title={title}
                    subtitle={subtitle}
                    backgroundImage={backgroundImage || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop"} // Fixed: Working Business/Planning Image
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">

                    {/* Intro Card - Electoral */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border-t-8 border-[#39c3ef] relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Users className="w-64 h-64 text-[#39c3ef]" />
                        </div>
                        <div className="relative z-10 text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">{electoralIntro.title}</h2>
                            <h3 className="text-xl text-primary font-medium mb-6">{electoralIntro.subtitle}</h3>
                            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                                {electoralIntro.description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Central Board Highlight */}
                    <div className="mb-16">
                        <div className="text-center mb-8 sm:mb-10">
                            <span className="text-xs font-bold text-[#0088cc] uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100/80 inline-block mb-3">
                                Conducción Electoral Central
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 flex items-center justify-center gap-3 tracking-tight">
                                <span className="w-8 sm:w-12 h-1 bg-primary rounded-full"></span>
                                {centralBoard.title}
                                <span className="w-8 sm:w-12 h-1 bg-primary rounded-full"></span>
                            </h2>
                        </div>

                        {/* Executive Tier: Presidente & Secretario */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-6">
                            {president && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-gradient-to-br from-white via-white to-blue-50/40 rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl border-2 border-primary/20 relative overflow-hidden flex items-center gap-4 sm:gap-5 group"
                                >
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform">
                                        <User className="w-7 h-7 sm:w-8 sm:h-8" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary text-white shadow-sm mb-1.5">
                                            {president.role}
                                        </span>
                                        <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 group-hover:text-primary transition-colors truncate">
                                            {president.name}
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-0.5">Presidencia de la Junta</p>
                                    </div>
                                </motion.div>
                            )}

                            {secretary && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.2 }}
                                    className="bg-gradient-to-br from-white via-white to-sky-50/40 rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl border-2 border-[#0088cc]/20 relative overflow-hidden flex items-center gap-4 sm:gap-5 group"
                                >
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0088cc] text-white flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition-transform">
                                        <User className="w-7 h-7 sm:w-8 sm:h-8" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className="inline-block text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0088cc] text-white shadow-sm mb-1.5">
                                            {secretary.role}
                                        </span>
                                        <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 group-hover:text-[#0088cc] transition-colors truncate">
                                            {secretary.name}
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-0.5">Secretaría y Actas Electorales</p>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Vocales Tier: 3 Vocales en balance simétrico */}
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
                            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#0088cc]"></span>
                                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-700">
                                        Cuerpo de Vocales
                                    </h3>
                                </div>
                                <span className="text-xs text-gray-400 font-medium">3 Integrantes</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                                {vocales.map((vocal, vIdx) => (
                                    <motion.div
                                        key={vIdx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: vIdx * 0.08 }}
                                        whileHover={{ y: -3 }}
                                        className="flex items-center p-4 sm:p-5 rounded-xl bg-gray-50/70 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-md transition-all group"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 text-gray-400 group-hover:bg-[#0088cc] group-hover:text-white group-hover:border-[#0088cc] flex items-center justify-center transition-colors duration-200 mr-3.5 shrink-0 shadow-sm">
                                            <User className="w-5 h-5" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100/70 inline-block mb-1">
                                                {vocal.role}
                                            </span>
                                            <h4 className={`font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug ${
                                                vocal.name.length > 20
                                                    ? 'text-[12px] min-[390px]:text-xs sm:text-sm md:text-base'
                                                    : 'text-sm sm:text-base'
                                            }`}>
                                                {vocal.name}
                                            </h4>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Regional Boards Grid */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-1.5 h-8 bg-[#39c3ef] rounded-full"></span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Comisiones Seccionales</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {seccionalBoards.map((board, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.08 }}
                                    className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-gray-200 hover:border-primary group"
                                >
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-5 flex items-center min-h-[50px]">
                                        <div className="p-2.5 bg-blue-50 text-primary rounded-xl mr-3 group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                                            <Users className="w-5 h-5" />
                                        </div>
                                        <span className="leading-snug">{board.title}</span>
                                    </h3>
                                    <div className="space-y-3.5">
                                        {board.members.map((member, mIdx) => {
                                            const isPending = member.name.toLowerCase().includes('recambio');
                                            return (
                                                <div key={mIdx} className="flex flex-col border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className={`text-[10px] font-bold uppercase py-0.5 px-2 rounded-full ${getRoleBadgeStyle(member.role)}`}>
                                                            {member.role}
                                                        </span>
                                                    </div>
                                                    {isPending ? (
                                                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-700 bg-amber-50/90 border border-amber-200/80 px-2.5 py-1 rounded-md w-fit italic mt-0.5">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                                                            {member.name}
                                                        </span>
                                                    ) : (
                                                        <span className="font-semibold text-gray-800 text-sm pl-1">{member.name}</span>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    // --- COMMISSION PAGE SPECIFIC RENDER ---
    return (
        <div className="bg-gray-50 pb-20">
            <HeroSection
                title={title}
                subtitle={subtitle}
                backgroundColor="#004080"
                overlayOpacity="bg-black/10"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">

                {/* Intro Card - Commission */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{introContent.title}</h2>
                        <h3 className="text-xl text-primary font-medium">{introContent.subtitle}</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            {introContent.paragraphs.slice(0, 3).map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                            {introContent.paragraphs.slice(3).map((p, i) => (
                                <p key={i} className="mb-4 text-gray-600 italic">"{p}"</p>
                            ))}
                            <ul className="mt-8 space-y-3">
                                {introContent.highlights.map((h, i) => (
                                    <li key={i} className="flex items-center font-bold text-[#39c3ef]">
                                        <div className="w-2 h-2 bg-[#39c3ef] rounded-full mr-3" />
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* --- SECCIÓN 1: CARRUSEL DE AUTORIDADES --- */}
                <div className="mb-24">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                            <Users className="w-8 h-8 mr-3 text-primary" />
                            Comisión Directiva
                        </h2>
                        <div className="flex space-x-2">
                            <button onClick={prevSlide} className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 text-primary transition-colors">
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button onClick={nextSlide} className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 text-primary transition-colors">
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <AnimatePresence mode='wait'>
                            {visibleAuthorities.map((auth, idx) => (
                                <motion.div
                                    key={auth.name} // Use name as key to ensure animation on change
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
                                >
                                    <div className="h-64 bg-gray-100 relative overflow-hidden group-hover:bg-gray-200 transition-colors duration-300">
                                        {auth.image ? (
                                            <img
                                                src={auth.image}
                                                alt={auth.name}
                                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <div className="text-gray-300 font-bold text-lg uppercase tracking-widest border-2 border-dashed border-gray-300 px-6 py-3 rounded-lg flex flex-col items-center gap-2">
                                                    <User className="w-8 h-8 opacity-50" />
                                                    <span>Foto</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-5 text-center">
                                        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 h-12 flex items-center justify-center">
                                            {auth.name}
                                        </h3>
                                        <div className="inline-block px-3 py-1 bg-[#1e6df9] text-white text-xs font-bold uppercase tracking-wide rounded-full text-center">
                                            {auth.role}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* --- SECCIÓN 2: LISTADO COMPLETO (ACORDEÓN) --- */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nómina de cuerpos orgánicos</h2>

                    <div className="space-y-4">
                        {staffGroups.map((group, idx) => {
                            const isOpen = expandedGroup === idx;
                            return (
                                <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                    <button
                                        onClick={() => setExpandedGroup(isOpen ? null : idx)}
                                        className={`w-full flex items-center justify-between p-6 transition-colors ${isOpen ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                                    >
                                        <div className="flex items-center">
                                            <div className={`p-2 rounded-lg mr-4 ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                                                <Users className="w-5 h-5" />
                                            </div>
                                            <h3 className={`text-lg font-bold text-left ${isOpen ? 'text-primary' : 'text-gray-900'}`}>{group.title}</h3>
                                        </div>
                                        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="border-t border-gray-100"
                                            >
                                                <div className="p-6 bg-gray-50/30">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {group.members.map((member, mIdx) => (
                                                            <div key={mIdx} className="flex items-start p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
                                                                <User className="w-5 h-5 text-[#39c3ef] mt-1 mr-3 flex-shrink-0" />
                                                                <div>
                                                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">{member.role}</div>
                                                                    <div className="font-medium text-gray-800">{member.name}</div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InstitutionalPage;
