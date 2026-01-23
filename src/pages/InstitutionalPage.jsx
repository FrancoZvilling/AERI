import React, { useState } from 'react';
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

    // Carousel Logic
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(mainAuthorities.length / 4));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + Math.ceil(mainAuthorities.length / 4)) % Math.ceil(mainAuthorities.length / 4));
    };

    const visibleAuthorities = mainAuthorities.slice(currentSlide * 4, currentSlide * 4 + 4);

    // Helper to get role badge styles
    const getRoleBadgeStyle = (role) => {
        const lowerRole = role.toLowerCase();
        if (lowerRole.includes('presidente')) return 'bg-primary text-white shadow-sm';
        if (lowerRole.includes('secretario')) return 'bg-[#1e6df9] text-white shadow-sm';
        return 'bg-blue-50 text-blue-700 border border-blue-100';
    };

    if (isElectoralPage) {
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
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
                                <span className="w-12 h-1 bg-primary rounded-full"></span>
                                {centralBoard.title}
                                <span className="w-12 h-1 bg-primary rounded-full"></span>
                            </h2>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {centralBoard.members.map((member, idx) => (
                                <div key={idx} className="flex items-start group">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 transition-colors duration-300 ${member.role.toLowerCase().includes('presidente') ? 'bg-primary text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary'}`}>
                                        <User className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className={`text-xs font-bold uppercase tracking-wider mb-1 w-max px-2 py-0.5 rounded ${getRoleBadgeStyle(member.role)}`}>
                                            {member.role}
                                        </div>
                                        <div className="font-bold text-gray-800 text-lg mt-1">{member.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Regional Boards Grid */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-[#39c3ef] pl-4">Comisiones Seccionales</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {seccionalBoards.map((board, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-gray-200 hover:border-primary group"
                                >
                                    <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center min-h-[56px]">
                                        <div className="p-2 bg-blue-50 text-primary rounded-lg mr-3 group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Users className="w-5 h-5" />
                                        </div>
                                        {board.title}
                                    </h3>
                                    <div className="space-y-4">
                                        {board.members.map((member, mIdx) => (
                                            <div key={mIdx} className="flex flex-col border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                                                <div className="flex justify-between items-center mb-1">
                                                    <span className={`text-[10px] font-bold uppercase py-0.5 px-2 rounded-full ${getRoleBadgeStyle(member.role)}`}>
                                                        {member.role}
                                                    </span>
                                                </div>
                                                <span className="font-medium text-gray-700 pl-1">{member.name}</span>
                                            </div>
                                        ))}
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
                backgroundImage="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                                    <div className="h-64 bg-gray-100 flex items-center justify-center relative group-hover:bg-gray-200 transition-colors duration-300">
                                        <div className="text-gray-300 font-bold text-lg uppercase tracking-widest border-2 border-dashed border-gray-300 px-6 py-3 rounded-lg flex flex-col items-center gap-2">
                                            <User className="w-8 h-8 opacity-50" />
                                            <span>Foto</span>
                                        </div>
                                    </div>
                                    <div className="p-5 text-center">
                                        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2 h-12 flex items-center justify-center">
                                            {auth.name}
                                        </h3>
                                        <div className="inline-block px-3 py-1 bg-[#1e6df9] text-white text-xs font-bold uppercase tracking-wide rounded-full">
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
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nómina Completa de Personal</h2>

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
