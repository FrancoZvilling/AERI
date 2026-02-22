import React from 'react';
import { motion } from 'framer-motion';
import {
    UserPlus,
    HeartHandshake,
    Download,
    CheckCircle2,
    ShieldCheck,
    Building2,
    Users
} from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';

const AfiliacionesPage = () => {
    // Fade in up animation variant
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-gray-50 pb-20 overflow-hidden">
            {/* Hero Section */}
            <HeroSection
                title="Sumate a la Familia AERI"
                subtitle="Construimos juntos un futuro mejor para vos y los tuyos. Conocé nuestras opciones de afiliación."
                backgroundColor="#004080"
                overlayOpacity="bg-black/20"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">

                {/* Introducción */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16 border-l-8 border-[#39c3ef] text-center max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-[#39c3ef]/10 rounded-full mb-6 text-[#004080]">
                        <Users className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Por qué afiliarse?</h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Ser parte de AERI significa estar <strong>respaldado</strong>. Te ofrecemos no solo protección gremial, sino también importantes beneficios sociales, opciones de turismo de calidad, coberturas de salud y propuestas culturales para todo tu grupo familiar.
                    </p>
                </motion.div>

                {/* Grid de opciones de afiliación */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Afiliación Sindical Card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeInUp}
                        className="bg-[#004080] rounded-3xl p-1 relative overflow-hidden group shadow-2xl"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e6df9] rounded-full filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#39c3ef] rounded-full filter blur-3xl opacity-30 translate-y-1/4 -translate-x-1/4"></div>

                        <div className="bg-[#004080] border border-[#1e6df9]/30 rounded-[1.4rem] p-8 h-full flex flex-col relative z-10 shadow-inner">
                            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                                <div className="bg-[#1e6df9] p-4 rounded-2xl shadow-lg">
                                    <ShieldCheck className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-white tracking-tight">Afiliación Sindical</h3>
                            </div>

                            <p className="text-blue-100 mb-8 text-lg flex-grow leading-relaxed">
                                Defensa irrestricta de tus derechos laborales, representación paritaria y asesoramiento legal permanente. Es la base de nuestra fuerza conjunta.
                            </p>

                            <ul className="space-y-4 mb-10 text-white/90">
                                {[
                                    "Defensa gremial y asesoría legal",
                                    "Acceso a capacitaciones y cursos",
                                    "Beneficios en turismo y recreación",
                                    "Subsidios por casamiento, nacimiento, etc."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center">
                                        <CheckCircle2 className="w-5 h-5 text-[#39c3ef] mr-3 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="/pdf/FORMULARIO-DE-AFILIACIÓN.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download="FORMULARIO-DE-AFILIACION.pdf"
                                className="mt-auto group/btn flex items-center justify-center w-full bg-[#1e6df9] hover:bg-[#39c3ef] text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-[#1e6df9]/50"
                            >
                                <Download className="w-5 h-5 mr-3 group-hover/btn:-translate-y-1 transition-transform" />
                                Descargar Formulario Sindical
                            </a>
                        </div>
                    </motion.div>

                    {/* Afiliación Social Card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeInUp}
                        className="bg-white rounded-3xl p-1 relative overflow-hidden group shadow-xl border border-gray-100"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#39c3ef] rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00a0e1] rounded-full filter blur-3xl opacity-5 -translate-y-1/4 -translate-x-1/4"></div>

                        <div className="bg-white rounded-[1.4rem] p-8 h-full flex flex-col relative z-10">
                            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                                <div className="bg-[#00a0e1]/10 p-4 rounded-2xl">
                                    <HeartHandshake className="w-8 h-8 text-[#00a0e1]" />
                                </div>
                                <h3 className="text-3xl font-bold text-[#004080] tracking-tight">Afiliación Social</h3>
                            </div>

                            <p className="text-gray-600 mb-8 text-lg flex-grow leading-relaxed">
                                Extiende los beneficios a tu salud y bienestar. Accedé a reintegros, farmacia propia, ópticas y convenios médicos de primer nivel.
                            </p>

                            <ul className="space-y-4 mb-10 text-gray-700">
                                {[
                                    "Cobertura y reintegros médicos",
                                    "Descuentos en farmacias adheridas",
                                    "Convenios y prácticas de alta complejidad",
                                    "Atención en consultorios propios (Sede Central)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center">
                                        <CheckCircle2 className="w-5 h-5 text-[#00a0e1] mr-3 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="/pdf/Formulario-adhesión-a-la-OBRA-SOCIAL.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download="Formulario-adhesion-OBRA-SOCIAL.pdf"
                                className="mt-auto group/btn flex items-center justify-center w-full bg-white border-2 border-[#004080] text-[#004080] hover:bg-[#004080] hover:text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 shadow-sm"
                            >
                                <Download className="w-5 h-5 mr-3 group-hover/btn:-translate-y-1 transition-transform" />
                                Descargar Adhesión Obra Social
                            </a>
                        </div>
                    </motion.div>

                </div>

                {/* Pasos a seguir */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mt-20 border border-[#004080]/10 bg-white rounded-[3rem] p-10 md:p-16 text-[#004080] text-center relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#39c3ef 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                    <div className="relative z-10">
                        <Building2 className="w-16 h-16 text-[#00a0e1] mx-auto mb-6" />
                        <h3 className="text-3xl font-bold mb-10">¿Cómo completar el trámite?</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                            <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#004080] text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shadow-lg border-4 border-white">
                                    1
                                </div>
                                <h4 className="font-bold text-xl mb-3 mt-4 text-[#004080]">Descargar</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">Descargá e imprimí el o los formularios que correspondan (Sindical y/o Social).</p>
                            </div>

                            <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#00a0e1] text-white w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shadow-lg border-4 border-white">
                                    2
                                </div>
                                <h4 className="font-bold text-xl mb-3 mt-4 text-[#004080]">Completar</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">Llená todos los campos requeridos con letra clara, legible y firmá al pie del documento.</p>
                            </div>

                            <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#39c3ef] text-[#004080] w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shadow-lg border-4 border-white">
                                    3
                                </div>
                                <h4 className="font-bold text-xl mb-3 mt-4 text-[#004080]">Entregar</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">Acercale el papel completo a tu delegado de área o entregalo directamente en nuestra Sede Central.</p>
                            </div>

                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default AfiliacionesPage;
