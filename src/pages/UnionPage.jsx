import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/ui/HeroSection';
import { motion } from 'framer-motion';
import { Users, MapPin, Newspaper, ChevronRight, Star, Loader2, ArrowRight } from 'lucide-react';
import { useNoticias } from '../hooks/useNoticias';
import NewsCard from '../components/ui/NewsCard';

const UnionPage = () => {
    const { noticias, loading } = useNoticias(3, 'Gremial');

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


    return (
        <div className="bg-gray-50 pb-20">
            <HeroSection
                title="Secretaría Gremial"
                subtitle="Defendiendo los derechos de los trabajadores en cada rincón de la provincia."
                backgroundColor="#004080"
                overlayOpacity="bg-black/10"
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
                            <Newspaper className="w-8 h-8 mr-3 text-[#39c3ef]" />
                            Novedades Gremiales
                        </h2>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center py-12">
                            <Loader2 className="w-10 h-10 text-primary animate-spin" />
                        </div>
                    ) : noticias.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {noticias.map((noticia) => (
                                <NewsCard key={noticia.id} noticia={noticia} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-white rounded-3xl border border-gray-100 shadow-sm">
                            <p className="text-gray-500 text-lg">Próximamente publicaremos nuevas novedades gremiales.</p>
                        </div>
                    )}

                    {noticias.length > 0 && (
                        <div className="text-center mt-12">
                            <Link to="/noticias" className="inline-flex items-center text-sm font-bold bg-[#023e73] text-white px-8 py-3 rounded-full hover:bg-[#002855] transition-all shadow-md group">
                                Ver todas las noticias <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    )}
                </section>

            </div>
        </div>
    );
};

export default UnionPage;
