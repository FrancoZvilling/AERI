import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import { motion } from 'framer-motion';
import {
    HeartHandshake,
    Baby,
    HeartCrack,
    Glasses,
    TestTube,
    Stethoscope,
    ShieldCheck,
    Phone,
    Ambulance,
    Calendar
} from 'lucide-react';

const SubsidiesPage = () => {
    const subsidies = [
        {
            id: 1,
            title: "Matrimonio",
            amount: "$50.000",
            description: "Subsidio único por enlace matrimonial.",
            icon: HeartHandshake,
            color: "text-rose-500",
            bg: "bg-rose-50"
        },
        {
            id: 2,
            title: "Nacimiento",
            amount: "$50.000",
            description: "Por nacimiento de hijo/a. Incluye ajuar completo.",
            icon: Baby,
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            id: 3,
            title: "Adopción",
            amount: "$50.000",
            description: "Ayuda económica por adopción legal.",
            icon: ShieldCheck, // Using ShieldCheck as a symbol of protection/family integration
            color: "text-indigo-500",
            bg: "bg-indigo-50"
        },
        {
            id: 4,
            title: "Fallecimiento",
            amount: "$100.000",
            description: "Subsidio de contención familiar.",
            icon: HeartCrack,
            color: "text-gray-500",
            bg: "bg-gray-50"
        },
        {
            id: 5,
            title: "Anteojos Recetados",
            amount: "$50.000",
            limit: "x par (2/año)",
            description: "Cobertura en cristales y armazones.",
            icon: Glasses,
            color: "text-teal-500",
            bg: "bg-teal-50"
        },
        {
            id: 6,
            title: "Bono de Laboratorio",
            amount: "$2.000",
            description: "Cobertura para análisis clínicos.",
            icon: TestTube,
            color: "text-purple-500",
            bg: "bg-purple-50"
        },
        {
            id: 7,
            title: "Prácticas Médicas",
            amount: "$5.000",
            limit: "por práctica",
            description: "Reintegro en prácticas especializadas.",
            icon: Stethoscope,
            color: "text-green-600",
            bg: "bg-green-50"
        }
    ];

    const categories = [
        { title: "Mejores Servicios", text: "Amplia cobertura médica y un variado menú de servicios para nuestros afiliados." },
        { title: "Amplia Representación", text: "Representación social y sindical en toda la provincia." }
    ];

    return (
        <div className="bg-gray-50 pb-20">
            <HeroSection
                title="Beneficios y Subsidios"
                subtitle="Acompañándote en cada momento importante de tu vida."
                backgroundImage="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2000&auto=format&fit=crop"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">

                {/* Intro Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-[#004080] text-white p-8 rounded-2xl shadow-xl flex flex-col justify-center text-center md:text-left"
                        >
                            <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                            <p className="text-blue-100 text-lg">{cat.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Subsidies Grid */}
                <section className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Subsidios Exclusivos</h2>
                        <div className="flex items-center text-sm text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
                            <Calendar className="w-4 h-4 mr-2" />
                            Actualización: 6/5/2025
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {subsidies.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center group"
                                >
                                    <div className={`p-4 rounded-full mb-4 ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <div className="mt-auto">
                                        <div className="text-3xl font-extrabold text-secondary mb-1">
                                            {item.amount}
                                        </div>
                                        {item.limit && (
                                            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                                                {item.limit}
                                            </div>
                                        )}
                                        <p className="text-gray-600 text-sm mt-2 font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* Emergencies Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-red-50"
                >
                    <div className="bg-red-600 px-8 py-4 flex items-center justify-center md:justify-start">
                        <Ambulance className="w-8 h-8 text-white mr-3" />
                        <h2 className="text-2xl font-bold text-white tracking-wide">EMERGENCIAS Y ASISTENCIA</h2>
                    </div>

                    <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:divide-x md:divide-gray-100">
                        {/* Emergencias */}
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wider">Emergencias Médicas AERI</h3>
                            <div className="space-y-4 w-full max-w-sm">
                                <a href="tel:08006668256" className="flex items-center justify-center w-full py-4 px-6 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl transition-colors group">
                                    <Phone className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                                    <span className="text-2xl font-bold">0800-666-8256</span>
                                </a>
                                <a href="tel:08009992996" className="flex items-center justify-center w-full py-4 px-6 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl transition-colors group">
                                    <Phone className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                                    <span className="text-2xl font-bold">0800-999-2996</span>
                                </a>
                            </div>
                        </div>

                        {/* Asistencia */}
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wider">Asistencia Médica AERI ASSISTE</h3>
                            <div className="w-full max-w-sm">
                                <a href="tel:08003338425" className="flex items-center justify-center w-full py-8 px-6 bg-[#004080]/10 hover:bg-[#004080]/20 text-[#004080] rounded-xl transition-colors group">
                                    <Stethoscope className="w-8 h-8 mr-3 group-hover:scale-110 transition-transform" />
                                    <span className="text-2xl font-bold">0800-333-8425</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.section>

            </div>
        </div>
    );
};

export default SubsidiesPage;
