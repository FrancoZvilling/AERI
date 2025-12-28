import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import { motion } from 'framer-motion';
import {
    BookOpen,
    Lightbulb,
    Users,
    Target,
    Palette,
    GraduationCap,
    ArrowRight
} from 'lucide-react';

const CulturePage = () => {

    const specifics = [
        "Satisfacer las necesidades presentes y futuras incentivando la construcción del conocimiento.",
        "Elaborar un marco conceptual que otorgue herramientas de trabajo al delegado.",
        "Consolidar propuestas ajustadas a los tiempos actuales de mejora continua.",
        "Promover actividades y espacios que contribuyan al trabajo en equipo."
    ];

    return (
        <div className="bg-gray-50 pb-20">
            <HeroSection
                title="Secretaría de Cultura y Capacitación"
                subtitle="Formación continua y desarrollo cultural para fortalecer nuestros derechos."
                backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">

                {/* Intro Mission Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-xl p-8 mb-16 border-l-8 border-yellow-500"
                >
                    <div className="flex items-start">
                        <div className="hidden sm:flex flex-shrink-0 mr-6">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                                <Lightbulb className="w-8 h-8" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Formar para defender</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Desde la Secretaría de Cultura y Capacitación, avanzamos en temáticas de indispensable abordaje y permanente actualización. Trabajamos para <strong>conocer, formar y transmitir conocimientos</strong> que nos permitan mejores servicios, más derechos y jerarquizar el desempeño de nuestros delegados en la férrea defensa de los trabajadores.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Interactive Buttons Section (Area Selection) */}
                <section className="mb-24">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Explorá nuestras Áreas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                        {/* Botón Cultura */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer shadow-lg"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-700 opacity-90 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-center items-center text-white p-6 text-center">
                                <Palette className="w-16 h-16 mb-4 text-purple-200 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-3xl font-bold mb-2">Cultura</h3>
                                <p className="text-purple-100 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                                    Expresión, arte e identidad
                                </p>
                                <span className="mt-6 inline-flex items-center text-sm font-semibold bg-white/20 px-4 py-2 rounded-full">
                                    Próximamente <ArrowRight className="w-4 h-4 ml-2" />
                                </span>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop"
                                alt="Cultura"
                                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                            />
                        </motion.div>

                        {/* Botón Capacitación */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer shadow-lg"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 opacity-90 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-center items-center text-white p-6 text-center">
                                <GraduationCap className="w-16 h-16 mb-4 text-blue-200 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-3xl font-bold mb-2">Capacitación</h3>
                                <p className="text-blue-100 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                                    Formación y herramientas profesionales
                                </p>
                                <span className="mt-6 inline-flex items-center text-sm font-semibold bg-white/20 px-4 py-2 rounded-full">
                                    Próximamente <ArrowRight className="w-4 h-4 ml-2" />
                                </span>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
                                alt="Capacitación"
                                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                            />
                        </motion.div>

                    </div>
                </section>

                {/* Objectives Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
                    <div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-yellow-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Objetivo General</h3>
                            <p className="text-gray-700 text-lg leading-relaxed relative z-10">
                                Favorecer la realización de una amplia propuesta de capacitación que beneficie a los trabajadores, a los compañeros con responsabilidad gremial y a los ámbitos laborales donde se prestan servicios.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <Target className="w-6 h-6 mr-3 text-yellow-600" />
                            Objetivos Específicos
                        </h3>
                        <div className="space-y-4">
                            {specifics.map((obj, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mt-1 mr-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                    </div>
                                    <p className="text-gray-700">{obj}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Imprint/Methodology */}
                <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <Users className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
                        <h3 className="text-2xl font-bold mb-4">Nuestra Impronta: Participación Activa</h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Propiciamos la participación activa de destinatarios, compañeros y delegados. Creemos firmemente que esto favorece la <strong>reflexión</strong>, la identificación de problemáticas y el <strong>fortalecimiento de capacidades y competencias</strong> de todos los trabajadores.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default CulturePage;
