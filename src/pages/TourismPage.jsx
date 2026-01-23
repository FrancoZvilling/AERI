import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, User, Info, CheckCircle2 } from 'lucide-react';

const TourismPage = () => {
    const destinations = [
        {
            id: "nacional",
            title: "Turismo Nacional",
            subtitle: "Paquetes a todo el país",
            description: "Te financiamos el 50% del valor del viaje en cuotas fijas y sin intereses. Descuentos directos del recibo de sueldo.",
            image: "https://images.unsplash.com/photo-1556918936-3e73b945d24f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Cataratas
            highlight: "Financiación Exclusiva",
            color: "bg-blue-600"
        },
        {
            id: "peru",
            title: "Turismo Perú",
            subtitle: "Convenio Exclusivo",
            description: "Tarifas mayoristas válidas solo para afiliados. Visitá Machu Picchu con nosotros.",
            image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2000&auto=format&fit=crop", // Machu Picchu
            highlight: "Tarifas Mayoristas",
            color: "bg-orange-600"
        },
        {
            id: "brasil",
            title: "Turismo Brasil",
            subtitle: "Las mejores playas",
            description: "Escapate a Brasil. Varios destinos en promoción durante todo el año. Sin gastos administrativos ni de reserva.",
            image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2000&auto=format&fit=crop", // Rio
            highlight: "Sin gastos extra",
            color: "bg-green-600"
        },
        {
            id: "caribe",
            title: "Turismo Caribe",
            subtitle: "Punta Cana, Cancún, Cuba",
            description: "Todo el Caribe a tu alcance. Tarifas directas sin gastos adicionales administrativos ni de reserva.",
            image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2000&auto=format&fit=crop", // Caribe
            highlight: "Tarifas Directas",
            color: "bg-cyan-500"
        },
        {
            id: "internacional",
            title: "Turismo Internacional",
            subtitle: "Circuitos Europeos y más",
            description: "Viaja seguro y a las mejores tarifas del mercado. Francia, España, Italia, Turquía.",
            image: "https://plus.unsplash.com/premium_photo-1661962723801-1015e61ec340?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Paris / Europa
            highlight: "Mundo AERI",
            color: "bg-purple-600"
        }
    ];

    return (
        <div className="bg-gray-50 pb-20">
            <HeroSection
                title="Turismo AERI"
                subtitle="Viajes al alcance de todos. Beneficios exclusivos para nuestros afiliados."
                backgroundImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop" // Travel vibes
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">

                {/* Intro Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-primary text-white p-8 rounded-2xl shadow-xl mb-12 text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Precios DIRECTOS de Operadores Turísticos</h2>
                    <p className="text-blue-200">Accedé a tarifas mayoristas sin intermediarios costosos.</p>
                </motion.div>

                {/* Destinations Grid - Bento Style Mixed */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {destinations.map((dest, index) => (
                        <motion.div
                            key={dest.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full flex flex-col ${index === 0 || index === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`} // Make first and last items span 2 cols for dynamic layout
                        >
                            <div className="relative h-64 md:h-72 overflow-hidden">
                                <img
                                    src={dest.image}
                                    alt={dest.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                                <div className="absolute top-4 right-4">
                                    <span className={`${dest.color} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg`}>
                                        {dest.highlight}
                                    </span>
                                </div>

                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-3xl font-bold mb-1">{dest.title}</h3>
                                    <p className="font-medium text-gray-200">{dest.subtitle}</p>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="mb-4">
                                    <p className="text-gray-600 leading-relaxed">
                                        {dest.description}
                                    </p>
                                </div>

                                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center text-sm text-[#39c3ef] font-semibold">
                                        <CheckCircle2 className="w-4 h-4 mr-1" />
                                        Beneficio Verificado
                                    </div>
                                    <button className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-900 transition-colors">
                                        Consultar
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8 border-l-8 border-[#39c3ef]">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                            <User className="w-6 h-6 mr-3 text-[#39c3ef]" />
                            Contacto Turismo
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Persona 1 */}
                            <div className="flex items-start space-x-4">
                                <div className="bg-gray-100 p-3 rounded-full">
                                    <User className="w-6 h-6 text-gray-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-primary">Pedro Bazan</h3>
                                    <p className="text-sm text-gray-500 mb-2">Secretario de Turismo</p>
                                    <a href="tel:02214248142" className="block text-gray-700 hover:text-[#39c3ef] mb-1">
                                        <Phone className="w-4 h-4 inline mr-2" />
                                        0221 4248142 (int 840)
                                    </a>
                                    <a href="tel:+5492215083285" className="block text-gray-700 hover:text-[#39c3ef]">
                                        <Phone className="w-4 h-4 inline mr-2" />
                                        +54 9 221 5083285
                                    </a>
                                </div>
                            </div>

                            {/* Persona 2 */}
                            <div className="flex items-start space-x-4">
                                <div className="bg-gray-100 p-3 rounded-full">
                                    <User className="w-6 h-6 text-gray-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-primary">José Sendón</h3>
                                    <p className="text-sm text-gray-500 mb-2">Asesor de Turismo</p>
                                    <a href="tel:+5492215609342" className="block text-gray-700 hover:text-[#39c3ef]">
                                        <Phone className="w-4 h-4 inline mr-2" />
                                        +54 9 221 5609342
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start space-x-4">
                                <div className="bg-gray-100 p-3 rounded-full">
                                    <Mail className="w-6 h-6 text-gray-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-primary">Correo Electrónico</h3>
                                    <p className="text-sm text-gray-500 mb-2">Consultas y reservas</p>
                                    <a href="mailto:turismoydeportes@aeri.org.ar" className="block text-[#39c3ef] font-medium hover:text-[#023e73] break-words">
                                        turismoydeportes@aeri.org.ar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TourismPage;
