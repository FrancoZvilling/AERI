import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import NewsCard from '../components/ui/NewsCard';
import { useNoticias } from '../hooks/useNoticias';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Banknote, Plane, Heart, FileText, ArrowRight, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import mockData from '../data/mockData.json';

const iconMap = {
    Banknote: Banknote,
    Plane: Plane,
    Heart: Heart,
    FileText: FileText,
};

const Home = () => {
    const { quickAccess } = mockData;
    const { noticias, loading, error } = useNoticias(3); // Fetch 3 latest news

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    // Custom SVG background to control text size precisely
    const heroBackground = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23002855'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-weight='bold' font-size='200' fill='white' opacity='0.1' text-anchor='middle' dominant-baseline='middle'%3EAERI%3C/text%3E%3C/svg%3E`;

    return (
        <div className="bg-gray-50 pb-20">
            {/* Hero Section */}
            <HeroSection
                title="Acompañar, defender y representar a las y los trabajadores."
                subtitle="Organización sindical al servicio de las y los trabajadores. Trabajando juntos por más y mejores beneficios."
                backgroundImage={heroBackground}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">

                {/* Quick Access Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                >
                    {quickAccess.map((item) => {
                        const Icon = iconMap[item.icon] || FileText;
                        return (
                            <motion.div variants={itemVariants} key={item.id}>
                                <Link to={item.link} className="block group">
                                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-b-4 border-[#39c3ef] h-full flex flex-col items-center justify-center text-center">
                                        <div className="bg-[#39c3ef]/10 p-4 rounded-full mb-4 group-hover:bg-[#39c3ef] group-hover:text-white transition-colors duration-300">
                                            <Icon className="w-8 h-8 text-[#39c3ef] group-hover:text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* News Section (Real Data from Strapi) */}
                <section className="mb-12">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-primary border-l-4 border-[#00a0e1] pl-4">
                            Novedades Gremiales
                        </h2>
                        <Link to="/noticias" className="hidden md:flex items-center text-[#39c3ef] font-semibold hover:text-[#023e73] transition-colors">
                            Ver todas <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>

                    {loading ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="bg-white rounded-2xl h-96 animate-pulse shadow-md">
                                    <div className="h-48 bg-gray-200"></div>
                                    <div className="p-6 space-y-4">
                                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                                        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : error ? (
                        <div className="text-center p-10 bg-red-50 rounded-xl border border-red-100 text-red-600">
                            <p>No se pudieron cargar las noticias en este momento.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {noticias.map((item) => (
                                <NewsCard key={item.id} noticia={item} />
                            ))}
                        </div>
                    )}

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/noticias" className="inline-flex items-center text-[#39c3ef] font-semibold hover:text-[#023e73] transition-colors">
                            Ver todas <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </section>

                {/* Contact & Location Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-primary border-l-4 border-[#00a0e1] pl-4 mb-8">
                        Cómo llegar a nuestras oficinas
                    </h2>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
                        {/* Map Column */}
                        <div className="lg:w-1/2 h-80 lg:h-auto min-h-[400px]">
                            <iframe
                                title="Ubicación AERI"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.782875389657!2d-57.95764122345585!3d-34.91197777353986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e635c947514d%3A0x6b7218697669d2f2!2sCalle%2045%20535%2C%20B1900%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1703350000000!5m2!1sen!2sar"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            />
                        </div>

                        {/* Contact Info Column */}
                        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-gray-50/50">

                            <div className="space-y-8">
                                {/* Address */}
                                <div className="flex items-start">
                                    <div className="bg-[#39c3ef]/20 p-3 rounded-full mr-4 flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-[#023e73]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">Dirección</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Calle 45 N° 535<br />
                                            La Plata, Buenos Aires<br />
                                            <span className="text-sm text-gray-400">Lunes a Viernes de 8:00 a 16:00 hs</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start">
                                    <div className="bg-[#39c3ef]/20 p-3 rounded-full mr-4 flex-shrink-0">
                                        <Phone className="w-6 h-6 text-[#023e73]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">Teléfonos</h3>
                                        <div className="space-y-1">
                                            <a href="tel:02214248142" className="block text-gray-600 hover:text-[#1e6df9] transition-colors">
                                                Fijo: <span className="font-semibold">0221 4248142</span>
                                            </a>
                                            <a href="https://wa.me/5492215083285" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-[#00a0e1] transition-colors">
                                                WhatsApp: <span className="font-semibold">+54 9 221 5083285</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start">
                                    <div className="bg-[#39c3ef]/20 p-3 rounded-full mr-4 flex-shrink-0">
                                        <Mail className="w-6 h-6 text-[#023e73]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">Correo Electrónico</h3>
                                        <a href="mailto:consultas@aeri.org.ar" className="text-gray-600 hover:text-[#1e6df9] font-medium transition-colors">
                                            consultas@aeri.org.ar
                                        </a>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div className="pt-8 border-t border-gray-200">
                                    <h3 className="font-bold text-gray-900 text-lg mb-4">Seguinos en redes</h3>
                                    <div className="flex space-x-4">
                                        <a href="https://www.instagram.com/sindicatoaeri/" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-md text-pink-600 hover:bg-pink-50 hover:scale-110 transition-all">
                                            <Instagram className="w-6 h-6" />
                                        </a>
                                        <a href="#" className="bg-white p-3 rounded-full shadow-md text-blue-600 hover:bg-blue-50 hover:scale-110 transition-all">
                                            <Facebook className="w-6 h-6" />
                                        </a>
                                        <a href="https://x.com/PrensaAeri" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full shadow-md text-gray-900 hover:bg-gray-100 hover:scale-110 transition-all">
                                            <Twitter className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div >
        </div >
    );
};

export default Home;
