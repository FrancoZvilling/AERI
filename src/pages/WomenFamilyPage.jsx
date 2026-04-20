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
    Target,
    Shield,
    Phone,
    ArrowRight,
    Mail,
    AlertCircle,
    Clock
} from 'lucide-react';
import coverMujer from '../assets/cover-mujer.webp';

const WomenFamilyPage = () => {

    const objectives = [
        "Transversalizar la perspectiva de género y diversidad en las políticas, acciones y espacios del gremio.",
        "Promover un enfoque integral de derechos humanos en la defensa de las trabajadoras y diversidades.",
        "Fortalecer el rol del cuerpo de delegadas como actor clave en la representación y canalización de demandas.",
        "Generar espacios de participación, formación y sensibilización en materia de género, diversidad e igualdad.",
        "Promover la salud mental de trabajadoras y diversidades con perspectiva de género y enfoque de derechos humanos."
    ];

    const agendaItems = [
        { 
            title: "Ambientes Libres de Violencia", 
            subtitle: "Espacios Sindicales libres de Discriminación, Violencia y Acoso Laboral en base al género y contra la Violencia Laboral (C190 OIT).", 
            icon: Scale, 
            color: "text-orange-500", 
            bg: "bg-orange-50" 
        },
        { 
            title: "Integración e Igualdad de Mujeres y Diversidades", 
            subtitle: "Promovemos la participación, la inclusión y el ejercicio pleno de derechos con perspectiva de género a través de la Mesa de Trabajo Ofelia Wilhelm por la inclusión y la igualdad.", 
            icon: Users, 
            color: "text-pink-500", 
            bg: "bg-pink-50" 
        },
        { 
            title: "Violencia", 
            subtitle: "Laboral, familiar y social.", 
            icon: ShieldCheck, 
            color: "text-red-500", 
            bg: "bg-red-50" 
        },
        { 
            title: "Derechos Humanos y Salud Mental", 
            subtitle: "Promovemos el Bienestar en el Trabajo con la Guía sindical de prevención primaria en Salud Mental y Consumos Problemáticos.", 
            icon: Heart, 
            color: "text-rose-500", 
            bg: "bg-rose-50" 
        }
    ];

    const pillars = [
        { title: "Compromiso", icon: Heart, desc: "Sensibilización constante." },
        { title: "Comunicación", icon: MessageCircle, desc: "Diálogo fluido y abierto." }
    ];

    return (
        <div className="bg-gray-50 pb-20">
            <HeroSection
                title="Secretaría de Mujeres, Géneros y Diversidades"
                subtitle="Género e Igualdad. Defendiendo los derechos y oportunidades de todas las trabajadoras."
                backgroundImage={coverMujer}
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
                        Desde la Secretaría de Mujeres, Géneros y Diversidades promovemos la transversalización de la perspectiva de género en todas las acciones del gremio, con un enfoque basado en derechos humanos. Sostenemos un vínculo directo con las mujeres y diversidades trabajadoras, atendiendo sus necesidades y demandas específicas, y fortalecemos la participación y la interlocución del cuerpo de delegadas, impulsando la defensa integral de derechos en condiciones de igualdad, inclusión y no discriminación, erradicando cualquier conducta que conlleve a la violencia de género.
                    </p>
                </motion.div>

                {/* Main Objective Banner */}
                <section className="mb-20">
                    <div className="bg-gradient-to-r from-pink-600 to-purple-700 rounded-3xl p-10 text-white text-center shadow-lg">
                        <Heart className="w-12 h-12 mx-auto mb-4 text-pink-200" />
                        <h2 className="text-3xl font-bold mb-4">Visión</h2>
                        <p className="text-xl max-w-4xl mx-auto font-light leading-relaxed">
                            "Construir un gremio más justo, igualitario e inclusivo, donde la perspectiva de género y diversidad atraviese de manera efectiva todas las prácticas institucionales, garantizando el pleno ejercicio de derechos y la participación activa de las mujeres y diversidades en todos los ámbitos de representación y decisión."
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
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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

                {/* --- SECCIÓN ESPACIOS DE ATENCIÓN Y EMERGENCIAS --- */}
                <section className="mb-20">
                    <div className="flex items-center mb-8">
                        <div className="bg-pink-100 p-3 rounded-full mr-4">
                            <Shield className="w-8 h-8 text-pink-600" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-[#004080]">Espacios de Atención y Emergencias</h2>
                            <p className="text-gray-500 mt-1">Líneas de ayuda, atención en crisis, asesoramiento institucional y espacios seguros de acompañamiento.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Bloque 1: Asistencia Inmediata y Emergencias */}
                        <div className="bg-white rounded-3xl shadow-xl border-t-4 border-pink-500 overflow-hidden flex flex-col h-full hover:shadow-2xl transition-shadow duration-300">
                            <div className="bg-pink-50/50 p-6 border-b border-pink-100">
                                <span className="bg-pink-100 text-pink-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Asistencia Inmediata y Emergencias</span>
                                <h3 className="text-2xl font-bold text-gray-900 leading-tight">Atención en situaciones de violencia de género</h3>
                                <p className="text-gray-600 mt-2 font-medium">Atención a mujeres y diversidades. Disponible las 24 horas, los 365 días del año. (Provincia de Buenos Aires)</p>
                            </div>

                            <div className="p-6 flex-grow flex flex-col justify-evenly gap-4">
                                {/* Botón 144 */}
                                <a href="tel:144" className="flex items-center bg-[#004080] hover:bg-[#1e6df9] text-white p-4 rounded-2xl transition-all group">
                                    <div className="bg-white/20 p-3 rounded-full mr-4 group-hover:bg-white/30 transition-colors">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="flex-grow">
                                        <span className="block text-sm font-semibold text-blue-100 uppercase tracking-wider">Línea Provincial</span>
                                        <span className="block text-2xl font-black">Llamar al 144</span>
                                    </div>
                                    <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </a>

                                {/* WP / Telegram */}
                                <a href="https://wa.me/5492215085988" target="_blank" rel="noopener noreferrer" className="flex items-center bg-[#05aff2]/10 hover:bg-[#05aff2]/20 border border-[#05aff2]/20 p-4 rounded-2xl transition-all group">
                                    <div className="bg-[#05aff2] p-3 rounded-full mr-4 text-white">
                                        <MessageCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="block text-lg font-bold text-[#023e73]">WhatsApp / Telegram</span>
                                        <span className="block text-xl font-black text-[#00a0e1]">221 508-5988</span>
                                        <span className="block text-xs text-gray-500 mt-1 font-medium bg-white px-2 py-0.5 rounded-md border border-gray-100 w-fit">Solo mensajes de texto. No se reciben audios ni imágenes.</span>
                                    </div>
                                </a>

                                {/* Email */}
                                <a href="mailto:atencion144pba@ministeriodelasmujeres.gba.gob.ar" className="flex items-center bg-gray-50 hover:bg-gray-100 border border-gray-200 p-4 rounded-2xl transition-all">
                                    <div className="bg-white p-3 rounded-full mr-4 text-gray-600 shadow-sm border border-gray-100">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-bold text-gray-800">Correo Electrónico</span>
                                        <span className="block text-sm text-[#1e6df9] font-medium break-all mt-0.5">atencion144pba@ministeriodelasmujeres.gba.gob.ar</span>
                                    </div>
                                </a>
                            </div>

                            {/* Alerta Riesgo de Vida */}
                            <div className="bg-red-600 p-5 mt-auto text-white flex items-center justify-center animate-pulse-slow">
                                <AlertCircle className="w-8 h-8 mr-3 flex-shrink-0" />
                                <p className="font-bold text-sm md:text-base text-center">SI EXISTE RIESGO DE VIDA, LLAMAR DE INMEDIATO AL <a href="tel:911" className="text-xl md:text-2xl font-black underline decoration-2 underline-offset-2 ml-1">911</a></p>
                            </div>
                        </div>

                        {/* Bloque 2: Espacios de Atención y Acompañamiento AERI */}
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-2xl transition-shadow duration-300 relative">
                            {/* Watermark bg */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#39c3ef] rounded-full mix-blend-multiply filter blur-3xl opacity-10 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                            <div className="p-8 pb-4 relative z-10 border-b border-gray-100">
                                <span className="bg-[#e6f4f9] text-[#004080] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Sindicato AERI</span>
                                <h3 className="text-2xl font-bold text-[#004080] leading-tight mb-2">Espacios de Atención y Acompañamiento</h3>
                                <p className="text-gray-600 font-medium">
                                    Espacios de atención, contención, acompañamiento y asesoramiento en nuestro gremio a mujeres y diversidades trabajadoras en situaciones de violencia. <strong className="text-[#1e6df9] font-bold">Contamos con equipo de profesionales de la psicología para la primera escucha.</strong>
                                </p>
                            </div>

                            <div className="p-8 pt-6 flex-grow flex flex-col space-y-6 relative z-10">

                                {/* Atención Presencial */}
                                <div>
                                    <h4 className="text-[#004080] font-black text-lg mb-4 border-b border-gray-100 pb-2">Atención presencial</h4>
                                    
                                    <div className="space-y-5">
                                        {/* Ubicacion 1 */}
                                        <div className="relative pl-6 border-l-2 border-[#39c3ef]">
                                            <div className="absolute w-4 h-4 rounded-full bg-[#1e6df9] -left-[9px] top-1 shadow-sm border-2 border-white"></div>
                                            <h4 className="font-bold text-gray-900 flex items-center mb-1">
                                                <MapPin className="w-4 h-4 mr-2 text-[#00a0e1]" /> Sede AERI
                                            </h4>
                                            <p className="text-gray-600 text-sm mb-2">Calle 45 N° 535, 3° Piso, Torre 2</p>

                                            <div className="flex flex-wrap gap-2 mt-2">
                                                <div className="flex items-center text-xs font-medium text-[#034c8c] bg-[#3dd1f2]/10 px-2 py-1 rounded-lg">
                                                    <Clock className="w-3.5 h-3.5 mr-1.5" /> Mar y Jue de 10 a 12 hs
                                                </div>
                                                <a href="tel:02214248142" className="flex items-center text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">
                                                    <Phone className="w-3.5 h-3.5 mr-1.5 text-[#1e6df9]" /> 221 424-8142 (Int. 842)
                                                </a>
                                            </div>
                                        </div>

                                        {/* Ubicacion 2 */}
                                        <div className="relative pl-6 border-l-2 border-[#1e6df9]">
                                            <div className="absolute w-4 h-4 rounded-full bg-[#004080] -left-[9px] top-1 shadow-sm border-2 border-white"></div>
                                            <h4 className="font-bold text-gray-900 flex items-center mb-1">
                                                <MapPin className="w-4 h-4 mr-2 text-[#00a0e1]" /> Ministerio de Economía
                                            </h4>
                                            <p className="text-gray-600 text-sm mb-2">Hall Central</p>

                                            <div className="flex flex-wrap gap-2 mt-2">
                                                <div className="flex items-center text-xs font-medium text-[#034c8c] bg-[#3dd1f2]/10 px-2 py-1 rounded-lg">
                                                    <Clock className="w-3.5 h-3.5 mr-1.5" /> Miércoles de 10 a 12 hs
                                                </div>
                                                <a href="tel:02214294677" className="flex items-center text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors">
                                                    <Phone className="w-3.5 h-3.5 mr-1.5 text-[#1e6df9]" /> 221 429-4677
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Atención 24 hs */}
                                <div>
                                    <h4 className="text-[#004080] font-black text-lg mb-4 border-b border-gray-100 pb-2">Atención 24 hs</h4>
                                    
                                    <a href="mailto:secretariadelamujer@aeri.org.ar" className="flex items-center bg-gray-50 hover:bg-gray-100 border border-gray-200 p-4 rounded-2xl transition-all">
                                        <div className="bg-white p-3 rounded-full mr-4 text-gray-600 shadow-sm border border-gray-100">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="block text-sm font-bold text-gray-800">Correo Electrónico</span>
                                            <span className="block text-sm text-[#1e6df9] font-medium break-all mt-0.5">secretariadelamujer@aeri.org.ar</span>
                                        </div>
                                    </a>
                                </div>

                                {/* Mensaje de Contención */}
                                <div className="mt-auto pt-6">
                                    <div className="bg-[#1e6df9]/5 border border-[#1e6df9]/10 rounded-2xl p-4 md:p-5 flex items-start gap-4 transition-all hover:bg-[#1e6df9]/10">
                                        <div className="bg-[#1e6df9]/10 p-2 rounded-full flex-shrink-0 text-[#1e6df9]">
                                            <Heart className="w-6 h-6 fill-current opacity-80" />
                                        </div>
                                        <div>
                                            <h5 className="text-[#004080] font-bold text-sm md:text-base mb-1">Confidencialidad y Respeto</h5>
                                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                                Brindamos un espacio seguro de escucha, contención y asesoramiento permanente para todas nuestras compañeras. <strong className="text-[#1e6df9] font-medium">No estás sola.</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* Bloque 3: Equipos Interdisciplinarios por Organismo */}
                        <div className="lg:col-span-2 bg-gradient-to-br from-[#f8fafc] to-[#e6f4f9] rounded-3xl shadow-lg border border-[#39c3ef]/20 p-8 flex flex-col md:flex-row gap-8 items-center overflow-hidden relative group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform group-hover:scale-110 duration-700"></div>

                            <div className="w-full md:w-1/3 flex flex-col justify-center relative z-10 border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-6">
                                <span className="bg-[#1e6df9]/10 text-[#1e6df9] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 w-fit">Intervención Institucional</span>
                                <h3 className="text-2xl font-black text-[#004080] leading-tight mb-2">Equipos Interdisciplinarios por Organismo</h3>
                                <p className="text-gray-600 font-medium text-sm">Si trabajás en alguna de estas reparticiones y estás atravesando una situación de violencia de género, podés contactarte directamente.</p>
                            </div>

                            <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                                {/* ARBA */}
                                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-[#00a0e1] mb-2">ARBA</h4>
                                    <div className="space-y-2">
                                        <a href="tel:2215072134" className="flex items-center text-sm font-bold text-gray-700 hover:text-[#1e6df9] transition-colors">
                                            <Phone className="w-4 h-4 mr-2" /> 221 507-2134
                                        </a>
                                        <a href="mailto:equipointer.genero@arba.gov.ar" className="flex items-center text-sm font-medium text-gray-600 hover:text-[#1e6df9] transition-colors break-all">
                                            <Mail className="w-4 h-4 mr-2 flex-shrink-0" /> equipointer.genero@arba.gov.ar
                                        </a>
                                    </div>
                                </div>

                                {/* Min Economía */}
                                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-[#00a0e1] mb-2 leading-tight">Min. de Economía / Registro de la Propiedad</h4>
                                    <div className="space-y-2 mt-2">
                                        <a href="mailto:equipointer@ec.gba.gov.ar" className="flex items-center text-sm font-medium text-gray-600 hover:text-[#1e6df9] transition-colors break-all">
                                            <Mail className="w-4 h-4 mr-2 flex-shrink-0" /> equipointer@ec.gba.gov.ar
                                        </a>
                                    </div>
                                </div>

                                {/* Lotería y Casinos */}
                                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1 xl:col-span-2">
                                    <h4 className="font-bold text-[#00a0e1] mb-2">Instituto Prov. de Lotería y Casinos</h4>
                                    <div className="space-y-2">
                                        <a href="https://wa.me/5492213588968" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-bold text-gray-700 hover:text-[#1e6df9] transition-colors">
                                            <MessageCircle className="w-4 h-4 mr-2" /> 221 358-8968
                                        </a>
                                        <a href="mailto:equipogeneroloteria@gmail.com" className="flex items-center text-sm font-medium text-gray-600 hover:text-[#1e6df9] transition-colors break-all">
                                            <Mail className="w-4 h-4 mr-2 flex-shrink-0" /> equipogeneroloteria@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
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
