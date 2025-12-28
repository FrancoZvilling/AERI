import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import { motion } from 'framer-motion';
import { Users, MapPin, Newspaper, ChevronRight, Star } from 'lucide-react';

const UnionPage = () => {
    
    const seccionales = [
        {
            name: "Seccional ARBA Casa Central",
            secretary: "BUSS, Juan Ignacio",
            vocabTitular: ["DOMINGUEZ, Julio Roberto", "MIRANDA, Alejandra Marcela", "ALFREDO, Martín Ignacio", "TOLOSA, Luis Manuel"],
            vocabSuplente: ["KRAKOVER, Graciela Virginia", "ODO, Martín Miguel", "LEIVA, Paula Beatriz", "LEBAN, Gustavo Leopoldo"]
        },
        {
            name: "Seccional ARBA Cap. Fed. y G.B.A",
            secretary: "PONTE, Néstor Hugo",
            vocabTitular: ["FISCELLA, Natalia Jimena", "CHACON, Carlos Patricio", "FIGUEREDO, Zulma Elisabeth", "CIALDELLA, Gustavo Antonio"],
            vocabSuplente: ["CLEMENTINO, Hernán Marcelo", "SOSA, María Teresa", "MAIDANA, Alfredo Daniel", "PIZARRO, Marcela Alejandra"]
        },
        {
            name: "Seccional Reg. Prop. e Inst. Loterías y Casinos",
            secretary: "VERA, Guillermo Antonio",
            vocabTitular: ["PANEBIANCO, Leonardo Maximiliano", "RODRIGUEZ, Gustavo Javier", "DE SABATO, Betiana", "LONGOBUCCO, Claudia Alejandra"],
            vocabSuplente: ["BARRALES, Christian", "MARCO, Marcelo Javier", "PEREZ, Gustavo Alejandro", "DOMINGUEZ, Santiago Agustín"]
        },
        {
            name: "Seccional ARBA Interior",
            secretary: "MARTIN, Adriana Guillermina",
            vocabTitular: ["RODRIGUEZ, Agustín Eleodoro", "RIGO, Vivian Lydia", "ROCHA, Lucrecia Mabel", "HOJRAJ, José Fabricio"],
            vocabSuplente: ["BUGARIN, Gastón Eduardo", "PUSTILNICK, Bettiana Romina", "TAYLOR, Claudio Gabriel", "CARDASCIA, Marcos Pablo"]
        },
        {
            name: "Seccional Ministerio de Economía",
            secretary: "CARENA, Laura Mariel",
            vocabTitular: ["LEONARDI, Fernando Adrián", "RAMIREZ, Jorgelina Inés", "GENOVES, Alejandro David", "BONZI, Alberto Domingo"],
            vocabSuplente: ["GUERRIERI, Romina Soledad", "ZARZA, Marcelo Arnoldo", "GHIONE, María Soledad", "CARDOZO, Gustavo Carlos"]
        },
        {
            name: "Seccional Jubilados",
            secretary: "SANZ, Silvia Beatriz",
            vocabTitular: ["PARODI, Laura Rosario", "SUAREZ, Oscar Alfredo", "GUICHON, Magdalena María", "PLAZAS, Marisa Cristina"],
            vocabSuplente: ["SUAREZ, Isabel Cristina", "FONTI, Patricia Rita Beatriz", "FLORES, María Angelita", "SALAS, Luis Alberto"]
        }
    ];

    const newsPlaceholders = [1, 2, 3]; // Simulating news entries

    return (
        <div className="bg-gray-50 pb-20">
            <HeroSection
                title="Secretaría Gremial"
                subtitle="Defendiendo los derechos de los trabajadores en cada rincón de la provincia."
                backgroundImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop" // Meeting/Union concept
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
                
                {/* Intro Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-xl p-8 mb-16 border-l-8 border-primary"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <MapPin className="w-6 h-6 mr-2 text-primary" />
                        Seccionales AERI
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Nuestra estructura gremial se organiza en seccionales para garantizar la representación directa y cercana de cada afiliado, abarcando diferentes organismos y regiones.
                    </p>
                </motion.div>

                {/* Seccionales Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {seccionales.map((seccional, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
                        >
                            <div className="bg-primary/5 p-4 border-b border-primary/10">
                                <h3 className="font-bold text-primary text-lg">{seccional.name}</h3>
                            </div>
                            <div className="p-6 flex-grow">
                                <div className="mb-4">
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Secretario/a</p>
                                    <p className="font-bold text-gray-900 flex items-center">
                                        <Star className="w-4 h-4 text-yellow-500 mr-2 fill-current" />
                                        {seccional.secretary}
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Vocales Titulares</p>
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            {seccional.vocabTitular.map((v, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                    {v}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Vocales Suplentes</p>
                                        <ul className="text-sm text-gray-500 space-y-1">
                                            {seccional.vocabSuplente.map((v, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                    {v}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* News Carousel Section */}
                <section className="mb-12">
                     <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                            <Newspaper className="w-8 h-8 mr-3 text-secondary" />
                            Novedades Gremiales
                        </h2>
                        {/* Carousel Controls (Visual only for now or simple manual implementation if time permits, for now grid is safer for placeholders) */}
                     </div>

                     {/* Placeholder Grid acting as static representation of carousel content */}
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {newsPlaceholders.map((item, idx) => (
                            <motion.div 
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group"
                            >
                                <div className="h-48 bg-gray-200 animate-pulse relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                                        Imagen Noticia {item}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="w-24 h-4 bg-gray-200 rounded mb-4"></div>
                                    <div className="w-3/4 h-6 bg-gray-300 rounded mb-3"></div>
                                    <div className="space-y-2">
                                        <div className="w-full h-4 bg-gray-100 rounded"></div>
                                        <div className="w-5/6 h-4 bg-gray-100 rounded"></div>
                                    </div>
                                    <div className="mt-6 flex items-center text-secondary font-medium text-sm group-hover:underline">
                                        Leer más <ChevronRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                     </div>
                </section>

            </div>
        </div>
    );
};

export default UnionPage;
