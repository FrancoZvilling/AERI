import React, { useState } from 'react';
import HeroSection from '../components/ui/HeroSection';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BookOpen,
    Users,
    School,
    ShieldPlus,
    Briefcase,
    User,
    Phone,
    Mail,
    ArrowRight,
    GraduationCap,
    ArrowLeft,
    Maximize2,
    X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import IdeaWall from '../components/culture/IdeaWall';
import flyerTecnicatura from '../assets/TECNICATURA 2026.png';

const CultureDetailsPage = () => {
    const [isFlyerOpen, setIsFlyerOpen] = useState(false);

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.5 }
        })
    };

    return (
        <div className="bg-gray-50 pb-24">
            <HeroSection
                title="Cultura y Capacitación"
                subtitle="Un espacio integrado para el desarrollo cultural y la formación profesional de nuestros afiliados."
                backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 space-y-24">

                {/* Back Button */}
                <div className="absolute -top-16 left-4 z-30">
                    <Link to="/secretarias/cultura" className="inline-flex items-center text-white/90 hover:text-white transition-colors font-medium">
                        <ArrowLeft className="w-5 h-5 mr-2" /> Volver
                    </Link>
                </div>

                {/* 1. Misión / Introducción */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={variants}
                    className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-l-8 border-yellow-500 flex flex-col md:flex-row gap-10 items-center"
                >
                    <div className="flex-shrink-0 bg-yellow-100 p-6 rounded-full text-yellow-600">
                        <BookOpen className="w-12 h-12" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Aprendizaje Continuo</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Desde la Secretaría buscamos promover una <strong>cultura de aprendizaje continuo</strong>, asegurando que los contenidos sean aplicables a situaciones concretas de trabajo, tanto en el ámbito laboral como sindical.
                            Nuestro objetivo es brindar herramientas reales para el crecimiento de cada compañero.
                        </p>
                    </div>
                </motion.div>

                {/* 2. Modalidades */}
                <section>
                    <div className="text-center mb-12">
                        <span className="text-yellow-600 font-bold tracking-wider uppercase text-sm">Nuestra Metodología</span>
                        <h2 className="text-4xl font-bold text-gray-900 mt-2">Modalidades de Formación</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Directa */}
                        <motion.div
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={1}
                            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-bl-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-[#023e73] text-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                                    <Users className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Modalidad Directa</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Cursos y talleres propios e internos. Lo más valioso es que sus docentes y capacitadores son <strong>propios compañeros y compañeras de trabajo</strong>, quienes desinteresadamente comparten su experiencia y conocimiento con el conjunto de trabajadores.
                                </p>
                            </div>
                        </motion.div>

                        {/* Asociada */}
                        <motion.div
                            variants={variants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={2}
                            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-50 rounded-bl-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-yellow-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                                    <School className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Modalidad Asociada</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Alianzas estratégicas con instituciones educativas de prestigio:
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <ArrowRight className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
                                        <span className="text-gray-700"><strong>Instituto Superior de Formación Técnica n° 213</strong> (Ensenada - SOSBA): Tecnicaturas para afiliados.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <ArrowRight className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
                                        <span className="text-gray-700"><strong>IPAP:</strong> Cursos técnicos específicos (próximamente).</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 3. Ejes de Capacitación */}
                <section className="bg-[#023e73] rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative z-10 text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Ejes de Capacitación</h2>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto">Pilares fundamentales sobre los que construimos nuestra oferta formativa.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Eje 1: Técnico Profesional */}
                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                            <GraduationCap className="w-12 h-12 text-yellow-400 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Formación Técnico-Profesional</h3>
                            <ul className="space-y-4 text-gray-200 mb-6">
                                <li className="flex items-start">
                                    <span className="bg-yellow-500 w-2 h-2 rounded-full mt-2 mr-3 shrink-0"></span>
                                    <span>Curso sobre Inteligencia Artificial en la Administración Pública.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-yellow-500 w-2 h-2 rounded-full mt-2 mr-3 shrink-0"></span>
                                    <span>Taller "Liderazgo y gestión efectiva de equipos en contextos complejos" (Nov 2025).</span>
                                </li>
                            </ul>

                            {/* Flyer Card Highlights */}
                            <div
                                onClick={() => setIsFlyerOpen(true)}
                                className="mt-6 bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer group relative"
                            >
                                <div className="absolute top-3 right-3 z-10 bg-black/50 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Maximize2 className="w-4 h-4 text-white" />
                                </div>
                                <div className="relative h-48 bg-gray-200">
                                    <img
                                        src={flyerTecnicatura}
                                        alt="Tecnicatura Superior en Administración Pública 2026"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                                        <span className="text-yellow-400 text-xs font-bold uppercase mb-1">Ciclo Lectivo 2026</span>
                                        <h4 className="text-white font-bold text-sm leading-tight">Tecnicatura Superior en Administración Pública</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Eje 2: Formación Sindical */}
                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                            <ShieldPlus className="w-12 h-12 text-yellow-400 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Formación Sindical</h3>
                            <div className="space-y-6">
                                <div className="bg-black/20 p-4 rounded-xl">
                                    <span className="text-xs font-bold text-yellow-400 uppercase block mb-1">Mayo 2025</span>
                                    <p className="text-white font-medium">Capacitación sobre “Servicios Sociales y Actualización de Prestaciones” en sede AERI.</p>
                                </div>
                                <div className="bg-black/20 p-4 rounded-xl">
                                    <span className="text-xs font-bold text-yellow-400 uppercase block mb-1">Reciente</span>
                                    <p className="text-white font-medium">Ciclo de Formación para Representantes Sindicales.</p>
                                </div>
                            </div>
                        </div>

                        {/* Eje 3: Salud y Seguridad */}
                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                            <Briefcase className="w-12 h-12 text-yellow-400 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Salud y Seguridad</h3>
                            <ul className="space-y-4 text-gray-200">
                                <li className="flex items-start">
                                    <span className="bg-green-400 w-2 h-2 rounded-full mt-2 mr-3 shrink-0"></span>
                                    <span>Primera Edición del Curso “RCP y Uso del DEA en Adultos” en nuestras instalaciones.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-green-400 w-2 h-2 rounded-full mt-2 mr-3 shrink-0"></span>
                                    <span>Finalizó el Curso–Taller “Cuidado del Ambiente y Desarrollo Sostenible”.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 4. Muro de Ideas Interactivo */}
                <IdeaWall />

                {/* 5. Contacto */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
                    <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contacto</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                ¿Tenés consultas sobre las inscripciones o cursos? Contactate directamente con la secretaría.
                            </p>

                            <div className="flex items-center space-x-4 mb-4">
                                <div className="bg-yellow-100 p-3 rounded-full">
                                    <User className="w-6 h-6 text-yellow-600" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Secretario</p>
                                    <p className="font-bold text-gray-900 text-lg">Ezequiel Héctor Imanoni</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 w-full space-y-4">
                            <a href="mailto:culturaycapacitacion@aeri.org.ar" className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group cursor-pointer border border-gray-100">
                                <Mail className="w-6 h-6 text-gray-400 group-hover:text-yellow-600 mr-4" />
                                <span className="text-gray-700 font-medium group-hover:text-gray-900">culturaycapacitacion@aeri.org.ar</span>
                            </a>
                            <a href="tel:02214270973" className="flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group cursor-pointer border border-gray-100">
                                <Phone className="w-6 h-6 text-gray-400 group-hover:text-yellow-600 mr-4" />
                                <span className="text-gray-700 font-medium group-hover:text-gray-900">0221 4270973 (int. 858)</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Flyer Modal */}
            <AnimatePresence>
                {isFlyerOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsFlyerOpen(false)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative z-10 max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
                        >
                            <button
                                onClick={() => setIsFlyerOpen(false)}
                                className="absolute -top-12 right-0 md:-right-12 text-white/80 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
                            >
                                <X className="w-8 h-8" />
                            </button>
                            <img
                                src={flyerTecnicatura}
                                alt="Flyer Ampliado"
                                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CultureDetailsPage;
