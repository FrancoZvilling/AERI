import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import { motion } from 'framer-motion';
import {
    Megaphone,
    Globe,
    Share2,
    Monitor,
    PenTool,
    Cast,
    ArrowRight,
    Wifi
} from 'lucide-react';

const PressPage = () => {

    const responsibilities = [
        {
            title: "Gestión Web",
            desc: "Administración y actualización constante del sitio oficial.",
            icon: Monitor,
            color: "text-[#1e6df9]",
            bg: "bg-[#1e6df9]/10"
        },
        {
            title: "Redes Sociales",
            desc: "Manejo estratégico de Facebook, Instagram y YouTube.",
            icon: Share2,
            color: "text-[#00a0e1]",
            bg: "bg-[#00a0e1]/10"
        },
        {
            title: "Material de Difusión",
            desc: "Diseño y elaboración de cartelería, afiches y piezas digitales.",
            icon: PenTool,
            color: "text-[#39c3ef]",
            bg: "bg-[#39c3ef]/10"
        }
    ];

    return (
        <div className="bg-gray-50 pb-20">
            <HeroSection
                title="Secretaría de Prensa y Propaganda"
                subtitle="La voz de nuestra organización. Comunicando acciones, conectando afiliados."
                backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2000&auto=format&fit=crop" // News/Media/Tech vibe
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">

                {/* Intro Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-xl p-8 mb-16 border-t-8 border-[#1e6df9] flex flex-col md:flex-row items-center gap-8"
                >
                    <div className="flex-grow">
                        <h2 className="text-2xl font-bold text-[#0d0d0d] mb-4 flex items-center">
                            <Cast className="w-6 h-6 mr-3 text-[#1e6df9]" />
                            Nuestra Misión
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            <strong>Difundir el trabajo</strong> de nuestra organización sindical, <strong>informar cada avance</strong> y sostener una <strong>comunicación clara y directa</strong> con nuestras afiliadas y afiliados y con la comunidad
                        </p>
                    </div>
                    <div className="flex-shrink-0 bg-[#9bdaf2]/20 p-6 rounded-full">
                        <Wifi className="w-12 h-12 text-[#1e6df9] animate-pulse" />
                    </div>
                </motion.div>

                {/* News Buttons Section */}
                <section className="mb-24">
                    <h2 className="text-3xl font-bold text-center text-[#0d0d0d] mb-12">Centro de Noticias</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        {/* Noticias Sindicales */}
                        <motion.div
                            whileHover={{ scale: 1.02, rotate: -1 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer shadow-xl border-4 border-transparent hover:border-[#39c3ef] transition-all"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#1e6df9]/80 to-transparent z-10 flex flex-col justify-end p-8">
                                <Megaphone className="w-12 h-12 text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-3xl font-bold text-white mb-2">Noticias Sindicales</h3>
                                <p className="text-[#9bdaf2] mb-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all transform translate-y-4 md:group-hover:translate-y-0 duration-300">
                                    Novedades gremiales, acuerdos y lucha sindical.
                                </p>
                                <span className="inline-flex items-center text-sm font-bold text-white uppercase tracking-wider">
                                    Ver Sección <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                                </span>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop"
                                alt="Noticias Sindicales"
                                className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                            />
                        </motion.div>

                        {/* Noticias Generales */}
                        <motion.div
                            whileHover={{ scale: 1.02, rotate: 1 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer shadow-xl border-4 border-transparent hover:border-[#3dd1f2] transition-all"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#00a0e1]/80 to-transparent z-10 flex flex-col justify-end p-8">
                                <Globe className="w-12 h-12 text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-3xl font-bold text-white mb-2">Noticias Generales</h3>
                                <p className="text-[#9bdaf2] mb-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all transform translate-y-4 md:group-hover:translate-y-0 duration-300">
                                    Información de interés general y actualidad.
                                </p>
                                <span className="inline-flex items-center text-sm font-bold text-white uppercase tracking-wider">
                                    Ver Sección <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                                </span>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=800&auto=format&fit=crop"
                                alt="Noticias Generales"
                                className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                            />
                        </motion.div>

                    </div>
                </section>

                {/* Strategy Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">

                    {/* Nuestra identidad */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#1e6df9]">
                        <h3 className="text-xl font-bold text-[#0d0d0d] mb-4">Nuestra identidad</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Fortalecemos la identidad de AERI como sindicato de las y los trabajadores de ARBA y del Ministerio de Economía, con una comunicación que expresa presencia gremial y trabajo colectivo.
                        </p>
                    </div>

                    {/* Comunicar para fortalecer */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#00a0e1]">
                        <h3 className="text-xl font-bold text-[#0d0d0d] mb-4">Comunicar para fortalecer</h3>
                        <p className="text-gray-600 leading-relaxed">
                            La difusión clara y permanente de nuestras acciones es parte del trabajo gremial. Informar es una forma de acompañar, sostener reclamos y fortalecer el vínculo con nuestras afiliadas y afiliados.
                        </p>
                    </div>

                </div>

                {/* Responsibilities Section */}
                <section className="bg-gray-100 rounded-3xl p-10 md:p-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0d0d0d] mb-4">Nuestras Responsabilidades</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Coordinamos y administramos integralmente la imagen institucional en todos los canales.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {responsibilities.map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
                            >
                                <div className={`w-16 h-16 mx-auto ${item.bg} ${item.color} rounded-full flex items-center justify-center mb-6`}>
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-lg font-bold text-[#0d0d0d] mb-3">{item.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default PressPage;
