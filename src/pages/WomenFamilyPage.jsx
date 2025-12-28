import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import { motion } from 'framer-motion';
import {
    Users,
    Heart,
    ShieldCheck,
    Scale,
    MessageCircle,
    BookOpen,
    Calendar,
    MapPin,
    Target
} from 'lucide-react';

const WomenFamilyPage = () => {

    const objectives = [
        "Fortalecer la participación de las compañeras en nuestra organización.",
        "Informar y capacitar sobre los derechos existentes con enfoque de igualdad.",
        "Lograr comunicación e intercambio con otras secretarías de gremios hermanos.",
        "Desarrollar un diagnóstico de la participación y representación femenina.",
        "Promover mejoras legislativas y condiciones socio-laborales."
    ];

    const agendaItems = [
        { title: "Discriminación Laboral", icon: Scale, color: "text-orange-500", bg: "bg-orange-50" },
        { title: "Igualdad de Género", icon: Users, color: "text-pink-500", bg: "bg-pink-50" },
        { title: "Violencia", subtitle: "Laboral, familiar y social", icon: ShieldCheck, color: "text-red-500", bg: "bg-red-50" },
        { title: "Salud", subtitle: "Derechos sexuales y reproductivos", icon: Heart, color: "text-rose-500", bg: "bg-rose-50" },
        { title: "Integración", subtitle: "Mujer y sindicalismo", icon: Target, color: "text-purple-500", bg: "bg-purple-50" },
    ];

    const pillars = [
        { title: "Compromiso", icon: Heart, desc: "Sensibilización constante." },
        { title: "Comunicación", icon: MessageCircle, desc: "Diálogo fluido y abierto." },
        { title: "Formación", icon: BookOpen, desc: "Capacitación continua." }
    ];

    return (
        <div className="bg-gray-50 pb-20">
            <HeroSection
                title="Secretaría de la Mujer y la Familia"
                subtitle="Género e Igualdad. Defendiendo los derechos y oportunidades de todas las trabajadoras."
                backgroundImage="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2000&auto=format&fit=crop"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">

                {/* Intro Mission Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-xl p-8 mb-16 border-l-8 border-pink-500"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Desde la Secretaría de la Mujer estamos en contacto directo con los trabajadores, sus necesidades y las demandas propias del género. Facilitamos la interlocución y participación del plantel de delegadas, defendiendo así los derechos y deberes de todas las trabajadoras, cuyas necesidades e intereses deben ser atendidos en <strong>igualdad de oportunidades</strong>.
                    </p>
                </motion.div>

                {/* Main Objective Banner */}
                <section className="mb-20">
                    <div className="bg-gradient-to-r from-pink-600 to-purple-700 rounded-3xl p-10 text-white text-center shadow-lg">
                        <Heart className="w-12 h-12 mx-auto mb-4 text-pink-200" />
                        <h2 className="text-3xl font-bold mb-4">Objetivo General</h2>
                        <p className="text-xl max-w-4xl mx-auto font-light leading-relaxed">
                            "Contribuir a la plena igualdad de oportunidades fomentando el desarrollo de las perspectivas de género. Trabajar e incidir activamente en los procesos que beneficien el desarrollo integral de las trabajadoras."
                        </p>
                    </div>
                </section>

                {/* Specific Objectives & Agenda Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

                    {/* Specific Objectives */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                            <Target className="w-6 h-6 mr-2 text-pink-600" />
                            Objetivos Específicos
                        </h3>
                        <div className="space-y-4">
                            {objectives.map((obj, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-start hover:shadow-md transition-shadow"
                                >
                                    <div className="min-w-[24px] h-6 flex items-center justify-center bg-pink-100 text-pink-600 rounded-full text-xs font-bold mr-4 mt-0.5">
                                        {idx + 1}
                                    </div>
                                    <p className="text-gray-700">{obj}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Agenda Inclusiva */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                            <Users className="w-6 h-6 mr-2 text-purple-600" />
                            Agenda Inclusiva
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {agendaItems.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-l-transparent hover:border-l-pink-500 transition-all"
                                    >
                                        <div className={`w-10 h-10 rounded-lg ${item.bg} ${item.color} flex items-center justify-center mb-3`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                                        {item.subtitle && (
                                            <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Pillars Section */}
                <section className="mb-20">
                    <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Nuestros Pilares de Acción</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pillars.map((pillar, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:-translate-y-2 transition-transform duration-300 border-t-4 border-pink-500"
                            >
                                <div className="w-16 h-16 mx-auto bg-pink-50 text-pink-600 rounded-full flex items-center justify-center mb-6">
                                    <pillar.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold mb-2">{pillar.title}</h4>
                                <p className="text-gray-600">{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Facilities & Contact Section */}
                <section className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/2 p-10 bg-gray-50 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Espacio Físico Propio</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Contamos con un espacio equipado y adecuado a los fines de la secretaría, visualizando el compromiso del gremio e incrementando la confianza con los afiliados. Un lugar para construir una sociedad con justicia social y democracia.
                        </p>
                        <div className="flex items-center space-x-2 text-pink-600 font-semibold">
                            <MapPin className="w-5 h-5" />
                            <span>Calle 45 N° 535, 3º Piso (Contrafrente)</span>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-pink-600 p-10 text-white flex flex-col justify-center items-center text-center">
                        <Calendar className="w-16 h-16 mb-6 text-pink-200" />
                        <h3 className="text-3xl font-bold mb-2">Asesoramiento</h3>
                        <div className="w-16 h-1 bg-white/30 rounded-full my-4"></div>
                        <p className="text-xl mb-1 font-medium">Martes y Jueves</p>
                        <p className="text-3xl font-bold mb-4">10:00 a 12:00 hs</p>
                        <p className="text-pink-100">Sede Central AERI</p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default WomenFamilyPage;
